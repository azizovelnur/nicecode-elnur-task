import React, { FC } from 'react'
import * as s from './ClientProfileSubpages.module.scss'
import { Link } from 'react-router-dom'
interface ClientProfileSubpagesProps {
    clientId: string
}
export const ClientProfileSubpages: FC<ClientProfileSubpagesProps> = ({
    clientId,
}) => {
    return (
        <div className={s.subpages}>
            <Link to={`/client/${clientId}/notes`}>Заметки</Link>
            <Link to={`/client/${clientId}/consultations`}>Консультации</Link>
            <Link to={`/client/${clientId}/videos`}>Видео</Link>
            <Link to={`/client/${clientId}/events`}>Мероприятия</Link>
        </div>
    )
}
