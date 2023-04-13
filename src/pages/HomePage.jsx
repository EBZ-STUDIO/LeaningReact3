import { useState } from "react";

export const HomePage = () => {
    const [count, setCount] = useState(0);
    const [userName, setUserName] = useState("");

    const UpdateUserName = (event) => {
        setUserName(event.target.value);
    }

    return (
        <div>
            <h1>Home Page</h1>
            <h2>{count}</h2>

            <input type="text" placeholder="Enter your name:" onChange={UpdateUserName}/>

            <div>
                <h2>{userName}</h2>
            </div>

            <button onClick={() => {
                setCount(count + 1)
            }}>Adição</button>

            <button onClick={() => {
                setCount(count - 1)
            }}>Subtração</button>
        </div>
    )
}

export default HomePage;