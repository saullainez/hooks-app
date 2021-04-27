import React, { useState } from 'react';
import { MultipleCustomHooks } from '../examples/MultipleCustomHooks';
import '../useEffect/effects.css';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <>

            <h1>RealExampleRef</h1>
            <hr />

            { show && <MultipleCustomHooks /> }

            <button 
                className="btn btn-primary mt-4"
                onClick={ () => {
                    setShow(!show)
                } }
            >
                Show/Hide
            </button>

        </>
    )

}
