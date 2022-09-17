import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import './Profile.css'
import night from "./nights.jpg"
import Footer from '../components/navigation/Footer'

import { useContext, useState } from 'react';
import { AccountContext } from '../context/Account';


// Get user data
// fetch('http://example.com/songs')
// 	.then(response => response.json())
// 	.then(data => console.log(data))
//   .catch(err => console.error(err));
  
const sample_data = {
  username: "user's username",
  user_location: "Brooklyn, 11217",
  name: "user's name",
  profile_pic: "test",
  user_type: "alunmi",
  about: 'In no impression assistance contrasted. Manners she wishing justice hastily new anxious.At discovery discourse departure objection we. Few extensive add delighted tolerably sincerity her. Law ought him least enjoy decay one quick court. Expect warmly its tended garden him esteem had remove off. Effects dearest staying now sixteen nor improve.',
  member_since: "2020",
  events_attended: '45',
  badges: '11',
}

export default function Profile() {
  const { logout } = useContext(AccountContext);
  const [loggedIn, setLogin] = useState(JSON.parse(localStorage.getItem('is-login')) || false);
  
  function logoff(){
    logout();
    localStorage.setItem('is-login', JSON.stringify(false));
    setLogin(false);
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
                  <button outline color="dark" style={{marginTop:'6px', marginLeft:'40px', height: '50px', zIndex: '2'}}>
                    Edit profile
                  </button>
                </div>
                <div className="ms-3" style={{ marginTop: '140px', marginLeft: '30px'}}>
                  <MDBTypography tag="h5" style={{color:'white'}}>{sample_data.name}</MDBTypography>
                  <MDBCardText>{sample_data.user_location}</MDBCardText>
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
      <button className='plain__btn' onClick={logoff}>Logout</button>

      <Footer />
    </div>
  );
}