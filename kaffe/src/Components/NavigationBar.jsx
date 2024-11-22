import React from 'react'
import Bakery from '../assets/images/bakery.png'
import Coffee from '../assets/images/coffee.png'
import Tea from '../assets/images/tea.png'
import Utensils from '../assets/images/utensil.png'
import Machineries from '../assets/images/machinery.png'
import Cakes from '../assets/images/cake.png'
import Brownies from '../assets/images/brownies.png'

function Navigation() {
  return (
    <>
    <section className="categories py-3">
    <div className="container">
    <div className="row justify-content-center text-center">
        <div className="col-2 col-md-2">
            <div className="rounded-circle bg-light d-flex justify-content-center align-items-center mx-auto" style={{ width: "70px", height: "70px" }}>
                <img src={Bakery} alt="Bakery" className="img-fluid" />
            </div>
            <p className="mt-1">Bakery</p>
        </div>
        <div className="col-2 col-md-2">
            <div className="rounded-circle bg-light d-flex justify-content-center align-items-center mx-auto" style={{ width: "70px", height: "70px" }}>
                <img src={Coffee} alt="Coffee" className="img-fluid" />
            </div>
            <p className="mt-1">Coffee</p>
        </div>
        <div className="col-2 col-md-2">
            <div className="rounded-circle bg-light d-flex justify-content-center align-items-center mx-auto" style={{ width: "70px", height: "70px" }}>
                <img src={Tea} alt="Tea" className="img-fluid" />
            </div>
            <p className="mt-1">Tea</p>
        </div>
        <div className="col-2 col-md-2">
            <div className="rounded-circle bg-light d-flex justify-content-center align-items-center mx-auto" style={{ width: "70px", height: "70px" }}>
                <img src={Utensils} alt="Utensils" className="img-fluid" />
            </div>
            <p className="mt-1">Utensils</p>
        </div>
        <div className="col-2 col-md-2">
            <div className="rounded-circle bg-light d-flex justify-content-center align-items-center mx-auto" style={{ width: "70px", height: "70px" }}>
                <img src={Machineries} alt="Machineries" className="img-fluid" />
            </div>
            <p className="mt-1">Machineries</p>
        </div>
        <div className="col-2 col-md-2">
            <div className="rounded-circle bg-light d-flex justify-content-center align-items-center mx-auto" style={{ width: "70px", height: "70px" }}>
                <img src={Cakes} alt="Cakes" className="img-fluid" />
            </div>
            <p className="mt-1">Cakes</p>
        </div>
        <div className="col-2 col-md-2">
            <div className="rounded-circle bg-light d-flex justify-content-center align-items-center mx-auto" style={{ width: "70px", height: "70px" }}>
                <img src={Brownies} alt="Brownies" className="img-fluid" />
            </div>
            <p className="mt-1">Brownies</p>
        </div>
    </div>
</div>

</section>


    </>
   
  )
}

export default Navigation
