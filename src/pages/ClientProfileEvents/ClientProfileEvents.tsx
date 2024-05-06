import React, { FC } from 'react'

import * as s from './ClientProfileEvents.module.scss'
import EventImg from '../../assets/images/eventIcon.png'
import WebinarIcon from '../../assets/images/webinarIcon.svg'
import CalendarIcon from '../../assets/images/calendarIcon.svg'
import TimeIcon from '../../assets/images/timeIcon.svg'

export const ClientProfileEvents: FC = () => {
    return (
        <div>
            <div className={s.events}>
                <div className={s.eventsContent}>
                    <div className={s.eventsContentWrapper}>
                        <img
                            className={s.eventsContentImg}
                            src={EventImg}
                            alt=""
                        />
                    </div>
                    <div className={s.eventsContentTextWrapper}>
                        <div className={s.eventsContentText}>
                            Тяга резинки в шаге со сгибанием локтя под 90
                            градусов
                        </div>
                        <div className={s.eventsContentInfo}>
                            <div className={s.eventsContentInfoElement1}>
                                <div className={s.eventsContentInfoElementIcon}>
                                    <WebinarIcon color={'#4198C5'} />
                                </div>
                                <div>Вебинар</div>
                            </div>
                            <div className={s.eventsContentInfoElement2}>
                                <div className={s.eventsContentInfoElementIcon}>
                                    <CalendarIcon color={'#4198C5'} />
                                </div>
                                <div>9 марта 2021</div>
                            </div>
                            <div className={s.eventsContentInfoElement3}>
                                <div className={s.eventsContentInfoElementIcon}>
                                    <TimeIcon color={'#4198C5'} />
                                </div>
                                <div>17:00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={s.events}>
                <div className={s.eventsContent}>
                    <div className={s.eventsContentWrapper}>
                        <img
                            className={s.eventsContentImg}
                            src={EventImg}
                            alt=""
                        />
                    </div>
                    <div className={s.eventsContentTextWrapper}>
                        <div className={s.eventsContentText}>
                            Тяга резинки в шаге со сгибанием локтя под 90
                            градусов
                        </div>
                        <div className={s.eventsContentInfo}>
                            <div className={s.eventsContentInfoElement1}>
                                <div className={s.eventsContentInfoElementIcon}>
                                    <WebinarIcon color={'#4198C5'} />
                                </div>
                                <div>Вебинар</div>
                            </div>
                            <div className={s.eventsContentInfoElement2}>
                                <div className={s.eventsContentInfoElementIcon}>
                                    <CalendarIcon color={'#4198C5'} />
                                </div>
                                <div>9 марта 2021</div>
                            </div>
                            <div className={s.eventsContentInfoElement3}>
                                <div className={s.eventsContentInfoElementIcon}>
                                    <TimeIcon color={'#4198C5'} />
                                </div>
                                <div>17:00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={s.events}>
                <div className={s.eventsContent}>
                    <div className={s.eventsContentWrapper}>
                        <img
                            className={s.eventsContentImg}
                            src={EventImg}
                            alt=""
                        />
                    </div>
                    <div className={s.eventsContentTextWrapper}>
                        <div className={s.eventsContentText}>
                            Тяга резинки в шаге со сгибанием локтя под 90
                            градусов
                        </div>
                        <div className={s.eventsContentInfo}>
                            <div className={s.eventsContentInfoElement1}>
                                <div className={s.eventsContentInfoElementIcon}>
                                    <WebinarIcon color={'#4198C5'} />
                                </div>
                                <div>Вебинар</div>
                            </div>
                            <div className={s.eventsContentInfoElement2}>
                                <div className={s.eventsContentInfoElementIcon}>
                                    <CalendarIcon color={'#4198C5'} />
                                </div>
                                <div>9 марта 2021</div>
                            </div>
                            <div className={s.eventsContentInfoElement3}>
                                <div className={s.eventsContentInfoElementIcon}>
                                    <TimeIcon color={'#4198C5'} />
                                </div>
                                <div>17:00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={s.events}>
                <div className={s.eventsContent}>
                    <div className={s.eventsContentWrapper}>
                        <img
                            className={s.eventsContentImg}
                            src={EventImg}
                            alt=""
                        />
                    </div>
                    <div className={s.eventsContentTextWrapper}>
                        <div className={s.eventsContentText}>
                            Тяга резинки в шаге со сгибанием локтя под 90
                            градусов
                        </div>
                        <div className={s.eventsContentInfo}>
                            <div className={s.eventsContentInfoElement1}>
                                <div className={s.eventsContentInfoElementIcon}>
                                    <WebinarIcon color={'#4198C5'} />
                                </div>
                                <div>Вебинар</div>
                            </div>
                            <div className={s.eventsContentInfoElement2}>
                                <div className={s.eventsContentInfoElementIcon}>
                                    <CalendarIcon color={'#4198C5'} />
                                </div>
                                <div>9 марта 2021</div>
                            </div>
                            <div className={s.eventsContentInfoElement3}>
                                <div className={s.eventsContentInfoElementIcon}>
                                    <TimeIcon color={'#4198C5'} />
                                </div>
                                <div>17:00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
