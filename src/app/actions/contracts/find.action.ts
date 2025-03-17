import { api } from "@/services/api/axios";

export type Contract = {
    id: string;
    number: number;
    local: string;
    scheduleDate: Date;
    scheduleTime: string;
    status: string;
    price: number;
    contact: string;
    createdAt: Date;
    updatedAt: Date;
};

export type FindContractInput = {
    userId: string;
    page: number;
    scheduleDateIn?: string;
    scheduleDateOut?: string;
    createdAtIn?: string;
    createdAtOut?: string;
    status?: string;
};

export type FindContractOutput = {
    contracts: Contract[];
    totalItems: number;
    totalPages: number;
};

export type FindContractOutputError = {
    status: number;
    message: string;
};


export async function findContracts(input: FindContractInput) {
    const { userId, page, scheduleDateIn, scheduleDateOut, createdAtIn, createdAtOut, status } = input;
    const params = new URLSearchParams();

    if(scheduleDateIn && scheduleDateOut) {
        params.append("scheduleDateIn", scheduleDateIn.toString());
        params.append("scheduleDateOut", scheduleDateOut.toString());
    };

    if(createdAtIn && createdAtOut) {
        params.append("createdAtIn", createdAtIn.toString());
        params.append("createdAtOut", createdAtOut.toString());
    };

    if(status) {
        params.append("status", status);
    };

    const queryString = params.toString();
    const urlString = `contracts?userId=${userId}&page=${page}&${queryString}`;
    
    const response = await api.get(urlString); 
    return response;
};