import React from 'react'
import './Question.css'
 
export default function Question (props)
{
  const options = props.options.map((option, index) => (
    <button
    key={option}
    className={index === props.selection?'m5 selected' : 'm5'}
    onClick={() => props.onSelect(index)}
    >
      {option}
    </button>  
  ))
  return <div class="QuestiStyle">
    {options}
    { <h1>{props.statement}</h1> }
  </div>
}

/** 
export default class Question extends React.Component {
  render() {
    const options = this.props.options.map((option, index) => (
      <button
        key={option}
        className={index === this.props.selection ? 'm5 selected' : 'm5'}
        onClick={() => this.props.onSelect(index)}
      >
        {option}
      </button>
    ))

    return (
      <div>
        <h1>{this.props.statement}</h1>
        {options}
      </div>
    )
  }
}
*/