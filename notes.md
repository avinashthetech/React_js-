# what is react  


# component are 2 type  and (what is component ???)
1. class based 
2. function based  **** more work in function 


# diff between CBC and FBC

#         CBC                              FBC
1.        js clases                        js function
2.       Inbulit-state(statefull)          stateless(using hooks to change statefull)
3.       no hooks use                      hooks
4.      life cycle methods                 No life cycle methods
5.      render                             no render
6.    this keyword                         no this keyword


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