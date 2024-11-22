import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../Components/Home.css";

import slidecake from "../assets/images/slidecake.png";
import fruits from "../assets/images/fruits.png";
import Utensil1 from "../assets/images/Utensil1.png";
import TopPicks from "./TopPicks";
import Categories from "./Categories";
import Navigation from "./NavigationBar";
import ProductPage from "./ProductPage";
import Hotcakes from "./Hotcakes";
import Machinery from "./Machinery";

function Home() {
  return (
    <>
    <div className="container py-2">
      <Swiper
        navigation
        spaceBetween={28}
        slidesPerView={2}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          576: { slidesPerView: 1 },
        }}
      >
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            <SwiperSlide>
              <div className="card text-white">
                <img src={slidecake} className="card-img custom-img" alt="Bakery Products" />
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <h5>Bakery Products</h5>
                  <p>Up to 15% OFF</p>
                  <button className="btn btn-light btn-sm">Explore</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card text-white">
                <img src={fruits} className="card-img custom-img" alt="Tea" />
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <h5>Tea</h5>
                  <p>Up to 10% OFF</p>
                  <button className="btn btn-light btn-sm">Explore</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card text-white">
                <img src={Utensil1} className="card-img custom-img" alt="Machinery" />
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <h5>Utensils/Equipment</h5>
                  <p>Up to 10% OFF</p>
                  <button className="btn btn-light btn-sm">Explore</button>
                </div>
              </div>
            </SwiperSlide>
          </React.Fragment>
        ))}
      </Swiper>
    </div>

    <section>
    <div className="container py-2 text-center"> 
  <p className="text-center fw-bold small">Kaffe Code Platform To</p>
  <h3 className="text-center text-success fw-bold small">START</h3>
  <p className="text-center fw-bold small">Your Bakery/Tea Coffee Business</p>
  <h5 className="text-center fw-bold small">Kaffe Codes is the platform to run successful online business in Nepal.</h5>
</div>

    </section>

    <section>
        <TopPicks />
    </section>

    <Categories />

    <section className="Brands">
        <h3 className="text-center">Hand-Picked Brands</h3>
        <Navigation />
        <TopPicks />

    </section>

    <section>
        <ProductPage />
    </section>

    <section>
        <Hotcakes />
    </section>




   </>
  );
}

export default Home;
