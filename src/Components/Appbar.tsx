import {Link} from 'react-router-dom'

export const Appbar = ()=>{
    return <>
        

            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex justify-between items-center mx-auto p-4">
                    <div className="text-2xl font-semibold whitespace-nowrap dark:text-white ml-5">Admin</div>
                    <div>
                        <Link to="../login" onClick={()=>{
                            localStorage.removeItem('token')
                            }} className="text-sm  text-blue-600 dark:text-blue-500 hover:underline mr-5">Logout</Link>
                    </div>
                </div>
            </nav>
    </>
}