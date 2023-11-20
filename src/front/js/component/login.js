import React from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <>
            <form className="mx-auto w-25 mt-5 p-5" style={{ border: '1px solid #ddd', borderRadius: '20px' }}>
                <div className="mb-3">
                    <label htmlFor="inputNombreEmpresa" className="form-label">Username</label>
                    <input type="text" className="form-control" id="inputNombreEmpresa" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>


                <button type="submit" className="btn" style={{ backgroundColor: '#4f89ee', margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '300px' }}>Login</button>
                <p className='mt-3' style={{ fontSize: '12px' }}>
                    No tienes una cuenta?{' '}
                    <Link to="/register" style={{ color: '#4f89ee', textDecoration: 'underline' }}>
                        Register
                    </Link>
                </p>
            </form>

            <div className='text-center mt-5'>
                <Link to="/">
                    <p>Volver a pagina anterior</p>
                </Link>
            </div>
        </>
    )
}