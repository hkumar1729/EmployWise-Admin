interface Inspiration{
    label:string,
}

export const Note = ({label}:Inspiration)=>{
    return <div className="h-screen bg-slate-200 flex justify-center text-center">
        <div className="flex flex-col justify-center text-center">
            <div className="text-2xl font-semibold font-serif text-start ml-10">
                {label}
            </div>
            <div className="text-2xl font-semibold font-serif text-start">
                Login To Proceed
            </div>
        </div>
    </div>
}