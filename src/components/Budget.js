import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const setBudget = (val) => {
        if (val > 20000) {
            alert("The budget cannot exceed 20,000")
        }
        else if(val < totalExpenses){
            alert("The set budget must be greater than the current expenses")
        }
        else{
            dispatch({
                type:'SET_BUDGET',
                payload: val,
            })
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    type='number'
                    id='budget'
                    value={budget}
                    step={10}
                    onInput={(event) => setBudget(event.target.value)}
                    >
                </input>
            </span>
        </div>
    );
};

export default Budget;