import { FC } from 'react'
import { ClientProfile } from '../ClientProfile/ClientProfile'
import { ClientProfileSubpages } from '../../pages/ClientProfileSubpages/ClientProfileSubpages'
import { Outlet, useParams } from 'react-router-dom'
import * as s from './ClientProfileLayout.module.scss'

export const ClientProfileLayout: FC = () => {
    const { id: clientIdFromUrl } = useParams<{ id: string }>()
    return (
        <div className={s.clientsProfileLayout}>
            <ClientProfile />
            <ClientProfileSubpages clientId={clientIdFromUrl} />
            <div className={s.clientProfileSubPage}>
                <Outlet />
            </div>
        </div>
    )
}
