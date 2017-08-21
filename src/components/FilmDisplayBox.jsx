import React from 'react'
import FilmList from './FilmList.jsx'

export default class FilmDisplayBox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: [{
        filmName: "Sausage Party",
        showTimes: ["12:30", "17:30", "21:00"]
      },
      {
        filmName: "Cafe Party", 
        showTimes: ["09:15", "14:20", "23:00", "23:05"]
      },
      {
        filmName: "Morgan Party",
        showTimes: ["06:00", "08:30"]
      }
      ]
    }
  }


  render(){
    return (
      <div className="film-display-box">
        <h2>Films opening this weekend</h2>
        <FilmList data={this.state.data} />
      </div>
      )
  }


}