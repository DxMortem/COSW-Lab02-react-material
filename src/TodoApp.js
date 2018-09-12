import DatePicker from "react-datepicker/es";
import {TodoList} from "./TodoList";
import React from "react";
import moment from "moment";
import 'react-datepicker/dist/react-datepicker.css';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import Card from '@material-ui/core/Card';


export class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {items: [], text: '', priority: 0, dueDate: moment()};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div id="todo">
                <Card  className="todo-form">
                    <h3>New TODO</h3>

                    <InputLabel htmlFor="text" className="right-margin">
                        Text:
                    </InputLabel>

                    <TextField
                        id="text"
                        onChange={this.handleTextChange}
                        value={this.state.text}>
                    </TextField>

                    <br/>
                    <br/>
                    <InputLabel htmlFor="priority" className="right-margin">
                        Priority:
                    </InputLabel>

                    <TextField
                        id="priority"
                        type="number"
                        onChange={this.handlePriorityChange}
                        value={this.state.priority}>
                    </TextField>
                    <br/>
                    <br/>

                    <DatePicker
                        id="due-date"
                        selected={this.state.dueDate}
                        placeholderText="Due date"
                        onChange={this.handleDateChange}>
                    </DatePicker>
                    <br/>
                    <Button
                        variant={"contained"}
                        onClick={this.handleSubmit}
                        color={"primary"}>
                        Add #{this.state.items.length + 1}

                    </Button>
                </Card>
                <br/>
                <br/>
                <TodoList todoList={this.state.items}/>
            </div>
        );
    };

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }

}