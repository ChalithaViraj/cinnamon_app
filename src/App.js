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
          
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">Cinnamon</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link to={'/'} className="nav-link"> Home</Link>
              </li>
              <li class="nav-item">
                <Link to={'/contact'} className="nav-link">Contact</Link>
              </li>
              <li class="nav-item">
                <Link to={'/history'} className="nav-link">History</Link>
              </li>
              <li class="nav-item">
                <Link to={'/prices'} className="nav-link">Prices</Link>
              </li>
              <li class="nav-item">
                <Link to={'/uses'} className="nav-link">Uses</Link>
              </li>
            </ul>
          </div>
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

// <nav className="navbar navbar-expand-sm bg-dark navbar-dark" >
//           <a class="navbar-brand" href="/">
//             <img src="http://www.cinnamonsally.com/wp-content/uploads/2019/03/CS_logo2101.png" width="60" height="50"/>
//           </a>
          
//           <div id="navbarNav">
//             <ul className="navbar-nav ml-auto"> 
//               <li><Link to={'/'} className="nav-link"> Home </Link></li>
//               <li ><Link to={'/contact'} className="nav-link">Contact</Link></li>
//               <li><Link to={'/history'} className="nav-link">History</Link></li>
//               <li><Link to={'/prices'} className="nav-link">Prices</Link></li>
//               <li><Link to={'/uses'} className="nav-link">Uses</Link></li>
//             </ul>
//           </div>
//           </nav>