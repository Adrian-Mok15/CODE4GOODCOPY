import React from 'react'
import styled, { withTheme } from 'styled-components'
import {Card, Box, Typography, CardContent, CardMedia, Button, Avatar, IconButton} from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import sendIt from './SendEmail'
import './Alumni.css'

const dataAlumni = []
dataAlumni.push(new Array("John S", "https://randomuser.me/api/portraits/men/72.jpg"))
dataAlumni.push(new Array("Nandan T", "https://randomuser.me/api/portraits/men/30.jpg"))
dataAlumni.push(new Array("Roshan M", "https://randomuser.me/api/portraits/men/19.jpg"))
dataAlumni.push(new Array("Adrian L", "https://randomuser.me/api/portraits/men/13.jpg"))
dataAlumni.push(new Array("Alexis P", "https://randomuser.me/api/portraits/women/10.jpg"))
dataAlumni.push(new Array("Santiago R", "https://randomuser.me/api/portraits/men/9.jpg"))
dataAlumni.push(new Array("Sheldon M", "https://randomuser.me/api/portraits/men/14.jpg"))
dataAlumni.push(new Array("Michelle W", "https://randomuser.me/api/portraits/women/3.jpg"))
dataAlumni.push(new Array("Nandan T", "https://randomuser.me/api/portraits/men/75.jpg"))
dataAlumni.push(new Array("Roshan M", "https://randomuser.me/api/portraits/men/9.jpg"))
dataAlumni.push(new Array("Adrian L", "https://randomuser.me/api/portraits/men/34.jpg"))
dataAlumni.push(new Array("Alexis P", "https://randomuser.me/api/portraits/women/85.jpg"))


const Alumni = () => {
  return (

    <Page>
    <Typography sx={{ fontFamily: "system-ui", fontSize: '64px', margin: '5%'}}> Alumni Portal </Typography>
    <><>
      {dataAlumni.map((user) => {
        return (
          <AlumniCard>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant="h5">
                  {user[0]}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Alumni
                </Typography>
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 150 }}
              image= {user[1]} />
            <Button href='https://www.linkedin.com'><LinkedInIcon padding='20px'> </LinkedInIcon></Button>
            <Button href='mailto:support@jreamfoundation.org'><EmailIcon padding='20px'> </EmailIcon></Button>
          </AlumniCard>
        );
      })}
    </>
      </>
      </Page>
  )
}

export default Alumni;


const AlumniCard = styled(Card)({
  display: 'inline-block', padding: '10px', margin: '30px', fontFamily:'system-ui'
});

const Page = styled.div`
  z-index: 200;
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: #F7E9CC;
  font-family: system-ui
`