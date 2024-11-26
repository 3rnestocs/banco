import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';

const BUTextField = ({
    fieldType, // Define the fieldType (e.g., email, password, phone, etc.)
    value,
    onChange,
    required = false,
    customLabel, // Allow overriding the label if necessary
    customValidationFn, // Custom validation function
    isMultiline = false,
    onTyping,
    onFinishTyping,
    ...props
}) => {
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showPassword] = useState(false);

    // Debounce user typing detection
    useEffect(() => {
        if (isTyping) {
            const typingTimeout = setTimeout(() => {
                setIsTyping(false);
                if (onFinishTyping) onFinishTyping();
            }, 800); // 800ms debounce
            return () => clearTimeout(typingTimeout);
        }
    }, [isTyping, onFinishTyping]);

    // Handle typing change and validation
    const handleChange = (e) => {
        const { value } = e.target;
        setIsTyping(true);
        onChange(e);

        // Custom validation function
        if (customValidationFn) {
            const { isValid, message } = customValidationFn(value);
            setError(!isValid);
            setHelperText(message);
        } else {
            // Default validation based on the field type
            switch (fieldType) {
                case 'email':
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    setError(!emailPattern.test(value));
                    setHelperText(!emailPattern.test(value) ? 'Correo electrónico inválido' : '');
                    break;
                case 'password':
                case 'confirmPassword':
                    setError(value.length < 8); // Simple password length validation
                    setHelperText(value.length < 8 ? 'La contraseña debe tener al menos 8 caracteres' : '');
                    break;
                case 'phone':
                    const phonePattern = /^[0-9]{10,15}$/;
                    setError(!phonePattern.test(value));
                    setHelperText(!phonePattern.test(value) ? 'Número de teléfono inválido' : '');
                    break;
                default:
                    if (required && value.trim() === '') {
                        setError(true);
                        setHelperText(`${getDefaultLabel(fieldType)} es obligatorio`);
                    } else {
                        setError(false);
                        setHelperText('');
                    }
                    break;
            }
        }
    };

    // Default labels and placeholders based on the field type
    const getDefaultLabel = (type) => {
        switch (type) {
            case 'email':
                return 'Correo electrónico';
            case 'password':
                return 'Contraseña';
            case 'confirmPassword':
                return 'Confirmar contraseña';
            case 'document':
                return 'Número de documento';
            case 'phone':
                return 'Número de teléfono';
            case 'name':
                return 'Nombre';
            case 'lastname':
                return 'Apellido';
            case 'message':
                return 'Descripción';
            default:
                return 'Campo';
        }
    };

    const getDefaultType = (type) => {
        switch (type) {
            case 'email':
                return 'email';
            case 'password':
            case 'confirmPassword':
                return showPassword ? 'text' : 'password';
            case 'document':
                return 'number';
            case 'phone':
                return 'tel';
            default:
                return 'text';
        }
    };

    return (
        <TextField
            fullWidth
            margin="normal"
            label={customLabel || getDefaultLabel(fieldType)} // Use custom label if provided, otherwise default
            type={getDefaultType(fieldType)} // Handle password visibility
            value={value}
            onChange={handleChange}
            error={error}
            helperText={helperText}
            required={required}
            multiline={isMultiline} // Conditionally make it multiline
            rows={isMultiline ? 8 : undefined} // If multiline, set default row count (adjust rows as needed)
            {...props}
        />

    );
};

export default BUTextField;
