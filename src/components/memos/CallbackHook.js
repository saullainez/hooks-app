import React, { useCallback, useState } from 'react';

import '../useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    const increment = useCallback( ( num ) => {
        setCounter( c => c + num );
    }, [ setCounter ] );

    return (
        <>
            <h1>useCallback Hook  { counter } </h1>
            <hr/>

            <ShowIncrement increment={ increment } />

        </>
    )
}
