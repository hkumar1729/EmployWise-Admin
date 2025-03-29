export const Button = ({label, onclick}:{label:string, onclick:()=>void})=>{
    return <div className="">
    <button onClick={onclick} className='bg-black text-white rounded w-72 py-1 px-3 mt-6'>{label}</button>
  </div>
}