import React, { FC } from 'react'
import * as s from './ClientProfileNotes.module.scss'

import DetailsIcon from '../../assets/images/detailsIcon.svg'
import MapIcon from '../../assets/images/mapImg.png'
export const ClientProfileNotes: FC = () => {
    return (
        <div className={s.clientProfileNotes}>
            <div className={s.clientProfileNote}>
                <div className={s.notePost}>
                    <span className={s.date}>20.12.2019</span> Физические
                    упражнения способствуют активизации мышечных сокращений,
                    кровотока в тканях, снимают отечность, повышают
                    энергетические возможности мышц. Улучшенное питание мышечной
                    ткани ускоряет замещение различных посттравматических
                    дефектов в самих мышцах, костной ткани, связках и
                    сухожилиях.
                </div>

                <div className={s.notePostDetails}>
                    <DetailsIcon />
                </div>
            </div>

            <div className={s.clientProfileNote}>
                <div className={s.notePost}>
                    <span className={s.date}>20.12.2019</span> Улучшенное
                    питание мышечной ткани ускоряет замещение различных
                    посттравматических дефектов в самих мышцах, костной ткани,
                    связках и сухожилиях.
                    <div>
                        <img className={s.mapIcon} src={MapIcon} alt="" />
                    </div>
                </div>
                <div className={s.notePostDetails}>
                    <DetailsIcon />
                </div>
            </div>
        </div>
    )
}
