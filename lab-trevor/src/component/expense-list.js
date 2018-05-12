import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import UpdateExpense from './update-expense'

import {
  exDelete,
  extUpdate
} from '../action/expense-actions';
import ExpenseItem from './expense-item.js';

class ExpenseList extends React.Component {
  constructor(props){
    super(props);
   

  }

  list(){
    let newState = [...this.props.expenses];
    let category = this.props.category;
     let newExpenses = newState.filter(function (el) {
        return el.category === category
      });
      console.log('newExpense', newExpenses)
      
      return newExpenses.map((expense, index) => {

        return <ExpenseItem item={expense.item} expense={expense.expense} timestamp={expense.timestamp}
        key={index} index={index} id={expense.id}
        catUpdate={this.props.catUpdate}
        catDestroy={this.props.catDestroy}
      />
    });
  }

  render(){
    console.log('render', this.props.expenses)
    return <ul>
      {this.list()}
      </ul>
  }
}

const mapStateToProps = state => {
  return {expenses: state.expenseReducer.expenses};
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    exUpdate: (data) => dispatch(exUpdate(data)),
    exDelete: (data) => dispatch(exDelete(data))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);