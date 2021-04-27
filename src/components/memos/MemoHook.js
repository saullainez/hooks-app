import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../helpers/procesoPesado';
import '../useEffect/effects.css';

export const MemoHook = () => {

    const { counter, increment } = useCounter(100);
    const [show, setShow] = useState(true);

    const memorProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ]);

    return (
        <>
            <h1>MemoHook</h1>
            <h3>Counter: { counter }</h3>
            <hr />

            <p> { memorProcesoPesado } </p>

            <button className="btn btn-primary" onClick={increment}>+1</button>

            <button 
                className="btn btn-primary ml-3"
                onClick={ () => {
                    setShow(!show);
                } }
            >
                Show/Hide { JSON.stringify(show) }
            </button>
            
        </>
    )
}
