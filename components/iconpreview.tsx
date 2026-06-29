import {motion} from "motion/react"
import { AlarmICON } from "@/icons/alarm";
import { ReactElement } from "react"
import { AdjustmentsHorizontalICON } from "@/icons/adjustments-horizontal";
import { AlertTriangleICON } from "@/icons/alert-triangle";
import { BoltICON } from "@/icons/bolt";
import { BookICON } from "@/icons/book";
import { CheckICON } from "@/icons/check";
import { CircleCheckICON } from "@/icons/circle-check";
import { ClockICON } from "@/icons/clock";
import { CopyICON } from "@/icons/copy";
import { CrossICON } from "@/icons/cross";
import { DeviceMobileICON } from "@/icons/device-mobile";

export default function IconPreview({type} : any){

    const base = ` bg-red-200 size-20 rounded-lg flex items-center justify-center`

    const previews : Record<string, ReactElement> = {
        adjustmentshorizontal:(
            <div className={base}>
                <AdjustmentsHorizontalICON />
            </div>
        ),
        alarmicon:(
            <div className={base}>
                <AlarmICON />
            </div>
        ),
        alerttriangle:(
            <div className={base}>
                <AlertTriangleICON />
            </div>
        ),
        bolticon:(
            <div className={base}>
                <BoltICON />
            </div>
        ),
        bookicon:(
            <div className={base}>
                <BookICON />
            </div>
        ),
        checkicon:(
            <div className={base}>
                <CheckICON />
            </div>
        ),
        circlecheckicon:(
            <div className={base}>
                <CircleCheckICON />
            </div>
        ),
        clockicon:(
            <div className={base}>
                <ClockICON />
            </div>
        ),
        copyicon:(
            <div className={base} >
                <CopyICON />
            </div>
        ),
        crossicon:(
            <div className={base}>
                <CrossICON />
            </div>
        ),
        devicemobile:(
            <div className={base}>
                <DeviceMobileICON />
            </div>
        )

    }

    return previews[type];
}