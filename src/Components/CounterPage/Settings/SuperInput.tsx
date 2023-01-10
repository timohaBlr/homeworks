import React, {DetailedHTMLProps, FC, InputHTMLAttributes, memo} from "react";

type SuperInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement> & {label?: string}


export const SuperInput:FC<SuperInputPropsType> = memo( ({label,...restProps} ) => {
    return (
        <div>
            {label}
            <input
                {...restProps}/>
        </div>
    )
})