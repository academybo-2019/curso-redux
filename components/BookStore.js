import React, { Component } from 'react';
import {connect} from 'react-redux';

class BookStore extends Component {
    render() {
        console.log(this.props.books);
        return (
            <div>
                Bookstore
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