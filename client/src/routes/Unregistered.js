import React from 'react'
import { Route, Switch } from 'react-router-dom'
import pages from '../pages'

const Registered = () => {
    return (
        <Switch>
            <Route path="/" exact  component={pages.UnregMain} />
        </Switch>
    )
}


export default Registered;