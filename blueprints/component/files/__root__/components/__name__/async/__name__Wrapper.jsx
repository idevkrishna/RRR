import React, { Component } from 'react'
import { componentLoader } from './<%= pascalEntityName %>Loader'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      <%= pascalEntityName %>: null,
    }
  }

  componentWillMount() {
    componentLoader().then((data) => {
      const { <%= pascalEntityName %> } = data.<%= pascalEntityName %>
      this.setState({
        <%= pascalEntityName %>,
      })
    })
  }

  render() {
    if (this.state.<%= pascalEntityName %> === null) {
      return null//(<div>Loading</div>)
    }
    const RealComponent = this.state.<%= pascalEntityName %>
    return (
      <RealComponent {...this.props}>{this.props.children}</RealComponent>
    )
  }
}
