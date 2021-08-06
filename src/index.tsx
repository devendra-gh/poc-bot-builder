import ReactDOM from "react-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./styles.scss";

const theme: any = createTheme({
  palette: {
    // primary: {
    //   main: purple[500],
    // },
    // secondary: {
    //   main: "#f44336",
    // },
  },
});

const rootElement = document.getElementById("root");

ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </DndProvider>,
  rootElement
);

reportWebVitals();
