import React, { useState } from 'react'
import { IconInput } from '../../../components/inputs/Inputs';
import ButtonComponent from '../../../components/buttons/Buttons';
import { EnvelopeOpen, Key } from 'phosphor-react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const SingInForm = () => {
    const [data, setData] = useState({username: "", password: ""});
    const navigate = useNavigate()
    
    const handleOnChange = (e) => {
        setData((prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        })); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let token = data
        Cookies.set('authTkn', token, { expires: 1, secure: true })
        navigate("/dashboard");
    }; 

    return (
        <form onSubmit={handleSubmit} className="gap-2">
            <h3 className="text-xl">Iniciar sesión</h3>
            <IconInput 
                type="email" 
                required={true} 
                icon={<EnvelopeOpen size={19} color="#AFBACA"/>} 
                placeholder={"Email"} 
                name={"username"} 
                id={"emailId"} 
                onChange={handleOnChange}
            />
            <IconInput 
                type="password" 
                required={true} 
                icon={<Key size={19} color="#AFBACA"/>} 
                placeholder={"Contraseña"} 
                name={"password"} 
                id={"password"} 
                onChange={handleOnChange}
            />
            <ButtonComponent 
                type="submit"
                id="submit-login"
                name="submit-login"
                text="Iniciar"
                size="sm"
                style={{"backgroundColor": "#4a72ff"}}
                className="mt-5 w-24"
            />
        </form> 
    );
};

export default SingInForm