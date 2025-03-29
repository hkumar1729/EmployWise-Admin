import {Link, useNavigate} from 'react-router-dom'
import logo from '../images/logo.jpg';

export const Appbar = ({name}:{name:string})=>{
    const navigator = useNavigate()
    return <>
        

            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Link to={`../blogs?name=${name}`}><img src={logo} className="h-8 rounded-full" alt="Logo" /></Link>
                        <Link to={`../blogs?name=${name}`}><span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">My Blog Space</span></Link>
                    </div>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <Link to={`../blog?name=${name}`} className="text-sm  text-blue-600 dark:text-blue-500 rounded hover:underline">Post blog</Link>
                    <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-blue-700">
                        <span className="font-medium text-gray-600 dark:text-gray-300">{name[0].toUpperCase()}</span>
                    </div>
                        <Link to="../signin" onClick={()=>{
                            localStorage.removeItem('token')
                            navigator('../signin')
                            }} className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Logout</Link>
                    </div>
                </div>
            </nav>
    </>
}