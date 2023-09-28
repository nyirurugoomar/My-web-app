import './App.css';
import Hero from './components/Hero';


// import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
// import Header from './components/Header';

function App() {
  return (
    <>
    <div class='App'>
        {/* <Router> */}
         
          {/* <Header/> */}
          <Hero/>
            {/* <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/aboutus' component={About}/>
              <Route path='/services' component={Services}/>
              <Route path='/news' component={News}/>  
            </Switch>    
          <Footer/> */}
        
        {/* </Router> */}
    </div>
      
    </>
  );
}

export default App;