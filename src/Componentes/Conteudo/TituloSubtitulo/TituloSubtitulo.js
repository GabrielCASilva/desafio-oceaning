import React from 'react'

const TituloSubtitulo = ({titulo, subtitulo, chamada}) => {

    const estilo = {
        titulo: {
            color: 'orange',
            fontWeight: 'bold',
            fontSize: '30px'
        },
        chamada: {
            fontWeight: 'bold',
            fontSize: '50px'
        },
        subtitulo: {
            fontWeight: 'bold',
            fontSize: '20px',
            opacity: '.5'
        }
    }

    return (
        <div style={{width:'900px'}}>
            <p style={estilo.titulo}>{titulo}</p>
            <p style={estilo.chamada}>{chamada}</p>
            <p style={estilo.subtitulo}>{subtitulo}</p>
        </div>
    )
}

export default TituloSubtitulo