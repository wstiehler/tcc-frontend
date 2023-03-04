import { QueryClient } from 'react-query';


export function createQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60 * 5, // 5 minutes
                retry: 0,
                refetchOnWindowFocus: false,
                refetchOnMount: false,
                refetchOnReconnect: false,
                cacheTime: 1000 * 60 * 5, // 5 minutes
                keepPreviousData: true,
            },
        },
    });
}