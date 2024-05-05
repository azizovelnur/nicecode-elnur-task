import { FC } from 'react'
import * as s from './ClientProfile.module.scss'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/hooks'
import { RootState } from '../../store/store'
import { ClientProfileSubpages } from '../../pages/ClientProfileSubpages/ClientProfileSubpages'

export const ClientProfile: FC = () => {
    const { id: clientIdFromUrl } = useParams<{ id: string }>()
    const clients = useAppSelector(
        (state: RootState) => state.clients.clientsDataOfClientsSlice,
    )
    const findClientById = (clientId: number) => {
        return clients.find((client) => client.id === clientId)
    }

    const client = findClientById(parseInt(clientIdFromUrl))

    return (
        <section className={s.clientProfile}>
            <div className={s.clientProfileInner}>
                <div className={s.clientProfileData}>
                    <div className={s.clientProfileImg}>
                        <img src="" alt="" />
                    </div>
                    <div className={s.clientProfileInfo}>
                        <div>{client.name}</div>
                        <div>{client.id}</div>
                    </div>
                </div>
                <div className={s.clientProfileOptions}>...</div>
            </div>

            {/* <ClientProfileSubpages clientId={clientIdFromUrl} /> */}
        </section>
    )
}
