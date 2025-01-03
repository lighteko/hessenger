import "@styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "@pages/LoginPage";
import { ColorModeContext } from "@contexts/colormode.context";
import { getColorMode } from "@utils/localstorage.util";

const App = () => {
  const colormode = getColorMode();
  return (
    <ColorModeContext.Provider value={colormode}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </ColorModeContext.Provider>
  );
};

export default App;
