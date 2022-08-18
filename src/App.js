import { useAuthState } from "react-firebase-hooks/auth"
import { auth, signInWithGoogle, signInWithFacebook, } from "./firebase";
import { Button } from "@mui/material";
import Typography from '@mui/material/Typography';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Stack } from "@mui/system";
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar';

export default function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="centeredInTheScreen">
      <Container maxWidth="sm" style={{ textAlign: "center" }}>
        <Stack spacing={2} direction="column" >
          {user ? (<Typography variant="h3">Connected</Typography>) : (<Typography variant="h3">Not Connected</Typography>)}
          {user ? (<Button variant="outlined" onClick={() => auth.signOut()}>logout</Button>) : (
            <div>
              <Button startIcon={<GoogleIcon />} style={{ margin: "1rem", width: "15rem" }} variant="outlined" onClick={signInWithGoogle}>login with google</Button>
              <Button startIcon={<FacebookIcon />} style={{ margin: "1rem", width: "15rem" }} variant="outlined" onClick={signInWithFacebook}>login with facebook</Button>
            </div>
          )}
          {user ? (<UserInfos />) : (<div></div>)}
          <p>faccebook api is broken for the moment ...</p>
        </Stack>
      </Container>
    </div>
  );
}


function UserInfos() {
  const [user] = useAuthState(auth);
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src={user.photoURL}
        sx={{ width: 56, height: 56 }}
      />

      <h4>{user.displayName}<br /><small>{user.email}</small></h4>

    </Stack>
  );
}


