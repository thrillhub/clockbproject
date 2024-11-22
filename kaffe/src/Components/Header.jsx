import React from 'react'
import Kaffe from '../assets/images/kaffe.png'

const Header = () => {
  return (
    <>
    <section className='header'>
    <div className='container-fluid'>
        <div className="row align-items-center">
            <div className="col-lg-2 d-flex justify-content-start">
                <img src={Kaffe} alt="Logo" className='img-fluid' style={{ maxWidth: '200px' }} />
            </div>

            <div className='col-lg-4'>
                <ul className='header__menu d-flex gap-3 align-items-center list-unstyled m-0'>
                    <li><a href="#" className='text-decoration-none text-black'>Brands</a></li>
                    <li><a href="#" className='text-decoration-none text-black'>Offers</a></li>
                    <li><a href="#" className='text-decoration-none text-black'>Buying Guide</a></li>
                    <li><a href="#" className='text-decoration-none text-black'>Gifts</a></li>
                </ul>
            </div>

            <div className='col-lg-3'>
                <div className='header__search'>
                    <input type="text" className='form-control' placeholder='Search' />
                </div>
            </div>

            <div className='col-lg-3'>
                <ul className='header__icons d-flex gap-3 align-items-center list-unstyled m-0'>
                    <li><a href="#" className='text-decoration-none text-black'><i className="fa fa-heart" aria-hidden="true"></i></a></li>
                    <li><a href="#" className='text-decoration-none text-black'><i className="fa fa-shopping-bag" aria-hidden="true"></i></a></li>
                    <li>
                        <a href="#" className='text-decoration-none btn btn-success px-3 py-1'>Sign in</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

    </>
  )
}

export default Header