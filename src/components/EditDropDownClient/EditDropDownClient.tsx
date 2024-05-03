import { FC, useEffect, useRef, useState } from 'react'
import * as s from './EditDropDownClient.module.scss'

export const EditDropDownClient: FC = () => {
    const dropdownRef = useRef<HTMLDivElement>(null)
    const [isOpenDD, setIsOpenDD] = useState<boolean>(false)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !event.composedPath().includes(dropdownRef.current)
            ) {
                setIsOpenDD(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])
    return (
        <div
            ref={dropdownRef}
            className={s.actionsButton}
            onClick={() => setIsOpenDD(true)}
        >
            Действия
            <div>
                {isOpenDD && (
                    <div className={s.actionsButton__dropdown}>
                        <div className={s.changeHandler}>Изменить</div>
                        <div className={s.deleteHandler}>Удалить</div>
                    </div>
                )}
            </div>
        </div>
    )
}
