import * as s from './Home.module.scss'

import React, { useState, useEffect, FC, useRef } from 'react'
import { IClient } from '../../types/types'
import { ClientsList } from '../../components/ClientsList/ClientsList'
import { ClientsManipulationControls } from '../../components/ClientsManipulationControls/ClientsManipulationControls'
import { SearchBar } from '../../components/SearchBar/SearchBar'

export const Home: FC = () => {
    const [clients, setClients] = useState<IClient[]>(() => {
        const savedClients = localStorage.getItem('clients')
        return savedClients
            ? JSON.parse(savedClients)
            : [
                  { name: 'Кравцова Александра', imgUrl: 'url1' },
                  { name: 'Рожков Денис', imgUrl: 'url2' },
                  { name: 'Кравцова Александра', imgUrl: 'url3' },
                  { name: 'Диброва Алевтина', imgUrl: 'url4' },
                  { name: 'Иванов Дмитрий', imgUrl: 'url5' },
                  { name: 'nosikov@list.ru', imgUrl: 'url6' },
                  { name: 'Форс Александр', imgUrl: 'url7' },
                  { name: 'Ахмедов Артур', imgUrl: 'url8' },
                  { name: 'Блажевич Игорь', imgUrl: 'url9' },
                  { name: 'Валиева Руфина', imgUrl: 'url10' },
                  { name: 'Волошина Виктория', imgUrl: 'url11' },
                  { name: 'Волошина Виктория', imgUrl: 'url12' },
              ]
    })

    const [selectedClients, setSelectedClients] = useState<IClient[]>([])
    const [searchClient, setSearchClient] = useState<string>('')
    const [selectMode, setSelectMode] = useState<boolean>(false)
    const [isSearchActive, setIsSearchActive] = useState<boolean>(false)

    useEffect(() => {
        localStorage.setItem('clients', JSON.stringify(clients))
    }, [clients])

    const handleCheckboxChange = (client: IClient) => {
        if (selectMode) {
            if (selectedClients.includes(client)) {
                setSelectedClients(selectedClients.filter((c) => c !== client))
            } else {
                setSelectedClients([...selectedClients, client])
            }
        }
    }

    const toggleSelectMode = () => {
        setSelectMode(!selectMode)
    }

    const selectAllClients = () => {
        if (selectedClients.length === clients.length) {
            setSelectedClients([])
        } else {
            setSelectedClients([...clients])
        }
    }

    const filteredClients = clients.filter((client) =>
        client.name.toLowerCase().includes(searchClient.toLowerCase()),
    )

    return (
        <main className={s.app}>
            <section className={s.clients}>
                <SearchBar
                    isSearchActive={isSearchActive}
                    setIsSearchActive={setIsSearchActive}
                    searchClient={searchClient}
                    setSearchClient={setSearchClient}
                />

                <ClientsManipulationControls
                    clients={clients}
                    selectAllClients={selectAllClients}
                    selectMode={selectMode}
                    selectedClients={selectedClients}
                    toggleSelectMode={toggleSelectMode}
                />

                <ClientsList
                    filteredClients={filteredClients}
                    handleCheckboxChange={handleCheckboxChange}
                    selectMode={selectMode}
                    selectedClients={selectedClients}
                />
            </section>
            <section className={s.clientProfile}>2</section>
        </main>
    )
}
