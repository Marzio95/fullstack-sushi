
import { Component } from 'react';

class Card extends Component {
    render() {
        return(
            <div className="col">
                <div className="card" style={{width: '18rem', textAlign: 'center'}}>
                    <button onClick={() => this.props.onIncrement(this.props.id)} className="bg-primary">Aggiungi</button>
                    <div>Quantità: {this.props.quantità}</div>
                    <button onClick={() => this.props.onDecrement(this.props.id)} className="bg-danger">Sottrai</button>
                    <img src={this.props.immagine} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.nome} Roll</h5>
                        <p className="card-text">€{this.props.prezzo}</p>
                        <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-outline-danger">Elimina</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;