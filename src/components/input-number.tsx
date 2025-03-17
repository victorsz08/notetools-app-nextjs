"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";




export function InputNumber({ ...props } : React.ComponentProps<'input'>) {
    const [value, setValue] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Remove todos os caracteres que não sejam números
        const rawValue = event.target.value.replace(/\D/g, "");
    
        // Faça o parse para número e formate para a moeda
        const numericValue = parseInt(rawValue, 10);
    
        if (!isNaN(numericValue)) {
          // Converte o valor bruto em centavos para reais
          const formattedValue = (numericValue / 100).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          });
    
          setValue(formattedValue);
        } else {
          setValue("");
        }
      };

    return (
        <Input {...props} value={value} onChange={handleChange}/>
    )
}