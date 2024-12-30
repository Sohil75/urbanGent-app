import React ,{createContext,useState,useEffect}from 'react'

export const DataContext= createContext();

export const DataProvider=({children})=>{
    const [products,setProducts]=useState([]);
    const [loading,setLoading]= useState(true);
     useEffect(()=>{
        fetch('https://urban-app.onrender.com/api/products').then((response)=> { if(!response.ok){
          throw new Error("failed to fethc product");
        }
        return response.json();
      })
        .then((data)=>{
          setProducts(data);
          setLoading(false);
        })
        .catch((error)=>{
          console.error("error fetching data:",error);
          setLoading(false);
        });
      },[]);

      return(
        <DataContext.Provider value={({products,loading})}>
            {children}
        </DataContext.Provider>
      );
};