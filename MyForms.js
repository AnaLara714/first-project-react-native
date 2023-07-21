import React, { useState } from "react";
import { Content, Form, Item, Input, Button, Badge } from "native-base";
import { Text } from "react-native";

export default function MyForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailPassword, setPasswordError] = useState("");
  const handleSubmit = () => {
    var emailValid = false;
    if (email.length == 0) {
      setEmailError("Email is required");
    } else if (email.length < 6) {
      setEmailError("Email should be minimum 6 chacracters");
    } else if (email.indexOf(" ") >= 0) {
      setEmailError("Email cannot contain spaces");
    } else {
      setEmailError("");
      emailValid = true;
    }
    if (emailValid) {
      alert("Email: " + email + "\npassword: " + password);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Content>
      <Form>
        <Item>
          <Input
            placeholder="Enter email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </Item>
        {emailError.length > 0 && (
          <Badge danger>
            <Text>{emailError}</Text>
          </Badge>
        )}
        <Item last>
          <Input
            placeholder="Enter password"
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </Item>
        <Button>
          <Text onPress={handleSubmit}>Submit</Text>
        </Button>
      </Form>
      <Text>Email entered: {email}</Text>
      <Text>Password entered: {password}</Text>
    </Content>
  );
}
