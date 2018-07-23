import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _isEqual from 'lodash.isequal'
import { tryCatch } from 'utils/debug'
import './<%= pascalEntityName %>.scss'

export default class <%= pascalEntityName %> extends Component {
  // static propTypes = {
  //   reduxState: PropTypes.shape({
  //     router: PropTypes.object.isRequired,
  //   }),
  //   reduxActions: PropTypes.shape({
  //     actionName: PropTypes.func.isRequired,
  //   }),
  // }
  // static defaultProps = {}

  constructor (props) {
    super(props)
    this.fileIdentifier = `<%= pascalEntityName %>.jsx`
    this.state = {}
  }

  componentWillMount = () => tryCatch(this, arguments, () => {})
  componentDidMount = () => tryCatch(this, arguments, () => {})
  componentWillReceiveProps = nextProps => tryCatch(this, arguments, () => {})
  shouldComponentUpdate = (nextProps, nextState) =>
    !_isEqual(this.props, nextProps) || !_isEqual(this.state, nextState)
  componentWillUpdate = (nextProps, nextState) => tryCatch(this, arguments, () => {})
  componentDidUpdate = (prevProps, prevState) => tryCatch(this, arguments, () => {})
  componentWillUnmount = () => tryCatch(this, arguments, () => {})

  shouldRenderNull = () => false

  render = () => {
    if (this.shouldRenderNull()) return null
    return (
      <div className="<%= pascalEntityName %>"><%= pascalEntityName %></div>
    )
  }
}
