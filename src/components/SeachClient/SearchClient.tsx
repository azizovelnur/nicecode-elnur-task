import React, { FC, useState } from 'react'
import * as s from './SearchClient.module.scss'

interface SearchClientsProps {
    searchClient: string
    setSearchClient: (isActive: string) => void
    setIsSearchActive: (isActive: boolean) => void
}

export const SearchClients: FC<SearchClientsProps> = ({
    searchClient,
    setSearchClient,
    setIsSearchActive,
}) => {
    return (
        <div className={s.searchClients}>
            <div>
                <input
                    className={s.searchClientsInput}
                    type="text"
                    value={searchClient}
                    onChange={(e) => setSearchClient(e.target.value)}
                />
            </div>
            <button
                className={s.closeSearchClients}
                onClick={() => setIsSearchActive(false)}
            >
                -
            </button>
        </div>
    )
}
