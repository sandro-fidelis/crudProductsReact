import React ,{ Component }from "react";

import Header from "./components/Header";
import ProductBox  from "./components/Products"

class App extends Component{
  render (){
    return(
      <div className="container">
        <Header title="Produtos App"/>
        <br />
        <ProductBox />
      </div>
    );
  }
}

export default App;