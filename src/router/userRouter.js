import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import User from '../userComponent/User';
import UserList from '../userComponent/UserList';

function Route() {
    return (
        <main>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="../userComponent/User" component={User} />
                <Route path="../userComponent/UserList" component={UserList} />
                <Route component={Error} />
            </Switch>
        </main>
    )
}

