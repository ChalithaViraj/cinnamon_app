import React, { Component } from 'react'
import '../styles/home.css';



export class Home extends Component {
    render() {
        return (
            <div>


                <div className="row">
                    <div className="col-4">
                        <img src="https://static1.squarespace.com/static/598cb1f6a5790abbb451e099/t/5ba06eec4ae2370d2e203866/1540165272649/cinnamon+packing.jpg" class="rounded" alt="Cinque Terre" width="500" height="300" className="img-style"/>
                    </div>
                    <div className="col-8">
                        <div className="jumbotron jumbotron-fluid " className="jumbo2" >
                            <h1 className="jumbo_text_head">HISTORY</h1>      
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, 
                                venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus 
                                elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, 
                                enim. Aliquam lorem ante, dapibus in, viver </p>
                            <a className="btn btn-primary btn-lg" href="./history" role="button">Read more</a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4">
                        <img src="https://www.thespruceeats.com/thmb/9_J6AvSRaloTw1WrboBJv5B18-c=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-486047135-583e221f5f9b58d5b193c7d7.jpg" class="rounded" alt="Cinque Terre" width="500" height="300" className="img-style"/>
                    </div>
                    <div className="col-8">
                        <div className="jumbotron jumbotron-fluid" className="jumbo2">
                            <h1 className="jumbo_text_head">USES</h1>      
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, 
                                venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus 
                                elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, 
                                enim. Aliquam lorem ante, dapibus in, viver</p>
                            <a className="btn btn-primary btn-lg" href="./uses" role="button">Read more</a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4">
                        <img src="https://i.ytimg.com/vi/6ArUsaYJ68A/maxresdefault.jpg" class="rounded" alt="Cinque Terre" width="500" height="300" className="img-style" /> 
                    </div>
                    <div className="col-8">
                        <div className="jumbotron jumbotron-fluid" className="jumbo2" >
                            <h1 className="jumbo_text_head">PRICES</h1>      
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, 
                                venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus 
                                elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, 
                                enim. Aliquam lorem ante, dapibus in, viver</p>
                            <a className="btn btn-primary btn-lg" href="./prices" role="button">Read more</a>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default Home
