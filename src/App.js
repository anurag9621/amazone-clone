import React, { useEffect }  from "react"

import Home from './pages/Home'
import Cart from "./pages/Cart"
import Payment from "./pages/Payment"
import Register from "./pages/Register"
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { auth } from './server/firebase';
import { useStateValue } from "./server/StateProvider";
import Login from "./pages/Login";
import Alltest from "./pages/Alltest"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Electeic from "./pages/Electeic"
import Homepro from "./pages/Homepro"
const promise = loadStripe
  ('pk_test_51J8BwESGCmW5QCNCukqna8bVUwhYTtgLXHNIt72GzKzMYtM0BhjOVM7sY5jdew3VbDfKtJBZ6cACf5rsvvMPP2wq005cDAW5uH'
  )
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div>
    <BrowserRouter>
     <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/cart" component={Cart} />
     <Route exact path="/login" component={Login} />
     <Route exact path="/register" component={Register} />
     <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            </Route>
          <Route exact path="/all" component={Alltest} />
     <Route exact path="/electeic" component={Electeic} />
     <Route exact path="/homeeq" component={Homepro} />
          
      
         
        </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App
