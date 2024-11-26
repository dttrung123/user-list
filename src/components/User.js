import { useNavigate } from "react-router-dom";

function User({name, pic, id}) {
    const navigate = useNavigate();
    return (
        <section 
        className="user-container"
        onClick={() => navigate(`/users/${id}`)}
        >
            <img src={pic} alt={name} className="user-profile-pic"/>
            <h2>Hello, <span className="user-first-name">{name}</span></h2>
        </section>
    )
}

export default User;