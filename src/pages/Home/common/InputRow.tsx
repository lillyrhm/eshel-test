import * as React from 'react';

type InputProps = {
    title: string;
    onChange: any;
    type?: any;
    name?: string;
}

const InputRow = (props: InputProps): JSX.Element => {
    const { title, onChange, type, name } = props;

    return (
        <div>
            <div>
                <text>
                    {title}
                </text>
            </div>
            <div>
                <input
                    onChange={onChange}
                    type={type || "text"}
                    name={name}
                    placeholder={title}
                />
            </div>
        </div>
    )
}

export default InputRow;