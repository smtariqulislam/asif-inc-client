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

        fetch("https://asif-sever.vercel.app/users", {
          method: "POST",
            headers: {
              "content-type": "application/json",
            },

            body: JSON.stringify(user),
          })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));


       
      };
    return (
      <div>
        <h1>Please add a new User</h1>
        <form onSubmit={handleAddUser}>
         
          <ul className="form-style-1">
            <li>
              <label>
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                name="First"
               
                placeholder="FirstName"
                required
              />{" "}
              <input
                type="text"
                name="Last"
                
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
                
                placeholder="Email"
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
             
                placeholder="Phone Number"
              />
            </li>

            <li>
              <input type="submit" value="Submit" />
            </li>
          </ul>
        </form>

        <button>
          <Link to="/">All user</Link>
        </button>
      </div>
    );
};

export default CreateUser;