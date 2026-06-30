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
import { DiscountCheckICON } from "@/icons/discount-check";
import { DotsHorizontalICONS } from "@/icons/dots-horizontal";
import { DotsVerticalICONS } from "@/icons/dots-vertical";
import { ArrowDownICON } from "@/icons/down-arrow";
import { ArrowLeftICON } from "@/icons/left-arrow";
import { ArrowRightICON } from "@/icons/right-arrow";
import { ArrowUpICON } from "@/icons/up-arrow";
import { DownloadICON } from "@/icons/download";
import { EditICON } from "@/icons/edit";
import { ExternalLinkICON } from "@/icons/external-link";
import { EyeICON } from "@/icons/eye";
import { FileDescriptionICON } from "@/icons/file-description";
import { FileICON } from "@/icons/file";
import { FlameICON } from "@/icons/flame";
import { FolderICON } from "@/icons/folder";
import { HeartICON } from "@/icons/heart";
import { HomeICON } from "@/icons/home";
import { InfoCircleICON } from "@/icons/info-circle";
import { ListICON } from "@/icons/list";
import { LockICON } from "@/icons/lock";
import { LogoutICON } from "@/icons/logout";
import { MailICON } from "@/icons/mail";
import { MapPinICON } from "@/icons/map-pin";

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
        ),
        discountcheckicon:(
            <div className={base}>
                <DiscountCheckICON />
            </div>
        ),
        dotshorizontalicon:(
            <div className={base}>
                <DotsHorizontalICONS />
            </div>
        ),
        dotsverticalicon:(
            <div className={base}>
                <DotsVerticalICONS />
            </div>
        ),
        arrowdownicon:(
            <div className={base}>
                <ArrowDownICON />
            </div>
        ),
        arrowlefticon:(
            <div className={base}>
                <ArrowLeftICON />
            </div>
        ),
        arrowrighticon:(
            <div className={base}>
                <ArrowRightICON />
            </div>
        ),
        arrowupicon:(
            <div className={base}>
                <ArrowUpICON />
            </div>
        ),
        downloadicon:(
            <div className={base}>
                <DownloadICON />
            </div>
        ),
        editicon:(
            <div className={base}>
                <EditICON />
            </div>
        ),
        externallinkicon:(
            <div className={base}>
                <ExternalLinkICON />
            </div>
        ),
        eyeicon:(
            <div className={base}>
                <EyeICON />
            </div>
        ),
        filedescriptionicon:(
            <div className={base}>
                <FileDescriptionICON />
            </div>
        ),
        fileicon:(
            <div className={base}>
                <FileICON />
            </div>
        ),
        flameicon:(
            <div className={base}>
                <FlameICON />
            </div>
        ),
        foldericon:(
            <div className={base}>
                <FolderICON />
            </div>
        ),
        hearticon:(
            <div className={base}>
                <HeartICON />
            </div>
        ),
        homeicon:(
            <div className={base}>
                <HomeICON />
            </div>
        ),
        infocircleicon:(
            <div className={base}>
                <InfoCircleICON />
            </div>
        ),
        listicon:(
            <div className={base}>
                <ListICON />
            </div>
        ),
        linkicon:(
            <div className={base}>
                
            </div>
        ),
        lockicon:(
            <div className={base}>
                <LockICON />
            </div>
        ),
        logouticon:(
            <div className={base}>
                <LogoutICON />
            </div>
        ),
        mailicon:(
            <div className={base}>
                <MailICON />
            </div>
        ),
        mappinicon:(
            <div className={base}>
                <MapPinICON />
            </div>
        ),
        menuicon:(
            <div className={base}>
                
            </div>
        ),
        messagecircleicon:(
            <div className={base}>
                
            </div>
        )

    }

    return previews[type];
}