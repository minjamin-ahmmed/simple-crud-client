import { useLoaderData } from "react-router-dom";


const Update = () => {

    const loadedData = useLoaderData()
    console.log(loadedData);

    const handleUpdate = (event) => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const updatedUser = { name, email }

        console.log(name, email);

        fetch(`http://localhost:5000/users/${loadedData._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert("user updated Successfully!")
                }

            }

            )

    }


    return (
        <div>
            <h1>Update Information of {loadedData.name}</h1>

            <form onSubmit={handleUpdate}>

                <input type="text" name="name" defaultValue={loadedData?.name} />
                <br />
                <input type="email" name="email" defaultValue={loadedData?.email} />
                <br />
                <input type="submit" value="update" />
            </form>
        </div>
    );
};

export default Update;