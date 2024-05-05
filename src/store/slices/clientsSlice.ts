import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IClient } from '../../types/types'

interface ClientsState {
    clientsDataOfClientsSlice: IClient[]
    selectedClientsOfClientsSlice: IClient[]
    searchValueOfClientOfClientsSlice: string
    selectModeOfClientsSlice: boolean
    searchActiveOfClientsSlice: boolean
}

const initialState: ClientsState = {
    clientsDataOfClientsSlice: [
        { id: 1, name: 'Кравцова Александра', imgUrl: 'url1' },
        { id: 2, name: 'Рожков Денис', imgUrl: 'url2' },
        { id: 3, name: 'Кравцова Александра', imgUrl: 'url3' },
        { id: 4, name: 'Диброва Алевтина', imgUrl: 'url4' },
        { id: 5, name: 'Иванов Дмитрий', imgUrl: 'url5' },
        { id: 6, name: 'nosikov@list.ru', imgUrl: 'url6' },
        { id: 7, name: 'Форс Александр', imgUrl: 'url7' },
        { id: 8, name: 'Ахмедов Артур', imgUrl: 'url8' },
        { id: 9, name: 'Блажевич Игорь', imgUrl: 'url9' },
        { id: 10, name: 'Валиева Руфина', imgUrl: 'url10' },
        { id: 11, name: 'Волошина Виктория', imgUrl: 'url11' },
        { id: 12, name: 'Волошина Виктория', imgUrl: 'url12' },
    ],
    selectedClientsOfClientsSlice: [],
    searchValueOfClientOfClientsSlice: '',
    selectModeOfClientsSlice: false,
    searchActiveOfClientsSlice: false,
}

const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        selectedClientsR(state, action: PayloadAction<IClient[]>) {
            state.selectedClientsOfClientsSlice = action.payload
        },
        searchClientR(state, action: PayloadAction<string>) {
            state.searchValueOfClientOfClientsSlice = action.payload
        },
        selectModeR(state, action: PayloadAction<boolean>) {
            state.selectModeOfClientsSlice = action.payload
        },
        searchActiveR(state, action: PayloadAction<boolean>) {
            state.searchActiveOfClientsSlice = action.payload
        },
    },
})

export const { selectedClientsR, searchActiveR, selectModeR, searchClientR } =
    clientsSlice.actions

export default clientsSlice.reducer
