export default function Form(){
    return(
        <form className=" flex flex-col px-2 mt-14 font-medium gap-2 pb-6 w-full max-w-[500px]">
            <div className="flex flex-col gap-1">
                <label htmlFor="">Nome</label>
                <input type="text" className="border-1 border-gray-400 rounded-lg p-2" placeholder="Renato"/>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="">Email</label>
                <input type="text" className="border-1 border-gray-400 rounded-lg p-2" placeholder="renren@email.com"/>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="">Telefone</label>
                <input type="number" placeholder="13981449988" className="border-1 border-gray-400 rounded-lg p-2"/>
            </div>
            <button type="submit" className="bg-black text-white p-2 rounded-xl">Cadastrar</button>
        </form>
    )
} 