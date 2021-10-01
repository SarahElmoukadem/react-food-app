import Input from '../../UI/Input';
import classes from './MealItemFrom.module.css'

import React, { useRef, useState } from 'react'

const MealItemFrom = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true)

    const amountInputRef = useRef()
    const submitHandler = (event) => {
        event.preventDefault()
        const amountValue = amountInputRef.current.value;
        const amountNum = +amountValue;

        if (amountValue.trim().length === 0 ||
            amountValue.trim().length < 1 ||
            amountValue.trim().length > 5) {
            setAmountIsValid(false)
            return;
        }

        props.onAddToCart(amountNum)
    }
    return (
        <form
            className={classes.form}
            onSubmit={submitHandler}

        >
            <Input input={
                {
                    id: props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    defaultValue: '1',
                    step: '1'
                }}
                label="Amount"
                ref={amountInputRef} />
            <button>+ Add</button>

            {!amountIsValid && <p>Amount isn't valid</p>}
        </form>
    )
}

export default MealItemFrom;