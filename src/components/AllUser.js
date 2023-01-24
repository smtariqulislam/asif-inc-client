import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllUser = () => {

    const [users, setUsers] = useState([]);

    const [deleteCount, setDeleteCount]= useState(false);

    const [buttonChange, setButtonChange] =useState(false)



      useEffect(() => {
        fetch("http://localhost:4000/users")
          .then((res) => res.json())
          .then((data) => setUsers(data));
      }, [deleteCount]);


        const handleDelete = (id) => {
          const proceed = window.confirm(
            "Are you sure, you want to cancel this order"
          );

          if (proceed) {

          // console.log(id)
          fetch(`http://localhost:4000/deleteUsers/${id}`, {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((result) => setDeleteCount(result));
        }
        
      };

     



    return (
      <div>
        <h1>Total: {users.length}</h1>

        <div>
          {users.map((user) => (
            <p key={user._id}>
              {user.FirstName}
              <br />
              <button>
                <Link to={`/users/${user._id}`}>details</Link>
              </button>
              {buttonChange ? (
                <>
               
                  <button onClick={() => setButtonChange(false)}>unblock</button>
                </>
              ) : (
                <>
                  <button onClick={() => setButtonChange(true)}>block</button>
                </>
              )}

          
              <button onClick={() => handleDelete(user._id)}>delete</button>
            </p>
          ))}
        </div>
      </div>
    );
};

export default AllUser;