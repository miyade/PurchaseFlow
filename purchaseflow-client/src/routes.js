import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Welcome from './pages/welcome'
import Categories from './pages/categories'
import Confirmation from './pages/confirmation'
import Thankyou from './pages/Thankyou'



export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                  <Route path='/' exact component = {Welcome} />
                  <Route path='/categories' exact component= {Categories} />
                  <Route path='/confirmation' exact component= {Confirmation} />
                  <Route path='/Thankyou' exact component= {Thankyou} />



            </Switch>
        </BrowserRouter>
    )
}