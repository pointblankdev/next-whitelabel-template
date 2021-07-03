import React from "react";
import { ThemeProvider } from "styled-components";
import { proxy } from "valtio";
import { core } from "@themes/core";
import { customerX } from "@themes/customerX";
import { customerY } from "@themes/customerY";
import { customerZ } from "@themes/customerZ";

type Store = {
    theme: keyof typeof themes;
};

type StyledThemeProviderProps = {
    theme?: Store["theme"];
    children: React.ReactNode;
};

// TODO Find a way to add a new whitelabel that doesn't require so many file changes

const themes = {
    core,
    customerX,
    customerY,
    customerZ,
};

export const defaultTheme: Store["theme"] = "core";

export const store = proxy<Store>({
    theme: defaultTheme,
});

export const StyledThemeProvider: React.FC<StyledThemeProviderProps> = ({
    theme = defaultTheme,
    children,
}) => {
    return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};
