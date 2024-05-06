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
        {
            id: 1,
            surname: 'Кравцова',
            name: 'Александра',
            patronymic: 'Алексеевна',
            imgUrl: '/images/1.png',
            age: 24,
            gender: 'женщина',
            notificationMessageIcon: '/images/telegramIcon.svg',
        },
        {
            id: 2,
            surname: 'Рожков',
            name: 'Денис',
            patronymic: 'Петрович',
            imgUrl: '/images/2.png',
            age: 30,
            gender: 'мужчина',
        },
        {
            id: 3,
            surname: 'Кравцова',
            name: 'Александра',
            patronymic: 'Тестовна',
            imgUrl: '/images/3.png',
            age: 30,
            gender: 'женщина',
            notificationAlertIcon: '/images/alertIcon.svg',
        },
        {
            id: 4,
            surname: 'Диброва',
            name: 'Алевтина',
            imgUrl: '/images/4.png',
            patronymic: 'Тестовна',
            age: 34,
            gender: 'женщина',
        },
        {
            id: 5,
            surname: 'Иванов',
            name: 'Дмитрий',
            patronymic: 'Тестович',
            imgUrl: '/images/5.png',
            age: 30,
            gender: 'мужчина',
        },
        {
            id: 6,
            surname: '',
            name: 'nosikov@list.ru',
            patronymic: 'Тестович',
            imgUrl: '/images/6.png',
            age: 30,
            gender: 'мужчина',
        },
        {
            id: 7,
            surname: 'Форс ',
            name: 'Александр',
            patronymic: 'Тестович',
            imgUrl: '/images/7.png',
            age: 30,
            gender: 'мужчина',
        },
        {
            id: 8,
            surname: 'Ахмедов',
            name: 'Артур',
            patronymic: 'Тестович',
            imgUrl: '/images/8.png',
            age: 30,
            gender: 'мужчина',
        },
        {
            id: 9,
            surname: 'Блажевич',
            name: 'Игорь',
            patronymic: 'Тестович',
            imgUrl: '/images/9.png',
            age: 30,
            gender: 'мужчина',
        },
        {
            id: 10,
            surname: 'Валиева',
            name: 'Руфина',
            patronymic: 'Тестовна',
            imgUrl: '/images/10.png',
            age: 23,
            gender: 'женщина',
        },
        {
            id: 11,
            surname: 'Волошина',
            name: 'Виктория',
            patronymic: 'Тестовна',
            imgUrl: '/images/11.png',
            age: 24,
            gender: 'женщина',
        },
        {
            id: 12,
            surname: 'Волошина',
            name: 'Виктория',

            patronymic: 'Тестовна',
            imgUrl: '/images/12.png',
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
