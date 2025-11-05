import React from 'react'

export default function UserCard({ user }) {
  const { name, email, phone, website, address, company } = user
  const fullAddress = `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`

  return (
    <article className="card singleCard">
      <div className="cardInner">
        {/* Image placeholder (round structure) */}
        <div className="avatarCircle"></div>

        {/* Details section */}
        <div className="infoBlock">
          <h2 className="name">{name}</h2>

          <div className="row">
            <span className="label">Email:</span>
            <span className="value">{email}</span>
          </div>

          <div className="row">
            <span className="label">Phone:</span>
            <span className="value">{phone}</span>
          </div>

          <div className="row">
            <span className="label">Company:</span>
            <span className="value">{company?.name}</span>
          </div>

          <div className="row">
            <span className="label">Website:</span>
            <span className="value">{website}</span>
          </div>

          <div className="row">
            <span className="label">Address:</span>
            <span className="value">{fullAddress}</span>
          </div>
        </div>
      </div>
    </article>
  )
}
