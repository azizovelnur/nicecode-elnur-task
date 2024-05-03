import { FC } from 'react'
import * as s from './ClientsManipulationControls.module.scss'
import { IClient } from '../../types/types'
import { EditDropDownClient } from '../EditDropDownClient/EditDropDownClient'

interface ClientsManipulationControlsProps {
    selectMode: boolean
    selectedClients: IClient[]
    clients: IClient[]
    selectAllClients: () => void
    toggleSelectMode: () => void
}

export const ClientsManipulationControls: FC<
    ClientsManipulationControlsProps
> = ({
    selectMode,
    selectedClients,
    clients,
    selectAllClients,
    toggleSelectMode,
}) => {
    return (
        <>
            {selectMode ? (
                <div className={s.clientsManipulationControls}>
                    <div>
                        <label className={s.selectClientsActive}>
                            <input
                                className={s.selectClientsCheckBox}
                                type="checkbox"
                                readOnly
                                checked={
                                    selectedClients.length === clients.length
                                }
                            />
                            <div
                                className={s.allClientsCheckBoxText}
                                onClick={selectAllClients}
                            >
                                Все
                            </div>
                            <div className={s.numberOfSelectedUsers}>
                                {selectedClients.length}
                            </div>
                        </label>
                    </div>

                    <div className={s.actionsOfSelectClientsActive}>
                        <EditDropDownClient />
                        <div
                            className={s.cancelSelect}
                            onClick={toggleSelectMode}
                        >
                            Отменить
                        </div>
                    </div>
                </div>
            ) : (
                <div className={s.clientsManipulationControls}>
                    <div className={s.numberOfUsers}>{clients.length}</div>
                    <div className={s.selectBtn} onClick={toggleSelectMode}>
                        Выбрать
                    </div>
                </div>
            )}
        </>
    )
}
