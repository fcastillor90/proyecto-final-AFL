import React from 'react';
import { Link } from "react-router-dom";

export const FormOptions = () => {
    return (
        <div className="container mt-5">
            <h3 className="text-center">Dos formas de compartir tu salario</h3>
            <div className="row justify-content-center mt-3">
                <div className="col-6 text-center" style={{ height: '400px', border: '1px solid', width: '300px', marginRight: '30px' }}>
                    <div>
                        <h5 className='mt-2'>Subir archivo pdf</h5>
                    </div>
                    <Link to="/formPdf">
                        <button type="button" variant="contained" style={{ backgroundColor: '#4f89ee', color: 'black', borderRadius: '20px', marginTop: '5px', padding: '5px' }}>
                            + Subir PDF
                        </button>
                    </Link>
                    <p className='mt-4'>✔ Anónimo</p>
                    <p>✔ Demora 15 segundos</p>
                    <p>✔ Documentos se eliminan luego de ser verificados</p>
                    <p>✔ Ayudas a otros</p>
                </div>
                <div className="col-6 text-center" style={{ height: '400px', border: '1px solid', width: '300px' }}>
                    <div>
                        <h5 className='mt-2'>Subir salario manualmente</h5>
                    </div>
                    <Link to="/formManual">
                        <button type="button" variant="contained" style={{ backgroundColor: '#4f89ee', color: 'black', borderRadius: '20px', marginTop: '5px', padding: '5px' }}>
                            Subir información
                        </button>
                    </Link>
                    <p className='mt-4'>✔ Anónimo</p>
                    <p>✔ Demora 45 segundos</p>
                    <p>✔ Se añade a los datos promedio</p>
                    <p>✔ Ayudas a otros</p>
                </div>
            </div>
            <div className='text-center mt-5'>
                <Link to="/">
                    <p>Volver a pagina principal</p>
                </Link>
            </div>
        </div>
    );
};


