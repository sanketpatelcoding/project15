
import './App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

//import './components/Navbar'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Edit from './components/Edit';
import Detail from './components/Detail';
import Register from './components/Register';
import {Switch, Route} from 'react-router-dom'

/// ...

function App() {
  return (
    <>
   

    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/edit/:id" component={Edit} />
      <Route exact path="/viewInfo/:id" component={Detail} />
      
    </Switch>
    </>
  );
}

export default App;
