import React from 'react';

export const Son = React.memo(({ numero, increment }) => {
    console.log('Son component re-rendered...');

    return (
        <button className='btn btn-primary mr-3'
         onClick={() => increment(numero)}>
            Incrementar 
            {numero}
        </button>
    );
});

