import React, { useState } from 'react'
import contactformchef from "../assets/images/contactformchef.png"
import { Alert } from 'bootstrap';


const Contact = () => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [enquiry, setEnquiry] = useState('')
    const [message, setMessage] = useState('')


    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [subjectError, setSubjectError] = useState('')
    const [enquiryError, setEnquiryError] = useState('')
    const [messageError, setMessageError] = useState('')



    const handleChangeInput = (e) => {

        console.log(e.target.name);


        if (e.target.name === 'name') {
            setName(e.target.value)
        }
        else if (e.target.name === 'email') {
            setEmail(e.target.value)
        }
        else if (e.target.name === 'subject') {
            setSubject(e.target.value)
        }
        else if (e.target.name === 'enquiry') {
            setEnquiry(e.target.value)
        }
        else if (e.target.name === 'message') {
            setMessage(e.target.value)
        }





        // setFormData({...formData,[e.target.name]: e.target.value});
    }


    const onClickSubmit = () => {

        if (name) {

            setNameError('')
        }

        else {
            setNameError('Please Enter Your Name')

        }
        if (email) {

            setEmailError('')
        }

        else {
            setEmailError('Please Enter Your Email')

        }
        if (subject) {

            setSubjectError('')
        }

        else {
            setSubjectError('Please Enter Your Subject')

        }
        if (enquiry) {

            setEnquiryError('')
        }

        else {
            setEnquiryError('Please Enter Your Enquiry')

        }
        if (message) {

            setMessageError('')
        }

        else {
            setMessageError('Please Enter Your Message')

        }





    }



    //  const handleChangeEmail =(e) =>{
    //     setFormData({...formData,[e.target.email]: e.target.value});
    // } 
    // const handleChangeSubject =(e) =>{
    //     setFormData({...formData,[e.target.subject]: e.target.value});
    // } 
    // const handleChangeEnquiry =(e) =>{
    //     setFormData({...formData,[e.target.enquiry]: e.target.value});
    // }
    //  const handleChangeMessage =(e) =>{
    //     setFormData({...formData,[e.target.message]: e.target.value});
    // }

    console.log(subject);


    return (

        <section className='form-frame '>
            <p className='form-title'>Contact Us</p>

            <div className='d-flex justify-content-center gap-4'>
                <div>
                    <img className='form-chef' src={contactformchef} />
                </div>

                <div className='form-box'>

                    <div className='d-flex gap-5'>
                        <div>
                            <label>NAME</label> <br></br>
                            <input className={`name-input px-2 mt-2 mb-2  ${nameError ? "error" : ""}`}
                                name='name' onChange={handleChangeInput} value={name} placeholder='Enter Your Name'></input>
                            <p>{nameError}</p>

                        </div>
                        <div>
                            <label>SUBJECT</label><br></br>
                            <input className={`subject-input px-2 mt-2 mb-2 ${subjectError ? "error" : ""}`} name='subject' onChange={handleChangeInput} type='text' value={subject} placeholder='Enter Your Subject'></input><p>{subjectError}</p>
                        </div>
                    </div>

                    <div className='d-flex gap-4'>

                        <div>
                            <label>EMAIL</label><br></br>
                            <input className={`email-input px-2 mt-2 mb-2 ${emailError ? "error" : ""}`} name='email' onChange={handleChangeInput} type='email' value={email} placeholder='Your Email Address'></input><p>{emailError}</p>
                        </div>
                        <br></br>

                        <div>
                            <label htmlFor='enquiry'>ENQUIRY TYPE</label><br></br>
                            {/* <input className='enquiry-input px-2' name='enquiry' onChange={handleChangeInput} type='text' value={enquiry} placeholder='Your Email Address'></input> */}

                            <select onChange={handleChangeInput} name="enquiry" id="enquiry" className={`enquiry-input px-2 mt-2 mb-2 ${enquiryError ? "error" : ""}`}>
                                <option value=" " disabled selected>select a value</option>
                                <option value="Advertising">Advertising</option>
                                <option value="digital marketing">digital marketing</option>
                                <option value="designing">designing</option>
                                <option value="developer">developer</option>
                            </select>
                            <p>{enquiryError}</p>
                        </div>

                    </div>
                    <div className='form-div3 gap-4'>

                        <div>
                            <label>MESSAGES</label><br></br>
                            <textarea className={`textarea-box px-2 mt-2 mb-2 ${messageError ?"error" : ""}`} onChange={handleChangeInput} name='message' value={message} >Enter Your Message...</textarea>
                            <p>{messageError}</p>
                        </div>

                        <button className='form-button' onClick={onClickSubmit}>Submit</button>

                    </div>
                </div>
            </div>
        </section >

    );
};

export default Contact;
