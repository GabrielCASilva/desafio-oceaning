import React from 'react'
import EnvioTexto from '../EnvioTexto/EnvioTexto'
import Botao from '../../Botao/Botao'

const BotaoTexto = ({pegarValorTexto, btnTexto, valorInput, placeholder, cor, redirecionamento, }) => {

    return(
        <>
            <EnvioTexto
                pegarValorTexto={pegarValorTexto}
                valorInput={valorInput}
                placeholder={placeholder}
                cor={cor}
            />
            <Botao
                redirecionamento={redirecionamento}
                btnTexto={btnTexto}
            />
        </>
    )
}

export default BotaoTexto