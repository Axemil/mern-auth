import React from 'react'
import { Route, Switch } from 'react-router-dom'
import pages from '../pages'

const Unregistered = () => {
    return (
        <Switch>
            <Route path="/" exact  component={pages.Main} />
        </Switch>
    )
}


export default Unregistered;