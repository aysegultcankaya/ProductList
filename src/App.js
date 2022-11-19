import React, { Component } from "react";
import Kategori from "./Kategori";
import Navigate from "./Navigate";
import UrunListesi from "./UrunListesi";
import { Container, Row, Col, Tag } from "reactstrap";
import alertify from "alertifyjs";
import SepetListesi from "./SepetListesi";
import NotFound from "./NotFound";
import { Route, Routes } from "react-router-dom";
import FormDemo from "./FormDemo";
import FormDemo2 from "./FormDemo2";

class App extends Component {
  state = { seciliKategori: "", urunler: [], sepet: [] };

  kategoriDegistir = (kategori) => {
    this.setState({
      seciliKategori: kategori.categoryName,
    });
  };

  urunGetir() {
    fetch("http://localhost:3000/products")
      .then((rsponse) => rsponse.json())
      .then((data) => this.setState({ urunler: data }));
  }
  sepeteEkle = (urun) => {
    let yeniUrun = this.state.sepet;
    var urunEklendi = yeniUrun.find((s) => s.urun.id === urun.id);
    if (urunEklendi) {
      urunEklendi.adet += 1;
    } else {
      yeniUrun.push({ urun: urun, adet: 1 });
    }
    this.setState({ sepet: yeniUrun });
    alertify.success(urun.productName + " Sepete Ekklendi", 3);
  };

  sepettenCikar = (urun) => {
    let kalanUrunler = this.state.sepet.filter((u) => u.urun.id != urun.id);

    this.setState({ sepet: kalanUrunler });
    alertify.error(urun.productName + " Sepetten Çıkarıldı ", 1);
  };

  componentDidMount() {
    this.urunGetir();
  }
  render() {
    let bilgiUrunListesi = { baslik: "Ürün Listesi" };
    let bilgiKategori = { baslik: "Kategori", ilaveBilgi: "İlaveBilgi" };
    return (
      <div>
        <Container>
          <Row>
            <Navigate
              sepettenCikar={this.sepettenCikar}
              sepet={this.state.sepet}
            />
          </Row>
          <Row>
            <Col xs="3">
              <Kategori
                seciliKategori={this.state.seciliKategori}
                kategoriDegistir={this.kategoriDegistir}
                bilgiKategori={bilgiKategori}
              />
            </Col>
            <Col xs="9">
              <Routes>
                <Route
                  path="/"
                  element={
                    <UrunListesi
                      sepeteEkle={this.sepeteEkle}
                      urunler={this.state.urunler}
                      seciliKategori={this.state.seciliKategori}
                      bilgiUrunListesi={bilgiUrunListesi}
                    />
                  }
                />
                <Route
                  path="/sepet"
                  element={
                    <SepetListesi
                      sepet={this.state.sepet}
                      sepettenCikar={this.sepettenCikar}
                    />
                  }
                />
                <Route path="/form" element={<FormDemo />} />
                <Route path="/form2" element={<FormDemo2 />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
