
import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();
const Apiurl = "https://www.omdbapi.com/?apikey=45f0782a";


const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setisError] = useState({ show: "false", msg: "" });
    const [query, setquery] = useState('War');
    
const getMovies = async (url) => {
    try {
      const res= await fetch(url);
        const data=await res.json();
        // console.log(data);
      if (data.Response === "True") {
        setMovie(data.Search);
        setIsLoading(false);
      }else{
        setisError({show: "true", msg: "data.error" })
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies(`${Apiurl}&s=${query}`);
  },[query]);

  return <AppContext.Provider value={{isLoading,movie,isError,query,setquery}}>
    {children}
    </AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
