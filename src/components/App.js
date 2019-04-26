import React, {useState, useEffect} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import TableComponent from './TableComponent';


const sgrService = axios.create({baseURL: process.env.REACT_APP_API_BASE_URL, timeout: 10000});
const CancelToken = axios.CancelToken;
const source = CancelToken.source;

function App() {

  const [proveedores, setProveedores] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    sgrService.get('proveedores/listar', {cancelToken: source.token})
    .then(({data}) => {
      console.log(data);
      setProveedores(data);
    }).catch((error) => {
      console.log(error);
    });
  }, [search]);


  const tableColumns = [
    {
      name: 'Dni'
    },
    {
      name: 'Nombre'
    },
    {
      name: 'Email'
    },
  ]


  return (
    <div className="App">
      
      {
        proveedores.length >= 0 &&
        <TableComponent datos={proveedores} columnas = {tableColumns}/>
      }

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
