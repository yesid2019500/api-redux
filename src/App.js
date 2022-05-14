
import './App.css';
import Header from './containers/Header';
import { BrowserRouter  as Router,  Switch,  Route, Redirect } from 'react-router-dom'
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={ProductListing } />
          <Route path="/product/:productId" component={ ProductDetails } />
          {/* <Redirect to='/' /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
