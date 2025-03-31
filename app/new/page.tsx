import Link from "next/link";
import { prisma } from "../db";
import { redirect } from "next/navigation";
 async function createtodo(data : FormData){
    'use server'
    const title = data.get("title")?.valueOf()
    if(typeof title !== "string"|| title.length === 0 ){
        throw new Error ("Invalid") 
    }
    await   prisma.todo.create({data :{title, complete :false}})
    redirect('/')
        console.log("hi")
}

export default  function page() {
    return(
        <div>
            <header className="flex justify-between items-center mb-4  ">
        <h1 className="text-2xl">NEW</h1>

      </header>
            <form action={createtodo} className="flex gap-2 flex-col">
                <input type="text" name="title" className="border-slate-300 text-slate-300 px-2 py-1 rounded  hover:bg-slate-700 focus-within:bg-slate-700 outline-none"></input>
                <div className="flex gap-3 justify-end">
                <Link href='..' className="border-slate-300 text-slate-300 px-2 py-1 rounded  hover:bg-slate-700 focus-within:bg-slate-700 outline-none" > Cancel</Link>
                <button type="submit" className="border-slate-300 text-slate-300 px-2 py-1 rounded  hover:bg-slate-700 focus-within:bg-slate-700 outline-none ">submit</button>
                </div>
            </form>
        </div>
    )
}