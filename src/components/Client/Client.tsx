import { FC } from 'react'
import { IClientProps } from '../../types/types'

import * as s from './Client.module.scss'

export const Client: FC<IClientProps> = ({
    client,
    handleCheckboxChange,
    selected,
    selectMode,
}) => {
    return (
        <div className={s.client}>
            {selectMode && (
                <input
                    type="checkbox"
                    checked={selected}
                    onChange={() => handleCheckboxChange(client)}
                />
            )}
            <div className={s.clientPicture}></div>
            <div className={s.clientName}>{client.name}</div>
        </div>
    )
}
