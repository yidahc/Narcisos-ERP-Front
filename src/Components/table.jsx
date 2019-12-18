import React, {Component} from 'react';
import axios from 'axios';

class Table extends Component  {
    constructor(){
        super();
        this.state = {
            data: [],
            message: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        axios.get('http://narcisos.herokuapp.com/transacciones')
        .then(res => {
          this.setState({
            data: res.data.pedidos,
            message: 'listo!'
          })
        })
      }

    handleClick(event) {
        const {id, value} = event.target;
      
        this.setState({
          [id]:value
        }); // name and value are in target
    }

    handleBackground(typo){
        if(typo === "Venta"){
            return "table-dark"
        } return "table-active"
    }

    handleAmounts(amount, typo){
        if(typo === "Venta"){
            return `$${amount}`
        } return `-$${amount}`
    }

    estePedido(typo) {
        if (typo === "Venta"){
            return "Esta Venta"
        } return "Esta Compra"
    }

    handleSubmit(e){
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
            .then(response => console.log(response))
            .catch(err => alert(err))
            .then(this.setState({
                email: "",
                password: ""
              }));
    }

    render(){
       let {data} = this.state
    return (
      <div>
            <table class="table table-hover table-dark">
            <thead>
                <tr>
                <th scope="col">#ID</th>
                <th scope="col">Cliente/Proovedor</th>
                <th scope="col">Monto</th>
                <th scope="col">Comentario</th>
                </tr>
            </thead>
            { data.length > 0 ? data.map(e=>
            <tbody key = {e.id}>
                <tr class = {this.handleBackground(e.typo)}>
                <th scope="row">{e._id}</th>
                <td>{e.cuenta.nombre}</td>
                <td>{this.handleAmounts(e.monto, e.typo)}</td>
                <td>{e.nota}</td>
                <td>
                    <a class="btn btn-outline-light" data-toggle="collapse" href={`#collapseProducts${e.id}`} role="button" aria-expanded="false" aria-controls="collapseExample">
                        Detalles
                    </a>
                </td>
                </tr>
                {e.articulos.map(a=>
                <tr>
                    <td colspan="4" class="collapse" id={`collapseProducts${e.id}`}>
                    <div class="card-body row mx-md-n5">
                       <div class="col px-md-4"><div class="py-0"> {a._id} </div></div>
                       <div class="col px-md-4"><div class="py-0">{a.nombre} </div></div>
                       <div class="col px-md-4"><div class="py-0">{`Costo: $${a.costo}`} </div></div>
                       <div class="col px-md-4"><div class="py-0">{`Precio: $${a.precio}`} </div></div>
                    </div>
                    <span>{`Ver Mas Detalles de ${this.estePedido(e.typo)}`}</span>
                    </td> 
                </tr>  
                )}                
            </tbody>
            ): 
            <div>Agregar Transacciones</div>
            }
            </table>
      </div>
    )};
}

export default Table;
