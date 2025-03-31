import Link from "next/link";
import { prisma } from "./db"; 
import Todolist from "./Components/Todolist";

function gettods() {
  return prisma.todo.findMany() 
}
 async function toggletodo(id: string , complete : boolean){
  "use server"
  await prisma.todo.update({where :{id }, data : {complete}})

 }
export default   async   function home() {
  const todos =await gettods()

  
  return (
    <div>
      <header className="flex justify-between items-center mb-4  ">
        <h1 className="text-2xl">Todos</h1>
        <Link className="border-slate-300 text-slate-300 px-2 py-1 rounded  hover: bg-slate-700 focus-within:bg-slate-700 outline-none" href={'/new'}>New</Link>
      </header>
      <ul
      className="pl-4">
        {todos.map(todo =>(
          <Todolist key={todo.id} {...todo} toggletodo={toggletodo}></Todolist>
        ))}
      </ul>
    </div>
  )
}