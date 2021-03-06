import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="amzn-home"
        />

        <div className="home__row">
          <Product
            title="Astrro A40s"
            price="39.99"
            image="https://images-na.ssl-images-amazon.com/images/I/41tPW0nt51L.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="Astrro A40s"
            price="49.99"
            image="https://images-na.ssl-images-amazon.com/images/I/41tPW0nt51L.jpg"
            rating={5}
          />

          <Product
            title="Astrro A40s Headset"
            price="39.99"
            image="https://images-na.ssl-images-amazon.com/images/I/41tPW0nt51L.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="Astrro A40s"
            price="39.99"
            image="https://images-na.ssl-images-amazon.com/images/I/41tPW0nt51L.jpg"
            rating={5}
          />

          <Product
            title="Astrro A40s"
            price="39.99"
            image="https://images-na.ssl-images-amazon.com/images/I/41tPW0nt51L.jpg"
            rating={5}
          />
          <Product
            title="Astrro A40s"
            price="39.99"
            image="https://images-na.ssl-images-amazon.com/images/I/41tPW0nt51L.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
