import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { useThemeColor } from "@/context/color/ThemeColorContext";
import { chooseTheme } from "@/utils/chooseTheme";
import Header from "@/components/header/Header";
import { GlobalStyle } from "@/styles/globalStyles";

function App() {
  const { themeColor } = useThemeColor();

  return (
    <ThemeProvider theme={chooseTheme(themeColor)}>
      <GlobalStyle theme={chooseTheme(themeColor)} />
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
