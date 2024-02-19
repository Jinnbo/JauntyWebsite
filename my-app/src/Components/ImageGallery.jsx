import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

const ImageGallery = ({ images }) => {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={4}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <CardMedia
                component="img"
                image={image.url}
                alt={image.alt || "image"}
                sx={{
                  height: 200,
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <CardContent>
                {/* Title */}
                <Typography gutterBottom variant="h6" component="div">
                  {image.title || "Image Title"}
                </Typography>
                {/* Voltage & Watts */}
                <Typography variant="body2" color="text.secondary">
                  Voltage & Watts: {image.voltageWatts}
                </Typography>
                {/* Dimensions */}
                <Typography variant="body2" color="text.secondary">
                  Dimensions: {image.dimensions}
                </Typography>
                {/* Weight */}
                <Typography variant="body2" color="text.secondary">
                  Weight: {image.weight}
                </Typography>
                {/* Certifications */}
                <Typography variant="body2" color="text.secondary">
                  Certifications: {image.certifications}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ImageGallery;
