import React from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {
    return (
        <>
            <form className="mx-auto w-25 mt-5 p-5" style={{ border: '1px solid #ddd', borderRadius: '20px' }}>
                <div className="mb-3">
                    <label htmlFor="inputEmailRegister" className="form-label">Email</label>
                    <input type="text" className="form-control" id="inputEmailRegister" />
                </div>

                <div className="mb-3">
                    <label htmlFor="inputNombreEmpresa" className="form-label">Username</label>
                    <input type="text" className="form-control" id="inputNombreEmpresa" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>


                <button type="submit" className="btn" style={{ backgroundColor: '#4f89ee', margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '300px' }}>Register</button>
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