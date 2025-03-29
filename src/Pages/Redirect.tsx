import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

// redirect to login page.
export const Redirect = ()=>{
    const navgate = useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            navgate('/login')
        },1000)
    },[navgate])
    return <div>
        Please wait...
    </div>
}