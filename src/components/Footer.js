import React, { Component } from 'react'
import '../styles/footer-style.css';


export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer font-small blue panel-footer">
                
                    <div >
                    <div className="container">
                    <div className="row row-30">
                        <div className="col-md-4 col-xl-5">
                            <div className="font-color">
                            <p>
                            We are an award-winning creative agency, dedicated to the best result in web design, 
                            promotion, business consulting, and marketing.</p>

                            <p>©  2019 Waves. All Rights Reserved.</p>

                            <a href="https://www.facebook.com/" className="fa fa-facebook"></a>
                            <a href="https://twitter.com/?logout=1563428435308" className="fa fa-twitter"></a>
                            <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
                            <a href="https://lk.linkedin.com/" className="fa fa-linkedin"></a>
                            <a href="https://www.youtube.com/" className="fa fa-youtube"></a>

                            </div>
                        </div>
            

                        <div className="col-md-4">
                            <h5 className="font-color">Contacts</h5>
                                <dl>
                                    <dt className="contact-list">Address:</dt>
                                    <dd className="contact-detail">798 South Park Avenue, Jaipur, Raj</dd>
                                </dl>
                                <dl>
                                    <dt className="contact-list">email:</dt>
                                    <dd><a href="mailto:#" className="contact-detail">dkstudioin@gmail.com</a></dd>
                                </dl>
                                <dl className="contact-list">
                                    <dt>phones:</dt>
                                    <dd><a href="tel:#" className="contact-detail">+91 7568543012</a> <span>or</span> <a href="tel:#" className="contact-detail">+91 9571195353</a>
                                    </dd>
                                </dl>
                        </div>

                        <div className="col-md-4 col-xl-3 link">
                            <h5 className="font-color">Links</h5>
                                <ul className="nav-list" >
                                    <li ><a href="/" className="contact-detail">Home</a></li>
                                    <li><a href="/contact" className="contact-detail">contact</a></li>
                                    <li><a href="/history" className="contact-detail">History</a></li>
                                    <li><a href="/prices" className="contact-detail">Prices</a></li>
                                    <li><a href="/uses" className="contact-detail">Uses</a></li>
                                </ul>
                        </div>
                        </div>
                        </div>
                        
                        <hr className="hr container"/>

                        <p className="footer-text">Cinnamon Sri Lanka ©  2019</p>

                        {/* <div className="row no-gutters social-container">
                            <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-facebook"></span><span>Facebook</span></a></div>
                            <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-instagram"></span><span>instagram</span></a></div>
                            <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-twitter"></span><span>twitter</span></a></div>
                            <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-youtube-play"></span><span>google</span></a></div>
                        </div> */}

                        {/* <div className="footer-copyright text-center py-3">© 2019 Copyright :
                        <a href="https://mdbootstrap.com/education/bootstrap/"> Cinnamon Sri lanka</a>
                        </div> */}
                        
                    </div>
                    
                </footer>
            </div>
        )
    }
}

export default Footer;

// footer link = https://bootsnipp.com/snippets/2eMK5