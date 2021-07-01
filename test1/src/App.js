import './App.scss';
import TableRow from './TableRow/TableRow';
import TableHeader from './TableRow/TableHeader';
import setDate from './utils/setDate';

const currencies = [
  {
    code: 'USD',
    name: 'Dollar',
    value: 37.5678
  },
  {
    code: 'UAH',
    name: 'Hryvna',
    value: 7.4242
  },
  {
    code: 'YEN',
    name: 'Yen',
    value: 17.5555
  },
  {
    code: 'PLZ',
    name: 'Zloty',
    value: 20.0020
  },
  {
    code: 'EUR',
    name: 'Euro',
    value: 45.3030
  },
]

function App() {
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

export default App;
