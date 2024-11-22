import React from 'react'
import kaffe from '../assets/images/kaffe.png'

const Footer = () => {
  return (
    <>
    <footer class="bg-dark text-white py-5">
    <div class="container">
        <div class="row">
        
            <div class="col-lg-3 col-md-6 mb-4">
                <img src={kaffe} alt="Kaffe Codes Logo" class="img-fluid mb-3" style={{ maxWidth: '80px' }} />
                <p>Kaffe Codes is the platform to run a successful online business in Nepal.</p>
                <p>Bishalnagar, Kathmandu</p>
                <p>+977 9812345678</p>
                <div class="d-flex gap-3">
                    <a href="#" class="text-white"><i class="fa fa-facebook"></i></a>
                    <a href="#" class="text-white"><i class="fa fa-twitter"></i></a>
                    <a href="#" class="text-white"><i class="fa fa-whatsapp"></i></a>
                    <a href="#" class="text-white"><i class="fa fa-linkedin"></i></a>
                    <a href="#" class="text-white"><i class="fa fa-youtube"></i></a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-4">
                <h5>Resources</h5>
                <ul class="list-unstyled">
                    <li><a href="#" class="text-white text-decoration-none">About</a></li>
                    <li><a href="#" class="text-white text-decoration-none">Contact</a></li>
                    <li><a href="#" class="text-white text-decoration-none">Blogs</a></li>
                    <li><a href="#" class="text-white text-decoration-none">Help Center</a></li>
                    <li><a href="#" class="text-white text-decoration-none">Conditions</a></li>
                    <li><a href="#" class="text-white text-decoration-none">Privacy Policy</a></li>
                </ul>
            </div>
            <div class="col-lg-3 col-md-6 mb-4">
                <h5>Categories</h5>
                <ul class="list-unstyled">
                    <li><a href="#" class="text-white text-decoration-none">Bakery</a></li>
                    <li><a href="#" class="text-white text-decoration-none">Coffee</a></li>
                    <li><a href="#" class="text-white text-decoration-none">Tea</a></li>
                    <li><a href="#" class="text-white text-decoration-none">Utensils</a></li>
                    <li><a href="#" class="text-white text-decoration-none">Machineries</a></li>
                    <li><a href="#" class="text-white text-decoration-none">Cakes</a></li>
                </ul>
            </div>
            <div class="col-lg-3 col-md-6 mb-4">
                <h5>Working Hours</h5>
                <p>Monday - Friday</p>
                <p>9:00 AM - 6:00 PM</p>
                <h5>Let’s Join To Our Newsletters</h5>
                <form class="d-flex mt-2">
                    <input type="email" class="form-control me-2" placeholder="Enter your email"/>
                    <button type="submit" class="btn btn-success">Subscribe</button>
                </form>
            </div>
        </div>
        <div class="row mt-4 border-top pt-3">
            <div class="col-md-6 text-center text-md-start">
                <p class="mb-0">Copyright © 2024 DigiBox.Guru. All Rights Reserved.</p>
            </div>
            <div class="col-md-6 text-center text-md-end">
                <a href="#" class="text-white text-decoration-none me-3">Privacy Policy</a>
                <a href="#" class="text-white text-decoration-none">Terms & Conditions</a>
            </div>
        </div>
    </div>
</footer>

    </>
  )
}

export default Footer