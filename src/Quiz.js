import React from 'react'
import Question from './Question'
import Results from './Results'
import './Quiz.css'
export default class Quiz extends React.Component {
  questions = [
    {
      statement: 'Texto 1',
      options: ['React', 'Vue', 'Angular', 'Svelte']
    },
    {
      statement:'Texto2',
      options: ['React', 'Vue', 'Angular', 'Svelte']
    },
    {
      statement: 'Texto3',
      options: ['React', 'Vue', 'Angular', 'Svelte']
    },
    {
      statement: 'Texto4',
      options: ['React', 'Vue', 'Angular', 'Svelte']
    },
    {
      statement: 'Texto5',
      options: ['React', 'Vue', 'Angular', 'Svelte']
    }
  ]

  constructor(props)
   {
      super(props)
      this.state = 
      {
      current: 0,
      answers: [],
      mode: 'questions'
      }
    this.select = this.select.bind(this)
    this.next = this.next.bind(this)
    this.reset = this.reset.bind(this)
  }

  render() 
  {
    let panel, button
    if (this.state.mode === 'questions') 
    {
      panel = (
        <div className="questionPanel">
          
           <p className="m5"> 
             Questão {this.state.current + 1} de {this.questions.length} 
          </p>
          <Question
            statement={this.questions[this.state.current].statement}
            options={this.questions[this.state.current].options}
            selection={this.state.answers[this.state.current]}
            onSelect={this.select}
          />
        </div>
      )
      button = (
        <button className="submitBtn" onClick={this.next}>
          Confirma resposta
        </button>
      )
    } else {
      panel = (
        <div className="resultPanel">
          <Results  questions={this.questions} answers={this.state.answers} />
        </div>
      )
      button = (
        <button className="submitBtn" onClick={this.reset}>
          Reinicia
        </button>
      )
    }

    return (
      <div class="PainelMain">
        {panel}
        {button}
      </div>
    )
  }

  //selecionando opcao
  select(optionIndex) {
    this.setState((state) => {
      const answers = [state.answers]
      answers[state.current] = optionIndex
      return { answers }
   })
  }

  // próxima pergunta
  next() {
    this.setState((state) => {
      return state.current < this.questions.length - 1
        ? { current: state.current + 1 }
        : { mode: 'results' }
    })
  }
  //funcao para resetar
  reset() 
  {
    this.setState({
      current: 0,
      answers: [],
      mode: 'questions'
    })
  }
}
