import { Note } from "../Components/WelcomeNote";
import {Button} from "../Components/Button"
import { Inputfield } from "../Components/Inputfield";
import { Heading } from "../Components/Heading";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { signInParam } from "../types/signin";


export default function Login(){
    const navigate = useNavigate()
    const [input, setInputs] = useState<signInParam>({
        email:"",
        password:""
    })

    // login
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
        }catch(e: unknown){
            if (e instanceof Error && "response" in e && e.response && typeof e.response === "object") {
                alert((e.response as { data?: { error?: string } })?.data?.error || "An error occurred");
            } else {
                alert("Something went wrong");
            }
        }
        
    }

    // login page component
    return <div className="grid grid-cols-1 mt-40 justify-center items-center md:grid-cols-2 md:mt-0">
        <div className="flex flex-col flex-wrap justify-center items-center">
            <Heading label={'Login'}/>
            <Heading label={'Enter your credentials'}/>
            <Inputfield onchange={(e)=>{setInputs((c:signInParam)=>({...c, email:e.target.value}))}} label={'Email'} placeholder={'John@gmail.com'} type={'text'}/>
            <Inputfield onchange={(e)=>{setInputs((c:signInParam)=>({...c, password:e.target.value}))}} label={'Password'} placeholder={'•••••••••'} type={'password'}/>
            <Button onclick={sendRequest} label={'Sign In'}/>
        </div>
        <div className="hidden md:block">
         <Note label={"Welcome"}/>
        </div>
    </div>
}
