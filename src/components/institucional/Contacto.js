import React, { forwardRef, useState } from "react";
import BUTextField from "../BUTextField";
import { ThemeProvider } from '@mui/system';
import { Box, Container } from "@mui/material";
import theme from "../../theme";
import BUHeaderTitle, { HeaderTypes } from '../BUHeaderTitle';
import BUButton from "../BUButton";

const Contacto = forwardRef((props, ref) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    console.log('Register submitted', { fullname, phone, email, message });
  };

  return (
    <ThemeProvider theme={theme}>
      <section id="contacto" style={{ margin: "20px 0" }} ref={ref}>
        <Container maxWidth="lg">
          {/* Center the BUHeaderTitle */}
          <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
            <BUHeaderTitle text="CONTACTO" type={HeaderTypes.SECONDARY} />
          </Box>

          <Box
            display="flex"
            flexDirection={{ xs: 'column', lg: 'row' }}
            justifyContent="center"
            textAlign="center"
          >
            <Box sx={{ flex: 1, padding: 2 }}>
              <BUTextField
                fieldType="name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
              <BUTextField
                fieldType="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <BUTextField
                fieldType="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </Box>

            <Box sx={{ flex: 1, padding: 2 }}>
              <BUTextField
                fieldType="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                isMultiline={true}
              />
            </Box>
          </Box>

          {/* Button with horizontal padding and primary color */}
          <Box display="flex" justifyContent="flex-end" sx={{ marginTop: 2 }}>
            <BUButton
              text="Enviar"
              onClick={handleSubmit}
              horizontalPadding="50px"
              fontFamily="Montserrat Alternates"
            />
          </Box>
        </Container>
      </section>
    </ThemeProvider>
  );
});

export default Contacto;
