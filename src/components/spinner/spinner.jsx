import React from 'react'
import './spinner.css';

const Spinner = () => {
    return (
        <div className='spinner'>
            <div className='spinner-bloque'></div>
            <span className='spinner-text'>Cargando...</span>
        </div>
    )
}

export default Spinner;