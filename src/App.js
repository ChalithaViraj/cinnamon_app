import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';
import Home from './components/Home';
import History from './components/History';
import Prices from './components/Prices';
import Uses from './components/Uses';
import Contact from './components/Contact';
import './styles/app.css';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
    <Router>
        <div >
          <div className="jumbotron jumbotron-fluid " className="jumbo" >
            <div className="header">
              <h1 className='title'>CINNAMON SRI LANKA</h1>
              <p className='subtitle'>Captivated the minds and the hearts of civilisations !</p> 
            </div>
          </div>
          
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark" >
          <a class="navbar-brand" href="/">
            <img src="http://www.cinnamonsally.com/wp-content/uploads/2019/03/CS_logo2101.png" width="60" height="50"/>
          </a>
          
          <ul className="navbar-nav ml-auto"> 
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li ><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/history'} className="nav-link">History</Link></li>
            <li><Link to={'/prices'} className="nav-link">Prices</Link></li>
            <li><Link to={'/uses'} className="nav-link">Uses</Link></li>
          </ul>
          </nav>
          
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/history' component={History} />
              <Route path='/prices' component={Prices} />
              <Route path='/uses' component={Uses} />
          </Switch>
          
          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;