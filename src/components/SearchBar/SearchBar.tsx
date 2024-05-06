import { FC, useState } from 'react'
import { SearchClients } from '../SeachClient/SearchClient'
import SearchIcon from '../../assets/images/SearchIcon.svg'
import * as s from './SearchBar.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { RootState } from '../../store/store'
import { searchActiveR } from '../../store/slices/clientsSlice'
import FilterIcon from '../../assets/images/Filter.svg'
import AddIcon from '../../assets/images/addIcon.svg'

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
                            <SearchIcon
                                width={'20'}
                                height={'20'}
                                color={'#616F82'}
                            />
                        </button>
                    </div>
                    <div className={s.filterAndAdd}>
                        <button className={s.filterIconWrapper}>
                            <FilterIcon color={'#616F82'} />
                        </button>

                        <button className={s.filterIconAddHandler}>
                            <AddIcon color={'#616F82'} />
                        </button>
                    </div>
                </>
            ) : (
                <SearchClients />
            )}
        </div>
    )
}
