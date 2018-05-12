import {
  EXPENSE_CREATE,
  EXPENSE_UPDATE,
  EXPENSE_DELETE
} from '../action/expense-actions';

import uuidv4 from 'uuid/v4';

const initialState = {
  expenses: [
    {
      category: 'please add a budget category',
      id: `${uuidv4()}`,
      timestamp: `${new Date()}`,
      item: 'please add an expense item',
      expense: 0,
    }
  ]
};

export default function expenseReducer(state, action) {
  console.log('action', action);
  if (state === undefined) {
    return initialState;
  }

  let newState = {};
  let newExpenses;
  switch(action.type) {
    
    case EXPENSE_CREATE:
    let newExpense = {category: action.data.category, id: `${uuidv4}`, timestamp: `${new Date()}`, item: action.data.name, expense:`${parseFloat(action.data.expense)}`}
      newExpenses = [...state.expenses]
      newExpenses.push(newExpense);
      Object.assign(newState, state, {expenses: newExpenses});
      return newState;
    case EXPENSE_UPDATE:
      return Object.assign(newState, state, {
        
      });
    case EXPENSE_DELETE:
      
      let id = action.data.id;
      newExpenses = state.expenses.filter(function (el) {
        return el.id !== id
      });
      return Object.assign(newState, state, {expenses: newExpenses});
    default: return state;
  }
}