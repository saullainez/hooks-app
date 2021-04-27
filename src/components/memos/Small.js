import React from 'react';

export const Small = React.memo(({ value }) => {

    console.log("Llamado a Small");

    return (
        <small>
            { value }
        </small>
    )

});
