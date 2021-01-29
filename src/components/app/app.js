import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1},
    { label: 'Make Awesome App', important: true, id: 2},
    { label: 'Have a Lunch', important: false, id: 3}
  ];

    return (
      <div>
        <AppHeader/>
        <SearchPanel/>
        <TodoList todos={todoData}/>
    </div>
    );
};

export default App;

