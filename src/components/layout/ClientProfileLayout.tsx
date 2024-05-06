import { FC } from 'react'
import { ClientProfile } from '../ClientProfile/ClientProfile'
import { ClientProfileSubpages } from '../../pages/ClientProfileSubpages/ClientProfileSubpages'
import { Outlet, useParams } from 'react-router-dom'
import * as s from './ClientProfileLayout.module.scss'
import { ClientProfileNotes } from '../../pages/ClientProfileNotes/ClientProfileNotes'

export const ClientProfileLayout: FC = () => {
    const { id } = useParams<{ id: string }>()
    console.log(id)

    return (
        <section className={s.clientsProfileLayout}>
            <ClientProfile />
            <ClientProfileSubpages />
            <div className={s.clientProfileSubPage}>
                {id === undefined ? <ClientProfileNotes /> : ''}
                <Outlet />
            </div>
        </section>
    )
}
