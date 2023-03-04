import { SessionProvider } from "next-auth/react";
import { QueryClientProvider, QueryClient, Hydrate } from "react-query";
import React from "react";
import '../styles/globals.css';
import CustomLayout from '../components/layout';
import RefreshTokenHandler from '../components/refresh-token-handler';
import { useState } from "react";


function MyApp({ Component, pageProps }) {
  const [interval, setInterval] = useState(0);


  const queryClient = React.useRef(new QueryClient());

  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <SessionProvider session={pageProps.session} refetchInterval={interval} >
          <CustomLayout>
            <Component {...pageProps} />
            <RefreshTokenHandler setInterval={setInterval} />
          </CustomLayout>
        </SessionProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;