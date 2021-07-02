import React from 'react'

const EnvioTexto = ({pegarValorTexto,valorInput,placeholder,cor}) => {
    return (
        <>
            <input 
                type="text"
                onChange={pegarValorTexto}
                value={valorInput}
                placeholder={placeholder}
                style={cor}
            />
        </>
    )
}

export default EnvioTexto