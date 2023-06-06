import { createContext, useState } from 'react';
import Cookies from 'js-cookie'
import api from '../services/api'

export const AuthContext = createContext({});

export default function AuthContextProvider(props){
    const [user, setUser] = useState(null);

    function GetLoggedInUserFromCookie() {
        const loggedInUser = Cookies.get('loggedInUser')
        setUser(loggedInUser ? JSON.parse(loggedInUser) : null) 
    }

    function SaveLoggedInUserCookie(user){
        const saveUser = {
            id: user._id,
            name: user.name,
            email: user.email
        }
        Cookies.set('loggedInUser', JSON.stringify(saveUser), { expires: 7 })
    }

    async function Login(loginUser){
        if(loginUser.password && loginUser.email){
            try {
                const response = await api.post('/login', loginUser)
                setUser(response.data)
                SaveLoggedInUserCookie(response.data)
                return true
            }catch(e) {
                console.log(e)
            }
        }else{
            console.log('Preencha todos os campos.')
        }
    }

    async function Register(newUser, confirmPass){
        if(newUser.name && newUser.password && newUser.email){
            if(newUser.password === confirmPass){
                try {
                    const response = await api.post('/register', newUser)
                    setUser(response.data)
                    return true
                }catch(e) {
                    return e
                }
            }else{
                console.log('Preencha todos os campos.')
            }
        }else{
            console.log('Preencha todos os campos.')
        }
    }

  return(
    <AuthContext.Provider value={{user, Register, Login, GetLoggedInUserFromCookie}}>
      {props.children}
    </AuthContext.Provider>            
  )
}