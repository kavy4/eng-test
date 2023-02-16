import React from 'react'
import Eng8Module5 from './img/Eng8module5.png'

const ImgHandler = ({ id }) => {
    switch (id) {
        case 'Eng8Module5':
            return <img className='mx-auto' src={Eng8Module5} alt='Материалы для подготовки' />
        default:
            console.log('ImgHandler error')
    }
}

export default ImgHandler