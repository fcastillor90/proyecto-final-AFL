import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {


    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleRegister = async () => {
        try {
            const response = await fetch('https://bookish-space-dollop-7gr4g6vq4993x466-3001.app.github.dev', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    role: 'user',  // Asigna el rol deseado aquí
                }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Usuario registrado exitosamente:', data);
                // Maneja el éxito, por ejemplo, redirige a la página de inicio de sesión
            } else {
                console.error('Error al registrar usuario:', data);
                // Maneja el error, muestra un mensaje al usuario, etc.
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    };


    return (
        <>
            <form className="mx-auto w-25 mt-5 p-5" style={{ border: '1px solid #ddd', borderRadius: '20px' }}>
                <div className="mb-3">
                    <label htmlFor="inputEmailRegister" className="form-label">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputEmailRegister"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="inputUsername" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputUsername"
                        value={username}
                        onChange={handleUsernameChange}  // Agregado el onChange handler
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="inputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="inputPassword1"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>


                <button
                    type="button"  // no tipo submit, sino que tipo 'button' para evitar el envío de formulario por defecto
                    className="btn"
                    style={{ backgroundColor: '#4f89ee', margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '300px' }}
                    onClick={handleRegister}  // Maneja el clic del botón
                >
                    Register
                </button>

                <p className='mt-3' style={{ fontSize: '12px' }}>
                    Ya tienes una cuenta?{' '}
                    <Link to="/login" style={{ color: '#4f89ee', textDecoration: 'underline' }}>
                        Login
                    </Link>
                </p>
            </form>
            <div className='text-center mt-5'>
                <Link to="/formOptions">
                    <p>Volver a pagina anterior</p>
                </Link>
            </div>
        </>
    )
}