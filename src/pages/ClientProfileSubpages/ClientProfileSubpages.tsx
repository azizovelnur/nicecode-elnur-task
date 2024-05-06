import React, { FC } from 'react'
import * as s from './ClientProfileSubpages.module.scss'
import { Link, NavLink, useParams } from 'react-router-dom'
import ActionOfPageIcon from '../../assets/images/actionOfPageIcon.svg'

export const ClientProfileSubpages: FC = () => {
    const { id: clientIdFromUrl } = useParams<{ id: string }>()
    return (
        <div className={s.subpages}>
            <div className={s.subpagesLinks}>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? `${s.activePageLink}` : `${s.pageLink}`
                    }
                    to={`/client/${clientIdFromUrl}/notes`}
                >
                    Заметки
                </NavLink>
                <div className={s.divider}></div>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? `${s.activePageLink}` : `${s.pageLink}`
                    }
                    to={`/client/${clientIdFromUrl}/consultations`}
                >
                    Консультации
                </NavLink>
                <div className={s.divider}></div>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? `${s.activePageLink}` : `${s.pageLink}`
                    }
                    to={`/client/${clientIdFromUrl}/videos`}
                >
                    Видео
                </NavLink>
                <div className={s.divider}></div>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? `${s.activePageLink}` : `${s.pageLink}`
                    }
                    to={`/client/${clientIdFromUrl}/events`}
                >
                    Мероприятия
                </NavLink>
            </div>

            <div className={s.actionOfPage}>
                <div>Новая заметка</div>
                <div className={s.actionOfPageIcon}>
                    <ActionOfPageIcon height={'26'} width={'26'} />
                </div>
            </div>
        </div>
    )
}
