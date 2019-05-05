import React from 'react'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import { HomeEntry, DetailsEntry } from 'entries'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomeEntry} />
                <Route path="/details" component={DetailsEntry} />
                <Route render={() => <Redirect to="/" />} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
