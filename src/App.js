import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ListItems from './components/ListItems';
import { useState } from 'react';

const DummyList = [
  {
    id:'1',
    done:true,
    title:'Drink Coffee',
    deadline:''
  },
  {
    id:'2',
    done:false,
    title:'Make Something Awesome',
    deadline:'3 days'
  },
  {
    id:'3',
    done:true,
    title:'Take the dog for a walk',
    deadline:''
  },
  {
    id:'4',
    done:false,
    title:'Another To Do',
    deadline:'NA'
  },
]

function App() {
  const [todolistitems, settodolistitems] = useState(DummyList);

  return (
    <div className="App">
      <Header></Header>
      <ListItems itemlist={todolistitems}></ListItems>
    </div>
  );
}

export default App;
