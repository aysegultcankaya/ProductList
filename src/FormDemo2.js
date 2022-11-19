import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " veritabanına eklendi");
    alertify.success(this.state.password + " veritabanına eklendi");
    alertify.success(this.state.city + " veritabanına eklendi");
    alertify.success(this.state.description + " veritabanına eklendi");
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">E Posta Adresi</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="E posta adresinizi giriniz.."
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="password">Şifre</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Şifrenizi giriniz.."
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="description">İlave Bilgi</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="İlave bilgi giriniz.."
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="city">Şehir</Label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.handleChange}
            >
              <option>İstanbul</option>
              <option>Ankara</option>
              <option>İzmir</option>
              <option>Düzce</option>
              <option>Erzurum</option>
            </Input>
          </FormGroup>
          <Button type="submit">Kaydet</Button>
        </Form>
      </div>
    );
  }
}
