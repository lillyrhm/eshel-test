import * as React from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { GiLoveLetter, GiModernCity } from "react-icons/gi";
import { GoPerson } from "react-icons/go";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { RiAppsFill } from "react-icons/ri";

// type SidebarProp = {
//     addData: {
//         title: string;
//         icon: any;
//         url: any;

//     }
// }

const sidebarData = [
    {
        title: 'خانه ',
        path: '/home',
        icon: <FaHome />,
    },
    {
        title: 'حساب کاربری',
        path: '/profile',
        icon: <GoPerson />,
    },
    {
        title: 'پروژه های پایان یافته ',
        path: '/project/archive',
        icon: <AiOutlineFileSearch />,
    },
    {
        title: 'ثبت یادداشت ',
        path: '/calendar',
        icon: <BsCalendar3 />,
    },
    {
        title: 'مشاهده یادداشت ها',
        path: '/event',
        icon: <BsCalendar3 />,
    },
    {
        title: 'معرفی اپ',
        path: '/present',
        icon: <RiAppsFill />,
    },
    {
        title: 'سفارش آگهی',
        path: '/order-ads',
        icon: <HiOutlineSpeakerphone />,
    },
    {
        title: 'اشل در استانها ',
        path: '/telegram-channel',
        icon: <GiModernCity />,
    },
    {
        title: 'ارتباط با ما',
        path: '/msg-box',
        icon: <GiLoveLetter />,
    },
    {
        title: 'خروج از حساب ',
        path: '/user/login',
    },
]
export default sidebarData;



