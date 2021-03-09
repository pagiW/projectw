import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '@components/Main';
import Character from '@components/Characters';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route exact path='/characters' component={Character} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;