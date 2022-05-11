import { useEffect, useState } from "react";

const useProduct=()=>{
    const [shirts,setShirt]=useState([]);
    useEffect(()=>{
        fetch('fackData.json')
        .then(res=>res.json())
        .then(data=>setShirt(data))
    },[])
    return [shirts,setShirt];
}
export default useProduct;