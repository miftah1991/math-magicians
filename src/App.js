import { Component } from 'react';
import Calculator from './components/Calculator';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Calculator />;
  }
}

export default App;
