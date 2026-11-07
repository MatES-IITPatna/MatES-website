export const metadata = { title: 'Mates' }

export default function Page() {
  return (
    <main>
      
          <div id="preloader"></div>
          {/* Header section start */}
          <header className="header-other" id="navbar">
            <a href="/" className="logo-area">
              <img src="/img/Mlogo.webp" alt="" />
            </a>
            <div className="nav-switch">
              <i className="fa fa-bars"></i>
            </div>
      
            <nav className="nav-menu">
              <ul>
                  <li><a href="/">HOME</a></li>
                  <li><a href="/#about">ABOUT US</a></li>
                  <li><a href="/#events">EVENTS</a></li>
                  <li><a href="/gallery">GALLERY</a></li>
                  <li><a href="/team">TEAM</a></li>
              </ul>
            </nav>
          </header>
          {/* Header section end */}
      
          {/* Page header section start */}
          <section className="page-header-section" style={{ backgroundColor: "#f4f7fe" }}>
              <div className="team-container text-center">
                  <h1 className="header-title text-center" data-aos="fade-down">Our Team</h1>
              </div>
          </section>
          {/* Page header section end */}
          
          <section id="cards">
              <div className="container py-2" style={{ backgroundColor: "transparent" }}>
                  <div className="tile" id="tile-1">
                      {/*2023-24 */}
                      <div className="tab-content">
                          <div className="tab-pane fade show active" id="setting" role="tabpanel" aria-labelledby="setting-tab">
                              <h2 className="text-center my-4" data-aos="fade-up" data-aos-delay="100">Overall Club Coordinator</h2>
                              <div className="row d-flex justify-content-center">
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Coords/anand_kumar.jpg" alt="Anand Kumar" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Anand Kumar</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Organizer</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
      
                              <h2 className="text-center my-4" data-aos="fade-up">Committee Coordinators</h2>
                              <div className="row d-flex justify-content-around">
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Coords/abhijeet.jpg" alt="Abhijeet" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Abhijeet</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Events</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Coords/meghna.jpg" alt="Meghna" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Meghna</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Events</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Coords/akshaya.jpg" alt="Akshaya" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Akshaya</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Events</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Coords/lucky.jpg" alt="Lucky" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Lucky</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Events</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Coords/sanjay.jpg" alt="Sanjay" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Sanjay</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Events</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Coords/aman_manotar.jpg" alt="Aman Manotar" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Aman Manotar</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Media and public relations</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Coords/shailja.jpg" alt="Shailja" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Shailja</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Media and public relations</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Coords/deependra.jpg" alt="Deependra" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Deependra</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Media and public relations</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Coords/alok_kumar.jpg" alt="Alok Kumar" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Alok Kumar</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Media and public relations</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Coords/aditya_arekar.jpg" alt="Aditya Arekar" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Aditya Arekar</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Media and public relations</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Coords/shankhadeep.jpg" alt="Shankhadeep" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Shankhadeep</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Technical</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Coords/parnava.jpg" alt="Parnava" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Parnava</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Design</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Coords/bhuvaneshwar.jpg" alt="Bhuvaneshwar" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Bhuvaneshwar</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Design</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                        
                              <h2 className="text-center my-4" data-aos="fade-up">Committee Sub-Coordinators</h2>
                              <div className="row d-flex justify-content-around">
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/ayush_garg.jpg" alt="Ayush Garg" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Ayush Garg</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Events</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/lakshya_tiwari.jpg" alt="Lakshya Tiwari" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Lakshya Tiwari</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Events</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/mohak_dave.jpg" alt="Mohak Dave" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Mohak Dave</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Events</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/parijat_ghosh.jpg" alt="Parijat Ghosh" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Parijat Ghosh</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Events</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/ojal_tembhurne.jpg" alt="Ojal Tembhurne" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Ojal Tembhurne</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Events</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/tanish_prakash.jpg" alt="Tanish Prakash" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Tanish Prakash</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Events</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/ritika_verma.jpg" alt="Ritika Verma" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Ritika Verma</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Events</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/manda_ashrith_narayana.jpg" alt="Manda Ashrith Narayana" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Manda Ashrith Narayana</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Events</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                            
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/riya_kedia.jpg" alt="Riya Kedia" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Riya Kedia</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Media and public relations</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/divyansh_kaushik.jpg" alt="Divyansh Kaushik" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Divyansh Kaushik</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Media and public relations</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/krish_kumar.jpg" alt="Krish Kumar" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Krish Kumar</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Media and public relations</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/susankrit_kumar_jha.jpg" alt="Susankrit Kumar Jha" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Susankrit Kumar Jha</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Media and public relations</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/nishant_chaudhary.jpg" alt="Nishant Chaudhary" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Nishant Chaudhary</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Media and public relations</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/sanyam_gocher.jpg" alt="Sanyam Gocher" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Sanyam Gocher</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Media and public relations</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/jayendra_singh.jpg" alt="Jayendra Singh" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Jayendra Singh</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Technical</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/anshul_kumar.jpg" alt="Anshul Kumar" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Anshul Kumar</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Technical</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/shikhar_nayak.jpg" alt="Shikhar Nayak" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Shikhar Nayak</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Technical</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/vaibhav_kumar.jpg" alt="Vaibhav Kumar" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Vaibhav Kumar</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Technical</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/aditya_prakash.jpg" alt="Aditya Prakash" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Aditya Prakash</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Design</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/pachava_shalini.jpg" alt="Pachava Shalini" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Pachava Shalini</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Design</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-lg-3 col-md-6 col-sm-6" style={{ display: "flex", justifyContent: "center" }} data-aos="fade-up" data-aos-delay="200">

                                      <div className="our-team">
                                          <div className="pic"><img src="/img/Subcoords/soni_pal.jpg" alt="Soni Pal" /></div>

                                          <div className="team-content"><h3 className="title" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Soni Pal</h3><span className="post" style={{ opacity: 1, visibility: "visible", transform: "none",display: "block",position: "relative",zIndex: 10 }}>Design</span></div>

                                          <ul className="social">
                                              <li className="d-flex flex-row justify-content-around align-item-center">
                                                  <a href="#"><i className="fa fs-2 fa-envelope"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-linkedin"></i></a>
                                                  <a href="#" target="_blank"><i className="fa fs-2 fa-instagram"></i></a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      
          {/* Footer section start */}
          <footer>
              {/* Grid container */}
              <div className="container">
                {/*Grid row*/}
                <div className="row">
                  {/*Grid column*/}
                  <div className="brief-info col-lg-4 col-md-12 col-sm-12">
                    <img loading="lazy" src="/img/Mlogo.webp" alt="white logo" width="200" />
                    <p>Materials Engineering Society (MatES), IIT PATNA is an association of UG & PG students, college faculty and staff of the Department of Metallurgical and Materials Engineering of IIT Patna.</p>
                    
                    <div className="social-icons col-lg-4 col-md-12 col-sm-12">
                      <h5>Follow Us!</h5>
                      <ul className="social-network social-circle">
                        <li><a href="https://www.facebook.com/MatES.IITP" className="fa fa-facebook" title="Facebook" target="_blank"><i className="icofont-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/mates__iitp/?hl=en" className="fa fa-instagram" title="Instagram" target="_blank"><i className="icofont-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/company/mates-materials-engineering-society-iit-patna/mycompany/" className="fa fa-linkedin" title="Linkedin" target="_blank"><i className="icofont-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="link-section row col-lg-4 col-md-12 col-sm-12">
                    {/*Grid column*/}
                    <div className="links col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <h6 className="text-uppercase">Quick Links</h6>
                      <ul className="list-unstyled mb-0">
                        <li><a href="/" id="text-dark">MatES</a></li>
                        <li><a href="/#about">About Us</a></li>
                        <li><a href="/#events" id="text-dark">Events</a></li>
                        <li><a href="/gallery" id="text-dark">Gallery</a></li>
                        <li><a href="/team" id="text-dark">Team</a></li>
                      </ul>
                    </div>
                    {/*Grid column*/}
                  </div>
                  
                  <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <div id="map">
                      <h6 className="text-uppercase">Visit Our Campus</h6>
                      <iframe loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14399.37835508978!2d84.8434447170254!3d25.54355318850096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d567a193702ff%3A0xc9c527c7faec3056!2sIIT+Patna+Administration+Block!5e0!3m2!1sen!2sin!4v1539177184721" width="350px" height="300px" frameBorder="0" style={{ borderRadius: "5px" }} allowFullScreen></iframe>
                    </div>
                  </div>
                </div>
                
                {/* Copyright */}
                {/*Grid row*/}
                <div className="copyright-text row">
                  <div className="credits col-sm-12">
                    <span style={{ fontWeight: "100" }}>&copy; Copyright <span style={{ fontWeight: "600" }}>MatES, IIT Patna.</span></span>
                    <span className="credit-N-M">Developed by MatES Technical Committee.&#9829;</span>
                  </div>
                </div>
              </div>
              {/* Grid container */}
          </footer>
          {/* Footer section end */}
        
    </main>
  )
}
