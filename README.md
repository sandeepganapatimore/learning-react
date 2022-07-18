// Props vs State.

# Props.
- props get passed in to the component.
- function parameters.
- In funnctional component we use prop as *prop*.
- In class component we use prop as *this.props*
- props are immutable.
- functions must be pure to their props


# state.
- State is managed within the components.
- Varaibles declared in function body.
- useState Hook- Functional components.
- this.state- Class component.


# Destructuring 
- It improves code readability.
- Destructuring makes possible to unpack the values form array and properties  form the objects.


# Event Handlers.
- Event Handlers are used ti handle the event which is caused by clicking the button.
- Event handler in class component is handled by *this* keyword.


# Why do this keyword is undefined in javascript ?
- The this keyword of the clickMe arrow function refers to the global object.
- in this case the window object. So, this. position and this. color will be undefined because   - our window object does not know anything about the position or the color properties.

# Binding Event handlers
- 

# Conditional Rendering 
- There are four different Appraoches
- * if-elses.
- * element varaibles.
- * Ternary conditional operator.
- * short circuit operator.

# List and Keys 
- A "Key" is a special attribute you need to include when creating lists of elements.
- Keys give the elements a stable identity.
- Keys help React identity which items have changed are added or are removed.
- Help in efficient update of the user interface.

# index
- Item in the list should not have a unique id.
- The list is a static list and will not change.
- The list will never be reorder or filtered.
ry avoiding the index as key in the react app.

# styling the React component
- CSS Stylesheet
- inline Styling 
- CSS modules
- CSS in js library