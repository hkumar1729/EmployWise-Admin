export const Avatar = ({name}:{name:string})=>{
    return <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-black">
        <span className="font-medium text-gray-600 dark:text-gray-300">{name}</span>
    </div>
    
}