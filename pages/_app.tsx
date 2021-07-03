import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { StyledThemeProvider, store } from "@services/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";
import { appWithTranslation } from "next-i18next";
import GlobalStyle from "@styles/globalStyles";
import { UserProvider } from "@auth0/nextjs-auth0";
import { Feedback } from "@services/feedback";
import { CloudinaryContext } from "cloudinary-react";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    // Expose theme from getStaticProps to child components
    if (pageProps._nextI18Next?.initialLocale) {
        store.theme = pageProps._nextI18Next?.initialLocale;
    }
    return (
        <StyledThemeProvider theme={store.theme}>
            <GlobalStyle />
            <UserProvider>
                <QueryClientProvider client={queryClient}>
                    <Hydrate state={pageProps.dehydratedState}>
                        <CloudinaryContext cloudName="example">
                            <Feedback />
                            <Component {...pageProps} />
                        </CloudinaryContext>
                    </Hydrate>
                    <ReactQueryDevtools />
                </QueryClientProvider>
            </UserProvider>
        </StyledThemeProvider>
    );
}

export default appWithTranslation(MyApp);
