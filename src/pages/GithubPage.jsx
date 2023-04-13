import axios from 'axios'
import { useEffect, useRef, useState } from 'react'

export const GithubPage = () => {
    const [name, setName] = useState('')
    const [user, setUser] = useState({
        login:'', 
        avatar:''
    })
    const EnterUser = useRef(null);

    const UpdateUserName = () => {
        setName(EnterUser.current.value)
        console.log(user)
    }

    useEffect(() => {
        GetUser();
    }, [name])

    const GetUser = () => {
        axios.get(`https://api.github.com/users/${name}`)
        .then(({data}) => {
            setUser((prevState) => ({
                ...prevState,
                login: data.login,
                avatar: data.avatar_url
            }))
        })
    }

    return (
        <div>
        <h1>Github Page</h1>
        <input type='text' ref={EnterUser}></input>
        <button onClick={ UpdateUserName }>Enter</button>
        <h1>{user.login}</h1>
        <img src={user.avatar}></img>
        </div>
    )
}

export default GithubPage;