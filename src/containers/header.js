import React from 'react'
import Header from '../components/header'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'
export function HeaderContainer({ children, ...restProps}) {
    return (
        <Header dontShowOnSmallViewPort={restProps.dontShowOnSmallViewPort}>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo}/>
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign in</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}
