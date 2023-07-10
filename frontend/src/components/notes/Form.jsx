import React from "react";
import { TextField, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState, useRef } from "react";
import ClickAwayListener from "@mui/base/ClickAwayListener";

//////////////////////////////////////

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
    0px 2px 6px 2px rgb(60 64 67/ 15%);
  width: 600px;
  padding: 10px 15px;
  border-radius: 8px;
  border-color: #e0e0e0;
  margin: auto;
`;
Container;

const Form = () => {
  const [showTextField, setShowTextField] = useState(false);

  const containerRef = useRef();

  const onClickArea = () => {
    setShowTextField(true);
    containerRef.current.style.minHeight = "80px";
  };

  const onClickAwayHandler = () => {
    setShowTextField(false);
    containerRef.current.style.minHeight = "30px";
  };

  return (
    <ClickAwayListener onClickAway={onClickAwayHandler}>
      <Container ref={containerRef}>
        {showTextField && (
          <TextField
            placeholder="Title"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            style={{ marginBottom: 10 }}
          ></TextField>
        )}

        <TextField
          placeholder="Take a note..."
          multiline
          maxRows={Infinity}
          variant="standard"
          onClick={onClickArea}
          InputProps={{ disableUnderline: true }}
        ></TextField>
      </Container>
    </ClickAwayListener>
  );
};

export default Form;
