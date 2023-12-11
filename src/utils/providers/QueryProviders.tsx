'use client';

import React, { ReactNode, useState } from 'react'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


type propTypes = { children: ReactNode, pageProps?: any }


export default function QueryProviders({ children, pageProps }: propTypes) {
  const [client] = useState(new QueryClient());
  return (
    <>
      <QueryClientProvider client={client} >
        {children}
        <ReactQueryDevtools initialIsOpen={false} />

      </QueryClientProvider>
    </>
  )
}
