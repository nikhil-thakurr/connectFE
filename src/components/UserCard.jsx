import React from 'react'

const UserCard = ({user}) => {
    
    const {firstName,lastName,photoUrl,gender,age,about,skills} =user;

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
  <figure>
    <img
      src={photoUrl}
      alt="user Image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName}  {lastName} </h2>
    {((age || gender) && <h4>{age}  {gender}</h4>)}
    {(about !='This is a default !')?about:<p>Adding a bio can attract many people</p>}
    {skills && <p>{skills}</p>}
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Ignore</button>
      <button className="btn btn-secondary">Interested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard