import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IClient } from '../../types/types'

import ClientPicture1 from '../../assets/images/1.png'
import ClientPicture2 from '../../assets/images/2.png'
import ClientPicture3 from '../../assets/images/3.png'
import ClientPicture4 from '../../assets/images/4.png'
import ClientPicture5 from '../../assets/images/5.png'
import ClientPicture6 from '../../assets/images/6.png'
import ClientPicture7 from '../../assets/images/7.png'
import ClientPicture8 from '../../assets/images/8.png'
import ClientPicture9 from '../../assets/images/9.png'
import ClientPicture10 from '../../assets/images/10.png'
import ClientPicture11 from '../../assets/images/11.png'
import ClientPicture12 from '../../assets/images/12.png'

interface ClientsState {
    clientsDataOfClientsSlice: IClient[]
    selectedClientsOfClientsSlice: IClient[]
    searchValueOfClientOfClientsSlice: string
    selectModeOfClientsSlice: boolean
    searchActiveOfClientsSlice: boolean
}

const initialState: ClientsState = {
    clientsDataOfClientsSlice: [
        {
            id: 1,
            surname: 'Кравцова',
            name: 'Александра',
            patronymic: 'Алексеевна',
            imgUrl: ClientPicture1,
            age: 24,
            gender: 'женщина',
        },
        {
            id: 2,
            surname: 'Рожков',
            name: 'Денис',
            patronymic: 'Петрович',
            imgUrl: ClientPicture2,
            age: 30,
            gender: 'мужчина',
        },
        {
            id: 3,
            surname: 'Кравцова',
            name: 'Александра',
            patronymic: 'Тестовна',
            imgUrl: ClientPicture3,
            age: 30,
            gender: 'женщина',
        },
        {
            id: 4,
            surname: 'Диброва',
            name: 'Алевтина',
            imgUrl: ClientPicture4,
            patronymic: 'Тестовна',
            age: 34,
            gender: 'женщина',
        },
        {
            id: 5,
            surname: 'Иванов',
            name: 'Дмитрий',
            patronymic: 'Тестович',
            imgUrl: ClientPicture5,
            age: 30,
            gender: 'мужчина',
        },
        {
            id: 6,
            surname: '',
            name: 'nosikov@list.ru',
            patronymic: 'Тестович',
            imgUrl: ClientPicture6,
            age: 30,
            gender: 'мужчина',
        },
        {
            id: 7,
            surname: 'Форс ',
            name: 'Александр',
            patronymic: 'Тестович',
            imgUrl: ClientPicture7,
            age: 30,
            gender: 'мужчина',
        },
        {
            id: 8,
            surname: 'Ахмедов',
            name: 'Артур',
            patronymic: 'Тестович',
            imgUrl: ClientPicture8,
            age: 30,
            gender: 'мужчина',
        },
        {
            id: 9,
            surname: 'Блажевич',
            name: 'Игорь',
            patronymic: 'Тестович',
            imgUrl: ClientPicture9,
            age: 30,
            gender: 'мужчина',
        },
        {
            id: 10,
            surname: 'Валиева',
            name: 'Руфина',
            patronymic: 'Тестовна',
            imgUrl: ClientPicture10,
            age: 23,
            gender: 'женщина',
        },
        {
            id: 11,
            surname: 'Волошина',
            name: 'Виктория',
            patronymic: 'Тестовна',
            imgUrl: ClientPicture11,
            age: 24,
            gender: 'женщина',
        },
        {
            id: 12,
            surname: 'Волошина',
            name: 'Виктория',

            patronymic: 'Тестовна',
            imgUrl: ClientPicture12,
            age: 19,
            gender: 'женщина',
        },
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
