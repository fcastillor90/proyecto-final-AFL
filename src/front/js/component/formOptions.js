import React from 'react';

export const FormOptions = () => {
    return (
        <div className="container mt-5">
            <h3 className="text-center">Dos formas de compartir tu salario</h3>
            <div className="row justify-content-center mt-3">
                <div className="col-6 text-center" style={{ height: '400px', border: '1px solid', width: '300px', marginRight: '60px' }}>
                    Subir salario en pdf
                </div>
                <div className="col-6 text-center" style={{ height: '400px', border: '1px solid', width: '300px' }}>
                    segunda salario manualmente
                </div>
            </div>
        </div>
    );
};
