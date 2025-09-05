import React from "react";
import Navigation from "./components/Navigation";
import ProdajneLokacije from "./components/ProdajneLokacije";
import CarShowcase from "./components/CarShowcase";
import Footer from "./components/Footer";
import './styles.scss';

const App = () => (
  <>
     <Navigation />
     <ProdajneLokacije />
     <CarShowcase />
     <Footer />
  </>
);
export default App;
