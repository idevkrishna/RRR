import React, { Component } from 'react'
import { containerLoader } from './<%= pascalEntityName %>Loader'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      <%= pascalEntityName %>Container: null,
    }
  }

  componentWillMount() {
    containerLoader().then((data) => {
      const { <%= pascalEntityName %> } = data.<%= pascalEntityName %>
      const { connect, mapStateToProps, mapDispatchToProps } = data.<%= pascalEntityName %>Container
      const <%= pascalEntityName %>Container = connect(mapStateToProps, mapDispatchToProps)(<%= pascalEntityName %>)
      this.setState({
        <%= pascalEntityName %>Container,
      })
    })
  }

  render() {
    if (this.state.<%= pascalEntityName %>Container === null) {
      return null//(<div>Loading</div>)
    }
    const RealContainer = this.state.<%= pascalEntityName %>Container
    return (
      <RealContainer {...this.props}>{this.props.children}</RealContainer>
    )
  }
}
