import { FC } from 'react'
import { IClientProps } from '../../types/types'

import * as s from './Client.module.scss'
import { Link, useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/hooks'
import { RootState } from '../../store/store'
import TelegramIcon from '../../assets/images/telegramIcon.svg'
import AlertIcon from '../../assets/images/alertIcon.svg'

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
            <div className={s.notificationAlert}>
                {client.id === 1 ? <TelegramIcon color={'#4198C5'} /> : ''}
                {client.id === 3 ? <AlertIcon color={'#EC8532'} /> : ''}
            </div>
        </div>
    )
}
