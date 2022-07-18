import React from 'react'
import './Results.css'

export default class Results extends React.Component 
{
  render() 
  {
    const answers = this.props.questions.map((question, index) => (
      <p key={index.toString()}>
        { <strong>Questão {index + 1}:</strong>}
        <br />
        {this.props.questions[index].statement}
        <h1> {question.options[this.props.answers[index]]}</h1>
      </p>
    ))
    return (
      <div className="Results">
        <h2 className="m5">Escolhas</h2>
        {answers}
      </div>
    )
  }
}
