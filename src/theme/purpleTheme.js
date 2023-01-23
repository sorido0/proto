import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: "#35669E",
        },
        secondary: {
            main: "#f50057",
        },
        error: {
            main: red.A400,
        }
    }
});

