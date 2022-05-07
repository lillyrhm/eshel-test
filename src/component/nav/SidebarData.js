import { FaHome } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { RiAppsFill } from "react-icons/ri";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { GiModernCity,GiLoveLetter  } from "react-icons/gi";

const SidebarData = [
    {
        title: 'خانه ',
        path: '/',
        icon: <FaHome />,
        cName: 'nav-text'
    },
    {
        title: 'حساب کاربری',
        path: '/account',
        icon: <GoPerson />,
        cName: 'nav-text'
    },
    {
        title: 'پروژه های پایان یافته ',
        path: '/final',
        icon: <AiOutlineFileSearch />,
        cName: 'nav-text'
    },
    {
        title: 'ثبت یادداشت ',
        path: '/calendar-data',
        icon: <BsCalendar3 />,
        cName: 'nav-text'
    },
    {
        title: 'مشاهده یادداشت ها',
        path: '/note',
        icon: <BsCalendar3 />,
        cName: 'nav-text'
    },
    {
        title: 'معرفی اپ',
        path: '/introduction',
        icon: <RiAppsFill />,
        cName: 'nav-text'
    },
    {
        title: 'سفارش آگهی',
        path: '/commercial',
        icon: <HiOutlineSpeakerphone />,
        cName: 'nav-text'
    },
    {
        title: 'اشل در استانها ',
        path: '/about-us',
        icon: <GiModernCity />,
        cName: 'nav-text'
    },
    {
        title: 'ارتباط با ما',
        path: '/contact-us',
        icon: <GiLoveLetter />,
        cName: 'nav-text'
    },
    {
        title: 'خروج از حساب ',
        path: '/out-of',
        cName: 'nav-text'
    },
]

export default SidebarData;