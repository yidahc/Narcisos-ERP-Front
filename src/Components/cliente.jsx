import React, {Component} from 'react';
import axios from 'axios';

class ClienteForm extends Component  {
    constructor(){
        super();
        this.state = {
            email: "",
            nombre: "",
            direccion1: "",
            direccion2: "",
            direccion: "",
            telefono: 0,
            celular: 0,
            commentario: ""
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        let {direccion1,direccion2} = this.state
        const {id, value} = event.target;
        this.setState({
          [id]:value,
          direccion:`${direccion1} ${direccion2}`
        }); // name and value are in 
        console.log(this.state)
    }

    handleSubmit(e){
        e.preventDefault();
      let { email, nombre, direccion, telefono, celular, commentario } = this.state
        axios.post('https://narcisos.herokuapp.com/new/cuenta',
            {
                email,
                nombre,
                typo: "Cliente",
                telefono,
                direccion,
                commentario,
                celular
            })
            .then(response => console.log(response))
            .catch(err => alert(err))
            .then(this.setState({
                email: "",
                nombre: "",
                direccion1: "",
                direccion2: "",
                direccion: "",
                telefono: 0,
                celular: 0,
                commentario: ""
              }))

    }

    render(){
    return (
      <div>
            <form onSubmit = {this.handleSubmit}>
        <div className="form-row col-lg-10">
            <div className="form-group col-lg-6">
            <label htmlFor="inputName">Nombre</label>
            <input type="text" className="form-control" id="nombre" value = {this.state.nombre} onChange = {this.handleInput}/>
            </div>
            <div className="form-group col-lg-6">
            <label htmlFor="inputEmail4">Email</label>
            <input type="email" className="form-control" id="email" value = {this.state.email} onChange = {this.handleInput}/>
            </div>
        </div>
        <div className="form-group col-md-10">
            <label htmlFor="inputAddress">Direccion</label>
            <input type="text" className="form-control" id="direccion1" placeholder="Calle, Numero, Colonia, Delegacion/Municipio y Ciudad" value = {this.state.direccion1} onChange = {this.handleInput}/>
            <small id="imagenesHelp" className="form-text text-muted">Opcional</small>
        </div>
        <div className="form-group col-md-10">
            <label htmlFor="inputAddress2">Direccion Parte 2</label>
            <input type="text" className="form-control" id="direccion2" placeholder="Estado, Pais y Codigo Postal" value = {this.state.direccion2} onChange = {this.handleInput}/>
            <small id="imagenesHelp" className="form-text text-muted">Opcional</small>
        </div>
        <div className="form-row col-md-10">
            <div className="form-group col-md-6">
            <label htmlFor="inputCity">Commentario</label>
            <input type="text" className="form-control" id="commentario" value = {this.state.commentario} onChange = {this.handleInput}/>
            <small id="imagenesHelp" className="form-text text-muted">Opcional</small>
            </div>
            <div className="form-group col-md-3">
            <label htmlFor="inputZip">Telefono</label>
            <input type="number" className="form-control" id="telefono" value = {this.state.telefono} onChange = {this.handleInput}/>
            </div>
            <div className="form-group col-md-3">
            <label htmlFor="inputCity">Celular</label>
            <input type="number" className="form-control" id="celular" value = {this.state.celular} onChange = {this.handleInput}/>
            </div>
        </div>
        <div className="form-group col-md-3">
        <button type="submit" className="btn btn-outline-success">Registrar Nuevo Cliente</button>
        </div>
        </form>
      </div>
    )};
}

export default ClienteForm;
