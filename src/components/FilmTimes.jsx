import React from 'react'

export default class FilmTimes extends React.Component {

  render(){

    let timeNodes = this.props.data.map( (time)=>{
      return (
          <h5> time: {time}</h5>
        )
    })

    return(

        <div className="times-list">
        <h5>Times:</h5>
        {timeNodes}
        </div>
      )
  }

}