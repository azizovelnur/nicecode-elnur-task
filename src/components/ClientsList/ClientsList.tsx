import { FC, useState } from 'react'
import * as s from './ClientsList.module.scss'
import { IClient } from '../../types/types'
import { Client } from '../Client/Client'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { RootState } from '../../store/store'
import { selectedClientsR } from '../../store/slices/clientsSlice'

export const ClientsList: FC = () => {
    const {
        selectModeOfClientsSlice,
        clientsDataOfClientsSlice,
        searchValueOfClientOfClientsSlice,
        selectedClientsOfClientsSlice,
    } = useAppSelector((state: RootState) => state.clients)

    const dispatch = useAppDispatch()
    const filteredClients = clientsDataOfClientsSlice.filter((client) =>
        client.name
            .toLowerCase()
            .includes(searchValueOfClientOfClientsSlice.toLowerCase()),
    )
    const handleCheckboxChange = (client: IClient) => {
        if (selectModeOfClientsSlice) {
            if (selectedClientsOfClientsSlice.includes(client)) {
                dispatch(
                    selectedClientsR(
                        selectedClientsOfClientsSlice.filter(
                            (c) => c !== client,
                        ),
                    ),
                )
            } else {
                dispatch(
                    selectedClientsR([
                        ...selectedClientsOfClientsSlice,
                        client,
                    ]),
                )
            }
        }
    }

    return (
        <div className={s.clientList}>
            {selectModeOfClientsSlice &&
                filteredClients.map((client, key) => (
                    <div key={key}>
                        <Client
                            key={key}
                            client={client}
                            handleCheckboxChange={handleCheckboxChange}
                            selected={selectedClientsOfClientsSlice.includes(
                                client,
                            )}
                            selectMode={selectModeOfClientsSlice}
                        />
                    </div>
                ))}
            {!selectModeOfClientsSlice &&
                filteredClients.map((client, key) => (
                    <Client
                        key={key}
                        client={client}
                        handleCheckboxChange={handleCheckboxChange}
                        selected={selectedClientsOfClientsSlice.includes(
                            client,
                        )}
                        selectMode={selectModeOfClientsSlice}
                    />
                ))}
        </div>
    )
}
