import React from "react";
import axios from "axios";

const baseURL: string = `https://brainn-api-loterias.herokuapp.com/api/v1`;

type Lottery = {
    id: number,
    nome: string
}

const apiInstance = axios.create({
    baseURL: baseURL
})

export const getLottery = async (): Promise<Lottery[]> =>{
    const lottery: Lottery[] = []

    apiInstance.get(`/loterias`)
   .then((response)=>{
        lottery.push(response.data)
   })
   .catch((error)=>{ console.log("não foi possível pegar os dados", error )})

   return lottery
}

