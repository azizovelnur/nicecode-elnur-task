import React, { FC, useState } from 'react'
import * as s from './SearchClient.module.scss'
import { RootState } from '../../store/store'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { searchActiveR, searchClientR } from '../../store/slices/clientsSlice'

export const SearchClients: FC = () => {
    const { searchValueOfClientOfClientsSlice } = useAppSelector(
        (state: RootState) => state.clients,
    )
    const dispatch = useAppDispatch()

    return (
        <div className={s.searchClients}>
            <div>
                <input
                    className={s.searchClientsInput}
                    type="text"
                    value={searchValueOfClientOfClientsSlice}
                    onChange={(e) => dispatch(searchClientR(e.target.value))}
                />
            </div>
            <button
                className={s.closeSearchClients}
                onClick={() => dispatch(searchActiveR(false))}
            >
                -
            </button>
        </div>
    )
}
