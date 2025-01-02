import { useEffect, useState } from "react"




const useApi1=(Api_url)=>{

    let [data,setData]=useState(null)
    useEffect(()=>{
        async function ferchApi2() {
            try {
                let resp=await fetch(Api_url);
                let apiData=await resp.json()
                setData(apiData)
                
            } catch (error) {
                console.log(error);

                
            }
            
        }
        ferchApi2()
    },[Api_url])
    return data
}
export default useApi1;