import React from 'react';
import { useFetch } from './hooks/useFetch';

function DataFetcher() {
  const url = 'https://pokeapi.co/api/v2/pokemon/6'; 

  const { data, isLoading, hasError } = useFetch(url);

  return (
    <div>
      {isLoading && <p>Loading data...</p>}
      {hasError && <p>Error: {hasError.message}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default DataFetcher;
