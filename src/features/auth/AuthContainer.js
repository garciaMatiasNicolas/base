import "./styles/Auth.css";
import { useState } from "react"
import ButtonComponent from "../../components/buttons/Buttons";
import SingInForm from "./forms/SingInForm";
import SingUpForm from "./forms/SingUpForm";

const AuthContainer = () => {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);
    
    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setIsRightPanelActive(false);
    };

    return (
        <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
            <div className="form-container sign-up-container">
                <SingUpForm />
            </div>
            <div className="form-container sign-in-container">
                <SingInForm />
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h2>¿Ya tienes cuenta?</h2>
                        <p>Ingresa aquí!</p>
                        <ButtonComponent 
                            text="Inicia sesión" 
                            type="button" 
                            id="signIn" 
                            color=""
                            style={{"backgroundColor": "#4a72ff"}}
                            size="sm"
                            variant="" 
                            shape=""
                            className="border-transparent"
                            onClick={handleSignInClick}
                        />
                    </div>
                    <div className="overlay-panel overlay-right">

                        <h2>Bienvenido de vuelta!</h2>
                        <p>¿No tienes cuenta? <br />Creala!</p>
                        <ButtonComponent 
                            text="Registrarme" 
                            type="button" 
                            id="signUp" 
                            color=""
                            style={{"backgroundColor": "#4a72ff"}}
                            size="sm"
                            variant="" 
                            shape=""
                            className="border-transparent"
                            onClick={handleSignUpClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthContainer;