import * as React from "react";

type TitleProps = {
    src: string;
    title: string;
    className: string;
}

const InputTitle = (props: TitleProps) => {
    const { src, title, className } = props;

    return (
        <div>
            <img src={src} width="20px" height="20px" alt={title} className="ml-1" />
            <text className=''>
                {title}
            </text>
        </div>
    )
}

export default InputTitle
