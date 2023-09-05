import {useEffect, useState} from 'react';



const Dashboard = () => {
    const [currentUser , updateUser] = useState();

    useEffect(() => {
        const fetchData = async () => {
        const [error, user] = await getCurrentUser(sessionStorage.getItem('access_token'));
        if (error) console.log(error);
        if (user) updateUser(user);
        };
        fetchData();
    }, [])

    return (   
        <div>
            <h1 >Welcome Back</h1>
        </div>
    );
}

export default Dashboard;

