import { FC } from 'react'
import { SearchBar } from '../SearchBar/SearchBar'
import { ClientsManipulationControls } from '../ClientsManipulationControls/ClientsManipulationControls'
import { ClientsList } from '../ClientsList/ClientsList'
import * as s from './Clients.module.scss'

export const Clients: FC = () => {
    return (
        <section className={s.clients}>
            <SearchBar />
            <ClientsManipulationControls />
            <ClientsList />
        </section>
    )
}
