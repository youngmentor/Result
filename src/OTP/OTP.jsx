import React, { useRef, useState } from 'react'
import {
  Wrapper,
  Input,
  P,
  InputDiv,
  Button,
  B,
  R,
  V,
}
  from './OtpStyle'


  const OTP = () => {
  const input1Ref = useRef();
  const input2Ref = useRef();
  const input3Ref = useRef();
  const input4Ref = useRef();
  const input5Ref = useRef();
  const input6Ref = useRef();
  const [inputValues, setInputValues] = useState([
    {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',

    }
  ]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const handleInput = (event, nextInputRef) => {
    const input = event.target;
    if (input.value.length === input.maxLength) {
      nextInputRef && nextInputRef.current.focus();
    }
  };
  const handleKeyDown = (event, previousInputRef) => {
    const input = event.target;
    if (event.key === 'Backspace' && input.value === '') {
      previousInputRef && previousInputRef.current.focus();
    }
  };
  const resetInputs = () => {
    setInputValues({
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
    });
  };
  const handleClick = () => {
    const finalNumber =
      `
    ${inputValues.input1}${inputValues.input2}${inputValues.input3}${inputValues.input4}${inputValues.input5}${inputValues.input6}
    `;
    console.log(finalNumber);
    resetInputs();
  }
  return (
    <Wrapper>
      <B>We sent you a code to verify your Account</B>
      <P>Enter Your code here</P>
      <InputDiv>
        <Input
          name="input1"
          type='password'
          maxLength={1}
          ref={input1Ref}
          value={inputValues.input1}
          onInput={(event) => handleInput(event, input2Ref)}
          onKeyDown={(event) => handleKeyDown(event, null)}
          onChange={handleInputChange}
          required={true}
        />
        <Input
          name="input2"
          maxLength={1}
          ref={input2Ref}
          value={inputValues.input2}
          onInput={(event) => handleInput(event, input3Ref)}
          onKeyDown={(event) => handleKeyDown(event, input1Ref)}
          onChange={handleInputChange}
        />
        <Input
          name="input3"
          maxLength={1}
          ref={input3Ref}
          value={inputValues.input3}
          onInput={(event) => handleInput(event, input4Ref)}
          onKeyDown={(event) => handleKeyDown(event, input2Ref)}
          onChange={handleInputChange}
        />
        <Input
          name="input4"
          maxLength={1}
          ref={input4Ref}
          value={inputValues.input4}
          onInput={(event) => handleInput(event, input5Ref)}
          onKeyDown={(event) => handleKeyDown(event, input3Ref)}
          onChange={handleInputChange}
        />
        <Input
          name="input5"
          maxLength={1}
          ref={input5Ref}
          value={inputValues.input5}
          onInput={(event) => handleInput(event, input6Ref)}
          onKeyDown={(event) => handleKeyDown(event, input4Ref)}
          onChange={handleInputChange}
        />
        <Input
          name="input6"
          maxLength={1}
          ref={input6Ref}
          value={inputValues.input6p}
          onInput={(event) => handleInput(event, null)}
          onKeyDown={(event) => handleKeyDown(event, input5Ref)}
          onChange={handleInputChange}
        />
      </InputDiv>
      <Button onClick={handleClick}>Verify</Button>
      <V>Wrong code</V>
      <P>I didn't receieve any code</P>
      <R>Resend code</R>
    </Wrapper>
  )
}

export default OTP