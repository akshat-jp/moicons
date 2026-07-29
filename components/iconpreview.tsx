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
import { LinkICON } from "@/icons/link";
import { MenuICON } from "@/icons/menu";
import { MessageCircleICON } from "@/icons/message-circle";
import { MessageICON } from "@/icons/message";
import { MoonICON } from "@/icons/moon";
import { PencilICON } from "@/icons/pencil";
import { PhoneICON } from "@/icons/phone";
import { PlusICON } from "@/icons/plus";
import { RefreshICON } from "@/icons/refresh";
import { SearchICON } from "@/icons/search";
import { SendICON } from "@/icons/send";
import { SettingsICON } from "@/icons/settings";
import { ShoppingCartICON } from "@/icons/shopping-cart";
import { StarICON } from "@/icons/star";
import { SunICON } from "@/icons/sun";
import { TrashICON } from "@/icons/trash";
import { UserPlusICON } from "@/icons/user-plus";
import { UserICON } from "@/icons/user";
import { UserCircleICON } from "@/icons/usercircle";
import { UsersICON } from "@/icons/users";
import { WorldICON } from "@/icons/world";
import { UploadICON } from "@/icons/upload";
import { EyeOffICON } from "@/icons/eye-off";
import { XboxXICON } from "@/icons/xbox-x";
import { ShieldICON } from "@/icons/shield";
import { TrendingUpICON } from "@/icons/trending-up";
import { TrendingDownICON } from "@/icons/trending-down";
import { CategoryICON } from "@/icons/category";
import { VideoICON } from "@/icons/video";
import { HistoryICON } from "@/icons/history";
import { ToolICON } from "@/icons/tool";
import { CodeICON } from "@/icons/code";
import { ShareICON } from "@/icons/share";
import { BookmarkICON } from "@/icons/bookmark";
import { PinICON } from "@/icons/pin";
import { CancelICON } from "@/icons/cancel";
import { FlagICON } from "@/icons/flag";
import { CloudICON } from "@/icons/cloud";
import { CurrencyDollarICON } from "@/icons/currency-dollar";
import { WifiICON } from "@/icons/wifi";
import { PaperclipICON } from "@/icons/paperclip";
import { AdjustmentsVerticalICON } from "@/icons/adjustments-vertical";
import { LoaderICON } from "@/icons/loader";
import { VolumeICON } from "@/icons/volume";
import { Share2ICON } from "@/icons/share2";
import { MusicICON } from "@/icons/music";

export default function IconPreview({type} : any){

    const base = `size-20 rounded-lg flex items-center justify-center `

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
                <LinkICON />
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
                <MenuICON />
            </div>
        ),
        messagecircleicon:(
            <div className={base}>
                <MessageCircleICON />
            </div>
        ),
        messageicon:(
            <div className={base}>
                <MessageICON />
            </div>
        ),
        moonicon:(
            <div className={base}>
                <MoonICON />
            </div>
        ),
        pencilicon:(
            <div className={base}>
                <PencilICON />
            </div>
        ),
        phoneicon:(
            <div className={base}>
                <PhoneICON />
            </div>
        ),
        plusicon:(
            <div className={base}>
                <PlusICON />
            </div>
        ),
        refreshicon:(
            <div className={base}>
                <RefreshICON />
            </div>
        ),
        searchicon:(
            <div className={base}>
                <SearchICON />
            </div>
        ),
        sendicon:(
            <div className={base}>
                <SendICON />
            </div>
        ),
        settingsicon:(
            <div className={base}>
                <SettingsICON />
            </div>
        ),
        shoppingcarticon:(
            <div className={base}>
                <ShoppingCartICON />
            </div>
        ),
        staricon:(
            <div className={base}>
                <StarICON />
            </div>
        ),
        sunicon:(
            <div className={base}>
                <SunICON />
            </div>
        ),
        trashicon:(
            <div className={base}>
                <TrashICON />
            </div>
        ),
        userplusicon:(
            <div className={base}>
                <UserPlusICON />
            </div>
        ),
        usericon:(
            <div className={base}>
                <UserICON />
            </div>
        ),
        usercircleicon:(
            <div className={base}>
                <UserCircleICON />
            </div>
        ),
        usersicon:(
            <div className={base}>
                <UsersICON />
            </div>
        ),
        worldicon:(
            <div className={base}>
                <WorldICON />
            </div>
        ),
        uploadicon:(
            <div className={base}>
                <UploadICON />
            </div>
        ),
        eyeofficon:(
            <div className={base}>
                <EyeOffICON />
            </div>
        ),
        xboxxicon:(
            <div className={base}>
                <XboxXICON />
            </div>
        ),
        shieldicon:(
            <div className={base}>
                <ShieldICON />
            </div>
        ),
        trendingupicon:(
            <div className={base}>
                <TrendingUpICON />
            </div>
        ),
        trendingdownicon:(
            <div className={base}>
                <TrendingDownICON />
            </div>
        ),
        categoryicon:(
            <div className={base}>
                <CategoryICON />
            </div>
        ),
        videoicon:(
            <div className={base}>
                <VideoICON />
            </div>
        ),
        historyicon:(
            <div className={base}>
                <HistoryICON />
            </div>
        ),
        toolicon:(
            <div className={base}>
                <ToolICON />
            </div>
        ),
        codeicon:(
            <div className={base}>
                <CodeICON />
            </div>
        ),
        shareicon:(
            <div className={base}>
                <ShareICON />
            </div>
        ),
        bookmarkicon:(
            <div className={base}>
                <BookmarkICON />
            </div>
        ),
        pinicon:(
            <div className={base}>
                <PinICON />
            </div>
        ),
        cancelicon:(
            <div className={base}>
                <CancelICON />
            </div>
        ),
        flagicon:(
            <div className={base}>
                <FlagICON />
            </div>
        ),
        cloudicon:(
            <div className={base}>
                <CloudICON />
            </div>
        ),
        currencydollaricon:(
            <div className={base}>
                <CurrencyDollarICON />
            </div>
        ),
        wifiicon:(
            <div className={base}>
                <WifiICON />
            </div>
        ),
        paperclipicon:(
            <div className={base}>
                <PaperclipICON />
            </div>
        ),
        adjustmentsverticalicon:(
            <div className={base}>
                <AdjustmentsVerticalICON />
            </div>
        ),
        loadericon:(
            <div className={base}>
                <LoaderICON />
            </div>
        ),
        volumeicon:(
            <div className={base}>
                <VolumeICON />
            </div>
        ),
        share2icon:(
            <div className={base}>
                <Share2ICON />
            </div>
        ),
        musicicon:(
            <div className={base}>
                <MusicICON />
            </div>
        )

    }

    return previews[type];
}