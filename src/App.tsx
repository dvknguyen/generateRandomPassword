import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./App.css";
import { useState, useRef, MouseEvent } from "react";

const label = { inputProps: { "aria-label": "Switch demo" } };
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numberString = "0123456789";
const specialCharacters = "~!@#$%^&*()_-+=[]{}|:;<>?/";

let characters = "";

function App() {
  const [sliderValue, setSliderValue] = useState<number>(20);
  const [password, setPassword] = useState<string>("");

  const upperCaseRef = useRef<boolean>(true);
  const lowerCaseRef = useRef<boolean>(true);
  const numberRef = useRef<boolean>(true);
  const specialCharacterRef = useRef<boolean>(true);

  const handleSliderChange = (
    _event: Event,
    sliderValue: number | number[]
  ) => {
    setSliderValue(sliderValue as number);
  };

  const handleUpperCaseChange = () => {
    upperCaseRef.current = !upperCaseRef.current;
  };

  const handleLowerCaseChange = () => {
    lowerCaseRef.current = !lowerCaseRef.current;
  };

  const handleNumberChange = () => {
    numberRef.current = !numberRef.current;
  };

  const handleSpecialCharacterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    specialCharacterRef.current = !specialCharacterRef.current;
  };

  const handleCopyToClipboard = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    var copyText = document.getElementById(
      "password-input"
    ) as HTMLInputElement;
    copyText.select(); // Select the text field

    copyText.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(copyText.value); // Copy the text inside the text field
  };

  const handleGenerate = (e: MouseEvent<HTMLButtonElement>) => {
    let result = "";
    e.preventDefault();
    if (upperCaseRef.current) {
      characters = characters.concat(upperCase);
    }

    if (lowerCaseRef.current) {
      characters = characters.concat(lowerCase);
    }

    if (numberRef.current) {
      characters = characters.concat(numberString);
    }

    if (specialCharacterRef.current) {
      characters = characters.concat(specialCharacters);
    }

    for (let i = 0; i < sliderValue; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    characters = "";
    setPassword(result);
  };

  return (
    <>
      <div className="password-Wrapper">
        <h1 className="title">PASSWORD GENRATOR</h1>
        <p>Create strong and secure passwords to keep you save online!</p>
        <TextField
          type="text"
          label="Outlined"
          id="password-input"
          variant="outlined"
          className="input-password"
          placeholder="Enter your password"
          value={password}
        />

        <Button
          variant="outlined"
          sx={{
            margin: 2,
          }}
          onClick={handleGenerate}
        >
          Generate
        </Button>

        <Button
          variant="outlined"
          sx={{
            margin: 1,
          }}
          className="button-copy"
          onClick={handleCopyToClipboard}
        >
          Copy
        </Button>

        <p>Password Length: {sliderValue}</p>

        <div className="slider">
          <Slider
            size="medium"
            defaultValue={20}
            valueLabelDisplay="auto"
            min={0}
            max={30}
            onChange={handleSliderChange}
          ></Slider>
        </div>
        <div className="options-wrapper">
          <div className="option">
            Uppercase
            <Switch
              {...label}
              defaultChecked
              onChange={handleUpperCaseChange}
            />
          </div>
          <div className="option">
            Lowercase
            <Switch
              {...label}
              defaultChecked
              onChange={handleLowerCaseChange}
            />
          </div>
          <div className="option">
            Numbers
            <Switch {...label} defaultChecked onChange={handleNumberChange} />
          </div>
          <div className="option">
            Special Characters
            <Switch
              {...label}
              defaultChecked
              onChange={handleSpecialCharacterChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
