import React, { Component } from "react";
import _ from "underscore";

const products =
[
  { "decathlon_id": 8282689, "title": "Corne chasse 14cm", "price": 9.99 },
  { "decathlon_id": 8354464, "title": "Basic L print Long Gold Fusion", "price": 9.99 },
  { "decathlon_id": 8380024, "title": "RUN ELIOPRIME", "price": 54.99 },
  { "decathlon_id": 8379970, "title": "Pantalon Gym", "price": 12.99 },
  { "decathlon_id": 8247793, "title": "PALMES WADERS", "price": 24.99 },
  { "decathlon_id": 8357549, "title": "MINIMIZER EDEN UNI  NOIR", "price": 19.99 },
  { "decathlon_id": 8326155, "title": "Pantalon Training mesh marine", "price": 44.99 },
  { "decathlon_id": 8329121, "title": "COUTEAU A PALOURDES", "price": 4.99 },
  { "decathlon_id": 8370749, "title": "Doudoune Hike 100 garçon bleu", "price": 9.99 },
  { "decathlon_id": 8298354, "title": "OREILLER CONFORT", "price": 6.99 },
  { "decathlon_id": 8044622, "title": "2 guêtres RIDING noir", "price": 14.99 },
  { "decathlon_id": 8249674, "title": "BOBINE FUN 2 3 4mm X 40 20 12m", "price": 6.99 },
  { "decathlon_id": 8353265, "title": "Justaucorps manche longue Gym.", "price": 34.99 }
]
let i=0;
let j=0;
let k=0;


// Each elements in the header of this table must be clickable and change the order of the dataset.
// One click will sort those data by this column, another click will sort them by this column but in reverse.

function Tableline(props) {
  return (
    <tr>
    <td>{props.decathlon_id}</td>
    <td>{props.title}</td>
    <td>{props.price}</td>
    </tr>
  );
}

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {product: products}
  }

  sortid() {
  if (i===0){
  this.setState({product: _.sortBy(this.state.product,"decathlon_id")})
  i=1;
  }
  else {
  i=0;
  j=0;
  k=0;
  this.setState({product: this.state.product.reverse()})
  }
  }

  sorttitle() {
    if (j===0){
    this.setState({product: _.sortBy(this.state.product,"title")})
    j=1;
    }
    else {
    j=0;
    i=0;
    k=0;
    this.setState({product: this.state.product.reverse()})
    }  }

  sortprice() {
    if (k===0){
    this.setState({product: _.sortBy(this.state.product,"price")})
    k=1;
    }
    else {
    k=0;
    i=0;
    j=0;
    this.setState({product: this.state.product.reverse()})
    }  }

  render() {
    return (
      <div>
        <p>
        <table>
        <tr>
          <td><button onClick={this.sortid.bind(this)}> decathlon_id </button></td>
          <td><button onClick={this.sorttitle.bind(this)}> title </button></td>
          <td><button onClick={this.sortprice.bind(this)}> price </button></td>
        </tr>
            {this.state.product.map(x => Tableline(x))}
        </table>
        </p>
      </div>
    );
  }
}

export default Table;
