import React, {useState} from 'react'
import PropTypes from 'prop-types'


const CounterApp = ( { value } ) => {

    const [count, setCount] = useState( value );
    
    const helperAdd = () => {
       setCount( count + 1);
    }

    const helperSubstract = () => {
        if(count > 0){
            setCount( count - 1);
         }
     }    

     const helperReset = () => {
        setCount( value );
     }    
     

    return (
        <>
            <h1> CounterApp Home </h1>
            <h2> Contador 1:  { count } </h2>
            <button onClick = { helperSubstract } > -1 </button> 
            <button onClick = { helperReset } > Origen </button> 
            <button onClick = { helperAdd } > +1 </button>
           
        </>
    )
}

CounterApp.propTypes = {

    value: PropTypes.number.isRequired,
}

export default CounterApp
