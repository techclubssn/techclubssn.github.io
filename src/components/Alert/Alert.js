import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const AlertPopup = ({def, title, text}) => {
  const [show, setShow] = useState(def);
  console.log(def);
    return (
      show && <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>{title}</Alert.Heading>
                    <p>
                    {text}
                    </p>
                </Alert>
    );
}

export default AlertPopup