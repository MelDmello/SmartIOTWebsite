import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Overview() {
  const navigate = useNavigate();
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <>
      <Box marginTop={20} />
      {/* First Row - Kitchen, Dining Room, Living Room */}
      <Grid container spacing={3}>
        {/* Kitchen */}
        <Grid item xs={4}>
          <Item>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div style={{ marginRight: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h1 className="Header">Kitchen</h1>
                  <p className="DeviceID">Device ID: 1222</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className="Status">Status: </p>
                    <Switch {...label} defaultChecked />
                  </div>
                </div>
              </div>

              <div>
                <img
                  src={process.env.PUBLIC_URL + "/laurent.jpg"}
                  alt="Laurent"
                  style={{ alignSelf: "flex-end" }}
                />
              </div>
            </div>

            <Button
              variant="outlined"
              className="ViewButton"
              onClick={() => navigate("../Kitchen")}
            >
              View
            </Button>
          </Item>
        </Grid>

        {/* Dining Room */}
        <Grid item xs={4}>
          <Item>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div style={{ marginRight: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h1 className="Header">Dining Room</h1>
                  <p className="DeviceID">Device ID: 1222</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className="Status">Status: </p>
                    <Switch {...label} defaultChecked />
                  </div>
                </div>
              </div>

              <div>
                <img
                  src={process.env.PUBLIC_URL + "/laurent.jpg"}
                  alt="Laurent"
                  style={{ alignSelf: "flex-end" }}
                />
              </div>
            </div>

            <Button
              variant="outlined"
              className="ViewButton"
              onClick={() => navigate("../Kitchen")}
            >
              View
            </Button>
          </Item>
        </Grid>

        {/* Living Room */}
        <Grid item xs={4}>
          <Item>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div style={{ marginRight: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h1 className="Header">Living Room</h1>
                  <p className="DeviceID">Device ID: 1222</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className="Status">Status: </p>
                    <Switch {...label} defaultChecked />
                  </div>
                </div>
              </div>

              <div>
                <img
                  src={process.env.PUBLIC_URL + "/laurent.jpg"}
                  alt="Laurent"
                  style={{ alignSelf: "flex-end" }}
                />
              </div>
            </div>

            <Button
              variant="outlined"
              className="ViewButton"
              onClick={() => navigate("../Kitchen")}
            >
              View
            </Button>
          </Item>
        </Grid>
      </Grid>

      <Box marginTop={5} />

      {/* Second Row - Other Rooms */}
      <Grid container spacing={2}>
        {/* Master Bedroom */}
        <Grid item xs={4}>
          <Item>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div style={{ marginRight: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h1 className="Header">Master Bedroom</h1>
                  <p className="DeviceID">Device ID: 1222</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className="Status">Status: </p>
                    <Switch {...label} defaultChecked />
                  </div>
                </div>
              </div>

              <div>
                <img
                  src={process.env.PUBLIC_URL + "/laurent.jpg"}
                  alt="Laurent"
                  style={{ alignSelf: "flex-end" }}
                />
              </div>
            </div>

            <Button
              variant="outlined"
              className="ViewButton"
              onClick={() => navigate("../Kitchen")}
            >
              View
            </Button>
          </Item>
        </Grid>

        {/* Entrance Hall */}
        <Grid item xs={4}>
          <Item>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div style={{ marginRight: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h1 className="Header">Entrance Hall</h1>
                  <p className="DeviceID">Device ID: 1222</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className="Status">Status: </p>
                    <Switch {...label} defaultChecked />
                  </div>
                </div>
              </div>

              <div>
                <img
                  src={process.env.PUBLIC_URL + "/laurent.jpg"}
                  alt="Laurent"
                  style={{ alignSelf: "flex-end" }}
                />
              </div>
            </div>

            <Button
              variant="outlined"
              className="ViewButton"
              onClick={() => navigate("../Kitchen")}
            >
              View
            </Button>
          </Item>
        </Grid>

        {/* Bathroom */}
        <Grid item xs={4}>
          <Item>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div style={{ marginRight: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h1 className="Header">Bathroom</h1>
                  <p className="DeviceID">Device ID: 1222</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className="Status">Status: </p>
                    <Switch {...label} defaultChecked />
                  </div>
                </div>
              </div>

              <div>
                <img
                  src={process.env.PUBLIC_URL + "/laurent.jpg"}
                  alt="Laurent"
                  style={{ alignSelf: "flex-end" }}
                />
              </div>
            </div>

            <Button
              variant="outlined"
              className="ViewButton"
              onClick={() => navigate("../Kitchen")}
            >
              View
            </Button>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}

export default Overview;
