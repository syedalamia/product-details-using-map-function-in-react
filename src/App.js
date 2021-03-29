import React, { useState } from "react";
import "./App.css";
import ProductDEtails from "./components/ProductDEtails";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import Menu from "./components/Menu";
import IndividualProduct from "./components/IndividualProduct";

function App() {
  const [productValue, setProductValue] = useState([{}]);

  let history = useHistory();

  const updatingvalue = (updatedValue, myPath) => {
    setProductValue(updatedValue);

    if (updatedValue !== 0) {
      console.log("value of the helping is", myPath);
      history.push(`/singlepath/${myPath}`);
    }
  };

  return (
    <div>
      <Router>
        <Menu />
        <Switch>
          <div className="App">
            <Route exact path={"/"}>
              <p>my home</p>
            </Route>

            <Route exact path={"/productdetail"}>
              <p>product details</p>
              <ProductDEtails passingFunction={updatingvalue} />
            </Route>

            <Route exact path="/singlepath/:id">
              <IndividualProduct selecteduser={productValue} />
            </Route>

            <Route exact path={"/404"}>
              <p>hey!not found pls write correct url</p>
            </Route>

            <Route path={"*"} render={() => <Redirect to={"/404"} />} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
