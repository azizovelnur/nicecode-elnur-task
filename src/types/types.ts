export interface IClient {
    id: number
    name: string
    imgUrl: string
    age: number
    gender: string
    surname: string
    patronymic: string
}

export interface IClientProps {
    client: IClient
    selected: boolean
    handleCheckboxChange: (client: IClient) => void
    selectMode: boolean
}
