import "@styles/global.css";
import GlobalStyle from "../src/styles/globalStyles";
import { StyledThemeProvider } from "@services/theme";
import * as NextImage from "next/image";
import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { UserProvider } from "@auth0/nextjs-auth0";
import { Feedback } from "@services/feedback";
import { CloudinaryContext } from "cloudinary-react";

import { core } from "@themes/core";
import { customerX } from "@themes/customerX";
import { customerY } from "@themes/customerY";
import { customerZ } from "@themes/customerZ";

const queryClient = new QueryClient();

// https://github.com/vercel/next.js/issues/18393#issuecomment-783269086
const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, "default", {
    configurable: true,
    value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
    options: {
        storySort: (a, b) =>
            a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    },
    backgrounds: {
        default: "gray",
        values: [
            {
                name: "light",
                value: "#cccccc",
            },
            {
                name: "gray",
                value: "#666666",
            },
            {
                name: "dark",
                value: "#333333",
            },
        ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
};

const coreTheme = {
    name: "Core",
    ...core,
};

const customerXTheme = {
    name: "Customer X",
    ...customerX,
};

const customerYTheme = {
    name: "Customer Y",
    ...customerY,
};

const customerZTheme = {
    name: "Customer Z",
    ...customerZ,
};

export const getAllThemes = () => {
    return [coreTheme, customerXTheme, customerYTheme, customerZTheme];
};

addDecorator(withThemesProvider(getAllThemes()));
// TODO: These don't render when switching themes in storybook. Find solutions.
addDecorator((s) => (
    <StyledThemeProvider>
        <GlobalStyle />
        <UserProvider>
            <QueryClientProvider client={queryClient}>
                <CloudinaryContext cloudName="example">
                    <Feedback />
                    {s()}
                </CloudinaryContext>
                <ReactQueryDevtools />
            </QueryClientProvider>
        </UserProvider>
    </StyledThemeProvider>
));
