import React from 'react';

const CompanyCard = ({ companyName, average, entries }) => {
    return (
        <div className="card" style={{ width: '18rem', margin: '10px' }}>
            <div className="card-body">
                <h5 className="card-title">{companyName}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Media: ${average}M</h6>
                <h6 className="card-subtitle mb-2 text-body-secondary">Entradas: {entries}</h6>
            </div>
        </div>
    )
};

export default CompanyCard;