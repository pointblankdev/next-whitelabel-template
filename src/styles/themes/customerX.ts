// #region Global Imports
import { DefaultTheme } from "styled-components";
// #endregion Global Imports
import { common } from "./common";

const customerX: DefaultTheme = {
    ...common,
    ...{
        colors: {
            ...common.colors,
            primary: "#00B1FD",
            secondary: "#0048B4",
            accent: "#FD00BF",
            danger: "#721F26",
            paper: "#070420",
            text: "#ffffff",
            primaryHover: "rgba(0, 177, 253, 0.83)",
            secondaryHover: "#0059BA",
        },
    },
};

export { customerX };
