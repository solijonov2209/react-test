import "./user.scss"

export const User = ({img,first_name,last_name,city,gender,email})=>{
  return(
    <>
    <li>
      <div className="avatar-wrapper">
        <img src={img} alt="firs_name" />
        <div className="name-wrapper">
          <strong className="user-name">{first_name}</strong>
          <strong className="user-lastName">{last_name}</strong>
        </div>
      </div>
      <span>City:{city}</span>
      <span>Gender:{gender}</span>
      <a href={`mailto:`+email} target="blank">Email</a>
    </li>
    </>
  )
}