import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";

function TopPicks() {
  const products = [
    {
      img: img1,
      title: "High Voltage Bones Cups - 12 Count",
      brand: "HIGH VOLTAGE",
      price: "NPR. 733",
      rating: 5,
      reviews: 150,
    },
    {
      img: img2,
      title: "High Voltage Bones Cups - 12 Count",
      brand: "VALTRA MACHINES",
      price: "NPR. 733",
      rating: 5,
      reviews: 150,
    },
    {
      img: img3,
      title: "Ninja CFP307 Specialty Coffee System",
      brand: "NINJA TECH",
      price: "NPR. 733",
      rating: 5,
      reviews: 150,
    },
    {
      img: img4,
      title: "Organic and Fair Trade Dark Roast Whole Beans",
      brand: "DEATH WISH COFFEE",
      price: "NPR. 733",
      rating: 5,
      reviews: 150,
    },
    {
      img: img5,
      title: "Organic Matcha Fresh Tea Powder",
      brand: "ORGANIC MATCHA",
      price: "NPR. 733",
      rating: 5,
      reviews: 150,
    },
  ];

  return (
    <div className="container py-5">
      <h4 className="fw-bold text-dark mb-4">Top Picks</h4>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 3 },
          576: { slidesPerView: 2 },
          320: { slidesPerView: 1 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="card border-0">
              <img
                src={product.img}
                className="card-img-top img-fluid"
                alt={product.title}
                style={{ maxWidth: "150px", margin: "0 auto" }}
              />
              <div className="card-body text-start"> {/* Align text to the left */}
                <p className="text-muted small fw-bold">{product.brand}</p>
                <h6 className="text-dark fw-bold">{product.title}</h6>
                <div className="text-warning">
                  {"★".repeat(product.rating)}
                  <span className="text-muted ms-2">({product.reviews})</span>
                </div>
                <p className="text-dark fw-bold mt-2">{product.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TopPicks;
