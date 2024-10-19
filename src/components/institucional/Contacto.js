import React, { forwardRef, useState } from "react";
import BUTextField from "../BUTextField";
import { ThemeProvider } from '@mui/system';
import theme from "../../theme";
import BUHeaderTitle, { HeaderTypes } from '../BUHeaderTitle';

const Contacto = forwardRef((props, ref) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register submitted', { fullname, phone, email, message });
  };

  return (
    <ThemeProvider theme={theme}>
      <section id="contacto" className="container-fluid my-5 px-5" ref={ref}>
        <div className="row text-center justify-content-center">
          <div className="col-12">
            <BUHeaderTitle text="CONTACTO" type={HeaderTypes.SECONDARY} />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
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
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <BUTextField
              fieldType="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              isMultiline={true}
            />
            <div className="d-flex justify-content-end mt-3">
              <button className="btn btn-primary rounded-4 custom-send-btn" type="button">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
});

export default Contacto;