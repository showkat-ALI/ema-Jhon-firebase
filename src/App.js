import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import OrderReview from "./components/OrderReview/OrderReview";
import Inventory from "./components/Inventory/Inventory";
import Notfound from "./components/Notfound/Notfound";
import Login from "./components/LogIN/Login";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder"
import Signup from "./components/Registration/Signup";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
    <AuthProvider>
    <Router>
      <Header></Header>

        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/order-review">
            <OrderReview></OrderReview>
          </Route>
          <PrivateRoute path="/inventory">
            <Inventory></Inventory>
          </PrivateRoute>

          <PrivateRoute path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>

            </Route>
            {/* <Route path="/signup">
              <Signup></Signup>
              </Route> */}
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>

    </AuthProvider>
          </div>
  );
}

export default App;
