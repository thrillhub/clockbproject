import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Cakes from '../assets/images/cake.png'
import Brownies from '../assets/images/brownies.png'
import pic1 from "../assets/images/pic1.png"
import pic2 from "../assets/images/pic2.png"
import pic3 from "../assets/images/pic3.png"
import pic4 from "../assets/images/pic4.png"
import pic5 from "../assets/images/pic5.png"

function Hotcakes() {
    const products = [
        {
          img: pic1,
          title: "Bento Cake:A Small bite",
          brand: "Packed With Big",
          price: "NPR. 512",
          rating: 5,
          reviews: 120
        },
        {
            img: pic2,
            title: "Bento Cake:A Small bite",
            brand: "Packed With Big",
            price: "NPR. 512",
            rating: 5,
            reviews: 120
        },
        {
            img: pic3,
            title: "Bento Cake:A Small bite",
            brand: "Packed With Big",
            price: "NPR. 512",
            rating: 5,
            reviews: 120
        },
        {
            img: pic4,
            title: "Bento Cake:A Small bite",
            brand: "Packed With Big",
            price: "NPR. 512",
            rating: 5,
            reviews: 120
        },
        {
            img: pic5,
            title: "Bento Cake:A Small bite",
            brand: "Packed With Big",
            price: "NPR. 512",
            rating: 5,
            reviews: 120
        },
      ];
  return (

    <>
    <div className="text-center py-5">
      <h2 className="fw-bold mb-2">Hot Cakes</h2>
      <div className="d-flex justify-content-center">
        <div className="text-center mx-2">
          <div className="rounded-circle bg-light d-flex justify-content-center align-items-center" style={{ width: "100px", height: "100px" }}>
            <img src={Cakes} alt="Bento Cake" style={{ width: "50px" }} />
          </div>
         
        </div>
        <div className="text-center mx-2">
          <div className="rounded-circle bg-light d-flex justify-content-center align-items-center" style={{ width: "100px", height: "100px" }}>
            <img src={Cakes} alt="Regular Cake" style={{ width: "50px" }} />
          </div>
        </div>
        <div className="text-center mx-3">
          <div className="rounded-circle bg-light d-flex justify-content-center align-items-center" style={{ width: "100px", height: "100px" }}>
            <img src={Brownies} alt="Brownies" style={{ width: "50px" }} />
          </div>
        
        </div>
      </div>
    </div>

    <section>
    <div className="container py-5">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        slidesPerView={4}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 5 },
          576: { slidesPerView: 2 },
          320: { slidesPerView: 1 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="card border-0">
              <img
                src={product.img}
                className="card-img-top"
                alt={product.title}
                style={{ maxWidth: "300px", margin: "0 auto" }}
              />
              <div className="card-body text-start"> 
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
    </section>
      
    </>
  )
}

export default Hotcakes
