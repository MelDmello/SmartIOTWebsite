import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";
import Overview from "./Overview";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Kitchen from "./Kitchen";

function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#06E097" }}>
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="#06E097"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Smart IOT
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Kitchen />
      {/*<Overview />*/}
      <div className="App"></div>
    </>
  );
}

export default App;
