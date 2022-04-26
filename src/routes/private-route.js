import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import PropTypes from 'prop-types'

function PrivateRoute({ component, ...rest }) {
    const user = localStorage.getItem('labluby:userData')

    //Se não tiver logado, redirecionar para a tela de login
    if (!user) {
        return <Redirect to='/login' />
    }

    return <Route {...rest} component={component} />
}
export default PrivateRoute

//Validando os tipos de props
PrivateRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}