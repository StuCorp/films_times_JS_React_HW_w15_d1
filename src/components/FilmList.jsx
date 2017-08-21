import React from 'react'
import Film from './Film'

export default class FilmList extends React.Component {
render(){
  let filmNodes = this.props.data.map( (film)=> {
    return (
        <Film title={film.filmName}>
        {film.showTimes}
        </Film>
      );
  });

  return(
      <div className="film-list">
        {filmNodes}
      </div>
    );
}

}