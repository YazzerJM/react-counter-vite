
import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

    console.log("render");

    const [ counter, setCounter ] = useState( 10 );

    const handleAdd = (event) => {
        // console.log(event);
        setCounter( counter + 1 );
        // setCounter( (c) => c + 1 );
    }

    const handleSubtract = (event) => setCounter( counter - 1 );

    const handleReset = (event) => setCounter( value );

    return (
        <>
            <h1>Counter App</h1>
            <h2> { counter } </h2>
            <button onClick={ handleSubtract }>
                -1
            </button>
            <button onClick={ handleReset }>
                Reset
            </button>
            <button onClick={ handleAdd }>
                +1
            </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}