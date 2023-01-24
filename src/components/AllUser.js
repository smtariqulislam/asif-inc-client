import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllUser = () => {

    const [users, setUsers] = useState([]);

  


      useEffect(() => {
        fetch("http://localhost:4000/users")
          .then((res) => res.json())
          .then((data) => setUsers(data));
      }, []);






    return (
      <div>
        <h1>Total: {users.length}</h1>

        <div>
          {users.map((user) => (
            <p key={user._id}>
              {user.FirstName}
              <br />
              {/* {user.Email} */}
              <Link to={`/users/${user._id}`}>
                details
              </Link>
              <button>block</button>
              <button>delete</button>
            </p>
          ))}
        </div>
      </div>
    );
};

export default AllUser;