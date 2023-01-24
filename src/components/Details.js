import React from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";

const Details = () => {
  const user = useLoaderData();
   console.log(user);

   console.log(user._id)



  const handleUpdate = event =>{

    window.alert("Sucessful update");

      event.preventDefault();
      const FirstName = event.target.First.value;
      const LastName =event.target.Last.value;
      const Email = event.target.email.value;
      const PhoneNumber = event.target.phone.value;
     
      const userUpdate = { FirstName, LastName, Email, PhoneNumber };
      console.log(userUpdate);

    fetch(`https://asif-sever.vercel.app/users/${user._id}`, {
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
      <Navbar></Navbar>
      <h1>Edit Your Profile</h1>
      <form onSubmit={handleUpdate}>
        <ul className="form-style-1">
          <li>
            <label>
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="First"
              defaultValue={user.FirstName}
              placeholder="FirstName"
              required
            />{" "}
            <input
              type="text"
              name="Last"
              defaultValue={user.LastName}
              placeholder="LastName"
              required
            />
          </li>
          <li>
            <label>
              Email <span className="required">*</span>
            </label>
            <input
              type="text"
              name="email"
              className="field-long"
              defaultValue={user.Email}
              disabled
              placeholder="LastName"
            />
          </li>
          <li>
            <label>
              Phone Number <span className="required">*</span>
            </label>
            <input
              type="text"
              name="phone"
              className="field-long"
              defaultValue={user.PhoneNumber}
              placeholder="Phone Number"
            />
          </li>

          <li>
            <input type="submit" value="Update" />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Details;
