import { FC, useState } from 'react'
import { SearchClients } from '../SeachClient/SearchClient'
import SearchIcon from '../../assets/images/SearchIcon.svg'
import * as s from './SearchBar.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { RootState } from '../../store/store'
import { searchActiveR } from '../../store/slices/clientsSlice'

export const SearchBar: FC = () => {
    const { searchActiveOfClientsSlice } = useAppSelector(
        (state: RootState) => state.clients,
    )
    const dispatch = useAppDispatch()

    return (
        <div className={s.searchBar}>
            {!searchActiveOfClientsSlice ? (
                <>
                    <div>
                        <button
                            onClick={() => dispatch(searchActiveR(true))}
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
            ) : (
                <SearchClients />
            )}
        </div>
    )
}
