/* eslint-disable */

import  { useEffect } from 'react';
import "./App.css";

function App() {
  let faceio;

  useEffect(() => {
    faceio = new faceIO("fioaaf6c");
  }, []);

  const handleSignIn = async () => {
    try {
       let response = await faceio.enroll({
        locale: "auto",
        payload: {
          email: "example@gmail.com",
          pin: "12345",
        },
      });

      console.log(` Unique Facial ID: ${response.facialId}
      Enrollment Date: ${response.timestamp}
      Gender: ${response.details.gender}
      Age Approximation: ${response.details.age}`);
    } catch (error) {
      console.log(error);
    }
  };


  const handleLogIn = async () => {
    try {
      let response = await faceio.authenticate({
        locale: "auto",
      });

      console.log(` Unique Facial ID: ${response.facialId}
          PayLoad: ${response.payload}
          `);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <section>
      <h1>Face Authenticator</h1>
      
      <button  className='glow'  onClick={handleSignIn}>Sign-up</button>
      <button onClick={handleLogIn}>Sign-in</button>
    </section>
  );
}

export default App;