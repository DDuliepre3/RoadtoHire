import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopBar from "./components/constant/header";
import BottomBar from "./components/constant/footer";
import Homepage from "./components/home";
import Products from "./components/products";
import Contact from "./components/contact";
import ErrorPath from "./components/error";
import Callback from "./callback";
import Admin from "./components/Admin/admin";
import SecuredRoute from "./securedRoute/securedRoute.js";

import "./assets/css/app.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      filteredProducts: [],
      filters: {
        brand: {
          playstation: true,
          xbox: true,
          nintendo: true
        }
      },
      adminIsSwitched: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:7272/products")
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          products: json,
          filteredProducts: json
        });
      })
      .catch(err => console.log(err));
  }

  adminSwitch() {
    let SwitchAdmin = !this.state.adminIsSwitched;
    this.setState({
      adminIsSwitched: SwitchAdmin
    });
  }

  handleChange(type) {
    var allProducts = this.state.products;
    var productFilter;

    if (type === "playstation") {
      productFilter = allProducts.filter(function(allProducts) {
        return allProducts.productCategory === "PlayStation";
      });
      this.setState({ filteredProducts: productFilter });
    } else if (type === "xbox") {
      productFilter = allProducts.filter(function(allProducts) {
        return allProducts.productCategory === "Xbox";
      });
      this.setState({ filteredProducts: productFilter });
    } else if (type === "nintendo") {
      productFilter = allProducts.filter(function(allProducts) {
        return allProducts.productCategory === "Nintendo";
      });
      this.setState({ filteredProducts: productFilter });
    } else if (type === "reset") {
      document.querySelector('input[value="playstation"]').checked = false;
      document.querySelector('input[value="xbox"]').checked = false;
      document.querySelector('input[value="nintendo"]').checked = false;
      this.setState({ filteredProducts: allProducts });
    }
  }

  onChangeFilter = e => {
    console.log(e);
    let results = this.getFilteredByBrand(this.state.products);
    results = this.getFilteredByPrice(results);

    this.setState({
      filterArray: results
    });
  };

  // Allows product to be added without refreshing the page
  onAddProduct = p => {
    this.setState({
      products: [...this.state.products, p]
    });
  };
  // Allows product to be edited without refreshing the page
  onEditProduct = p => {
    let newProducts = [...this.state.products];
    const i = newProducts.findIndex(product => product._id === p._id);
    newProducts.splice(i, 1, p);
    this.setState({
      products: newProducts
    });
  };
  // Allows product to be deleted without refreshing the page
  onDeleteProduct = id => {
    let newProducts = [...this.state.products];
    const i = newProducts.findIndex(product => product._id === id);
    newProducts.splice(i, 1);
    this.setState({
      products: newProducts
    });
  };

  render() {
    console.log(this.state);
    let shownGameConsoles = [];
    if (this.state.filteredProducts.length === 0) {
      shownGameConsoles = this.state.products;
    } else {
      shownGameConsoles = this.state.filteredProducts;
    }
    console.log("Game Consoles getting rendered:", shownGameConsoles);
    return (
      <div>
        <BrowserRouter>
          <div>
            <TopBar />

            <Switch>
              <Route path="/" component={Homepage} exact />
              <Route
                path="/Products"
                render={() => (
                  <Products
                    shownGameConsoles={shownGameConsoles}
                    handleChange={this.handleChange}
                  />
                )}
              />
              <Route path="/contact" component={Contact} />
              <SecuredRoute
                path="/admin"
                Component={Admin}
                state={this.state}
                shownGameConsoles={shownGameConsoles}
              />

              <Route path="/" component={Callback} />

              <Route component={ErrorPath} />
            </Switch>

            <BottomBar />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;