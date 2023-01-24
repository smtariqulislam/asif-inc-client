import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const user = useLoaderData();
   console.log(user);

   console.log(user._id)



  const handleUpdate = event =>{

      event.preventDefault();
      const FirstName = event.target.First.value;
      const LastName =event.target.Last.value;
      const Email = event.target.email.value;
      const PhoneNumber = event.target.phone.value;
      const userUpdate = { FirstName, LastName, Email, PhoneNumber };
      console.log(userUpdate);

    fetch(`http://localhost:4000/users/${user._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userUpdate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

  
    // console.log(id);

  }

  return (
    <div className="app">
      <h1>Edit Your Profile</h1>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="First"
          defaultValue={user.FirstName}
          placeholder="FirstName"
        />
        <br />
        <input
          type="text"
          name="Last"
          defaultValue={user.LastName}
          placeholder="Last Name:"
        />
        <br />
        <input
          type="text"
          name="email"
          defaultValue={user.Email}
          placeholder="Email:"
          disabled
        />
        <br />
        <input
          type="text"
          name="phone"
          defaultValue={user.PhoneNumber}
          placeholder="Phone Number:"
        />
        <br />

        <input type="submit" value="Update" id="" />

      </form>
    </div>
  );
};

export default Details;
