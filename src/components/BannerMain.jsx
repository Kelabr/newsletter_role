"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import Link from "next/link"

export default function BannerMain(){
    return(
        <div className="h-8/12 px-2 flex flex-col gap-4 lg:flex-row max-w-[1380px] lg:mt-4">
            <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold lg:text-7xl">
                Receba no seu email ou whatsapp a sua programação do final de semana
                
            </h1>
            <span className="text-gray-500 lg:text-4xl">
            Do Casual ao Balança Raba. Seu canal de informações de eventos na Baixada Santista.
            </span>

            <button className="bg-black text-white p-4 lg:w-1/3 text-xl font-bold mt-4 rounded-xl">Cadastrar</button>

            </div>


            <div className="relative min-h-[200px] w-full  rounded-xl shadow-xl ">
                <Image
                className="rounded-xl"
                src="/festa.jpg"
                fill
                alt="Festa"
                />
                <div className="flex absolute top-0 right-0 rounded-bl-xl p-2 gap-2 rounded-tr-xl bg-black ">
                    <Link href="https://www.instagram.com/bailedanausea/" className="text-white font-medium" target="_blank">@bailedanausea</Link>
                </div>
                <div className="flex absolute bottom-0 rounded-bl-xl bg-black p-2 gap-2 rounded-tr-xl ">
                    <Star color="white"/>
                    <Star color="white"/>
                    <Star color="white"/>
                    <Star color="white"/>
                    <Star color="white"/>
                </div>
            </div>


        </div>
    )
}