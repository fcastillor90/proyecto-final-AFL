import React from 'react';
import { Link } from 'react-router-dom';

export const FormPdf = () => {
    return (
        <div>
            <p>form</p>
            <div className='text-center mt-5'>
                <Link to="/formOptions">
                    <p>Volver a pagina anterior</p>
                </Link>
            </div>
        </div>
    );
};