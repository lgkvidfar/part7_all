import React from "react";

const PersonForm = ({handlePersonSubmit, name, number}) => (
    <form onSubmit={handlePersonSubmit}>
            <input {...name} placeholder="name"/> <br/>
            <input {...number} placeholder="number" />
    <button type="submit">create</button>
  </form>
)

export default PersonForm