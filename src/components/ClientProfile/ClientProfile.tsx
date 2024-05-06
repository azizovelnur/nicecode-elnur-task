import { FC, useState } from 'react'
import * as s from './ClientProfile.module.scss'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/hooks'
import { RootState } from '../../store/store'
import { ClientProfileSubpages } from '../../pages/ClientProfileSubpages/ClientProfileSubpages'
import DetailsIcon from '../../assets/images/detailsIcon.svg'
import { EditDropDownClient } from '../EditDropDownClient/EditDropDownClient'

export const ClientProfile: FC = () => {
    const { id: clientIdFromUrl } = useParams<{ id: string }>()
    const clients = useAppSelector(
        (state: RootState) => state.clients.clientsDataOfClientsSlice,
    )
    const findClientById = (clientId: number) => {
        return clients.find((client) => client.id === clientId)
    }

    const client = findClientById(parseInt(clientIdFromUrl))

    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className={s.clientProfile}>
            <div className={s.clientProfileInner}>
                <div className={s.clientProfileData}>
                    <div className={s.clientProfileImg}>
                        <img
                            src={client ? client.imgUrl : '/images/2.png'}
                            alt=""
                        />
                    </div>
                    <div className={s.clientProfileInfo}>
                        <div className={s.clientProfileName}>
                            <span>{client ? client.surname : 'Рожков'} </span>
                            <span>{client ? client.name : 'Денис'} </span>
                            <span>
                                {client ? client.patronymic : 'Петрович'}
                            </span>
                        </div>
                        <div className={s.clientProfileGenderAndAge}>
                            <span>{client ? client.age : '30'} лет,</span>
                            <span>
                                {client ? client.gender.slice(0, 3) : 'муж'}
                            </span>
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => setOpen(true)}
                    className={s.clientProfileOptions}
                >
                    {<DetailsIcon />}
                </div>
            </div>
        </div>
    )
}
