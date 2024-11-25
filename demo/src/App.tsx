import { useState } from 'react';
import {
  BaseTable
} from "../../dist/ali-react-table.esm.js";
import '../../dist/table.css';
// import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const data = [{
  a: 111
  }]
  const columns = [{
    code: 'a',
    name: '111'
  }]

  return <><BaseTable dataSource={data} columns={columns}></BaseTable></>;
}

export default App
