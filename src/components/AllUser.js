import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const AllUser = () => {

    const [users, setUsers] = useState([]);

    const [deleteCount, setDeleteCount]= useState(false);

    const [buttonChange, setButtonChange] =useState(false)



      useEffect(() => {
        fetch("https://asif-sever.vercel.app/users")
          .then((res) => res.json())
          .then((data) => setUsers(data));
      }, [deleteCount]);





        const handleDelete = (id) => {
          const proceed = window.confirm(
            "Are you sure, you want to cancel this order"
          );

          if (proceed) {

          // console.log(id)
          fetch(`https://asif-sever.vercel.app/deleteUsers/${id}`, {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((result) => setDeleteCount(result));
        }
        
      };

      const handleBlock = (id) =>{
        console.log(id);
        // preventDefault();
      }

     



    return (
      <div>
        {/* <Navbar></Navbar> */}

        <h1>Total User: {users.length}</h1>

        <div>
          <table class="table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Details</th>
                <th>Block</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td> {user.FirstName}</td>

                  <td>
                    <button>
                      <Link to={`/users/${user._id}`}>Details</Link>
                    </button>
                  </td>

                  <td>
                    <button onClick={()=>handleBlock(user._id)}>Block</button>
                    {buttonChange ? (
                      <>
                        <button onClick={() => setButtonChange(false)}>
                          Unblock
                        </button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => setButtonChange(true)}>
                          Block
                        </button>
                      </>
                    )}
                  </td>

                  <td>
                    <button onClick={() => handleDelete(user._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />

          <button>
            <Link to="/users/create">Create User</Link>
          </button>
        </div>
      </div>
    );
};

export default AllUser;