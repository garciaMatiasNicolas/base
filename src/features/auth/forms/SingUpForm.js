import { EnvelopeOpen, Key } from 'phosphor-react';
import React, { useState } from 'react'
import { IconInput } from '../../../components/inputs/Inputs';
import ButtonComponent from '../../../components/buttons/Buttons';
import { Spinner } from 'keep-react';

const SignUpForm = ({setViewProfileConfiguration}) => {
    const [signUpData, setSignUpData] = useState({
        email: "",
        password: "",
        password1: "",
    });
    const [passwordsMatch, setPasswordsMatch] = useState(null);
    const [message, setMessage] = useState("");
    const [sendingInfo, setSendingInfo] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignUpData({
            ...signUpData,
            [name]: value,
        });

        const password = name === "password" ? value : signUpData.password;
        const password1 = name === "password1" ? value : signUpData.password1;

        if (password && password1) {
            if (password !== password1) {
                setPasswordsMatch(false);
                setMessage("Las contraseñas no coinciden");
            } else {
                setPasswordsMatch(true);
                setMessage("");
            }
        } else {
            setPasswordsMatch(null); 
            setMessage("");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSendingInfo(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log("hello world")
    };

    const getBorderClass = () => {
        if (passwordsMatch === null) {
            return ""; 
        } else if (passwordsMatch) {
            return "border-emerald-600"; 
        } else {
            return "border-rose-600"; 
        }
    };
    

    return (
        <form onSubmit={handleSubmit} className="gap-2">
            <h3 className="text-xl">Crea tu cuenta</h3>
            <IconInput 
                type="email" 
                required={true} 
                icon={<EnvelopeOpen size={19} color="#AFBACA" />} 
                placeholder="Email" 
                name="email" 
                id="email-singup"
                onChange={handleChange} 
            />
            <IconInput 
                type="password" 
                required={true} 
                icon={<Key size={19} color="#AFBACA" />} 
                placeholder="Contraseña" 
                name="password" 
                id="password-singup" 
                onChange={handleChange}
                className={`form-input ${getBorderClass()}`} 
            />
            <IconInput 
                type="password" 
                required={true} 
                icon={<Key size={19} color="#AFBACA" />} 
                placeholder="Repetí la contraseña" 
                name="password1" 
                id="password1" 
                onChange={handleChange}
                className={`form-input ${getBorderClass()}`} 
            />
            {message && <p className="text-red-600">{message}</p>}
            {!sendingInfo ? 
                <ButtonComponent 
                    type="submit"
                    id="submit-signup"
                    name="submit-signup"
                    text="Registrarse"
                    size="sm"
                    disabled={!passwordsMatch}
                    style={{ backgroundColor: "#4a72ff" }}
                    className="w-24"
                />
                :
                <div className="flex items-center justify-center gap-3">
                    <p>Enviado información..</p>
                    <Spinner className="mb-1" size="sm" color="primary" />
                </div>
            }
        </form>
    );
};

export default SignUpForm;