import React from 'react'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Login from '../containers/login'
import Employees from '../containers/employees'
import AllVehicles from '../containers/allVehicles'
import YourVehicles from '../containers/yourVehicles'
import Welcome from '../containers/welcome'
import PrivateRoute from './private-route'

function Routes() {


    return (
        <Router>
            <Switch>
                <Route component={Login} path='/login' />
                <PrivateRoute exact component={Employees} path='/employees' />
                <PrivateRoute exact component={AllVehicles} path='/vehicles' />
                <PrivateRoute exact component={AllVehicles} path='/vehicles' />
                <PrivateRoute exact component={YourVehicles} path='/yourvehicles' />
                <PrivateRoute exact component={Welcome} path='/welcome' />
            </Switch>
        </Router>
    )
}

export default Routes