# what is react  


# component are 2 type 
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