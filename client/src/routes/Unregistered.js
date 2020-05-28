import React from 'react'
import { Route, Switch } from 'react-router-dom'
import pages from '../pages'

const Registered = () => {
    return (
        <Switch>
            <Route path="/" exact  component={pages.UnregMain} />
            <Route path="/login" component={pages.Login} />
            <Route path="/registrate" component={pages.Registrate}  />
        </Switch>
    )
}


export default Registered;