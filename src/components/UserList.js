import User from "./User";

function UserList({users}) {
    return (
        <div className="user-list-container">
            {users.map((user, index) =>
                <User name={user.name} pic={user.pic} id={index} key={user.name}/>
            )}
        </div>
    )
}

export default UserList;