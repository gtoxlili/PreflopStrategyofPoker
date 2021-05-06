import React from "react";

import Header from "../header/header";
import Content from "../content/content";
import Footer from "../footer/footer";

const FlexStyle = {
  display: "flex",
  minHeight: "calc(100vh - 40px)",
  flexDirection: "column",
  justifyContent: "space-between",
};

function App() {
  return (
    <div style={FlexStyle}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
