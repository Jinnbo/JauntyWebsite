import React from 'react';
import './ContactPage.css'
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

const ContactPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem", marginBottom: "2rem" }}>
        {/* Email */}
        <Card sx={{ minWidth: {xs: "90%" ,md: "50%"}, backgroundColor: "#188F95", borderRadius: 10 }}>
          <CardHeader
            avatar={
              <Avatar alt="Image Alt Text" src="./mail.svg" />
            }
            title={
              <Typography variant="h3" sx={{ color: 'white'}}>
                Email
              </Typography>
            }
          />
          <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Info@jauntytrade.com
            </Typography>
          </CardContent>
      </Card>


      {/* Address */}
      <Card sx={{ minWidth: {xs: "90%" ,md: "50%"}, backgroundColor: "#188F95", borderRadius: 10 }}>
        <CardHeader
          avatar={
            <Avatar alt="Image Alt Text" src="./address.svg" />
          }
          title={
            <Typography variant="h3" style={{ color: 'white'}}>
              Address
            </Typography>
          }
        />
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            6660 Riverdale Drive, Richmond, BC
          </Typography>
        </CardContent>
      </Card>
        
      {/* Phone Number */}
      <Card sx={{ minWidth: "50%", backgroundColor: "#188F95", borderRadius: 10  }}>
        <CardHeader
          avatar={
            <Avatar alt="Image Alt Text" src="./phone.svg" />
          }
          title={
            <Typography variant="h3" style={{ color: 'white'}}>
              Phone Number
            </Typography>
          }
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Business Number: 758507537 <br/>
                GST Number: 758507537RT0001 <br/>
                PST Number: 14794979
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Phone 1: 2366683048 <br/>
                Phone 2: 7782513980
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

    </div>
  )
}

export default ContactPage;
