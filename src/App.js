import { BottomBar, Section, Footer } from "./Components";

function App() {
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
      <BottomBar />
    </>
  );
}

export default App;
