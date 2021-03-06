import React, { Component } from 'react'
import './App.css'

import Counter from './Counter'

class App extends Component {

  constructor() {
    super()
    this.state = { showCounter: false }
    console.log('método CONSTRUCTOR de app')
  }

  toggleCounterView = () => this.setState({ showCounter: !this.state.showCounter })

  // Métodos del Lifecycle sólo disponibles en componentes de clase:
  componentDidMount = () => console.log('método COMPONENTDIDMOUNT de app')
  componentDidUpdate = (prevProps, prevState) => console.log('método COMPONENTDIDUPDATE de app.', 'Estado prevo:', prevState, 'Porps previas', prevProps)

  render() {

    console.log('método RENDER de app')

    return (
      <>
        <h1>Lifecycle!</h1>
        <button onClick={this.toggleCounterView}>{this.state.showCounter ? 'Ocultar contador' : 'Mostrar contador'}</button>
        {this.state.showCounter && <Counter />}
      </>
    )
  }
}

export default App