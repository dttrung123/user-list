import { useParams } from "react-router-dom";
import User from "./User";

function UserDetail({users}) {
    const {id} = useParams();

    const user = users[id];

    return (
        <section className="user-detail-container">
            <img src={user.pic} alt={user.name} className="user-profile-pic"/>
            <div>
                <h2 className="user-name">{user.name}</h2>
                <p>{user.bio}</p>
            </div>
        </section>
    );
}

export default UserDetail;