export interface IClient {
    name: string
    imgUrl: string
}

export interface IClientProps {
    client: IClient
    selected: boolean
    handleCheckboxChange: (client: IClient) => void
    selectMode: boolean
}
