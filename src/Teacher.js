import React, { Component } from 'react';
import './Student.css';

var details = [
    {
        name:"Rakesh",
        rollno: "OPS184001",
        class:"12 A",
    },
]

class Teacher extends Component{

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
                <h4>Teachers : <span className = "badge">{this.state.details.length}</span></h4>
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
                <h4>Add Teacher's Details</h4>
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
                        <label htmlFor="inputRollno" className="col-sn-2 control-label">Teacher ID</label>
                            <div className="col-sn-10">
                                <input name="rollno"
                                        type ="number"
                                        className="form-control"
                                        id="inputRollno"
                                        value={this.state.rollno}
                                        onChange={this.handleInputChange}
                                        placeholder="Teacher ID">
                                           
                                        </input>
                            </div>
                        </div>


                        <div className="form-group">
                        <label htmlFor="inputClass" className="col-sn-2 control-label  row">Class</label>
                            <div className="col-md-13">
                                <select  
                                 name="section"
                                 type ="text"
                                 className="form-control"
                                 id="inputSection"
                                 value={this.state.section}
                                 onChange={this.handleInputChange}
                                 placeholder="A" multiple>

                                <option>1 A</option>
                                <option>1 B</option>
                                <option>1 C</option>
                                <option>1 D</option>
                                <option>1 E</option>
                                <option>1 F</option>
                                
                                <option>2 A</option>
                                <option>2 B</option>
                                <option>2 C</option>
                                <option>2 D</option>
                                <option>2 E</option>
                                <option>2 F</option>

                                <option>3 A</option>
                                <option>3 B</option>
                                <option>3 C</option>
                                <option>3 D</option>
                                <option>3 E</option>
                                <option>3 F</option>

                                <option>4 A</option>
                                <option>4 B</option>
                                <option>4 C</option>
                                <option>4 D</option>
                                <option>4 E</option>
                                <option>4 F</option>

                                <option>5 A</option>
                                <option>5 B</option>
                                <option>5 C</option>
                                <option>5 D</option>
                                <option>5 E</option>
                                <option>5 F</option>

                                <option>6 A</option>
                                <option>6 B</option>
                                <option>6 C</option>
                                <option>6 D</option>
                                <option>6 E</option>
                                <option>6 F</option>

                                <option>7 A</option>
                                <option>7 B</option>
                                <option>7 C</option>
                                <option>7 D</option>
                                <option>7 E</option>
                                <option>7 F</option>

                                <option>8 A</option>
                                <option>8 B</option>
                                <option>8 C</option>
                                <option>8 D</option>
                                <option>8 E</option>
                                <option>8 F</option>

                                <option>9 A</option>
                                <option>9 B</option>
                                <option>9 C</option>
                                <option>9 D</option>
                                <option>9 E</option>
                                <option>9 F</option>

                                <option>10 A</option>
                                <option>10 B</option>
                                <option>10 C</option>
                                <option>10 D</option>
                                <option>10 E</option>
                                <option>10 F</option>

                                <option>11 A</option>
                                <option>11 B</option>
                                <option>11 C</option>
                                <option>11 D</option>
                                <option>11 E</option>
                                <option>11 F</option>

                                <option>12 A</option>
                                <option>12 B</option>
                                <option>12 C</option>
                                <option>12 D</option>
                                <option>12 E</option>
                                <option>12 F</option>

                             </select>
                            </div>
                        </div>
                            
                        
                        <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button   type="submit" className="btn btn-success">Add New Teacher</button>
                        </div>
                        </div>

                </form>
            </div>
        );
    }
}
export default Teacher;