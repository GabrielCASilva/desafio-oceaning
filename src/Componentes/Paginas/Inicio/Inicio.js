import React from 'react'
import Cabecalho from '../../Conteudo/Cabecalho/Cabecalho'
import TituloSubtitulo from '../../Conteudo/TituloSubtitulo/TituloSubtitulo'
import Botao from '../../Conteudo/Botao/Botao'

const Inicio = () => {

    const titulo = "Developers Oceaning"
    const chamada= "Faça parte do time de desenvolvimento da agência Oceaning"

    const btnTexto = "INSCREVA-SE"

    return (
        <>
            <Cabecalho tamanhoFonte='25px'/>
            <TituloSubtitulo 
                titulo = {titulo}
                chamada = {chamada}
            />
            <Botao
                btnTexto={btnTexto}
                redirecionamento="/comecar"
            />
        </>
    )
}

export default Inicio