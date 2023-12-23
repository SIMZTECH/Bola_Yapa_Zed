/* eslint-disable @typescript-eslint/no-explicit-any */
import {useState,useEffect,useMemo,useCallback} from 'react';
import {AUTH_BASE_URL} from '../config';
import { adminModelType } from '../types/Admin';
type adminData={
  data:adminModelType
};

export const FetchData = (url:string,token:string)=>{
    const [userData,setUserData] = useState(null);
    const [error,setError] = useState('');
    const [loading,setLoading] = useState<boolean>(false);

    const fetchData = useCallback(async () => {
      setLoading(true);
      try {
        const res = await fetch(`${AUTH_BASE_URL}/${url}`, {
          method: "get",
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        // method
        const results = await res.json();
        if (!res.ok) {
          throw new Error(results.message + "🥺");
        }

        setLoading(false);
        setUserData(results);
      } catch (error: any) {
        setLoading(false);
        setError(error.message);
      }
    }, [url]);

   useEffect(()=>{


    fetchData();
    // async function fetchDataHandler() {
    //   setLoading(true);
    //  try {
    //    const res = await fetch(`${AUTH_BASE_URL}/${url}`, {
    //      method:"get",
    //      headers: {
    //        authorization:`Bearer ${token}`
    //      }
    //    });

    //    // method
    //    const results = await res.json();
    //    if (!res.ok) {
    //       throw new Error(results.message + '🥺')
    //    }

    //    setLoading(false);
    //    setUserData(results);

    //  } catch (error:any) {
    //     setLoading(false);
    //     setError(error.message);
    //  }
    // }

    // fetchDataHandler();
   },[fetchData]);

   return{
    userData,
    error,
    loading
   }
};