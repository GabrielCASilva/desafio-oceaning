import React from 'react'
import Cabecalho from '../../Conteudo/Cabecalho/Cabecalho'
import TituloSubtitulo from '../../Conteudo/TituloSubtitulo/TituloSubtitulo'
import Botao from '../../Conteudo/Botao/Botao'

const Comecar = () => {

    const titulo = "Time de desenvolvimento"
    const chamada= "Sua evolução começa agora"
    const subtitulo = 
        "Faça parte dessa jornada junto com a "
        + "Oceaning e conquiste o mundo com suas "
        + "habilidades de programação."

    const btnTexto = "COMEÇAR AGORA"

    return (
        <>
            <Cabecalho tamanhoFonte='25px'/>
            <TituloSubtitulo 
                titulo = {titulo}
                chamada = {chamada}
                subtitulo = {subtitulo}
            />
            <Botao
                btnTexto = {btnTexto}
                redirecionamento="/nome"
            />
        </>
    )
}

export default Comecar