import React, { Component } from 'react';
import './Student.css';

var details = [
    {
        name:"Himanshu",
        rollno: "184001",
        class:"12",
        section:"B"
    },
]

class Student extends Component{

    constructor(props){
        super(props);

        this.state = {
            details
        };

        this.handleAdd = this.handleAdd.bind(this);
    }

    //Remove students from list(delete)
    handleRemove(index){
        this.setState({
            details: this.state.details.filter(function(e,i){
                return i !==index;
            })
        })
    };

    handleAdd(detail){
        this.setState({details:[...this.state.details,detail]});
    }

    render(){
        return(
            <div className="container">
                <Input onAddTodo={this.handleAdd}></Input>
                <h4>Students: <span className = "badge">{this.state.details.length}</span></h4>
                <ul className="list-group">
                    {
                        this.state.details.map((detail,index) =>
                        <li className ="list-group-item" key={index}>
                            <h4 className="list-group-item-heading">{detail.name}
                             <small> <span className="label label-info">{detail.section}</span></small>
                            </h4>

                            <p><span className="glyphicon glyphicon-user">{detail.rollno}</span></p>
                            
                            <p>{detail.class}</p>

                            <button className="btn btn-danger btn-sn" onClick={this.handleRemove.bind(this,index)}>
                                <span className="glyphicon glyphicon-trash ">Delete</span>
                            </button>
                        </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

class Input extends Component{
    constructor(props){
        super(props);
        this.state ={
            name:'',
            rollno:'',
            class:'',
            section:'A'
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit      = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]:value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.onAddTodo(this.state);
        this.setState({
            name:'',
            rollno:'',
            class:'',
            section:'1',
        });
    }

    render(){
        return(
            <div>
                <h4>Add Student Details</h4>
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="inputName" className="col-sn-2 control-label">Name</label>
                            <div className="col-sn-10">
                                <input name="name"
                                        type ="text"
                                        className="form-control"
                                        id="inputName"
                                        value={this.state.name}
                                        onChange={this.handleInputChange}
                                        placeholder="Name"></input>
                            </div>
                            </div>
                        
                        <div className="form-group">
                        <label htmlFor="inputRollno" className="col-sn-2 control-label">Roll No.</label>
                            <div className="col-sn-10">
                                <input name="rollno"
                                        type ="number"
                                        className="form-control"
                                        id="inputRollno"
                                        value={this.state.rollno}
                                        onChange={this.handleInputChange}
                                        placeholder="Roll No.">
                                           
                                        </input>
                            </div>
                        </div>


                        <div className="form-group">
                        <label htmlFor="inputClass" className="col-sn-2 control-label">Class</label>
                            <div className="col-sn-10">
                                <select name="class"
                                        type ="number"
                                        className="form-control"
                                        id="inputClass"
                                        value={this.state.class}
                                        onChange={this.handleInputChange}
                                        placeholder="1">

                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                </select>
                            </div>
                        </div>


                        <div className="form-group">
                        <label htmlFor="inputSection" className="col-sn-2 control-label">Section</label>
                            <div className="col-sn-10">
                                <select name="section"
                                        type ="text"
                                        className="form-control"
                                        id="inputSection"
                                        value={this.state.section}
                                        onChange={this.handleInputChange}
                                        placeholder="A">
                                             <option>A</option>
                                            <option>B</option>
                                            <option>C</option>
                                            <option>D</option>
                                            <option>E</option>
                                            <option>F</option>
                                        </select>
                            </div>
                        </div>

                        
                        <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button   type="submit" className="btn btn-success">Add New Student</button>
                        </div>
                        </div>

                </form>
            </div>
        );
    }
}
export default Student;