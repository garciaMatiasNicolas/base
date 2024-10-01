'use client'
import { Button } from 'keep-react'; 

const ButtonComponent = ({text, type, id, size, color, variant, shape, icon, onClick, className, style, disabled}) => {
    return (
        <Button
            className={className}
            type={type} 
            id={id} 
            color={color} 
            size={size} 
            variant={variant} 
            shape={shape}
            onClick={onClick}
            style={style}
            disabled={disabled}
        >
            {icon}
            {text}
        </Button>
    );
};

export default ButtonComponent;