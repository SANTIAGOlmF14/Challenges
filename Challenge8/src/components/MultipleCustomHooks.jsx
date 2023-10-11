import React from "react";
import useCounter from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";


export const MultipleCustomHooks = () => {
    const {count, increment} = useCounter(1)
    const {data, isLoading, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${count}`)

    return (
        <>
        <h1>MultipleCustomHooks</h1>
        <hr/>

        {
            isLoading ? (
                <div className='alert alert-info text-center'>
                    Loading...
                </div>
            ) : (
                <blockquote className='blockquote text-end'>
                    <p className='mb-1'> {data [0]?.quote} </p>
                    <footer className='blockquote-footer'>{ data.name}</footer>
                </blockquote>
            )
        }

        <button className='btn btn-primary' onClick={() => increment()}>Next Quote</button>

        </>
    )
}