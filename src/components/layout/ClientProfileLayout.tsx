import { FC } from 'react'
import { ClientProfile } from '../ClientProfile/ClientProfile'
import { ClientProfileSubpages } from '../../pages/ClientProfileSubpages/ClientProfileSubpages'
import { Outlet } from 'react-router-dom'
import * as s from './ClientProfileLayout.module.scss'

export const ClientProfileLayout: FC = () => {
    return (
        <section className={s.clientsProfileLayout}>
            <ClientProfile />
            <ClientProfileSubpages />
            <div className={s.clientProfileSubPage}>
                <Outlet />
            </div>
        </section>
    )
}
