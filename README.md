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
- It is also called as local or encapsulated. 
- 


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

# Form Handling
- Controlled component:- The form which is controlled by react is called as controlled component.
- 

# Life-Cycle Methods
 ## 1) Mounting
 - When an instance of a component is being created and inserted into the DOM.
 ### There are four methods:-
- * constructor
- * static getDerivedStateFromProps
- * render
- * ComponentDidMount.

 ## 2) Updating
 - When a component is being re-rendered as a result of changes to either its props or state.
 ### There five methods.
 - * static getDerivedStateFromProps
 - * shouldComponentUpdate
 - * render
 - * getSnapshotBeforeupdate
 - * componentDidUpdate.

 ## 3) UnMounting
 - When component is removed from the DOM.
### There is only one type.
- * componentwillUnmount

 ## 4) Error-Handling
 - When there is error during rendering, in life-cycle method, or in the constructor of any child component.
 ### There are Two types..
 - * static getDerivedStateFromprop(prop,state)
 - * ComponentDidCatch.




 # Mounting Life-Cycle Methods.
 - Constructor(props):- A Special function that will get called whenever a new component is created.
 - Initializing state Binding the event handlers.
 - Do not cause side effects, Ex:-HTTP request.
 - Super(props) this will call base class constructor Directly overwrite this,state
 
 ### 2) static getDerivedStateFromProps
 - Donot use `this` keyword because it is static
 - render() method is used to build the UI.
 - only require method 
 - Used to Read props and state ans return JSX.
 - Do not change state or interact with DOM or make ajax calls.
 - Children components lifecycle methods are also executed.

## Updating Lifecycle Method
### static getDerivedStateFromprop(prop,state):
- only required method
### shouldComponentUpdate(nextProps,nextState) :
- Read props & state and return JSX.
### render()
- Donot change state or interact with DOM or make ajax calls.
### getSnapshotBeforeUpdate(prevProps,prevState):
- Called right before the changes from the virtual DOM are to be reflected on the DOM.
- Capture some information from the DOM.
- Method will either return null or return a value. Returned value will be passed as the third parameter to the next method.
### componentDidUpdate(prevProps,prevState,snapshot):
- Comparing current and previous props whether ti update the UI or not.
- Called after the render is finished in the re-render cycles.
- Cause side effects.


# Fragements
- Fragments let you group the elements without adding the extra node in the DOM tree.
- Fragements can be defined in two ways 
- 1) <React.Fragments> <React.Fragments/>
- 2) <> </> empty brackets are also known as the fragements.


# Pure Component: -
- `rpce` is snippet to create the pure class component.
- pure component VS component
-  Def:- It implements shouldCompnentUpdate with a shallow props and state comparison.
## Shallow comparision (SC):
- A) Primitive Type:- a & b returns true if they have same type.
- B) Complex Type: a&b returns true of they refere to the exact same object.
- Component is re-rendered only if there is the difference in the Shallow component.
