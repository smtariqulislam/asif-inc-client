import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {


   

     const user =useLoaderData();

     console.log(user);

   



    return (
      <div>
        {user.FirstName} {user.LastName}
        <br />
        {user.Email}
        <br />
        {user.PhoneNumber}
      </div>
    );
};

export default Details;