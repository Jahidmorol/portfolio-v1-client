import Contacte from "../Components/Contacte";
import Exprience from "../Components/Exprience";
import Hero from "../Components/Hero";
import Protfolio from "../Components/Protfolio";
import Services from "../Components/Services";

const Main = () => {
  return (
    <div id="home">
      <Hero />
      <Services />
      <Protfolio />
      <Exprience />
      <Contacte />
    </div>
  );
};

export default Main;
