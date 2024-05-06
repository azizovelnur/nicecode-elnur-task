import { FC } from 'react'
import * as s from './ClientProfileConsultations.module.scss'
import RecordIcon from '../../assets/images/recordIcon.svg'
import PeopleIcon from '../../assets/images/peopleIcon.svg'

export const ClientProfileConsultations: FC = () => {
    return (
        <div>
            <div className={s.consultation}>
                <div className={s.consultationContent}>
                    <div className={s.consultationContentIconActive}>
                        <RecordIcon color={'white'} />
                    </div>
                    <div className={s.consultationContentTextWrapper}>
                        <div className={s.consultationContentText}>
                            Online консультация
                        </div>
                        <div className={s.consultationContentDate}>
                            15.01.2019, 12:30-13:00
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.consultation}>
                <div className={s.consultationContent}>
                    <div className={s.consultationContentIcon}>
                        <RecordIcon color={'#616F82'} />
                    </div>
                    <div className={s.consultationContentTextWrapper}>
                        <div className={s.consultationContentText}>
                            Online консультация
                        </div>
                        <div className={s.consultationContentDate}>
                            15.01.2019, 12:30-13:00
                        </div>
                    </div>
                </div>
            </div>

            <div className={s.consultation}>
                <div className={s.consultationContent}>
                    <div className={s.consultationContentIcon}>
                        <PeopleIcon color={'#616F82'} />
                    </div>
                    <div className={s.consultationContentTextWrapper}>
                        <div className={s.consultationContentText}>
                            Личный приём
                        </div>
                        <div className={s.consultationContentDate}>
                            15.01.2019, 12:30-13:00
                        </div>
                    </div>
                </div>
                <div className={s.consultationNotConfirmedText}>
                    Не подтверждена
                </div>
            </div>
        </div>
    )
}
