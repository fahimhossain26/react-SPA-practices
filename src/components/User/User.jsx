import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id, name,email,phone}=user;
    const userStyle={
        border:'2px solid red',
        padding:'10px',
        borderRadius:'20px',
    }
    return (
        <div style={userStyle}>
            <h2>id{id}</h2>
            <h2>name{name}</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <Link to={`/user/${id}`}>Show details</Link>
            <Link to={`/user/${id}`}>
                <button>click me</button>
            </Link>
          
        </div>
    );
};

export default User;