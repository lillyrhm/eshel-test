// import React from 'react';
// import {GiHamburgerMenu,} from "react-icons/fi";
// import anime from 'animejs';
// import { useRouter } from 'next/router';
// import { RootStateOrAny, useSelector } from 'react-redux';
// import { ComplexObject } from 'types';
// import { ICON_PATH, lazyLoad } from 'constant';
// import { Card, Image, Txt } from 'components';
// import { useClickOutside, useHitAction, usePrevValue } from 'hooks';
// import createAction from 'store/actions';
// import { DrawerContainer, TriangleDiv } from './DrawerStyle';
// import { lockScroll } from 'utils/index';
// import { kookie } from 'services/index';
// import "../AppRouter";

const socialMedia = lazyLoad(() => import('./DrawerSocialMedia'));

const DrawerMenu = React.memo(function DrawerMenu()/**: JSX.Element*/ {
  const router = useRouter();
  const hitAction = useHitAction();
  const { isShowDrawer }: ComplexObject = useSelector((state: RootStateOrAny) => state.theme);
  const prevIsShowDrawer = usePrevValue(isShowDrawer);

  const closeDrawer = () => hitAction(createAction('CLOSE_DRAWER'));

  const toggleDrawer = () => {
    lockScroll(isShowDrawer);
    anime({
      target: '#drawer-menu',
      easing: 'linear',
      duration: 500,
      left: type === 'open' ? ['100%', 0] : [0, '100%'],
    });
  };

  // close the drawer menu when user click outside of it
  useClickOutside({
    id: 'drawer',
    isRunning: isShowDrawer,
    cb: closeDrawer,
    runOnUpdate: () => {
      if (prevIsShowDrawer !== isShowDrawer) toggleDrawer(isShowDrawer ? 'open' : 'close');
    },
  });

  const DrawerBtn = (btnProps)=>{
    const {route, title,icon,onClick}=btnProps;
const performClick=()=>{
  closeDrawer();
  if(route)return  Router.push(route);
  onClick?.();
};
return Router.aspath !==route?(
  <Card className="d-flex my-2 align-content-start pointer" onClick={preformClick}>
    {icon?<Image className="mr-2" src={ICON_PATH+icon} alt={icon} width={19} height={19}/>:null}
    <Txt size="s" className="mr-2"isBold>
      {title}
    </Txt>
  </Card>
):null;
  };
  const logout=()=>{
    localStorage.clear();
    Kookie.removeAll();
    location.href='user/login';
  };
return(
  <DrawerContainer id="drawer-menu">
    <triangleDiv/>
    <Card id="drawer">
      <DrawerBtn route="/home" title="خانه" icon="home.svg"/>
      <DrawerBtn route="/home" title="حساب کاربری" icon="home.svg"/>
      <DrawerBtn route="/home" title="پروژه های پایان یافته" icon="home.svg"/>
      <DrawerBtn route="/home" title="ثبت یادداشت" icon="home.svg"/>
      <DrawerBtn route="/home" title="مشاهده یادداشتها" icon="home.svg"/>
      <DrawerBtn route="/home" title="معرفی اپ" icon="home.svg"/>
      <DrawerBtn route="/home" title="سفارش آگهی" icon="home.svg"/>
      <DrawerBtn route="/home" title="اشل در استان" icon="home.svg"/>
      <DrawerBtn route="/home" title="ارتباط با ما" icon="home.svg"/>
      <DrawerBtn route="/home" title="خروج از حساب کاربری " icon="" onClick={logout}/>
<SocialMedia closeDrawer={closeDrawer}/>
    </Card>
  </DrawerContainer>
);
});
// export default memo(DrawerMenu);
// export default function DrawerMenu () {
//   return (
//     <>
//       sid
//     </>
//   );
// }

