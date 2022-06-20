import { AiOutlineFileSearch } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { GiLoveLetter, GiModernCity } from "react-icons/gi";
import { GoPerson } from "react-icons/go";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { RiAppsFill } from "react-icons/ri";

const sidebarData = [
    {
        title: 'ورود به حساب کاربری  ',
        path: '/',
        icon: <FaHome />,
    },
    {
        title: 'خانه ',
        path: '/home',
        icon: <FaHome />,
    },
    {
        title: 'حساب کاربری',
        path: '/account',
        icon: <GoPerson />,
    },
    {
        title: 'پروژه های پایان یافته ',
        path: '/final',
        icon: <AiOutlineFileSearch />,
    },
    {
        title: 'ثبت یادداشت ',
        path: '/calendar-data',
        icon: <BsCalendar3 />,
    },
    {
        title: 'مشاهده یادداشت ها',
        path: '/note',
        icon: <BsCalendar3 />,
    },
    {
        title: 'معرفی اپ',
        path: '/introduction',
        icon: <RiAppsFill />,
    },
    {
        title: 'سفارش آگهی',
        path: '/commercial',
        icon: <HiOutlineSpeakerphone />,
    },
    {
        title: 'اشل در استانها ',
        path: '/about-us',
        icon: <GiModernCity />,
    },
    {
        title: 'ارتباط با ما',
        path: '/contact-us',
        icon: <GiLoveLetter />,
    },
    {
        title: 'خروج از حساب ',
        path: '/logout',
    },
]
export default sidebarData;



