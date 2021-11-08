import logo from './logo.svg';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import Navbar from "./components/navbar.component";
import ShopList from "./components/shop-list.component";
import EditShop from "./components/edit-shop.component";
import CreateShop from "./components/create-shop.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={ShopList}></Route>
      <Route path="edit/:id" exact component={EditShop}></Route>
      <Route path="/create" exact component={CreateShop}></Route>
      <Route path="/user" exact component={CreateUser}></Route>
    </Router>
  );
}

export default App;
