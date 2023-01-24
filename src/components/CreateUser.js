import React from 'react';
import { Link } from 'react-router-dom';

const CreateUser = () => {

 



      const handleAddUser = (event) => {
        event.preventDefault();
        const FirstName = event.target.First.value;
        const LastName = event.target.Last.value;
        const Email = event.target.email.value;
        const PhoneNumber = event.target.phone.value;
        const user = { FirstName, LastName, Email, PhoneNumber };
        console.log(user);
        event.target.reset();

        fetch("http://localhost:4000/users", {
          method: "POST",
            headers: {
              "content-type": "application/json",
            },

            body: JSON.stringify(user),
          })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));


        // fetch("http://localhost:4000/user", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },

        //   body: JSON.stringify(user),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(data);

        //     const newUsers = [...users, data];
        //     setUsers(newUsers);
        //   })
        //   .catch((err) => console.error(err));
      };
    return (
      <div>
        <h1>Please add a new User</h1>
        <form onSubmit={handleAddUser}>
          <input type="text" name="First" placeholder="First Name:" />
          <br />
          <input type="text" name="Last" placeholder="Last Name:" />
          <br />
          <input type="text" name="email" placeholder="Email:" />
          <br />
          <input type="text" name="phone" placeholder="Phone Number:" />
          <br />
          <button type="submit">ADD</button>
        </form>

        {/* <button type="submit">ADD</button> */}
        <Link  to="/">all user</Link>
      </div>
    );
};

export default CreateUser;