import { FC } from 'react'
import { SearchClients } from '../SeachClient/SearchClient'
import SearchIcon from '../../assets/images/SearchIcon.svg'
import * as s from './SearchBar.module.scss'

interface SearchBarProps {
    isSearchActive: boolean
    setIsSearchActive: (value: boolean) => void
    searchClient: string
    setSearchClient: (value: string) => void
}

export const SearchBar: FC<SearchBarProps> = ({
    isSearchActive,
    setIsSearchActive,
    searchClient,
    setSearchClient,
}) => {
    return (
        <div className={s.searchBar}>
            {!isSearchActive && (
                <>
                    <div>
                        <button
                            onClick={() => setIsSearchActive(true)}
                            className={s.searchIconWrapper}
                        >
                            <SearchIcon />
                        </button>
                    </div>
                    <div className={s.filterAndAdd}>
                        <button className={s.filterIconWrapper}>+</button>

                        <button className={s.filterIconAddHandler}>+</button>
                    </div>
                </>
            )}

            {isSearchActive && (
                <SearchClients
                    searchClient={searchClient}
                    setSearchClient={setSearchClient}
                    setIsSearchActive={setIsSearchActive}
                />
            )}
        </div>
    )
}
