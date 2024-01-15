import "./App.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider } from "@mui/material/styles";
import darkTheme from "./dark-theme.ts";
import CssBaseline from "@mui/material/CssBaseline";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";
import characters from "./characters.json";
import settings from "./settings.json";
import genres from "./genres.json";
import CasinoIcon from "@mui/icons-material/Casino";

export function BasicCard() {
  const [character, setCharacter] = useState("android");

  const [setting, setSetting] = useState("desert moon");

  const [genre, setGenre] = useState("horror");

  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  function generatePrompt() {
    generateCharacter();
    generateSetting();
    generateGenre();
  }

  function toTitleCase(inputString) {
    return inputString.replace(/\b\w/g, function (match) {
      return match.toUpperCase();
    });
  }

  function generateCharacter() {
    setCharacter(characters[getRandomIndex(characters)]);
  }
  function generateSetting() {
    setSetting(settings[getRandomIndex(settings)]);
  }
  function generateGenre() {
    setGenre(genres[getRandomIndex(genres)]);
  }

  return (
    <Card>
      <CardContent>
        <Typography
          sx={{ fontSize: "1em" }}
          color="text.secondary"
          gutterBottom
        >
          Writing Prompt
        </Typography>
        <Stack direction="row" alignItems="center" gap={1} sx={{ mt: "0.5em", mb: "0.5em" }}>
          <CasinoIcon onClick={generateCharacter} />
          <Typography variant="h5" component="div" sx={{ mb: 0 }}>
            Character: {toTitleCase(character)}
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap={1} sx={{ mt: "0.5em", mb: "0.5em" }}>
          <CasinoIcon onClick={generateSetting} />
          <Typography variant="h5" component="div" sx={{ mb: 0 }}>
            Setting: {toTitleCase(setting)}
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap={1} sx={{ mt: "0.5em", mb: "0.5em" }}>
          <CasinoIcon onClick={generateGenre} />
          <Typography variant="h5" component="div" sx={{ mb: 0 }}>
            Genre: {toTitleCase(genre)}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={generatePrompt}>
          Generate
        </Button>
      </CardActions>
    </Card>
  );
}

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box className="App" sx={{ height: "100vh" }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Prompt Generator
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="app-body">
          <div className="generator-list">
            <div className="generator-div">
              <BasicCard />
            </div>
          </div>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
