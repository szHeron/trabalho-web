import { createContext, useState } from 'react';
import api from '../services/api'

export const AuthContext = createContext({});

export default function AuthContextProvider(props){
  const [user, setUser] = useState(null);

  async function Login(loginUser){
        if(loginUser.password && loginUser.email){
            try {
                const response = await api.post('/login', loginUser)
                setUser(response.data)
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
    <AuthContext.Provider value={{user, Register, Login}}>
      {props.children}
    </AuthContext.Provider>            
  )
}