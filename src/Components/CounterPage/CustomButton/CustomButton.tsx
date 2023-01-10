import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>
type CustomButtonPropsType = DefaultButtonPropsType & {}


export const CustomButton: React.FC<CustomButtonPropsType> = React.memo( (
    {
        className,
        disabled,
        ...restProps
    }
) => {
    const onclickHandler = () => {

    }
    const finalClassName = '';
    return (
        <button onClick={onclickHandler}
                className={finalClassName}
                disabled={disabled}
                {...restProps}
        />

    );
});


