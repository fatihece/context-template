import React from "react";
import Footer from "../src/components/context/Footer";
import Header from "../src/components/context/Header";
import { MainContext } from "../src/components/context/context";

const App = () => {
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const data = {
    theme,
    setTheme,
  };

  return (
    <MainContext.Provider value={data}>
      <div className="change-theme">
        <Header />
        <Footer />
      </div>
    </MainContext.Provider>
  );
};

export default App;
