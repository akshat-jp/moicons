import {motion} from "motion/react"
import { AlarmICON } from "@/icons/alarm";
import { ReactElement } from "react"
import { AdjustmentsHorizontalICON } from "@/icons/adjustments-horizontal";
import { AlertTriangleICON } from "@/icons/alert-triangle";
import { BoltICON } from "@/icons/bolt";
import { BookIcon } from "@/icons/book";

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
                <BookIcon />
            </div>
        ),
    }

    return previews[type];
}