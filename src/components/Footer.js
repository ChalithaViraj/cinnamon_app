import React, { Component } from 'react'
import '../styles/footer-style.css';

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer font-small blue panel-footer">
                    <div >

                        

                        <div className="row no-gutters social-container">
                            <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-facebook"></span><span>Facebook</span></a></div>
                            <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-instagram"></span><span>instagram</span></a></div>
                            <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-twitter"></span><span>twitter</span></a></div>
                            <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-youtube-play"></span><span>google</span></a></div>
                        </div>

                        <div className="footer-copyright text-center py-3">© 2019 Copyright :
                        <a href="https://mdbootstrap.com/education/bootstrap/"> Cinnamon Sri lanka</a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;

// footer link = https://bootsnipp.com/snippets/2eMK5