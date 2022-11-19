import React, { Component } from "react";
import { Button, Table } from "reactstrap";

class SepetListesi extends Component {
  renderSepet() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Kategori ID</th>
            <th>Ürün İsmi</th>
            <th>Birim Fİyat</th>
            <th>Units In Stock</th>
            <th>Adet</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.sepet.map((sepetUrun) => (
            <tr key={sepetUrun.urun.id}>
              <td>{sepetUrun.urun.id}</td>
              <td>{sepetUrun.urun.categoryId}</td>
              <td>{sepetUrun.urun.productName}</td>
              <td>{sepetUrun.urun.unitPrice}</td>
              <td>{sepetUrun.urun.unitsInStock}</td>
              <td>{sepetUrun.adet}</td>
              <td>
                <Button
                  color="danger"
                  onClick={() => this.props.sepettenCikar(sepetUrun.urun)}
                >
                  Sil
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  render() {
    return <div>{this.renderSepet()}</div>;
  }
}

export default SepetListesi;
