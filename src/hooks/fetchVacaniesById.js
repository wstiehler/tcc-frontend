import { useQuery } from 'react-query';

const fetchItem = async (itemId) => {
    console.log("hook fetchItem", itemId)
    const res = await fetch(process.env.NEXT_PUBLIC_API_BACKEND + `/v1/vacancy/${itemId}`);
    const itemData = await res.json();
    console.log("hook", itemData)
    return itemData;
};

const fetcherVacanciesById = (itemId) => {
    console.log("hook fetcher", itemId)
    return useQuery(['vacancies', itemId], () => fetchItem(itemId));
};

export async function getServerSideProps(context) {
    const { params } = context;
    const itemId = params.id;

    return {
        props: {
            itemId,
        },
    };
}

export default fetcherVacanciesById;