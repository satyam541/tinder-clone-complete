import React, { useState } from 'react'
import Navbar from "../components/Navbar"
const Onboard = () => {

  const [formData,setFormData] =  useState({user_id:"",first_name:"",dob_day:"",dob_month:"",dob_year:""
  ,show_gender:false,gender_identity:"man",gender_interest:"woman",email:"",url:"",about:"",matches:[]});

  const handleClick = () => {



  }

  const handleChange = (e) => {
    const value = e.target.type==='checked' ? e.target.checked : e.target.value
    const name  = e.target.name
     setFormData((prevState)=>({
        ...prevState,
        [name]:value
    })) 
    
    console.log(formData);
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
                required={true} value={formData.first_name} onChange={handleChange} />

              <label>Birthday</label>
              <div className='multiple-input-container'>
                <input type="number" name="dob_day" placeholder="DD"
                  required={true} value={formData.dob_day} onChange={handleChange}  />
                <input type="number" name="dob_month" placeholder="MM"
                  required={true} value={formData.dob_month} onChange={handleChange}  />
                <input type="number" name="dob_year" placeholder="YYYY"
                  required={true} value={formData.dob_year} onChange={handleChange}  />
              </div>
              <label htmlFor='Gender'>Gender</label>
              <div className='multiple-input-container'>
                <input id='man_gender' type="radio" name="gender_identity"
                  required={true} value={"man"} checked={formData.gender_identity==="man"} onChange={handleChange}  />
                <label htmlFor='man_gender'>Male</label>
                <input id='woman_gender' type="radio" name="gender_identity"
                  required={true} value={"woman"} checked={formData.gender_identity==="woman"} onChange={handleChange} />
                <label htmlFor='woman_gender'>Female</label>
                <input id='other_gender' type="radio" name="gender_identity"
                  required={true} value={"other"} checked={formData.gender_identity==="other"} onChange={handleChange} />
                <label htmlFor='other_gender'>Other</label>
              </div>

              <div>
                <label htmlFor='show_gender'>Show gender on my portfolio</label>
                <input id='show_gender' className="margin-left" type="checkbox" name="show_gender"
                  required={true} value={"1"} checked={formData.show_gender} onChange={handleChange} />
              </div>
              <label>Show Me</label>
              <div className='multiple-input-container'>
                <input id='man_gender_interest' type="radio" name="gender_interest"
                  required={true} value={"man"} checked={formData.gender_interest==="man"} onChange={handleChange} />
                <label htmlFor='man_gender_interest'>Male</label>
                <input id='woman_gender_interest' type="radio" name="gender_interest"
                  required={true} value={"woman"} checked={formData.gender_interest==="woman"} onChange={handleChange} />
                <label htmlFor='woman_gender_interest'>Female</label>
                <input id='every_gender_interest' type="radio" name="gender_interest"
                  required={true} value={"everyone"} checked={formData.gender_interest==="everyone"} onChange={handleChange} />
                <label htmlFor='every_gender_interest'>Everyone</label>
              </div>
              <label htmlFor='about'>About me</label>
              <input id='about' type="text" name="about" required={true} value={formData.about} placeholder="I like long walks" onChange={handleChange} />
              <input type="submit" />
          </section>
          <section>
            <label htmlFor='url'>Profile Photo</label>
            <input type="url" name='url' id='url' onChange={handleChange} required={true} />
            <div className='photo-container'>
                <img src={formData.url} alt="profile pic preview" />
            </div>
          </section>
        </form>

      </div>
    </>
  )
}

export default Onboard
