import React, { useState } from 'react'
import Navbar from "../components/Navbar"
const Onboard = () => {

  const handleClick = () => {



  }

  const handleChange = (val) => {
    console.log(val);
  }

  return (
    <>
      <Navbar minimal={true} setShowModal={() => { }} showModal={false}
      />

      <div className='onboard'>
        <h2> CREATE Account </h2>

        <form onSubmit={handleClick}>

          <section>
              <label htmlFor='first_name'>First Name</label>
              <input id='first_name' type="text" name="first_name" placeholder="First Name"
                required={true} value={""} onChange={(e) => handleChange(e.target.value)} />

              <label>Birthday</label>
              <div className='multiple-input-container'>
                <input type="number" name="dob_day" placeholder="DD"
                  required={true} value={""} onChange={(e) => handleChange(e.target.value)} />
                <input type="number" name="dob_month" placeholder="MM"
                  required={true} value={""} onChange={(e) => handleChange(e.target.value)} />
                <input type="number" name="dob_year" placeholder="YYYY"
                  required={true} value={""} onChange={(e) => handleChange(e.target.value)} />
              </div>
              <label htmlFor='Gender'>Gender</label>
              <div className='multiple-input-container'>
                <input id='man_gender' type="radio" name="gender_identity"
                  required={true} value={"man"} onChange={(e) => handleChange(e.target.value)} checked={false} />
                <label htmlFor='man_gender'>Male</label>
                <input id='woman_gender' type="radio" name="gender_identity"
                  required={true} value={"woman"} onChange={(e) => handleChange(e.target.value)} checked={false} />
                <label htmlFor='woman_gender'>Female</label>
                <input id='other_gender' type="radio" name="gender_identity"
                  required={true} value={"other"} onChange={(e) => handleChange(e.target.value)} checked={false} />
                <label htmlFor='other_gender'>Other</label>
              </div>

              <label htmlFor='show_gender'>Show gender on my portfolio</label>
              <input id='show_gender' type="checkbox" name="show_gender"
                required={true} value={"1"} onChange={(e) => handleChange(e.target.value)} checked={false} />
              <label>Show Me</label>
              <div className='multiple-input-container'>
                <input id='man_gender_interest' type="radio" name="gender_interest"
                  required={true} value={"man"} onChange={(e) => handleChange(e.target.value)} checked={false} />
                <label htmlFor='man_gender_interest'>Male</label>
                <input id='woman_gender_interest' type="radio" name="gender_interest"
                  required={true} value={"woman"} onChange={(e) => handleChange(e.target.value)} checked={false} />
                <label htmlFor='woman_gender_interest'>Female</label>
                <input id='every_gender_interest' type="radio" name="gender_interest"
                  required={true} value={"everyone"} onChange={(e) => handleChange(e.target.value)} checked={false} />
                <label htmlFor='every_gender_interest'>Everyone</label>
              </div>
              <label htmlFor='about'>About me</label>
              <input id='about' type="text" name="about" required={true} placeholder="I like long walks" onChange={handleChange} />
              <input type="submit" />
          </section>
          <section>
            <label htmlFor='url'>Profile Photo</label>
            <input type="url" name='url' id='url' onChange={handleChange} required={true} />
            <div className='photo-container'>

            </div>
          </section>
        </form>

      </div>
    </>
  )
}

export default Onboard
