import React, { Component } from 'react';
import './App.css';

//import schools
import schools from './schools.json';

//component import
import MainHeader from './components/mainHeader';
import GameBoard from './components/gameBoard';
import Card from './components/card';


class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    gameMessage: "Click an Image to begin!",
    schools: schools,
    unClickedSchools: schools
  }

  //shuffle array
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  checkSchool = id => {

    //check if the id has been chosen
    const failedGuess = this.state.unClickedSchools.find(school => school.id === id);

    //if schoolGuessed is undefined, then the image has been clicked, start over
    if (failedGuess === undefined) {
      this.setState({
        score:0,
        topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore,
        gameMessage: "Bad beat, Click an image to play again",
        schools: schools,
        unClickedSchools: schools
      });
     } else {
       //if defined, means school has just been clicked, thus a new array is created without that
       //school and list is updated, with score
      const updatedSchools = this.state.unClickedSchools.filter(school => school.id !== id);    

      this.setState({
        score: this.state.score +1,
        gameMessage: "Great! Go Again",
        schools: schools,
        unClickedSchools: updatedSchools
      });
      }
    this.shuffleArray(schools); 
  }

  render() {

    return (
      <div>
      <MainHeader 
        gameMessage= {this.state.gameMessage} 
        score={this.state.score}
        topScore ={this.state.topScore}
      />

      <GameBoard>
      {this.state.schools.map(school => 
          {return <Card  checkSchool = {this.checkSchool} name={school.name} image={school.image} id={school.id} key={school.id}/>}
          )}
      </GameBoard>
      </div>
    );
  }
}

export default App;
