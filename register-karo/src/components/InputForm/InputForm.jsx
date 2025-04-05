import {
  Button,
  Container,
  Grid,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import EmailIcon from "@mui/icons-material/Email";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

const InputForm = () => {
  const inputs = [
    { id: "name", label: "Name", type: "text", placeholder: "Fullname" },
    { id: "email", label: "Email", type: "email", placeholder: "Email" },
    {
      id: "number",
      label: "Phone number",
      type: "number",
      placeholder: "Phone number",
    },
    { id: "message", label: "Message", type: "text", placeholder: "Message" },
  ];
  return (
    <Stack sx={{ py: 10, backgroundColor: "#f9f7fd" }}>
      <Container component="form">
        <Typography
          variant="h4"
          sx={{
            color: "text.primary",
            textAlign: "center",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          Contact us
        </Typography>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={4}
          sx={{
            mt:5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            sx={{
              //   border: "2px solid blue",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Grid
              container
              rowSpacing={2}
              columnSpacing={3}
              sx={{ py: 2, px: 1 }}
            >
              {inputs.map((item) => (
                <Grid
                  size={{ xs: 12, sm: 12, md: item.type === "text" ? 12 : 6 }}
                >
                  {item.id === "message" ? (
                    <TextareaAutosize
                      aria-label={item.label}
                      minRows={3}
                      placeholder={item.placeholder}
                      style={{
                        width: "100%",
                        padding: "16.5px 14px",
                        fontFamily: "inherit",
                        borderRadius: "4px",
                        border: "1px solid #000",
                        outline: "none",
                        fontSize: "1rem",
                        transition: "border-color 0.3s",
                      }}
                      onFocus={(e) =>
                        (e.target.style.border = "1px solid black")
                      }
                      onBlur={(e) =>
                        (e.target.style.border = "1px solid black")
                      }
                    />
                  ) : (
                    <TextField
                      fullWidth
                      sx={{ width: "100%", backgroundColor: "#fff" }}
                      id={item.id}
                      type={item.type}
                      label={item.label}
                      variant="outlined"
                    />
                  )}
                </Grid>
              ))}
            </Grid>
            <Button
              size="large"
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "text.primary", color: "white" }}
            >
              Submit
            </Button>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            // sx={{ border: "2px solid blue" }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "text.secondary",
                fontWeight: 600,
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <LocationPinIcon sx={{ px: 1, fontSize: 50 }} />
              Location
            </Typography>
            <Typography variant="body1" sx={{ px: 2, color: "#000" }}>
              Safe Ledger Private Limited 101, Oxford Towers, 139, HAL Old
              Airport Rd, Kodihalli, Bengaluru, Karnataka 560008
            </Typography>
            {/*  */}
            <Typography
              variant="h5"
              sx={{
                color: "text.secondary",
                fontWeight: 600,
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <EmailIcon sx={{ px: 1, fontSize: 50 }} />
              Offical Email
            </Typography>
            <Typography variant="body1" sx={{ px: 2, color: "#000" }}>
              support@registerkaro.in
            </Typography>
            <Typography variant="body1" sx={{ px: 2, color: "#000" }}>
              admin@registerkaro.in
            </Typography>
            {/*  */}
            <Typography
              variant="h5"
              sx={{
                color: "text.secondary",
                fontWeight: 600,
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <WatchLaterIcon sx={{ px: 1, fontSize: 50 }} />
              Working Hours
            </Typography>
            <Typography variant="body1" sx={{ px: 2, color: "#000" }}>
              Monday-friday: 9:00- 06:00
            </Typography>
            <Typography variant="body1" sx={{ px: 2, color: "#000" }}>
              Saturday-Sunday: Holiday
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default InputForm;
