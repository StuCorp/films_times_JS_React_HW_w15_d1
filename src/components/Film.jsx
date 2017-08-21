import React from 'react'
import FilmTimes from './FilmTimes.jsx'

export default class Film extends React.Component {
  render(){
    return(
        <div className="film">
        <h4 className="film-title">{this.props.title}</h4>
        <FilmTimes data={this.props.children}/>
        </div>
      )  
  }


}