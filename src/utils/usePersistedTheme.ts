import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>,
];

export default function usePersistedTheme<T>(key:string, defaultTheme: T): Response<T> {
  const [state, setState] = useState(() => {

    
    const storedTheme = localStorage.getItem(key)
    
    if(storedTheme) {
      return JSON.parse(storedTheme)
    } else {
      return defaultTheme
    }
  })

  useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}