import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function(props) {
    const {
        component: Component,
        ...rest
    } = props

    return (
        <Route {...rest} render={() => {
            //get a value saved in out browser's local storage
            const token = localStorage.getItem('token')

            return token
                ? <Component />
                : <Redirect to="/login" />
        }} />
    )
}