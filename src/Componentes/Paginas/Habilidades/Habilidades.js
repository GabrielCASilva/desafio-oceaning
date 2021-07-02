import React, { useState, useEffect } from 'react'
import Cabecalho from '../../Conteudo/Cabecalho/Cabecalho'
import TituloSubtitulo from '../../Conteudo/TituloSubtitulo/TituloSubtitulo'
import BotaoTexto from '../../Conteudo/Formulario/BotaoTexto/BotaoTexto'
import pegarTipoHabilidades from '../../../utils/pegarTipoHabilidades'

const Habilidades = ({nomeCadastrado}) => {

    const [habilidade, setHabilidades] = useState([])

    useEffect(async () => {
        await pegarTipoHabilidades(setHabilidades)
    }, [])

    const titulo = `Olá ${nomeCadastrado},`
    const chamada= "Quais são suas habilidades"
    const subtitulo = " Nos diga como devemos te chamar e qual "
        + "é o seu e-mail para que possamos te enviar novidades"

    const btnTexto = "FINALIZAR"

    const placeholder = "Digite uma habilidade"

    

    console.log(habilidade)

    return(
        <>
            <Cabecalho tamanhoFonte='25px'/>
            <TituloSubtitulo 
                titulo={titulo}
                chamada={chamada}
                subtitulo={subtitulo}
            />
            <BotaoTexto
                //pegarValorTexto={}
                //valorInput={}
                btnTexto = {btnTexto}
                //redirecionamento={}
                placeholder={placeholder}
                //cor={}
            />
        </>
    )
}

export default Habilidades