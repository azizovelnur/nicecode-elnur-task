import React, { FC, useState } from 'react'
import * as s from './SearchClient.module.scss'
import { RootState } from '../../store/store'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { searchActiveR, searchClientR } from '../../store/slices/clientsSlice'
import CloseSearchIcon from '../../assets/images/closeIcon.svg'
import SearchIcon from '../../assets/images/SearchIcon.svg'

export const SearchClients: FC = () => {
    const { searchValueOfClientOfClientsSlice } = useAppSelector(
        (state: RootState) => state.clients,
    )
    const dispatch = useAppDispatch()

    return (
        <div className={s.searchClients}>
            <div className={s.searchClientsWrapper}>
                <input
                    className={s.searchClientsInput}
                    type="text"
                    value={searchValueOfClientOfClientsSlice}
                    onChange={(e) => dispatch(searchClientR(e.target.value))}
                />
                <div className={s.searchIcon}>
                    <SearchIcon width={'20'} height={'20'} color={'#616F82'} />
                </div>
            </div>
            <button
                className={s.closeSearchClients}
                onClick={() => dispatch(searchActiveR(false))}
            >
                <CloseSearchIcon color={'#616F82'} />
            </button>
        </div>
    )
}
