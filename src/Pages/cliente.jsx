import React, {Component} from 'react';
import axios from 'axios';
import Form from '../Components/form'

class Cliente extends Component  {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            nombre: "",
            direccion: {
                calle: "",
                detalles: "",
                referencia: "",
                estado: "CDMX",
                pais: "MX",
                codPostal: 0
            },  
            telefono: 0,
            celular: 0,
            commentario: "",
            activar: false
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleButton = this.handleButton.bind(this);
    }

    handleInput(event) {
        const {id, value} = event.target;
        this.setState({
          [id]:value
        }); // name and value are in 
        console.log(this.state)
    }

    handleToggle(event) {
        const {id} = event.target;
        this.setState({
          [id]: !this.state.id
        }); // name and value are in 
        console.log(this.state)
    }

    handleAddress(event) {
        const {id, value} = event.target;
        this.setState({
          direccion: {[id]:value}
        }); // name and value are in 
        console.log(this.state)
    }

    handleButton(){
        return (this.state.activar ?
            "Activar Nuevo Cliente"
        :
        "Activar Nueva Oportunidad"
        )
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
                direccion: {
                  calle: "",
                  detalles: "",
                  referencia: "",
                  estado: "",
                  pais: "",
                  codPostal: 0
                },
                telefono: 0,
                celular: 0,
                commentario: ""
            }))

    }

    render(){
        const { email, nombre, direccion, telefono, celular, commentario, activar } = this.state;
        const mediumInputs = [{label:"Nombre", value:nombre, name:"nombre", handle:this.handleInput, type:"text"},
                              {label:"Email", value:email, name:"email", handle:this.handleInput, type:"email"}]
        const largeInputs = [
                                {label:"Direccion", value:direccion.calle, name:"calle", handle:this.handleAddress, 
                                 type:"text", placeholder:"Calle y Numero", help: "Opcional"},
                                 {label:"Direccion Parte 2", value:direccion.detalles, name:"detalles", handle:this.handleAddress, 
                                 type:"text", placeholder:" Colonia, Delegacion/Municipio y Ciudad", help: "Opcional"}, 
                                 {label:"Referencia", value:direccion.referencia, name:"referencia", handle:this.handleAddress, 
                                 type:"text", placeholder:"Alguna referencia del lugar, si es dificil de encontrar", help: "Opcional"}, 
                            ]
        const smallInputs = [{label:"Estado", value:direccion.estado, name:"estado", handle:this.handleAddress, type:"text"},
                              {label:"Pais", value:direccion.pais, name:"pais", handle:this.handleAddress, type:"text"},
                              {label:"Código Postal", value:direccion.codPostal, name:"codPostal", handle:this.handleAddress, type:"number"},
                              {label:"Commentario", value:commentario, name:"commentario", handle:this.handleInput, type:"text", help:"Opcional"},
                              {label:"Telefono", value:telefono, name:"telefono", handle:this.handleInput, type:"number", help:"Opcional"},
                              {label:"Celular", value:celular, name:"celular", handle:this.handleInput, type:"number", help:"Opcional"}
                            ]
        const checkboxInput = [{label: "Cliente", value:activar, name: "activar" }]                    
    return (
        <Form mediumInputs={mediumInputs} largeInputs={largeInputs} 
              smallInputs={smallInputs} checkboxInput={checkboxInput}
              handleToggle={this.handleToggle} handleButton={this.handleButton} handleSubmit={this.handleSubmit}/>
    )};
}

export default Cliente;
