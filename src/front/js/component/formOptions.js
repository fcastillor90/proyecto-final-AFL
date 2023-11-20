import React from 'react';
import { Link } from "react-router-dom";

export const FormOptions = () => {
    return (
        <div className="container mt-5">
            <h3 className="text-center">Dos formas de compartir tu salario</h3>
            <div className="row justify-content-center mt-3">
                <div className="col-6 text-center" style={{ height: '400px', border: '1px solid', width: '300px', marginRight: '60px' }}>
                    Subir salario en pdf
                    <Link to="/formPdf">
                        <button type="button" variant="contained" style={{ backgroundColor: '#4f89ee', color: 'black', borderRadius: '20px', marginTop: '5px', padding: '5px' }}>
                            Subir salario
                        </button>
                    </Link>
                </div>
                <div className="col-6 text-center" style={{ height: '400px', border: '1px solid', width: '300px' }}>
                    segunda salario manualmente
                    <Link to="/formManual">
                        <button type="button" variant="contained" style={{ backgroundColor: '#4f89ee', color: 'black', borderRadius: '20px', marginTop: '5px', padding: '5px' }}>
                            Subir salario
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
