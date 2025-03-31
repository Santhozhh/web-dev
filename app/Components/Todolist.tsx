'use client'
 type TodolistProps = {
    id : string
    title : string
    complete : boolean
    toggletodo  : (id : string , complete : boolean) => void
}
export default function Todolist({id, title , complete , toggletodo }:TodolistProps){
    return(
            <div>
                <li className="flex  gap-1 items-center ">
                    <input  id={id} type="checkbox" className="cursor-pointer peer" defaultChecked={complete}
                    onChange={e=>toggletodo(id , e.target.checked)}/>
                    <label htmlFor={id} className=" cursor-pointer peer-checked:line-through peer-checked:text-slate-500">{title} </label>

                </li>
            </div>
    )

}