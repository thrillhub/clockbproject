import React from 'react';
import ptd1 from '../assets/images/ptd1.png';
import ptd2 from '../assets/images/ptd2.png';
import ptd3 from '../assets/images/ptd3.png';
import ptd4 from '../assets/images/ptd4.png';
import ptd5 from '../assets/images/ptd5.png';

function Categories() {
  return (
    <>
      <section>
        <h2 className="text-center text-black fw-bold mb-4">Categories</h2>
        <div className="container">
          <div className="row justify-content-center text-center g-2"> {/* Added gap-2 */}
            <div className="col-lg-4 col-sm-6">
              <img
                src={ptd1}
                alt=""
                className="img-fluid"
                style={{ objectFit: 'cover',  width: '100%' }}
              />
            </div>
            <div className="col-lg-4 col-sm-6">
              <img
                src={ptd2}
                alt=""
                className="img-fluid"
                style={{ objectFit: 'cover',  width: '100%' }}
              />
            </div>
            <div className="col-lg-4 col-sm-6">
              <img
                src={ptd3}
                alt=""
                className="img-fluid"
                style={{ objectFit: 'cover',  width: '100%' }}
              />
            </div>
          </div>
          <div className="row justify-content-center text-center g-2 mt-2">
            <div className="col-lg-6 col-sm-6">
              <img
                src={ptd4}
                alt=""
                className="img-fluid"
                style={{ objectFit: 'cover',  width: '100%' }}
              />
            </div>
            <div className="col-lg-6 col-sm-6">
              <img
                src={ptd5}
                alt=""
                className="img-fluid"
                style={{ objectFit: 'cover', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Categories;
