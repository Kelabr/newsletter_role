"use client"

import { Compass } from "lucide-react"
import { Mail } from "lucide-react"
import { Lightbulb } from "lucide-react"


export default function Instructions(){
    return(
        <div className="mt-28 flex flex-col gap-4 lg:flex-row  max-w-[1380px] pb-4">
            <div className="p-4 flex flex-col items-center border-2 mx-2 text-gray-500 bg-black rounded-xl transition-transform duration-300 hover:-translate-y-4 lg:max-w-[400px] shadow">
                <Mail size={40} color="white"/>
                <h1 className="text-xl font-medium text-white mb-2">Recebimento</h1>
                <p className="font-medium text-center">Toda Sexta feira as 10h você recebera um resumo de algumas opções de role para o final de semana, de jantar romantico ou a até um bate cabeça</p>
            </div>

            <div className="p-4 flex flex-col items-center border-2 mx-2 text-gray-500 bg-black rounded-xl transition-transform duration-300 hover:-translate-y-4 lg:max-w-[400px]">
                <Compass size={40} color="white"/>
                <h1 className="text-xl font-medium text-white  mb-2">Conteudo</h1>
                <p className="font-medium text-center">Em cada envio feito pela nossa equipe será informado localização, pontos de referencias e o horário do eventos pra você atrasar com calma </p>
            </div>

            <div className="p-4 flex flex-col items-center border-2 mx-2 text-gray-500 bg-black rounded-xl transition-transform duration-300 hover:-translate-y-4 lg:max-w-[400px]">
                <Lightbulb size={40} color="white"/>
                <h1 className="text-xl font-medium text-white mb-2">Dicas</h1>
                <p className="font-medium text-center">Sempre fique de olho no seu email e whatsapp para ter certeza que recebeu nosso comunicado</p>
            </div>
        </div>
    )
}