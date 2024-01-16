import React, { Component } from "react";

class ToDoList extends React.Component{
    render(){
        return (
            <div className="list-container">
                <h2>Todo List</h2>
                <ol>
                    <li>Clean Porch</li>
                    <li>Wash Car</li>
                    <li>Attend BCHAIN Class</li>
                </ol>
            </div>
        );
    }
}

export default ToDoList;