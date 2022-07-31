# WebPack
- Webpack is billed as a module bundler. A module bundler takes all of our different
- files (JavaScript, LESS, CSS, JSX, ESNext, and so on) and turns them into a single file.
- The two main benefits of bundling are modularity and network performance.
- Network performance is gained by only needing to load one dependency  in the browser: The bundle
- Each script tag makes an HTTP request, and there’s a latency penalty for each HTTP request.
- Bundling all the dependencies into a single file allows you to load everything with one HTTP request, thereby avoiding additional latency.

## Aside from code compilation, webpack also can handle:

### Code splitting
- Splits up your code into different chunks that can be loaded when you need them. Sometimes these are called **rollups or layers** the aim is to break up code as needed for different pages or devices.
### Minification
- Removes whitespace, line breaks, lengthy variable names, and unnecessary code to reduce the file size.
### Feature Flagging
- Sends code to one or more—but not all—environments when testing out features.
### Hot Module Replacement (HMR)
- Watches for changes in source code. Changes only the updated modules immediately.

###### Uses Of Webpack

# Modularity
`Using the module pattern to export modules that will later be imported or
required by another part of the application makes source code more approacha‐
ble. It allows development teams to work together, by allowing them to create
and work with separate files that will be statically combined into a single file
before sending to production.`

# Composition
`` With modules, we can build small, simple, reusable React components that we
can compose efficiently into applications. Smaller components are easier to com‐
prehend, test, and reuse. They’re also easier to replace down the line when
enhancing applications. ``
# Speed
` Packaging all the application’s modules and dependencies into a single client bun‐
dle will reduce the load time of an application because there’s latency associated
with each HTTP request. Packaging everything together in a single file means
that the client will only need to make a single request. Minifying the code in the
bundle will improve load time as well.`

# Consistency
` Since webpack will compile JSX and JavaScript, we can start using tomorrow’s
JavaScript syntax today. Babel supports a wide range of ESNext syntax, which
means we don’t have to worry about whether the browser supports our code. It
allows developers to consistently use cutting-edge JavaScript syntax.`


# Refs:
- Def:- It makes possible to access the DOM Node directly.
- We use React.Creatref() in the constructor.
- **`varraibleprop.current.value`*** is used access the current data which updated on the DOM.
- There are two ways to write the refs in the DOM 
- **`refs`** must be attached to class components it should not be attached to functional components.

# Portals:-
- Def:- To render the child component in the DOM node which is out of the `root-node` .
- *Syntax*:- import ReactDom from 'react';
- add `React.Createportal() to the component.
- It takes two parameter:-
- First:- return() which return any any value such as JSX,string,number.
- Second:- get.documentgetElementId('<div id="portal-root"></div> ') in the `index.html`
- create another root node by different name below `<div id="root"></div>` 
- for example `<div id="portal-root"></div>`
- Mainly used for bubbling event.
  
  # Error Boundary:- 
- There are two methods 
-  1)  static getDerivedStateFromError(error) :- This static method is used to render a fallback 
  UI after an error is thrown.
- 2) componentDidCatch(error) :- It is used to log the error message.
- Main purpose is to catch the fallback errors and display the falback UI for the error.