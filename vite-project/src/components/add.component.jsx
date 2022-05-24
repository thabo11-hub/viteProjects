import DashboardDataService from "../services/myService";

import React, { Component } from 'react'

export default class Add extends Component {
  constructor(props){
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
    this.newTodo = this.newTodo.bind(this);
  
    this.state = {
      id: null,
      title: "",
      description: "", 
      published: false,
      submitted: false
    };
  }

  onChangeTitle(e){
    this.setState({
      title: e.target.value
    });
  }
}

