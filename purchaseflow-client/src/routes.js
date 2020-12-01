import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Welcome from './pages/welcome'
import Categories from './pages/categories'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                  <Route path='/' exact component = {Welcome} />
                  <Route path='/categories' exact component= {Categories} />

            </Switch>
        </BrowserRouter>
    )
}