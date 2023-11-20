import React from 'react';
import { Link } from 'react-router-dom';

export const FormManual = () => {
    return (
        <div>
            <p>form manual</p>
            <div className='text-center mt-5'>
                <Link to="/formOptions">
                    <p>Volver a pagina anterior</p>
                </Link>
            </div>
        </div>
    );
};