import React, { Component }from 'react';

import './App.scss';
import TableRow from './TableRow/TableRow';
import TableHeader from './TableRow/TableHeader';
import setDate from './utils/setDate';

import getCurrency from './dataScripts/getCurrency'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
    }
  }

  componentDidMount() {
    getCurrency().then(data => this.setState({currencies: data}));
  }
  
  render () {
    const {currencies} = this.state
    return (
      <main className="App">
        <h1 className="App__title">Course of Belarusian Ruble</h1>
        <h2 className="App__date">{setDate()}</h2>
        <ul className="App__table">
          <TableHeader/>
          {
            currencies.map((c, i) => (
              <TableRow key={i.toString()} data={c}/>
            ))
          }
        </ul>
      </main>
    );
  }
  
}

export default App;
