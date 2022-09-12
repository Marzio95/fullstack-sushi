import Navbar from './components/navbar';
import Card from './components/card';
import { Component } from 'react';
import california from './images/california.png';
import dragon from './images/dragon.png';
import dynamite from './images/dynamite.png';
import philadelphia from './images/philadelphia.png';
import rainbow from './images/rainbow.png';
import shrimp from './images/shrimp.png';


class App extends Component {

  state = {cards: [
    {id: 0, nome: "California", prezzo: 1.99, immagine: california, quantità: 0},
    {id: 1, nome: "Dragon", prezzo: 3.49, immagine: dragon, quantità: 0},
    {id: 2, nome: "Dynamite", prezzo: 2.49, immagine: dynamite, quantità: 0},
    {id: 3, nome: "Philadelphia", prezzo: 0.99, immagine: philadelphia, quantità: 0},
    {id: 4, nome: "Rainbow", prezzo: 2.99, immagine: rainbow, quantità: 0},
    {id: 5, nome: "Shrimp", prezzo: 1.49, immagine: shrimp, quantità: 0},
  ]}

  handleDelete = cardID => {
    const updateCards = this.state.cards.filter(card => card.id !== cardID);
    this.setState({cards: updateCards});
  }

  handleIncrement = cardID => {
    const updateCards = [...this.state.cards];
    const myCard = updateCards.find(card => card.id === cardID);
    myCard.quantità++;
    this.setState({cards : updateCards});
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <h1>Cosa desideri ordinare?</h1>
          <hr />
          <div className='row'>
            {this.state.cards.map(card => (
              <Card key={card.id} id={card.id} nome={card.nome} prezzo={card.prezzo} immagine={card.immagine} onDelete={this.handleDelete} onIncrement={this.handleIncrement} quantità={card.quantità} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
