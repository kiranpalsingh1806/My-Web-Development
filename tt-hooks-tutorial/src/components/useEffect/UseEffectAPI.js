import React, {useState, useEffect} from 'react'
import Githubusers from './GitHub/GithubUsers';
import Loading from './GitHub/Loading';

const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);

    const [loading, setloading] = useState(true);

    const getUsers = async () => {
        try {
            setloading(false);
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            setUsers(await response.json());
        } catch(error) {
            setloading(false);
            console.log(error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    if(loading) {
        return <Loading />
    }

    return (
        <>
        <Githubusers users={users}/>
        </>
    )
}

export default UseEffectAPI;