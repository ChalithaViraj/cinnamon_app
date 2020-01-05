import React, { Component } from 'react'
import '../styles/prices.css';

export class Prices extends Component {
    render() {
        return (
            <div>
               <h1 className="prices-head"> Prices of Cinnamon </h1>
                <div className="row">

                    <div className="col-lg-4 col-md-6" >
                        <div className="card style-card prices-image" >
                            <img className="card-img-top radius" src="http://www.cinnatopia.com/wp-content/uploads/2015/01/01301-370x247.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">M4</h5>
                                <p className="card-text">1KG = Rs.1900/=</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" >
                        <div className="card style-card prices-image" >
                            <img className="card-img-top radius" src="http://www.cinnatopia.com/wp-content/uploads/2015/01/01301-370x247.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">M5</h5>
                                <p className="card-text">1KG = Rs.1300/=</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" >
                        <div className="card style-card prices-image" >
                            <img className="card-img-top radius" src="http://www.cinnatopia.com/wp-content/uploads/2015/01/01301-370x247.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">ALBA</h5>
                                <p className="card-text">1KG = Rs.3000/=</p>
                            </div>
                        </div>
                    </div>
                    
               

                    <div className="col-lg-4 col-md-6" >
                        <div className="card style-card prices-image" >
                            <img className="card-img-top radius" src="http://www.cinnatopia.com/wp-content/uploads/2015/01/01301-370x247.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">C4</h5>
                                <p className="card-text">1KG = Rs.3500/=</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" >
                        <div className="card style-card prices-image" >
                            <img className="card-img-top radius" src="http://www.cinnatopia.com/wp-content/uploads/2015/01/01301-370x247.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">C5</h5>
                                <p className="card-text">1KG = Rs.4000/=</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" >
                        <div className="card style-card prices-image" >
                            <img className="card-img-top radius" src="http://www.cinnatopia.com/wp-content/uploads/2015/01/01301-370x247.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">C5 Special</h5>
                                <p className="card-text">1KG = Rs.5500/=</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Prices
