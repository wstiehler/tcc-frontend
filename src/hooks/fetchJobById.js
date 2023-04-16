// hooks/useItem.js

import { useQuery } from 'react-query';

const fetchItem = async (itemId) => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_BACKEND+`/v1/vacancy/${itemId}`);
  const itemData = await res.json();
  return itemData;
};

const fetcherJobById = (itemId) => {
  return useQuery(['vacancies', itemId], () => fetchItem(itemId));
};

export default fetcherJobById;