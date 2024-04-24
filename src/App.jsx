import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
const App = () => {
  return (
    <>
      <h1>Hello</h1>
      <div className="pt-[4.74rem] lg:pt:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
