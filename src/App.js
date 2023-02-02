import "./App.css";
import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import Page1 from "./mainUI/Page1";
import Page2 from "./mainUI/Page2";
import Page3year from "./mainUI/Page3year";
import Page3month from "./mainUI/Page3month";


function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Ubuntu", "sans-serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3month" element={<Page3month />} />
        <Route path="/page3year" element={<Page3year />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
