import React, { Component } from 'react';
import {connect} from 'react-redux';

class BookStore extends Component {
    render() {
        console.log(this.props.books);
        return (
            <div>
                <table>
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

export default connect(mapStateToProps)(BookStore);