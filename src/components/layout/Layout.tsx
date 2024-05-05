import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import { Clients } from '../Clients/Clients'

import * as s from './Layout.module.scss'
export const Layout: FC = () => {
    return (
        <>
            <Header />
            <div style={{ height: '30px' }}></div>
            <main className={s.app}>
                <Clients />
                <Outlet />
            </main>
        </>
    )
}
