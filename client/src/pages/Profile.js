import React, { useContext, useState } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import {Button} from '@mui/material'
import { Button as B } from 'antd'
import badge from './badge.png'
import './Profile.css'
import night from "./nights.jpg"
import Footer from '../components/navigation/Footer'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import { AccountContext } from '../context/Account';
import { Navigate } from 'react-router-dom'


// Get user data
// fetch('http://example.com/songs')
// 	.then(response => response.json())
// 	.then(data => console.log(data))
//   .catch(err => console.error(err));
  
const sample_data = {
  username: "Tyler Lo",
  user_location: "Brooklyn, 11217",
  name: "John Smith",
  profile_pic: "test",
  user_type: "alunmi",
  about: 'Hi, my name is Tyler, and I believe that educating people about how culture and food correlate helps individuals understand more about themselves. I have nine years of experience exploring and discovering the unique recipes made by communities around the world, and I use my knowledge to create custom and memorable events. I believe that bringing together culture, food and people can help individuals connect and bond, and I intend to bring that experience to you.',
  member_since: "2020",
  events_attended: '45',
  badges: '01',
}

export default function Profile() {
  const { logout } = useContext(AccountContext);
  const [loggedIn, setLogin] = useState(JSON.parse(localStorage.getItem('is-login')) || false);
  
  function logoff(){
    logout();
    localStorage.setItem('is-login', JSON.stringify(false));
    setLogin(false);
    window.location = window.location.href;
  }

  if (!loggedIn) {
    return <Navigate to="/signup" replace />;
  } 

  return (
    <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>

      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundImage:`url(${night})`, height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image" className="img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                  <MDBBtn outline color="dark" style={{marginTop:'6px', marginLeft:'40px', height: '39px', zIndex: '2'}}>
                    Edit profile
                  </MDBBtn>
                </div>
                <div className="ms-3" style={{ marginTop: '140px', marginLeft: '30px'}}>
                  <MDBTypography tag="h5" style={{color:'white'}}>{sample_data.name}</MDBTypography>
                  <MDBCardText>{sample_data.user_location}</MDBCardText>
                  <Button href= 'https://www.linkedin.com'><LinkedInIcon padding = '20px'> </LinkedInIcon></Button>
                  <Button href= 'mailto:support@jreamfoundation.org'><EmailIcon padding = '20px'> </EmailIcon></Button>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">{sample_data.events_attended}</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Events Attended</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">{sample_data.badges}</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Badges</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">{sample_data.member_since}</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Member Since</MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">
                      {sample_data.about}
                    </MDBCardText>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">Badges</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">
                      <img src={badge} style={{width:'150px'}} alt='resilience badge' />
                    </MDBCardText>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Recent photos</MDBCardText>
                  <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
                </div>
                <MDBRow>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="g-2">
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <B onClick={logoff}>
        Logout
      </B>
      {/* <button className='plain__btn' onClick={logoff}>Logout</button> */}

      <Footer />
    </div>
  );
}