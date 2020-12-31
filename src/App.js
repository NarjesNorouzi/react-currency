import React, { useState, useEffect } from "react";
import axios from "axios";
import { BottomBar, Section, Footer } from "./Components";

function App() {
  const [data, setData] = useState([]);
  const [updatedAt, setUpdatedAt] = useState(new Date());
  async function getData() {
    let { data } = await axios.get(
      "https://gist.githubusercontent.com/ahmadpanah/e6225b11235a04397b813d0de6e6f5ad/raw/ab559a1146b5e6f2d57bd546c20c090842d5fcc6/sana.json"
    );
    setData(data.sana.data);
    setUpdatedAt(new Date());
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Section title="نرخ ارز ها">
        {data &&
          data.length > 0 &&
          data.map(({ title, t, dt, p, dp }, index) => {
            return (
              <Section.Item
                key={index}
                title={title}
                t={t}
                dt={dt}
                p={p}
                dp={dp}
              />
            );
          })}
      </Section>
      <Footer />
      <BottomBar
        onReload={getData}
        updatedAt={
          updatedAt.toDateString() + " - " + updatedAt.toLocaleTimeString()
        }
      />
    </>
  );
}

export default App;
