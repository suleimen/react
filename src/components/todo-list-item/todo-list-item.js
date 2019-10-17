import React, {Component} from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

    constructor() {
        super();
        this.state = {
            done: false,
            important: false
        };
        this.onLabelCLick = () => {
            this.setState(({done}) => {
                return {
                    done: !done
                }
            });
        };
        this.onMarkImportant = () => {
            this.setState(({important}) => {
                return {
                    important: !important
                }
            })
        }
    }


    render() {
        const {label,onDeleted} = this.props;
        const {done, important} = this.state;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };
        return (
            <span className={classNames}>
      <span className="todo-list-item-label"
            onClick={this.onLabelCLick}
      >
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={this.onMarkImportant}>
        <i className="fa fa-exclamation"/>
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={onDeleted}>
        <i className="fa fa-trash-o"/>
      </button>
    </span>
        );

    }

}

