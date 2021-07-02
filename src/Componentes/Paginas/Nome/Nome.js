import React, {useState} from 'react'
import Cabecalho from '../../Conteudo/Cabecalho/Cabecalho'
import TituloSubtitulo from '../../Conteudo/TituloSubtitulo/TituloSubtitulo'
import BotaoTexto from '../../Conteudo/Formulario/BotaoTexto/BotaoTexto'

const Nome = ({setTextoAparecer}) => {

    const titulo = "Vamos começar"
    const chamada= "Como devemos te chamar?"
    const subtitulo = 
        "Nos diga como devemos te chamar e qual é o seu e-mail "
        + "para que possamos te enviar novidades "

    const btnTexto = "CONTINUAR"

    let placeholder = "digite seu nome"

    const [usuario, setUsuario] = useState('')
    const [novoNome, setNovoNome] =  useState('')


    const adicionarTexto = (e) => {
        e.preventDefault()
        setNovoNome(usuario)
        setTextoAparecer(novoNome)
    }

    return (
        <>
            <Cabecalho tamanhoFonte='25px'/>
            <TituloSubtitulo 
                titulo = {titulo}
                chamada = {chamada}
                subtitulo = {subtitulo}
                
            />

            <form onSubmit ={ (e) => adicionarTexto(e)}>
                <BotaoTexto
                    pegarValorTexto={(e) => setUsuario(e.target.value)}
                    valorInput={usuario}
                    btnTexto = {btnTexto}
                    redirecionamento={"/habilidades"}
                    placeholder={placeholder}
                    cor={usuario.length? {backgroundColor:'green'}:{backgroundColor:'gray'} }
                />
            </form>
        </>
    )
}

export default Nome