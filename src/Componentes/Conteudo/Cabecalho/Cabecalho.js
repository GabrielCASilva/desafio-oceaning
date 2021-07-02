import React from 'react'
import LogoOceaning from '../../../images/logo.png'
import Instagem from '../../../images/instagram.svg'

import './Cabecalho.css'

const Cabecalho = ({tamanhoFonte}) => {

    const estiloInstagram = {
        width: '50px',
        marginLeft: '20px'
    }

    const estiloFonte = {
        fontSize :tamanhoFonte
    }

    return (
        <header>
            <img src={LogoOceaning} alt='logo'/>
            <div className='texto-envolvido'>
                <div className='conteudo-texto'>
                    <p style={{opacity:'.8'}}>COMPARTILHE</p>
                    <p style={estiloFonte}>@theoceaning</p>
                </div>
                
                <img
                    style={estiloInstagram}
                    src={Instagem}
                    alt='instagram'
                />
            </div>
        </header>
    )
}

export default Cabecalho