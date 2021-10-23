import { Fragment, useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { users } from '../helpers/static-data.json'

const UserList = () => {
    const [selectedUser, setSelectedUser] = useState(0)
    const user = users[selectedUser]

    function handleNext() {
        setSelectedUser(
            (selectedUser === users.length - 1
                ? 0 : selectedUser + 1))
    }
    return (
        <Fragment>
            <div>
                <ul>
                    {users.map((user, index) => (
                        <li key={index} className={index === selectedUser ? "active" : ""}>
                            <button className="btn btn-outline-primary"
                                onClick={() => setSelectedUser(index)}>{user.name}</button>
                        </li>
                    ))}
                </ul>
                <button className="btn btn-info"
                    onClick={handleNext}>
                    <span>Next</span>
                    <FaArrowRight />
                </button>
            </div>
            {user && 
            <div>
                <div>
                    <h2>{user.name}</h2>
                </div>
                <div>
                    <h3>{user.title}</h3>
                    <p>{user.notes}</p>
                </div>
            </div>}
        </Fragment>
    )
}

export default UserList