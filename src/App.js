
import './App.css';
import Header from "./Mycomponents/Header";
import Footer from './Mycomponents/footer';
import Todos from './Mycomponents/todos';
import React, { useState } from 'react';
import Form from "./Mycomponents/AddTodo";
import { About } from './Mycomponents/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const onDelete = (todo) => {
    console.log("I am ondelete", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Job1",
      discrip: "You need to go to the market"
    },
    {
      sno: 2,
      title: "Job2",
      discrip: "You need to go to the hall"
    },
    {
      sno: 3,
      title: "Job3",
      discrip: "You need to go to the mall"
    }
  ]);
  return (
    <>
      <Router>

        <Header myTitle="My Todos List" searchBar="{false}" />
        <Form />        
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <Todos todos={todos} length={todos.length} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

          <Footer />
      </Router >
    </>
      );
}

      export default App;