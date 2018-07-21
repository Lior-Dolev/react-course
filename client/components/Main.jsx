import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AddTypeForm from '../containers/AddTypeForm.jsx';
import RequestTypes from '../containers/RequestTypes.jsx';

export default function Main() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/add/" component={AddTypeForm} />
                <Route path="/" component={RequestTypes} />
            </Switch>
        </BrowserRouter>
    );
}