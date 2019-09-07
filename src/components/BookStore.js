import React, { Component } from 'react';
import {Label, Form, FormGroup, Input} from 'reactstrap';
import {connect} from 'react-redux';

class BookStore extends Component {

    constructor(){
        super();
        this.state = {
            id:null,
            title:"",
            description:""
        }
    }

    handleSubmit(){
        const newBook = {}
        this.props.dispatch({type:'add',value:newBook});
    }

    handleChange(){}

    render() {
        console.log(this.props.books);
        return (
            <div>
                <Form className="m-5" onSubmit={this.handleSubmit.bind(this)}>
                    <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text" name="title" value={this.state.title} onChange={(e)=>this.handleChange(e)} placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="text" name="description" value={this.state.description} onChange={(e)=>this.handleChange(e)} placeholder="password placeholder" />
                    </FormGroup>
                    <button >{this.state.update?'Guardar':'Registrar'}</button>
                </Form>
                <table className="m-5">
                    <tbody>
                    {this.props.books && this.props.books.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td><button>Edit</button></td>
                                <td><button>Delete</button></td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        books:state.reducerBook.books
    };
}

function mapDispatchToProps(dispatch){
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookStore);