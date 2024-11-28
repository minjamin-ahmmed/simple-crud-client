import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {

    const loadedUsers = useLoaderData()

    const [users, setUsers] = useState(loadedUsers)

    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert("Deleted Successfully!")
                    const remaining = users.filter(user => user._id !== id)
                    setUsers(remaining)

                }
            })



    }

    return (
        <div>
            <h1>
                Total Users: {users.length}
            </h1>

            {
                users.map(user => <p key={user._id}>{user.name} {user.email} {user._id}

                    <Link to={`/update/${user._id}`}>
                        <button>Update User</button>
                    </Link>

                    <button onClick={() => handleDelete(user._id)}>X</button> <br />
                </p>)
            }
        </div>
    );
};

export default Users;