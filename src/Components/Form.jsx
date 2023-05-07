
import React from 'react'
import {useForm } from 'react-hook-form'
import { FormSchema } from './FormSchema';
import { yupResolver } from "@hookform/resolvers/yup"
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const{register,handleSubmit,formState:{errors}, reset }=useForm({resolver: yupResolver(FormSchema)});
  const Negative=useNavigate();
  const onSubmitHandler=(data)=>{
  axios.post('https://63ea415e811db3d7ef0a6c6d.mockapi.io/form',{
    e_Name:data.Name,
    e_age:data.age,
    e_sex:data.sex,
    e_Mobile_Number:data.Mobile_Number,
    e_ID_Typed:data.ID_Typed,
    e_Govt_ID:data.Govt_ID,
    e_label:data.label,
    e_Guardian:data.Guardian,
    e_Email:data.Email,
    e_Emergency_Number:data.Emergency_Number,
    e_Address:data.Address,
    e_State:data.State,
    e_city:data.city,
    e_Country:data.Country,
    e_Pincode:data.Pincode,
    e_Occupation:data.Occupation,
    e_Religion:data.Religion,
    e_Marital_Status:data.Marital_Status,
    e_Blood_Group:data.Blood_Group,
    e_Nationality:data.Nationality

  }).then(()=>{Negative('/ShowData')})
    console.log(data);
    reset();
      }

  return (

    <>
    
      <div className='container-fluid'>
      <div className='btnBox'>
      <Link to={'/ShowData'}>
           <button className='btn btn-info mt-1 ml-5' >VIEW DATA</button>   
        </Link>
      </div>
      
        <form className='pt- px-3' onSubmit={handleSubmit(onSubmitHandler)} >
            {/* ----------------------Personal Details--------------------------------- */}

          <h3>Personal Details</h3>
          <div className="row g-3">
            <label className="col-auto col-form-label">Name <span>*</span></label>
            <div className="col-4  ">
               <input name="Name" {...register("Name")} type="text" className="form-control" placeholder='Enter Name' required />
               <p>{errors.Name?.message}</p>
              
            </div>
            <label className="col-auto col-form-label">Date of Birth or Age<span>*</span></label>
            <div className="col-3">
               <input name="age" {...register("age")} type="text" className="form-control" placeholder='DD/MM/YYYY or Age in Years' required/>
              <p>{errors.age?.message}</p>

            </div>
            <label className="col-auto col-form-label ">Sex<span>*</span></label>
            <div className="col-2 ">
              <select className="form-control form-select-sm mb-3" name="sex" {...register("sex")} aria-label=".form-select-sm example" required>
              <p>{errors.sex?.message}</p>

                <option value="" selected disabled> Select Sex </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <label className="col-auto col-form-label">Mobile </label>
            <div className="col-4 ">
               <input name="Mobile_Number" {...register("Mobile_Number")}  type="text" className="form-control" placeholder='Enter Mobile'  />
              <p>{errors.Mobile_Number?.message}</p>

            </div>
            <label className="col-auto col-form-label">Govt Issued ID</label>
            <div className="col-2">
              <select name="ID_Typed" {...register("ID Typed")} className="form-control form-select-sm mb-3" aria-label=".form-select-sm example">
                <option value="" selected disabled>  ID Typed </option>
                <option value="Aadhar">Aadhar</option>
                <option value="Pan card">Pan card</option>
              </select>
            </div>
            <div className="col-3">
               <input name="Govt_ID" {...register("Govt_ID")} type="text" className="form-control" placeholder='Enter Govt ID'/>
              <p>{errors.Govt_ID?.message}</p>

            </div>
          </div>
            {/* -----------------------contact detail --------------------------------- */}

        <h3>Contact Details</h3>
        <div className="row g-3">
          <label className="col-auto col-form-proof">Guardian Details</label>
          <div className="col-auto">
            <select name="label" {...register("label")} className="form-control form-select-sm " aria-label=".form-select-sm example">
              <option value=""  selected  disabled > Enter label </option>
              <option value="aunt">aunt</option>
              <option value="uncle">uncle</option>
            </select>
          </div>
          <div className="col-2">
             <input name="Guardian " {...register("Guardian ")}  type="text" className="form-control" placeholder='Enter Guardian Name'/>
          </div>
          <label className=" ml-5 col-auto col-form-label">Email </label>
          <div className="col-2  ">
             <input name="Email" {...register("Email")} type="email" className="form-control" placeholder='Enter Email' />
          </div>
          <label className="col-auto col-form-label">Emergency Contact Number </label>
          <div className="col-2 ">
             <input name="Emergency_Number"   {...register("Emergency_Number")} type="text" className="form-control" placeholder='Enter Emergency  Number'  />
             <p>{errors.Emergency_Number?.message}</p>

          </div>
        </div>
              {/* ----------------------- Address Details--------------------------------- */}

            <h3 id='ADD'>Address Details</h3>
            <div className="row g-3">            
              <label className="col-auto col-form-label">Address</label>
              <div className="col-4  ">
                 <input name="Address" {...register("Address")}  type="text" className="form-control" placeholder='Enter Address' />
              </div>
              <label className="col-auto col-form-label ">State</label>
              <div className="col-3 ">
                <select name="State" {...register("State")} className="form-control form-select-sm mb-3" aria-label=".form-select-sm example">
                  <option value="" selected disabled> Select State </option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Sikkim">Sikkim</option>

                </select>
            </div>
            <label className="col-auto col-form-label ">City</label>

            <div className="col-3 ">
                <select name="city" {...register("city")} className="form-control form-select-sm mb-3" aria-label=".form-select-sm example">
                  <option value="" selected disabled> Select City/town/vilage </option>
                  <option value="Lucknow">Lucknow</option>
                  <option value="Jaipur">Jaipur</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Gangtok">Gangtok</option>
                </select>
            </div>
            <label className="col-auto col-form-label ">Country</label>
            <div className="col-4 ">
              <select name="Country" {...register("Country")} className="form-control form-select-sm mb-3" aria-label=".form-select-sm example">
                <option value="" selected  disabled> Select Your Country</option>
                <option value="india">india</option>
                <option value="japan">japan</option>
                <option value="russia">russia</option>
                <option value="sri lanka">sri lanka</option>
                <option value="oman">oman</option>
              </select>
            </div>
            <label className="col-auto col-form-label ">Pincode</label>
            <div className="col-4  ">
               <input name="Pincode" {...register("Pincode")}  type="text" className="form-control" placeholder='Enter Pincode' />
            </div>
        </div>
        {/* --------------------------------other details---------------------- */}
        <h3 id='ADD'>Other Details</h3>
            <div className="row g-3">
              <label className="col-auto col-form-label">Occupation</label>
              <div className="col-2">
                 <input name="Occupation" {...register("Occupation")}  type="text" className="form-control" placeholder='Enter Occupation '/>
              </div>
              <label className="col-auto col-form-label ">Religion</label>
              <div className="col-2 ">
                <select name="Religion" {...register("Religion")} className="form-control form-select-sm mb-3" aria-label=".form-select-sm example">
                  <option value="" selected disabled> Select Religion</option>
                  <option value="Hinduism">Hinduism</option>
                  <option value="Islam<">Islam</option>
                  <option value="Christianity">Christianity</option>
                  <option value="Sikhism">Sikhism</option>
                  <option value="Buddhism">Buddhism</option>
                </select>
              </div>
              <label className="col-auto col-form-label ">Marital Status</label>
              <div className="col-2 ">
                <select name="Marital_Status" {...register("Marital_Status")} className="form-control form-select-sm mb-3" aria-label=".form-select-sm example">
                  <option value="" selected disabled> Select Marital Status</option>
                  <option value="Married">Married</option>
                  <option value="Unmarried">Unmarried</option>        
                </select>
              </div>
              <label className="col-auto col-form-label ">Blood Group</label>
              <div className="col-2 ">
                <select name="Blood_Group" {...register("Blood_Group")} className="form-control form-select-sm mb-3" aria-label=".form-select-sm example">
                  <option value="" selected disabled> Select Group</option>
                  <option value="A+ Positive"> A+ Positive</option>
                  <option value=" B+ Positive"> B+ Positive</option>
                  <option value="A- Negative"> A- Negative</option>
                  <option value="B- Negative4"> B- Negative</option>
                  <option value="O+ Positive"> O+ Positive</option>
                  <option value="O- Negative"> O- Negative</option>
                  <option value="AB+ Positive"> AB+ Positive</option>
                  <option value="AB- Negative"> AB- Negative</option>
                </select>
              </div>
              <label className="col-auto col-form-label">Nationality</label>
              <div className="col-2">
                 <input name="Nationality" {...register("Nationality")}  type="text" className="form-control" placeholder='Enter Nationality'/>
              </div>
      
            </div>
            <div className=' mt- butt' >
              <button className='btn btn-danger'>CANCEL</button>
               <button className='btn ml-3  btn-info' type='submit' >SUBMIT</button>
            </div>

        </form>
      </div>
    </> 
  )
}
