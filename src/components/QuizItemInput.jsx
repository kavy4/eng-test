import React, { useState } from 'react'
import Button from './UI/Button'

const QuizItemInput = ({ quiz, options, index }) => {
    const [isFinish, setIsFinish] = useState(false)
    const [resultCard, setResultCard] = useState('')
    const [value, setValue] = useState('')

    const OnClickNextButton = () => {
        if (value == '') return
        if (value.toLocaleLowerCase() == quiz.correct.toLocaleLowerCase()) {
            setResultCard('Правильно')
            options.setPoints({
                ...options.points,
                true: options.points.true + 1
            })
        }
        else {
            setResultCard('Не правильно')
            options.setPoints({
                ...options.points,
                false: options.points.false + 1
            })
        }

        setIsFinish(true)
        options.setStep(options.step + 1)
    }

    return (
        <div className='w-9/12 p-5 rounded shadow border mx-auto my-5'>
            <h2 className='text-xl font-semibold'>{index}. { quiz.title }</h2>
            <input className='block my-5 py-0.5 px-2 rounded shadow-sm border' type="text" disabled={isFinish} value={value} onChange={event => setValue(event.target.value)} onKeyUp={event => event.key == 'Enter' && OnClickNextButton()} />
            <Button disabled={isFinish} onClick={() => OnClickNextButton()}>Далее</Button>
            { resultCard && <div className='px-2 py-1 rounded shadow border mt-5'>{ resultCard }</div> }
        </div>
    )
}

export default QuizItemInput