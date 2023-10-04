import './App.css';
import AboutMe from './components/AboutMe';
import Hero from './components/Hero';
import Project from './components/Project'


import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';

// import Header from './components/Header';

function App() {
  return (
    <>
    <div class='App'>
        <Router>
         
          {/* <Header/> */}
          {/* <Hero/> */}
        
            <Switch>
              <Route exact path='/' component={Hero}/>
              <Route path='/aboutme' component={AboutMe}/>
              <Route path='/project' component={Project}/>

            </Switch>    
            
          
        
        </Router>
       
    </div>
      
    </>
  );
}

export default App;