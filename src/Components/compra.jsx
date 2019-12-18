import React, {Component} from 'react';
import axios from 'axios';

class CompraForm extends Component  {
    constructor(){
        super();
        this.state = {
            cuenta: "",
            nota: "",
            articulos: [],
            monto: 0,
            completado: false,
            productos:  [{_id: 1324, nombre: "art1", costo: 50}, {_id: 4567, nombre: "art2", descripcion: "art2 descr", costo: 50, precio:100},{_id: 9842, nombre: "art3", descripcion: "art3 descr", costo: 50, precio:100}],
            proovedores: [{_id: 5478, nombre: "prov1"}, {_id: 7894, nombre: "prov2"}]
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    componentDidMount(){
        axios.get('http://narcisos.herokuapp.com/articulos')
        .then(res => {
          console.log(res.data.articulos)
          this.setState({
            productos: res.data.articulos,
          })
        })
        axios.get('http://narcisos.herokuapp.com/proovedores/activos')
        .then(resp => {
          console.log(resp.data.proovedores)
          this.setState({
            proovedores:resp.data.proovedores
          })
        })
    }

    handleInput(event) {
        const {id, value} = event.target;
      
        this.setState({
          [id]: value          
        }); // name and value are in target
    }

    handleToggle (value, amount) {
      console.log(this.state)
      const { articulos, monto } = this.state;
      const currentIndex = articulos ? articulos.indexOf(value) : -1;
      const newChecked = articulos ? articulos : [];
      let newAmount = monto ? monto : 0;

      if(currentIndex === -1){
          newChecked.push(value);
          newAmount += amount;
      } else{
          newChecked.splice(currentIndex,1);
          newAmount -= amount;
      }
      this.setState({
              articulos: newChecked,
              monto: newAmount
      })
  }

    handleSubmit(e){
        e.preventDefault();
        let { cuenta, nota, articulos, monto} = this.state
        axios.post('http://narcisos.herokuapp.com/new/pedido',
            {
                "cuenta": cuenta,
                "typo": 'Compra',
                "nota": nota,
                "articulos": articulos,
                "monto": monto,
                "completado": false
            })
            .then(response => console.log(response))
            .then(this.setState({
              cuenta: "",
              nota: "",
              articulos: [],
              monto: 0,
              completado: false,
              }))
              .catch(err => alert(err))

    }

    render(){
        let { nota, articulos, monto, productos, proovedores } = this.state
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <div className="form-group col-md-6">
            <label for="commentario">Commentario</label>
            <input type="text" className="form-control" id="nota" value = {nota} onChange = {this.handleInput}/>
            <small id="notaHelp" className="form-text text-muted">Opcional</small>
        </div>
        <div className="form-group col-md-4">
            <label for="cuenta">Proovedor</label>
              <select class="form-control" id="cuenta"
        onChange={this.handleInput}>
                { proovedores.map(e=> 
                <option key= {e._id} value = {e._id}>{e.nombre}</option>
                )}
              </select>
          </div>
          <div className="form-group col-md-12">
          { articulos ?
          productos.map(e=>
          
          <div class="form-check">
            <input  key= {e._id} class="form-check-input" type="checkbox" id={e._id}
                  onChange={()=>this.handleToggle(e._id, e.costo)}
                  checked={articulos.includes(e._id)} />
            <label 
                    class="form-check-label" for={e._id}>
                <span>{e.nombre}</span> <span>{`$${e.costo}`}</span>
            </label>
          </div>
          ):  productos.map(e=>
          
            <div class="form-check">
              <input  key= {e._id} class="form-check-input" type="checkbox" id={e._id}
                    onChange={()=>this.handleToggle(e._id, e.costo)} />
              <label 
                      class="form-check-label" for={e._id}>
                  <span>{e.nombre}</span> <span>{`$${e.costo}`}</span>
              </label>
            </div>
          )}
        </div>
    <div className="form-group col-md-12">
        <div class="form-group row col-md-8">
        <label for="monto" class="col-sm-2 col-form-label">Monto Final:</label>
        <div class="col-md-2">
            <input type="text" readOnly className="form-control-plaintext" id="monto" value = {`$${monto}`} />
        </div>
        </div>
    
        <div className="form-group col-md-3">
        <button type="submit" className="btn btn-outline-success">Registrar Nueva Compra</button>
        </div>
    </div>
        </form>
      </div>
    )};
}

export default CompraForm;
