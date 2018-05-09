401 JS --  Lab 32 Budget Tracker
===

## Submission Instructions
* continue working from lab 31
* submit a pull request to the project

## Requirements  
#### Feature Tasks 
##### expense
* in this app a expense should contain at least the following properties
  * `id` a uuid
  * `categoryID` an id that corresponds to an existing category
  * `timestamp` a date from when the category was created
  * `name` a string that is the name of the category
  * `price` a number that is the total amount of $ in the category 
  * fell free to add more to your expense if you want

##### redux
###### app reducer
* export a reducer that holds the entire app state from `reducer/index.js`
* create a reducer that will combine you categories reducer and expenses reducer


###### expenses reducer
* create a category reducer in your your reducer directory
* this reducer should atleast support the following interactions 
  * `EXPENSE_CREATE` -- store an expense
  * `EXPENSE_UPDATE` -- update an existing expense
  * `EXPENSE_DELETE` -- delete an existing expense
* if you need others feel free to add them

###### Action Creators
* you should create an action creator for each interaction supported by your
  expenses reducer

###### Store
* Use `combineReducers` to create your store.

##### Components
Create the following components and structure them according to the following
diagram.  

``` 
App
  Provider 
    BrowserRouter
      Route / Dashboard
        CategoryForm -- for creating categorys
        [Category Item] -- list of Category items
           CategoryForm  -- for updating categorys
           ExpenseForm -- for creating expenses
           [ExpenseItem]  -- list of expense items
              ExpenseForm -- for updating an expense
```

###### Update the CategoryItem Component
* should keep all of the features described in lab-31
* add an ExpenseForm to your category item that enables the user to create expenses on your app state
* display list all the ExpenseItems belonging to the category


##### ExpenseForm Component 
* should have an `onComplete` prop that will be invoked with the form state on submit
* should support an `expense` prop that will both set the intial form state, and update the state in the hook on `componentWillReceiveProps()`
* should have a `buttonText` prop that will configure the submit button's text

##### ExpenseItem Component 
* should have a button that will delete the expense from the appState `onClick`
* should display the `name` and `price` of the component
* should display an ExpenseForm that will enable the user to update the expense in the app state

####  Documentation  
Write a description of the project in your README.md
