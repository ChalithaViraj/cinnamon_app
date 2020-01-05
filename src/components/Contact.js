import React, { Component } from 'react'
import '../styles/contact.css';


export class Contact extends Component {

constructor(props) {
    super(props)

    this.state = {
         yourname:'',
         email:'',
         subject:'',
         message:''
    }
}

changeYourname = (event) => {
    this.setState ({
        yourname: event.target.value
    })
}

changeEmail = (event) => {
    this.setState ({
        email: event.target.value
    })
}

changeSubject = (event) => {
    this.setState ({
        subject: event.target.value
    })
}

changeMessage = (event) => {
    this.setState ({
        message: event.target.value
    })
}

handleClick = (event) => {
    alert(`Name - ${this.state.yourname}. Email- ${this.state.email}. Subject - ${this.state.subject} Messsage - ${this.state.message}.`)
    event.preventDefault ()
}

    render() {
        return (

            <div className="row">
                 <div className="col-lg-6 col-md-12">
                    <div className="jumbo_1">
                        <p className="jumbotron ">
                            <h5 >Cinnamon Sri Lanka</h5>
                                <dl>
                                    <dt >Address:</dt>
                                    <dd >798 South Park Avenue, Jaipur, Raj</dd>
                                </dl>
                                <dl>
                                    <dt >email:</dt>
                                    <dd><a href="mailto:#" >dkstudioin@gmail.com</a></dd>
                                </dl>
                                <dl >
                                    <dt>phones:</dt>
                                    <dd><a>+91 7568543012</a> <span>or</span> <a >+91 9571195353</a>
                                    </dd>
                                </dl>
                                <dl >
                                    <dt>fax:</dt>
                                    <dd><a>+91 7568543012</a></dd>
                                </dl>
                        </p>
                    </div>
                 </div>   
                <div className="col-lg-6 col-md-12">


            <form className="container" onSubmit={this.handleClick}>
                <div>
                    <h1 className="container" >Contact Us</h1>
                </div>
                    <div className="form-group">
                        <label>Your Name</label>
                        <input 
                            type='text' 
                            className="form-control"
                            value={this.state.yourname}
                            onChange={this.changeYourname}
                        />
                    </div>
                    <div className="form-group">
                        <label>Your Email</label>
                        <input 
                            type='email'
                            className="form-control" 
                            value={this.state.email}
                            onChange={this.changeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Subject</label>
                        <input 
                            type='text'
                            className="form-control" 
                            value={this.state.subject}
                            onChange={this.changeSubject}
                        />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            className="form-control"
                            value={this.state.message}
                            onChange={this.changeMessage}
                        />
                    </div>
                <button className="btn btn-outline-success">Send</button>
            </form>
            </div>
            </div>
            
        )
    }
}

export default Contact;
