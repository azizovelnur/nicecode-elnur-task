import { FC } from 'react'
import * as s from './ClientsManipulationControls.module.scss'
import { EditDropDownClient } from '../EditDropDownClient/EditDropDownClient'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { RootState } from '../../store/store'
import { selectModeR, selectedClientsR } from '../../store/slices/clientsSlice'

export const ClientsManipulationControls: FC = () => {
    const dispatch = useAppDispatch()
    const {
        selectModeOfClientsSlice,
        clientsDataOfClientsSlice,
        selectedClientsOfClientsSlice,
    } = useAppSelector((state: RootState) => state.clients)

    const toggleSelectMode = () => {
        dispatch(selectModeR(!selectModeOfClientsSlice))
    }

    const selectAllClients = () => {
        if (
            selectedClientsOfClientsSlice.length ===
            clientsDataOfClientsSlice.length
        ) {
            dispatch(selectedClientsR([]))
        } else {
            dispatch(selectedClientsR([...clientsDataOfClientsSlice]))
        }
    }
    return (
        <>
            {selectModeOfClientsSlice ? (
                <div className={s.clientsManipulationControls}>
                    <div>
                        <label className={s.selectClientsActive}>
                            <input
                                className={s.selectClientsCheckBox}
                                type="checkbox"
                                readOnly
                                checked={
                                    selectedClientsOfClientsSlice.length ===
                                    clientsDataOfClientsSlice.length
                                }
                            />
                            <div
                                className={s.allClientsCheckBoxText}
                                onClick={selectAllClients}
                            >
                                Все
                            </div>
                            <div className={s.numberOfSelectedUsers}>
                                {selectedClientsOfClientsSlice.length}
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
                    <div className={s.numberOfUsers}>
                        {clientsDataOfClientsSlice.length}
                    </div>
                    <div className={s.selectBtn} onClick={toggleSelectMode}>
                        Выбрать
                    </div>
                </div>
            )}
        </>
    )
}
