import React from "react";
import Lightbox from "bs5-lightbox";

function Samples({ items }) {
  const onClick = e => {
    e.preventDefault();
    const el = e.target;
    const lightbox = new Lightbox(el);
    lightbox.show();
    console.log(el);
  };
  return (
    <section id='samples' className='p-lg-4'>
      <div className='card bg-transparent p-4 border-0'>
        <div className='card-header bg-dark py-3 px-0'>
          <h6 className='fw-bold m-0'>
            <strong>Samples</strong>
          </h6>
        </div>
        <div className='card-body px-0'>
          <div>
            <ul className='nav nav-pills nav-fill' role='tablist'>
              <li className='nav-item' role='presentation'>
                <a
                  className='nav-link active'
                  role='tab'
                  data-bs-toggle='pill'
                  href='#tab-1'>
                  Screenshots
                </a>
              </li>
              <li className='nav-item' role='presentation'>
                <a
                  className='nav-link'
                  role='tab'
                  data-bs-toggle='pill'
                  href='#tab-2'>
                  Videos
                </a>
              </li>
              <li className='nav-item' role='presentation'>
                <a
                  className='nav-link'
                  role='tab'
                  data-bs-toggle='pill'
                  href='#tab-3'>
                  Live
                </a>
              </li>
            </ul>
            <div className='tab-content'>
              <div
                className='tab-pane active'
                role='tabpanel'
                id='tab-1'>
                <div className='row photos gallery'>
                  {items
                    ? items.data.map(item => (
                        <div
                          key={item.id}
                          className='col-sm-6 col-md-4 col-lg-3 item'>
                          <a
                            data-toggle='lightbox'
                            data-gallery={item.type}
                            onClick={onClick}
                            href={item.link}
                            data-caption='This describes the image'>
                            <img
                              alt='alt-text'
                              className='img-fluid'
                              style={{
                                pointerEvents: "none",
                              }}
                              src={item.thumb}
                            />
                          </a>
                        </div>
                      ))
                    : "Loading"}
                </div>
              </div>
              <div className='tab-pane' role='tabpanel' id='tab-2'>
                <div
                  className='row photos gallery'
                  data-bss-baguettebox=''>
                  <div className='col-sm-6 col-md-4 col-lg-3 item'>
                    <a
                      href='https://youtu.be/xRhhd14-SCw'
                      target='_blank'
                      rel='noopener noreferrer'>
                      <img
                        alt='alt-text'
                        className='img-fluid'
                        src='./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f'
                      />
                    </a>
                  </div>
                  <div className='col-sm-6 col-md-4 col-lg-3 item'>
                    <a href='./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8'>
                      <img
                        alt='alt-text'
                        className='img-fluid'
                        src='./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8'
                      />
                    </a>
                  </div>
                  <div className='col-sm-6 col-md-4 col-lg-3 item'>
                    <a href='./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c'>
                      <img
                        alt='alt-text'
                        className='img-fluid'
                        src='./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c'
                      />
                    </a>
                  </div>
                  <div className='col-sm-6 col-md-4 col-lg-3 item'>
                    <a href='./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8'>
                      <img
                        alt='alt-text'
                        className='img-fluid'
                        src='./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8'
                      />
                    </a>
                  </div>
                  <div className='col-sm-6 col-md-4 col-lg-3 item'>
                    <a href='./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c'>
                      <img
                        alt='alt-text'
                        className='img-fluid'
                        src='./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c'
                      />
                    </a>
                  </div>
                  <div className='col-sm-6 col-md-4 col-lg-3 item'>
                    <a href='./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f'>
                      <img
                        alt='alt-text'
                        className='img-fluid'
                        src='./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f'
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className='tab-pane' role='tabpanel' id='tab-3'>
                <div
                  className='row photos gallery'
                  data-bss-baguettebox=''>
                  <div className='col-sm-6 col-md-4 col-lg-3 item'>
                    <a href='./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f'>
                      <img
                        alt='alt-text'
                        className='img-fluid'
                        src='./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f'
                      />
                    </a>
                  </div>
                  <div className='col-sm-6 col-md-4 col-lg-3 item'>
                    <a href='./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8'>
                      <img
                        alt='alt-text'
                        className='img-fluid'
                        src='./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8'
                      />
                    </a>
                  </div>
                  <div className='col-sm-6 col-md-4 col-lg-3 item'>
                    <a href='./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c'>
                      <img
                        alt='alt-text'
                        className='img-fluid'
                        src='./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c'
                      />
                    </a>
                  </div>
                  <div className='col-sm-6 col-md-4 col-lg-3 item'>
                    <a href='./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8'>
                      <img
                        alt='alt-text'
                        className='img-fluid'
                        src='./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8'
                      />
                    </a>
                  </div>
                  <div className='col-sm-6 col-md-4 col-lg-3 item'>
                    <a href='./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c'>
                      <img
                        alt='alt-text'
                        className='img-fluid'
                        src='./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c'
                      />
                    </a>
                  </div>
                  <div className='col-sm-6 col-md-4 col-lg-3 item'>
                    <a href='./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f'>
                      <img
                        alt='alt-text'
                        className='img-fluid'
                        src='./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f'
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Samples;
