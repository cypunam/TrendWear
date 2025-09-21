import React from "react";

export default function BootstrapExample() {
    let data = [
        { id: 1001, name: "Product1", basePrice: 2501, discount: 50, finalPrice: 1250, pic: "/Images/p1.jpg" },
        { id: 1002, name: "Product2", basePrice: 2502, discount: 50, finalPrice: 1250, pic: "/Images/p2.jpg" },
        { id: 1003, name: "Product3", basePrice: 2503, discount: 50, finalPrice: 1250, pic: "/Images/p3.jpg" },
        { id: 1004, name: "Product4", basePrice: 2504, discount: 50, finalPrice: 1250, pic: "/Images/p4.jpg" },
        { id: 1005, name: "Product5", basePrice: 2505, discount: 50, finalPrice: 1250, pic: "/Images/p5.jpg" },
        { id: 1006, name: "Product6", basePrice: 2506, discount: 50, finalPrice: 1250, pic: "/Images/p6.jpg" }
    ];

    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg background">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>

                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            {/* Carousel */}
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/Images/p7.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/Images/p8.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/Images/p9.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/Images/p10.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/Images/p8.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/Images/p7.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button"
                    data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button"
                    data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Product Cards */}
            <div className="container-fluid my-3">
                <h5 className="background text-light text-center p-2">Our Products</h5>
                <div className="row">
                    {data.map(item => (
                        <div className="col-md-4 mb-3" key={item.id}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={item.pic} className="card-img-top" alt={item.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text ">
                                        <del className="text-muted">&#8377;{item.basePrice}</del>{" "}
                                        <span className="fw-bold text-success">&#8377;{item.finalPrice}</span>
                                    </p>
                                    <p className="text-danger fw-semibold">{item.discount}% OFF</p>
                                    <a href="#" className="btn btn-primary">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}












/*
CSS Property                                   Bootstrap Class
text-align:left                                text-start
text-align:right                               text-end
text-align:justify                             text-justify
text-align:center                              text-center

display:block                                  d-block
display:inline                                 d-inline
display:none                                   d-none
display:inline-block                           d-inline-block

display:flex                                  d-flex
flex-direction:row                            flex-row
flex-direction:row-reverse                    flex-row-reverse
flex-direction:column                         flex-column
flex-direction:column-revers                  flex-column-revers

justify-content:space-around                  justify-content-around
justify-content:space-between                 justify-content-between
justify-content:space-evenly                  justify-content-evenly
justify-content:flex-start                    justify-content-start
justify-content:flex-end                      justify-content-end
justify-content:center                        justify-content-center

position:static                               position-static
position:relative                             position-relative
position:absolute                             position-absolute
position:sticky                               position-sticky
position:fixed                                position-fixed
top:100px                                     top-0 top-50 top-100
bottom:100px                                  bottom-0 top-50 top-100
left:100px                                    left-0 top-50 top-100
right:100px                                   right-0 top-50 top-100


padding:10px                                  p-1 p-2 p-3 p-4 p-5
padding-top:10px                              pt-1 pt-2 pt-3 pt-4 pt-5
padding-bottom:10px                           pb-1 pb-2 pb-3 pb-4 pb-5
padding-left:10px                             ps-1 ps-2 ps-3 ps-4 ps-5
padding-right:10px                            pe-1 pe-2 pe-3 pe-4 pe-5
padding:10px 0                                py-1 py-2 py-3 py-4 py-5
padding:0 10px                                px-1 px-2 px-3 px-4 px-5

margin:10px                                   m-1 m-2 m-3 m-4 m-5
margin-top:10px                               mt-1 mt-2 mt-3 mt-4 mt-5
margin-bottom:10px                            mb-1 mb-2 mb-3 mb-4 mb-5
margin-left:10px                              ms-1 ms-2 ms-3 ms-4 ms-5
margin-right:10px                             me-1 me-2 me-3 me-4 me-5
margin:10px 0                                 my-1 my-2 my-3 my-4 my-5
margin:0 10px                                 mx-1 mx-2 mx-3 mx-4 mx-5
margin:auto                                   m-auto

width:100%                                    w-100 w-75 w-50 w-25
font-size:10px                                fs-1 fs-2 fs-3 fs-4 fs-5

                                              btn btn-primary btn-secondary btn-info
                                              btn-success btn-danger btn-warning
                                              btn-light btn-dark btn-link

background-color:red                          bg-primary bg-secondary bg-info bg-success
                                              bg-dark bg-light bg-warning bg-danger

color:red                                    text-primary text-secondary text-info
                                             text-dark text-light text-warning
                                             text-danger


                                             form-control  form-select

                                            border border-1 border-2 border-3 border-4
                                            border-5 bordrr-primary border-secondary
                                            border-info border-dark border-light
                                            border-warning border-danger

border-radius:50%                           rounded rounded-top rounded-end
                                            rounded-bottom rounded-start rounded-circle
                                            rounded-pill

float-left                                 float-start
flot-right                                 float-end
                                          etc
*/



/*




{/*    
Bootcamp Grid System:
row = 12 columns



Breakpoint                   Class infix dimensions
X-Small                      None         <576px>
Small                        sm           >576px
Medium                       md           >768px
Large                        lg           >992px
Extra large                  xl           >1200px
Extra extra large            xxl          >1400px


<div className="row">
    <div className="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
        --------
        Element
        --------
    </div>
</div>

col-lg-3 i.e in xxl xl and lg screen, 4 items in a row
col-sm-6 i.e in md xl and sm screen, 2 items in a row
         and default for X-small, 1 item in a row   
   */
