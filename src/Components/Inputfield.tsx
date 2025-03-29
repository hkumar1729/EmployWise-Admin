import { ChangeEvent } from "react"


interface Values {
  label:string,
  placeholder: string,
  type:string,
  onchange: (e:ChangeEvent<HTMLInputElement>) => void
}

export const Inputfield = ({label,placeholder, type, onchange}:Values)=>{
    return <div className=" flex flex-col justify-center font-medium">
        <div className="ml-2 mt-3">
          {label}
        </div>
        <div>
          <input type={type} onChange={onchange} placeholder={placeholder} className='border border-gray-500 bg-slate-800 text-white w-72 rounded pl-3 pt-1 pb-1 mt-1' ></input>
        </div>
  </div>

}
