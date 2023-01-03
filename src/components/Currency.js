import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (event) => {
        dispatch({
            type:'CHG_CURRENCY',
            payload: event.target.value,
        })
    }

    return (
        <div>
            <label className="btn btn-success">Currency 
                <select
                    className ="btn btn-success"
                    id='currency'
                    onChange={(event)=> changeCurrency(event)}>
                        <option value="£">(£ Pound)</option>
                        <option value="$">($ Dollar)</option>
                        <option value="€">(€ Euro)</option>
                        <option value="₹">(₹ Rupee)</option>
                    </select>
            </label>
        </div>
    );
};

export default Currency;