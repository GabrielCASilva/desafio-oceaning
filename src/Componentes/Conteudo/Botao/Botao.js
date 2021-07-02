import React from 'react'
import { Link } from 'react-router-dom'

const Botao = ({btnTexto, redirecionamento}) => {

    const estilo = {
        appearance: 'none',
        fontSize:'20px',
        padding: '20px 40px',
        backgroundColor: '#02f2ff',
        border: 'none',
        borderRadius: '30px',
        fontWeight: 'bold'
    }

    return (
        <>
            
                <button 
                    style={estilo} 
                    type='submit'
                ><Link to={redirecionamento}>{btnTexto}</Link></button>
            
        </>
    )
}

export default Botao