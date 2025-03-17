import { api } from "@/services/api/axios";
import { number, z } from "zod";

export type CreateContractInput = {
    number: number;
    local: string;
    scheduleDate: Date;
    scheduleTime: string;
    price: number;
    contact: string;
    userId: string;
}

const createContractScheme = z.object({
    number: z.number().min(4, { message: "Número do contrato deve ter no mínimo 4 caracteres" }),
    local: z.string().min(5, { message: "Local deve ter no mínimo 5 caracteres" }),
    scheduleDate: z.date().min(new Date(), { message: "Data deve ser maior que a data atual" }),
    scheduleTime: z.string().min(1, { message: "Horário deve ser preenchido" }),
    price: z.number().min(1, { message: "Preço deve ser maior que 0" }),
    contact: z.string().min(1, { message: "Contato deve ser preenchido" }),
    userId: z.string().min(1, { message: "Usuário deve ser preenchido" }),
})

export async function createContract(prevState: any, formData: FormData) {
    const input: CreateContractInput = {
        number: formData.get("number") as unknown as number,
        local: formData.get("local") as string,
        scheduleDate: formData.get("scheduleDate") as unknown as Date,
        scheduleTime: formData.get("scheduleTime") as string,
        price: formData.get("price") as unknown as number,
        contact: formData.get("contact") as string,
        userId: formData.get("userId") as string,
    };
    
    const validation = createContractScheme.safeParse(input);

    if(!validation.success) {
        return {
            message: validation.error.flatten().fieldErrors
        }
    }

    const response = await api.post(`contracts`, input).then(response => {
        return response
    }).catch(error => {
        return error.response
    });

    if(response.status !== 201) {
        return {
            message: response.data.message
        }
    };

    return response.data;
}