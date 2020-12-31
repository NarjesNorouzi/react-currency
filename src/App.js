import React, { useState, useEffect } from "react";
import { BottomBar, Section, Footer } from "./Components";

function App() {
  const [updatedAt, setUpdatedAt] = useState(new Date());
  function getData() {
    console.log("onReload");
    setUpdatedAt(new Date());
  }
  return (
    <>
      <Section title="نرخ ارز ها">
        <Section.Item dt="low" />
        <Section.Item dt="" />
        <Section.Item dt="high" />
        <Section.Item dt="low" />
        <Section.Item dt="low" />
        <Section.Item dt="" />
        <Section.Item dt="low" />
        <Section.Item dt="" />
        <Section.Item dt="high" />
        <Section.Item dt="low" />
        <Section.Item dt="low" />
        <Section.Item dt="high" />
        <Section.Item dt="high" />
        <Section.Item dt="high" />
        <Section.Item dt="low" />
      </Section>
      <Footer />
      <BottomBar updatedAt={updatedAt.toString()} onReload={getData} />
    </>
  );
}

export default App;
