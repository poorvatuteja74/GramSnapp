import { Biohazard } from 'lucide-react'
import { createContext, useContext, useEffect, useState} from 'react'
import { IContextType }from '../types/index'

export const INITIAL_USER ={
    id:'',
    name:'',
    username: '',
    email: '',
    password: '',
    imageUrl: '',
    bio: ''
};

const INITIAL_STATE ={
    user: INITIAL_USER,
    isLoading:false,
    isAuthenticated: false,
    setUser: ()=>{},
    setIsAuthenticated: ()=>{},
    checkAuthUser:async ()=> false as boolean,
};

const AuthContext = createContext<IContextType>(INITIAL_STATE)


const AuthProvider = ({children}: {children: React.ReactNode}) => {

    const [user,setUser]= useState(INITIAL_USER);
  return (
    <div>AuthContext</div>
  )
}

export default AuthContext