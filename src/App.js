import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';

import PrivateRoute from './components/PrivateRoute';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

import Cart from './components/Cart';
import MenuItem from './components/MenuItem'
import { Container, Menu, PageBody } from './AppStyled';

export default () => {
    return (
        <BrowserRouter>
            <Container>
    
                <Menu>
                    <MenuItem title="Loja" icon="/assets/store.png" link="/" />
                    <MenuItem title="Pedidos" icon="/assets/order.png" link="/orders" />
                    <MenuItem title="Meu Perfil" icon="/assets/profile.png" link="/profile" />
                </Menu>

                <PageBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>

                        <PrivateRoute exact path="/orders" >
                            <div>Tela de pedidos</div>
                        </PrivateRoute>

                        <PrivateRoute exact path="/profile" >
                            <div>Tela do perfil</div>
                        </PrivateRoute>

                        <Route path="/tela2/:nome">
                            <Tela2Screen />
                        </Route>
                    </Switch>
                </PageBody>
                
                <Cart/>

                <ReactTooltip id="tip-top" place="top" effect="solid" />
                <ReactTooltip id="tip-right" place="right" effect="solid" />

            </Container>
        </BrowserRouter>
    );
}