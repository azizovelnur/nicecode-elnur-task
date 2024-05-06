import { FC } from 'react'
import { IClientProps } from '../../types/types'

import * as s from './Client.module.scss'
import { Link, useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/hooks'
import { RootState } from '../../store/store'

export const Client: FC<IClientProps> = ({
    client,
    handleCheckboxChange,
    selected,
    selectMode,
}) => {
    const { id: clientIdFromUrl } = useParams<{ id: string }>()

    return (
        <div
            className={
                client.id === Number(clientIdFromUrl)
                    ? `${s.clientActive}`
                    : `${s.client}`
            }
        >
            {selectMode && (
                <input
                    type="checkbox"
                    checked={selected}
                    className={s.clientCheckBox}
                    onChange={() => handleCheckboxChange(client)}
                />
            )}

            <div className={s.clientPicture}>
                <img src={client.imgUrl} />
            </div>
            <Link to={`/client/${client.id}`}>
                <div className={s.clientName}>
                    <span>{client.surname} </span>
                    <span>{client.name}</span>
                </div>
            </Link>
            <img
                className={s.notificationAlert}
                src={client.notificationMessageIcon}
                alt=""
            />
            <img
                className={s.notificationAlert}
                src={client.notificationAlertIcon}
                alt=""
            />
        </div>
    )
}
