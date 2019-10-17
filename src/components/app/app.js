import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            todoData: [
                {label: 'Drink Coffee', important: false, id: 1},
                {label: 'Make Awesome App', important: true, id: 2},
                {label: 'Have a lunch', important: false, id: 3}
            ]
        }

        this.deleteItem = (id) => {
            this.setState(({todoData}) => {
                const ids = todoData.findIndex((el) => el.id === id);
                const before = todoData.slice(0, ids);
                const after = todoData.slice(ids + 1);
                const newArray = [...before, ...after];
                return {
                    todoData: newArray
                }
            })
        }
    }

    render() {
        const {todoData} = this.state;
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList todos={todoData}
                          onDeleted={this.deleteItem}/>
            </div>
        );
    }
}


