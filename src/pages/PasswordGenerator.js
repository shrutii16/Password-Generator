import { useState } from "react";
import {
  Alert,
  Box,
  Container,
  Typography,
  TextField,
  Checkbox,
  FormGroup,
  FormControl,
  FormControlLabel,
  Button,
  Snackbar,
} from "@mui/material";
import "./style.css";
// import copy from "../assets/copy.png";
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from "../characters";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState();
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const generatePassword = () => {
    if (
      !includeLowerCase &&
      !includeUpperCase &&
      !includeNumber &&
      !includeSymbols
    ) {
      setOpen(true);
      setError("Select atleast one field");
    } else if (!(passwordLength >= 5 && passwordLength <= 40)) {
      setOpen(true);
      setError("Invalid Password Length");
    } else {
      let characterList = "";

      if (includeLowerCase) {
        characterList = characterList + lowerCaseLetters;
      }

      if (includeUpperCase) {
        characterList = characterList + upperCaseLetters;
      }

      if (includeNumber) {
        characterList = characterList + numbers;
      }

      if (includeSymbols) {
        characterList = characterList + specialCharacters;
      }

      setPassword(createPassword(characterList));
    }
  };
  const createPassword = (characterList) => {
    let passwd = "";
    const characterListLength = characterList.length;

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      passwd = passwd + characterList.charAt(characterIndex);
    }
    return passwd;
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="main">
      <div>
        <Container
          style={{
            width: "408px",
            height: "470px",
            border: "1px solid #dfe0eb",
            borderRadius: "8px",
            background: "##7474743d",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            color: "white",
          }}
        >
          <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              {error}
            </Alert>
          </Snackbar>
          <Box>
            <Typography
              style={{
                fontWeight: 700,
                fontSize: "27px",
                margin: "30px",
                textAlign: "center",
              }}
            >
              Password Generator
            </Typography>
            <div className="generated-password">
              <div className="passwd" style={{ color: "white" }}>
                {password}
              </div>
              {/* <Button className="copy__btn" style={{ background: "white" }}>
                <img src={copy} width={24} height={30} />
              </Button> */}
            </div>
            <FormControl component="fieldset">
              <TextField
                placeholder="Password Length (5-40)"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                onChange={(e) => setPasswordLength(e.target.value)}
                fullWidth
              />

              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="start"
                  control={<Checkbox />}
                  label="Include UpperCase Letters"
                  labelPlacement="end"
                  onChange={(e) => setIncludeUpperCase(e.target.checked)}
                />
              </FormGroup>
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="Include LowerCase Letters"
                  control={<Checkbox />}
                  label="Include LowerCase Letters"
                  labelPlacement="end"
                  onChange={(e) => setIncludeLowerCase(e.target.checked)}
                />
              </FormGroup>
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="start"
                  control={<Checkbox />}
                  label="Include Numbers"
                  labelPlacement="end"
                  onChange={(e) => setIncludeNumber(e.target.checked)}
                />
              </FormGroup>
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="start"
                  control={<Checkbox />}
                  label="Include Special Characters"
                  labelPlacement="end"
                  onChange={(e) => setIncludeSymbols(e.target.checked)}
                />
              </FormGroup>
            </FormControl>
            <Button variant="contained" fullWidth onClick={generatePassword}>
              Generate Password
            </Button>
          </Box>
        </Container>
      </div>
    </div>
  );
}
