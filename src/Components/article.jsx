import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component  {
    constructor(){
        super();
        this.state = {
            nombre: "",
            descripcion: "",
            costo: null,
            precio: null,
            disponibilidad: 1,
            imagenes: [],
            publicar: true
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        const {id, value, type} = event.target;
      if (type === "checkbox"){
        this.setState({
            [id]:!value
          }); 
      } else {
        this.setState({
          [id]:value
        }); // name and value are in target
      }
      console.log(this.state)
    }

    handleSubmit(e){
        e.preventDefault();
        axios.post('http://narcisos.herokuapp.com/new/articulo',this.state)
            .then(response => console.log(response))
            .catch(err => alert(err))
            .then(this.setState({
                nombre: "",
                descripcion: "",
                costo: 0,
                precio: 0,
                disponibilidad: 1,
                imagenes: [],
                publicar: true
              }));
    }

    render(){
    return (
      <div>
        <form class="needs-validation" onSubmit = {this.handleSubmit}>
        <div className="form-group col-lg-10">
            <label for="exampleInputEmail1">Nombre</label>
            <input type="text" className="form-control" id="nombre" aria-describedby="nombre" value = {this.state.nombre} onChange = {this.handleInput} required/>
        </div>
        <div className="form-group col-lg-10">
            <label for="exampleFormControlTextarea1">Descripcion</label>
            <textarea className="form-control" id="descripcion" rows="2" value = {this.state.descripcion} onChange = {this.handleInput}/>
        </div>
        <div className="form-row col-lg-10">
            <div className="col-5">
            <label for="disponibilidad">Disponibles</label>
            <input type="number" className="form-control form-control-sm" id="disponibilidad" aria-describedby="disponibilidad" value = {this.state.disponibilidad} onChange = {this.handleInput}/>
            </div>
            <div className="col">
            <label for="costo">Costo</label>
            <input type="number" placeholder="$" className="form-control form-control-sm" id="costo" aria-describedby="costo" value = {this.state.costo} onChange = {this.handleInput}/>
            </div>
            <div className="col">
            <label for="precio">Precio</label>    
            <input type="number" placeholder="$" className="form-control form-control-sm" id="precio" aria-describedby="precio" value = {this.state.precio} onChange = {this.handleInput}/>
            </div>
        </div>
        <div className="form-group col-lg-10">
            <label for="exampleFormControlFile1">Imagenes</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
            <small id="imagenesHelp" className="form-text text-muted">Opcional</small>
        </div>
        <div className="form-group form-check ">
            <input type="checkbox" className="form-check-input col-md-3" id="publicar" value = {this.state.publicar}/>
            <label className="form-check-label col-lg-10" for="publicar">Publicar</label>
        </div>
        <div className="form-group col-md-3">
        <button type="submit" className="btn btn-outline-success">Registrar Producto</button>
        </div>
        </form>
      </div>
    )};
}

export default Form;
