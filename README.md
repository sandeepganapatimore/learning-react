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