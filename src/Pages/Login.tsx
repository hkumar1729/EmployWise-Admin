import { Quote } from "../Components/WelcomeNote";
import {Button} from "../Components/Button"
import { Inputfield } from "../Components/Inputfield";
import { Heading } from "../Components/Heading";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type signInParam = {
    email: string,
    password: string,
}
export default function Login(){
    const navigate = useNavigate()
    const [input, setInputs] = useState<signInParam>({
        email:"",
        password:""
    })

    async function sendRequest() {
        try{
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/login`,input,{
                headers:{
                    'Content-Type': 'application/json',
                }
            })

            const token = response.data.token
            alert("Login Successfull!!!")
            localStorage.setItem("token", `Bearer ${token}`)
            navigate(`/users?page=1`)
        }catch(e: any){
            alert(e.response.data.error)
        }
        
    }


    return<div className="grid grid-cols-1 justify-center items-center md:grid-cols-2">
        <div className="flex flex-col justify-center items-center">
            <Heading label={'Enter your credentials'}/>
            <Inputfield onchange={(e)=>{setInputs((c:signInParam)=>({...c, email:e.target.value}))}} label={'Email'} placeholder={'John@gmail.com'} type={'text'}/>
            <Inputfield onchange={(e)=>{setInputs((c:signInParam)=>({...c, password:e.target.value}))}} label={'Password'} placeholder={'•••••••••'} type={'password'}/>
            <Button onclick={sendRequest} label={'Sign In'}/>
        </div>
        <div className="hidden md:block">
         <Quote label={"Welcome"}/>
        </div>
    </div>
}
