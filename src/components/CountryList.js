import React, { useState} from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '../graphql/queries';
import Accordion from './Accordion';

const CountryList = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const [visibleCountries, setVisibleCountries] = useState(10);

  const loadMore = () => {
    setVisibleCountries((prev) => prev + 10);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.countries.slice(0, visibleCountries).map((country) => (
        <Accordion key={country.code} country={country} />
      ))}
      {visibleCountries < data.countries.length && (
        <button className="load-more" onClick={loadMore}>Load More</button>
      )}
    </div>
  );
};

export default CountryList;
