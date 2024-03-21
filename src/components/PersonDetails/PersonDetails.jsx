import { Link, useLoaderData, useRouteLoaderData } from "react-router-dom";

const PersonDetails = () => {
    const user= useLoaderData()
    const {name,address}=user;
    return (
        <div>
            <h2>details about person :{name} </h2>
            <p>Address :{address.city} <br /> Street :{address.suite}</p>
            
        </div>
    );
};

export default PersonDetails;