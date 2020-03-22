import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// functional React component Exercice
/* Il génère une ligne de tableau avec les propriétés de l'élément
d'exercice passées dans le composant.
La colonne 'actions' possède deux liens: un vers la route d'édition 
et l'autre appelle la méthode 'deleteExercise' */ 
const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    </td>
  </tr>
)

export default class ExercisesList extends Component {

  constructor(props) {
    super(props);
    this.deleteExercise = this.deleteExercise.bind(this);
    this.state = {exercises: []};
  }

  // liste des exercices de la bdd
  /*Le code s'exécutera avant le rendu de la page et ajoutera
  la liste des exercices au State. La méthode 'axios.get' accède 
  au point de terminaison '/exercices'. 
  'response.data' est attribué à la propriété 'exercices' dans
  le State du composant avec la méthode 'this.setState'.
  */
  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
     .then(response => {
       this.setState({ exercises: response.data });
     })
     .catch((error) => {
        console.log(error);
     })
  }

  // méthode permettant aux utilisateurs de supprimer des exercices
  /* La méthode 'axios.delete est utilisée, puis le State des
  exercices et mis à jour, et l'exercice qui a été supprimé est filtré
  */
  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(res => console.log(res.data));
    
      this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  // parcourt la liste des éléments d'exercice grâce à la fonction 'map'
  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise 
        exercise={currentexercise} 
        deleteExercise={this.deleteExercise} 
        key={currentexercise._id}
      />;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    )
  }
}