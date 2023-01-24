import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


const AllUser = () => {

    const [users, setUsers] = useState([]);
    const [deleteCount, setDeleteCount]= useState(false);
    const [Block, setUpdatedBlock] = useState(false);


     useEffect(() => {

     }, [ Block]);

      useEffect(() => {
        fetch("https://asif-sever.vercel.app/users")
          .then((res) => res.json())
          .then((data) => setUsers(data));
      }, [deleteCount,Block]);



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

      const handleBlock = (
        id,
        block,
        FirstName,
        LastName,
        Email,
        PhoneNumber
      ) => {
        
        const updatedBlock = !block;
        const userUpdate = { FirstName,
        LastName,
        Email,
        PhoneNumber, updatedBlock };
        console.log(userUpdate);

        fetch(`https://asif-sever.vercel.app/users/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userUpdate),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setUpdatedBlock((p) => !p);
          });
      };



    return (
      <div>
        <Navbar></Navbar>

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
                    

                    <button onClick={()=>handleBlock(user._id,user.block,user.FirstName,user.LastName,user.Email,user.PhoneNumber)}>

                      {user?.block ? `Unblock` : `Block`}
                    </button>
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