import React from 'react';
import { Link } from 'react-router-dom';

export const FormPdf = () => {
    return (
        <div>
            <form className="mx-auto w-25 mt-5 p-5" style={{ border: '1px solid #ddd', borderRadius: '20px' }}>
                <div className="mb-3">
                    <label htmlFor="inputNombreEmpresa" className="form-label">Nombre empresa</label>
                    <input type="text" className="form-control" id="inputNombreEmpresa" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Ciudad</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Nombre Rol</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Categoría del Rol</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Años de experiencia</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>

                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Subir archivo pdf</label>
                    <input className="form-control" type="file" id="formFile" />
                </div>

                <button type="submit" className="btn" style={{ backgroundColor: '#4f89ee' }}>Submit</button>
            </form>

            <div className='text-center mt-5'>
                <Link to="/formOptions">
                    <p>Volver a pagina anterior</p>
                </Link>
            </div>
        </div>
    );
};
