import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import HomeView from '../routes/Home/components/HomeView'
import AboutView from '../routes/About/components/AboutView'
import ContactView from '../routes/Contact/components/ContactView'

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          <Router>
            <div>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>

              <hr />

              <Route exact path='/' component={HomeView} />
              <Route exact path='/about' component={AboutView} />
              <Route exact path='/contact' component={ContactView} />
            </div>
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App
