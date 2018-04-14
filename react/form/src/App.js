import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      tasks:[]
    };
  }

  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]:value
    });
  }

  onHandleSubmit = (event) =>{
    event.preventDefault();
    console.log(this.state);
  }
  onCreateData = () =>{
    var tasks = [
      {
        id:this.createID(),
        name:'bai 1',
        status:true
      },
      {
        id:this.createID(),
        name:'bai 2',
        status:true
      },
      {
        id:this.createID(),
        name:'bai 3',
        status:false
      }

    ];
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  s4(){
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
  }
  createID()
  {
    return this.s4() + '-' + this.s4();
  }
  render() {
    return (
      <div className="container mt-30">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Form</h3>
              </div>
              <div className="panel-body">

                <form onSubmit={this.onHandleSubmit}>
                  <legend>Form title</legend>
                
                  <div className="form-group">
                    <label >Username</label>
                    <input type="text" className="form-control" name="txtUser" onChange={this.onHandleChange}/>
                  </div>

                  <div className="form-group">
                    <label >Password</label>
                    <input type="text" className="form-control" name="txtPass" onChange={this.onHandleChange}/>
                  </div>
                
                  <button type="button" className="btn btn-primary" onClick={this.onCreateData}>
                    <span className="fa fa-plus mr-5"></span>Tao
                </button>&nbsp;
                
                  <button type="submit" className="btn btn-primary" >Luu</button>&nbsp;
                  <button type="reset" className="btn btn-danger">Reset</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
