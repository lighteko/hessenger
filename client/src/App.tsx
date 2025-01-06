import "@styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "@pages/LoginPage";
import { ColorModeContext } from "@contexts/colormode.context";
import { getColorMode } from "@utils/localstorage.util";
import * as SignupPage from "@pages/SignupPage";

const App = () => {
  const colormode = getColorMode();
  return (
    <ColorModeContext.Provider value={colormode}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage.Name />}>
            <Route path="name" element={<SignupPage.Name />} />
            <Route path="gender" element={<SignupPage.Gender />} />
            <Route path="birthday" element={<SignupPage.Birthday />} />
            <Route path="email" element={<SignupPage.Email />} />
            <Route path="verify" element={<SignupPage.Verify />} />
            <Route path="password" element={<SignupPage.Password />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ColorModeContext.Provider>
  );
};

export default App;
