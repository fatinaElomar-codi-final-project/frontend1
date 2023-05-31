import { Box, Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import { Logout } from "@mui/icons-material";

const UserProfileCard = () => {
  const firstName = "John";
  const lastName = "Doe";
  const email = "johndoe@example.com";
  const phoneNumber = "555-555-5555";
  const avatarUrl = "https://st3.depositphotos.com/19428878/37071/v/450/depositphotos_370714622-stock-illustration-businessman-icon-vector-male-avatar.jpg"; // Replace with the URL of the user's avatar image
  const subjects = ["React", "JavaScript", "CSS"]; // Replace with the subjects that the user chooses

  return (
<Card sx={{ background: "none", border: "none", boxShadow: "none" }}>
    
      <CardHeader
        title={
          <>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
              <img
                src={avatarUrl}
                alt={`${firstName} ${lastName}'s avatar`}
                style={{ width: 70, height: 70, borderRadius: "50%" }}
              />
            </Box>
            <Typography
              variant="h6"
              align="center"
            >{`${firstName} ${lastName}`}</Typography>
          </>
        }
        subheader={
          <>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "center" }}
            >
              {email}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "center", mb: 1 }}
            >
              {phoneNumber}
            </Typography>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              {subjects.map((subject) => (
                <Typography
                  key={subject}
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: 'inline-block',
                    bgcolor: '#0D7590',
                    color: 'white',
                    borderRadius: 5,
                    px: 1,
                    py: 0.5,
                    ml: 1,
                    "&:hover": {
                      cursor: "pointer",
                      bgcolor: "#CCCCFF",
                      color: "white"
                    }
                  }}
                >
                  {subject}
                </Typography>
              ))}
            </div>

            

          </>
        }
      />
    

    </Card>
  );
};

export default UserProfileCard;