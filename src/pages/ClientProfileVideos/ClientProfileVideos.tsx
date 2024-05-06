import React, { FC } from 'react'
import * as s from './ClientProfileVideos.module.scss'
import FirstVideoImg from '../../assets/images/firstVideoPicture.png'
import SecondVideoImg from '../../assets/images/secondVideoPicture.png'
import ThirdVideoImg from '../../assets/images/thirdVideoPicture.png'

export const ClientProfileVideos: FC = () => {
    return (
        <div>
            <div className={s.videos}>
                <div className={s.videosContent}>
                    <div className={s.videosContentWrapper}>
                        <img
                            className={s.videosContentImg}
                            src={FirstVideoImg}
                            alt=""
                        />
                    </div>
                    <div className={s.videosContentTextWrapper}>
                        <div className={s.videosContentText}>
                            {' '}
                            Крабик, ходьба в бок в приседе с двумя резинками
                            Кра…
                        </div>
                        <div className={s.videosContentAuthor}>
                            Астахова Е.В.
                        </div>
                    </div>
                </div>
            </div>

            <div className={s.videos}>
                <div className={s.videosContent}>
                    <div className={s.videosContentWrapper}>
                        <img
                            className={s.videosContentImg}
                            src={SecondVideoImg}
                            alt=""
                        />
                    </div>
                    <div className={s.videosContentTextWrapper}>
                        <div className={s.videosContentText}>
                            Разминка для локтевого сустава
                        </div>
                        <div className={s.videosContentAuthor}>
                            Астахова Е.В.
                        </div>
                    </div>
                </div>
                <div className={s.videosContentDate}>
                    15.01.2019 - 22.01.2019
                </div>
            </div>
            <div className={s.videos}>
                <div className={s.videosContent}>
                    <div className={s.videosContentWrapper}>
                        <img
                            className={s.videosContentImg}
                            src={ThirdVideoImg}
                            alt=""
                        />
                    </div>
                    <div className={s.videosContentTextWrapper}>
                        <div className={s.videosContentText}>
                            Разминка для локтевого суставаРазминка для
                            локтевого..
                        </div>
                        <div className={s.videosContentAuthor}>
                            Астахова Е.В.
                        </div>
                    </div>
                </div>
                <div className={s.videosContentDate}>
                    15.01.2019 - 22.01.2019
                </div>
            </div>
        </div>
    )
}
