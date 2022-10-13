import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const Onboard = (props) => {
  const [cookies,setCookies,removeCookies]    = useCookies(['user'])  
  const [formData,setFormData] =  useState({user_id:cookies.UserId,first_name:"",dob_day:"",dob_month:"",dob_year:""
  ,show_gender:false,gender_identity:"man",gender_interest:"woman",email:cookies.Email,url:"",about:"",img_file:"",matches:[]});
  const [uploadImgUrl,setUploadImgUrl]        = useState(true);
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try
    {
      const formDataInput   = new FormData();
      Object.keys(formData).forEach(key => {
        formDataInput.append(key,formData[key]);
      });
      console.log(formData,formDataInput);
      const response  = await axios.post(`http://localhost:4000/update/user`,formDataInput,{
        headers:{
          "Content-Type": 'multipart/form-data'
        }
      })
      const success   = response.status ===200;
      if(success) navigate ("/dashboard");
    }
    catch (err)
    {
      console.log(err);
    }

  }

  const handleChange = (e) => {
    let value = e.target.type==='checked' ? e.target.checked : e.target.value
    value     = e.target.name==='img_file' ? e.target.files[0] : e.target.value
    const name  = e.target.name

      setFormData((prevState)=>({
          ...prevState,
          [name]:value
      }))   
  
  }

  const setImgUrl = (imgUrl)=>{
    setFormData((prevState)=>({
      ...prevState,
      ["url"]:imgUrl
  }))
  }


  useEffect(()=>{
    props.setIsLoading(false)
  })

  return (
    <>
      <Navbar minimal={true} setShowModal={() => { }} showModal={false}
      />

      <div className='onboard'>
        <h2> CREATE Account </h2>

        <form onSubmit={handleSubmit}>

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
                <input type="hidden" name="email"
                  value={formData.email}  />
                  
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
            <label htmlFor='url'>Profile Photo {uploadImgUrl ? "(check the checkbox to upload url.)" : "(uncheck the checkbox to upload img.)"}
            <input type="checkbox" style={{width:'14px', margin:"0px 0px 0px 50px"}} onChange={(event)=>{
               setUploadImgUrl(!event.target.checked);
               setImgUrl("");
            }} />
            </label>
            {!uploadImgUrl &&  <input type="url" name='url' id='url' onChange={handleChange} required={true} />}
            {uploadImgUrl && <input type="file" name="img_file" accept=".jpg, .jpeg, .png" onChange={(event)=>{

            let imgUrl  = typeof(event.target.files[0]) ==="undefined" ? "" :URL.createObjectURL(event.target.files[0]);
            setImgUrl(imgUrl);
            handleChange(event);
            }} />}
            <div className='photo-container'>
                {formData.url && <img src={formData.url} alt="profile pic preview" />}
            </div>
          </section>
        </form>

      </div>
    </>
  )
}

export default Onboard
