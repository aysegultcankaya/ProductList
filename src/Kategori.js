import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class Kategori extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kategoriler: [
        { kategoriId: 1, kategoriIsim: "Bilgisayar" },
        { kategoriId: 2, kategoriIsim: "Masa" },
        { kategoriId: 3, kategoriIsim: "HardDisk" },
        { kategoriId: 4, kategoriIsim: "CD" },
        { kategoriId: 5, kategoriIsim: "Çanta" },
      ],
    };
  }
  kategoriGetir() {
    fetch("http://localhost:3000/categories")
      .then((rsponse) => rsponse.json())
      .then((data) => this.setState({ kategoriler: data }));
  }

  componentDidMount() {
    this.kategoriGetir();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>{this.props.bilgiKategori.baslik}</h3>
        <h4>{this.props.bilgiKategori.ilaveBilgi}</h4>
        <ListGroup>
          {this.state.kategoriler.map((kategori) => (
            <ListGroupItem
              active={
                kategori.categoryName === this.props.seciliKategori
                  ? true
                  : false
              }
              onClick={() => this.props.kategoriDegistir(kategori)}
              key={kategori.id}
            >
              {kategori.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.props.seciliKategori}</h4>
      </div>
    );
  }
}

export default Kategori;
