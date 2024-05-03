import { FC } from 'react'
import * as s from './ClientsList.module.scss'
import { IClient } from '../../types/types'
import { Client } from '../Client/Client'

interface ClientsListProps {
    selectMode: boolean
    filteredClients: IClient[]
    selectedClients: IClient[]
    handleCheckboxChange: (client: IClient) => void
}

export const ClientsList: FC<ClientsListProps> = ({
    selectMode,
    filteredClients,
    selectedClients,
    handleCheckboxChange,
}) => {
    return (
        <div className={s.clientList}>
            {selectMode &&
                filteredClients.map((client, key) => (
                    <div key={key}>
                        <Client
                            key={key}
                            client={client}
                            handleCheckboxChange={handleCheckboxChange}
                            selected={selectedClients.includes(client)}
                            selectMode={selectMode}
                        />
                    </div>
                ))}
            {!selectMode &&
                filteredClients.map((client, key) => (
                    <Client
                        key={key}
                        client={client}
                        handleCheckboxChange={handleCheckboxChange}
                        selected={selectedClients.includes(client)}
                        selectMode={selectMode}
                    />
                ))}
        </div>
    )
}
