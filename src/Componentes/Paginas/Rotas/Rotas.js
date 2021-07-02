import React,{useState} from 'react'
import Inicio from '../Inicio/Inicio'
import Comecar from '../Comecar/Comecar'
import Nome from '../Nome/Nome'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Habilidades from '../Habilidades/Habilidades'

const Rotas = () => {

    const [passarNome, setPassarNome] = useState('')

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/inicio"/>
                </Route>

                <Route path="/inicio">
                    <Inicio/>
                </Route>

                <Route path="/comecar">
                    <Comecar/>
                </Route>

                <Route path="/nome">
                    <Nome
                        setTextoAparecer={setPassarNome}
                    />
                </Route>

                <Route path="/habilidades">
                    <Habilidades
                        nomeCadastrado={passarNome}
                    />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas