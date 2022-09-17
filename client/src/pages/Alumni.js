import React from 'react'
import styled, { withTheme } from 'styled-components'
import {Card, Box, Typography, CardContent, CardMedia, Button, Avatar, IconButton} from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import sendIt from './SendEmail'
import './Alumni.css'

const dataAlumni = []
dataAlumni.push(new Array("First Last", "https://picsum.photos/200/200.jpg"))
dataAlumni.push(new Array("First Last", "https://picsum.photos/200/200.jpg"))
dataAlumni.push(new Array("First Last", "https://picsum.photos/200/200.jpg"))
dataAlumni.push(new Array("First Last", "https://picsum.photos/200/200.jpg"))


const Alumni = () => {
  return (
    <Page>
      <div className="head">
      <Typography sx = {{ fontSize: '50px'}}> Alumni Portal </Typography>
      </div>
      
    
    <AlumniCard>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5">
            Alumni
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Jream User
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image="https://picsum.photos/200/200.jpg"
      />
      <Button href= 'https://www.linkedin.com'><LinkedInIcon padding = '20px'> </LinkedInIcon></Button>
      <Button href= 'mailto:support@jreamfoundation.org'><EmailIcon padding = '20px'> </EmailIcon></Button>
    </AlumniCard>


    <AlumniCard>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5">
            Alumni
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
          Jream User
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image="https://picsum.photos/200/200.jpg"
      />
      <Button href= 'https://www.linkedin.com'><LinkedInIcon padding = '20px'> </LinkedInIcon></Button>
      <Button href= 'mailto:support@jreamfoundation.org'><EmailIcon padding = '20px'> </EmailIcon></Button>
    </AlumniCard>

    <AlumniCard>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5">
            Alumni
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
          Jream User
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image="https://picsum.photos/200/200.jpg"
      />
      <Button href= 'https://www.linkedin.com'><LinkedInIcon padding = '20px'> </LinkedInIcon></Button>
      <Button href= 'mailto:support@jreamfoundation.org'><EmailIcon padding = '20px'> </EmailIcon></Button>
    </AlumniCard>

    <AlumniCard>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5">
            Alumni
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
          Jream User
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image="https://picsum.photos/200/200.jpg"
      />
      <Button href= 'https://www.linkedin.com'><LinkedInIcon padding = '20px'> </LinkedInIcon></Button>
      <Button href= 'mailto:support@jreamfoundation.org'><EmailIcon padding = '20px'> </EmailIcon></Button>
    
    </AlumniCard>
    <AlumniCard>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5">
            Alumni
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
          Jream User
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image="https://picsum.photos/200/200.jpg"
      />
      <Button href= 'https://www.linkedin.com'><LinkedInIcon padding = '20px'> </LinkedInIcon></Button>
      <Button href= 'mailto:support@jreamfoundation.org'><EmailIcon padding = '20px'> </EmailIcon></Button>
    </AlumniCard>

    <AlumniCard>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5">
            Alumni
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
          Jream User
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image="https://picsum.photos/200/200.jpg"
      />
      <Button href= 'https://www.linkedin.com'><LinkedInIcon padding = '20px'> </LinkedInIcon></Button>
      <Button href= 'mailto:support@jreamfoundation.org'><EmailIcon padding = '20px'> </EmailIcon></Button>
    </AlumniCard>

    
    <AlumniCard>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5">
            Alumni
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
          Jream User
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image="https://picsum.photos/200/200.jpg"
      />
      <Button href= 'https://www.linkedin.com'><LinkedInIcon padding = '20px'> </LinkedInIcon></Button>
      <Button href= 'mailto:support@jreamfoundation.org'><EmailIcon padding = '20px'> </EmailIcon></Button>
    </AlumniCard>
    <AlumniCard>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5">
            Alumni
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
          Jream User
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image="https://picsum.photos/200/200.jpg"
      />
      <Button href= 'https://www.linkedin.com'><LinkedInIcon padding = '20px'> </LinkedInIcon></Button>
      <Button href= 'mailto:support@jreamfoundation.org'><EmailIcon padding = '20px'> </EmailIcon></Button>
    </AlumniCard>
    <AlumniCard>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5">
            Alumni
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
          Jream User
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image="https://picsum.photos/200/200.jpg"
      />
      <Button href= 'https://www.linkedin.com'><LinkedInIcon padding = '20px'> </LinkedInIcon></Button>
      <Button href= 'mailto:support@jreamfoundation.org'><EmailIcon padding = '20px'> </EmailIcon></Button>
    </AlumniCard>
    <AlumniCard>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5">
            Alumni
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            First Last
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image="https://picsum.photos/200/200.jpg"
      />
      <Button href= 'https://www.linkedin.com'><LinkedInIcon padding = '20px'> </LinkedInIcon></Button>
      <Button href= 'mailto:support@jreamfoundation.org'><EmailIcon padding = '20px'> </EmailIcon></Button>
    </AlumniCard>
    <AlumniCard>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5">
            Alumni
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
          Jream User
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image="https://picsum.photos/200/200.jpg"
      />
      <Button href= 'https://www.linkedin.com'><LinkedInIcon padding = '20px'> </LinkedInIcon></Button>
      <Button href= 'mailto:support@jreamfoundation.org'><EmailIcon padding = '20px'> </EmailIcon></Button>
    </AlumniCard>
    <AlumniCard>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5">
            Alumni
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
          Jream User
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image="https://picsum.photos/200/200.jpg"
      />
      <Button href= 'https://www.linkedin.com'><LinkedInIcon padding = '20px'> </LinkedInIcon></Button>
      <Button href= 'mailto:support@jreamfoundation.org'><EmailIcon padding = '20px'> </EmailIcon></Button>
    </AlumniCard>

    <Button onClick={sendIt}> Email JS - Send Email Test </Button>

    </Page>
  )
}

export default Alumni;


const AlumniCard = styled(Card)({
  display: 'inline-block', padding: '10px', margin: '30px'
});

const Page = styled.div`
  z-index: 200;
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: #F7E9CC;
  allign-items: 
`