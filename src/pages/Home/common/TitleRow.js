import React from 'react';
// import { ICON_PATH } from 'constant';



export default function TitleRow(props) {
    const { src, title, className } = props;

    return (
        <div className={'d-flex align-items-center ' + className}>
            <img src={ src} width="20px" height="20px" alt={title} objectFit="cover" className="ml-1" />
            <txt size="s" isBold className="d-block text-center title-font">
                {title}
            </txt>
        </div>
    );
}