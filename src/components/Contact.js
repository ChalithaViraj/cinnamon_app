import React, { Component } from 'react'


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
        )
    }
}

export default Contact
