# what is react  


# component are 2 type  and (what is component ???)
In React, components are the building blocks of a user interface (UI). A component is a reusable piece of code that represents a part of the UI, such as a button, a form, a header, or an entire page.
1. class based 
<!-- These are ES6 classes that extend React.Component and include a render method to return JSX. Class components also handle state and lifecycle methods. However, since React introduced Hooks, functional components have become more common. -->


2. function based  **** more work in function 
<!-- Functional Components: These are simple JavaScript functions that take props (input data) as an argument and return JSX (React’s HTML-like syntax). Functional components are often used for simpler parts of the UI. -->

# diff between CBC and FBC

#         CBC                              FBC
1.        js clases                        js function
2.       Inbulit-state(statefull)          stateless(using hooks to change statefull)
3.       no hooks use                      hooks
4.      life cycle methods                 No life cycle methods
5.      render                             no render
6.    this keyword                         no this keyword



<!--  jhadu hai jhadu
rcc class base
rafce function based -->

const App=()=>{
    return(
        <div><h1>fuction base </h1></div>
    )
};
export defult App


# class base component


class NavbarCBC extends Component{
    render()
    return (
        <nav><li>home</li></nav>
    )
}

export defult NavbarCBC


Props (Properties):
<!-- 
Components can accept props, which are like arguments passed to a function. Props allow data to be passed from one component to another, making components more dynamic and reusable. -->

const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};
// Usage:
<Greeting name="Alice" />

# Lifecycle:
<!-- 
Components, especially class components, go through various lifecycle stages like mounting, updating, and unmounting. React provides lifecycle methods (e.g., componentDidMount, componentDidUpdate) to control what happens during these stages. -->








useState---> ek fuction hai (is a fuction) return before js k code write  value return krta hai jo ki ek array (undfe , function)

return ke andar  jsx code write


js ko jsx me use krna 
to use the expresstion {state}

# what is hook (inbuilt fucnction)

# what is  props-->share data parent in child


parent.jsx data="helloo"
|
|
|                    
Child.jsx         <ChildA x={data}/>

//? props value jab share ho gi child file me to value obj ke form me save ho gi  


// XML 

html.file
xml
return 
<h1>h1ll</h1>
<p>kkkkvjhbui</p>

A.jsx data=[10,20,30]
<B dbData={data}/>

B.jsx
const B=( parameter)=>{
    console.log(parameter)
    return(<div></div>)

}




# props Drilling 



App <--P <-- C1 <--C2   share the data one file another file 
------|
      |
     =>data[10,12] 





Css in React 

# Inline--->style={{color:"red",background:"pink"}}
# global css
<!-- ple hm log src me file created krne bad index yeh App me import kre ge
yeh sab me km aaye  g-->
# midule css 
reactCss-->Footer.jsx as well as Footer.css file bhi creted



# forms 
1. controlled (virtual dom)
2. Uncontrolled (Real dom)


# why are used from {
    <!-- acces the data from user -->
    <!-- user se data lene ke liya -->
}



    let handleUsername =(e)=>{
        console.log(e);
    }
 # synthetic base event (object )    object ko access krnr key dot key word use krte hai         <!-- setUsername(e.target.value); -->

userName { a b c d}
all data {value} state me save ho raha hai

<!-- btn me on onClick use kr skte hai  -->


# synthetic and non synthetic

# controll form pe jao kaise bhi kyuki bahut km aata hai 

#         Controlled Form -optimal way 

<!-- 
let name="useremail"

{[name]:"xyz"}           userenail:xyz  -->



<!-- ...formData,[name]:value   previous data ko access krn ke liya -->




  App.jsx {call-->TodoWrapper}

# TodoWrapper
1. CreateTodo
2. AllTodo

# what  is a useRef and why are use in react { object , inmutable} as like a useState ,hooks , for current value 

# ? life cycle in component in react
# .  three state in LCM
1. Mounting
2. Updating
3. Unmounting


*   Interview : what is Mounting-componentDidMount() *
<!-- 


Mounting              Updating                    Unmounting


componentDidMount()   componentDidUpdate()    componentWillUnmount()   getSnapshotBeforeUpdate


-->

# What is codintainal rendering


# constructor
    <!-- constructor(){
        super()
        console.log("i am constructor")
    } -->


# What is a  useEffect

# getSnapshotBeforeUpdate:screenshot lena before the data

useEffect(()=>{},[dependancy arr])




# Are using  the API  then useEffect,useState 
https://api.github.com/users
https://jsonplaceholder.typicode.com/todos/
https://fakestoreapi.com/products




<!--  Go to the website  jsonplaceholder -->


     useContext
App
^
|
Parent ==>data[{id:1,text:'hello},{id:2,text:"hii}]
^
|
CHILD A
^
|
CHILD B

<!-- 
jaha jaha $$$$ vaha pe component  hota hai jaise ki useContect { object store GlobalData} GlobalData.Provider -->

1. cretae a context
2. Provide a context
3. Consume a context 


# intro React :- what is react and feature {Component} props   diff cbc fbc
                                                          



                                                          useRef:

<!-- This hook returns a mutable ref object that can persist values across renders without causing a re-render when updated. It’s often used to access DOM elements or store mutable values.
Example: -->
import React, { useRef } from 'react';

const InputFocus = () => {
  const inputEl = useRef(null);

  const focusInput = () => {
    inputEl.current.focus();  // Access the DOM input element directly
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
};




# useContext:

<!-- This hook allows you to access context values in a functional component without using the Consumer component. Context is used to pass data through the component tree without having to pass props down manually at every level -->

  # useEffect:
<!-- 
This hook allows you to perform side effects (e.g., data fetching, DOM manipulation, subscriptions) in functional components. It runs after the component renders. It can also be used for cleanup when the component unmounts or when a specific state changes -->

# useState:
<!-- 
This hook allows you to add state to functional components. It returns a pair: the current state value and a function to update it. -->



# Props drilling
<!-- 
Props drilling is the practice of passing data from a parent component to deeply nested child components via props, even if some of the intermediate components don't need the data themselves -->