import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#00CC22',
                borderRadius: '10px',
                width: '150px',
                height: '4px',
                '& .MuiSlider-rail': {
                    background: '#8B8B8B',
                    borderRadius: '10px',
                },
                '& .MuiSlider-track': {
                    background: '#00CC22',
                    borderRadius: '10px',
                },
                '& .MuiSlider-thumb': {
                    height: 24,
                    width: 24,
                    backgroundColor: '#fff',
                    border: '1px solid currentColor',
                    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                        boxShadow: 'inherit',
                    },
                    '&:before': {
                        background: '#01CB22',
                        width: '6px',
                        height: '6px',
                    },
                },

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
