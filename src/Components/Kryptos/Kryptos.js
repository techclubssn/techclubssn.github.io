import React from "react";
import { useState } from "react";
import "./Kryptos.css";

const Kryptos = () => {

  const [dmInput, changeDmInput] = useState('')
  const [showError, setShowError] = useState(false)

  const handleKeyDown = (event) => {
    if(dmInput === '1234' && event.key === 'Enter') {
      window.open("https://kryptos-cts.netlify.app/");
      changeDmInput('')
    } else if (dmInput !== '') {
      setShowError(true)
    }
  }

  const changeUserInput = (e) => {
    if(e.target.validity.valid && e.target.value.length <= 4) {
      changeDmInput(e.target.value)
    }
    setShowError(false)
  }

  const submit = () => {
    if(dmInput === '1234') {
      window.open("https://kryptos-cts.netlify.app/");
      changeDmInput('')
    } else if (dmInput !== '') {
      setShowError(true)
    }
  }

  return (
    <section className="kryptos">
      <div className="kryptos-title">Kryptos</div>
      <div className="kryptos-content">
        <div className="quote">
          Past secrets always have a way of coming back to haunt people
        </div>
        <div className="write-up">
          “It is not really difficult to construct a series of inferences, each
          dependent upon its predecessor and each simple in itself. If, after
          doing so, one simply knocks out all the central inferences and
          presents one's audience with the starting-point and the conclusion,
          one may produce a startling, though perhaps a meretricious, effect.”
        </div>
        <div className="link" onClick={submit} >
          <h1 className='link-text'>https://tech-club-kryptos-</h1>
          <input className='link-input' type="text" pattern="[0-9]*" value={dmInput} onChange={(e) => changeUserInput(e)} onKeyDown={handleKeyDown} />
          <h1 className='link-text'>.netlify.app/</h1>
            {/*<div id="d1" className="digit">
              _
            </div>
            <div id="d2" className="digit">
              _
            </div>
            <div id="d3" className="digit">
              _
            </div>
            <div id="d4" className="digit">
              _
            </div>*/}
        </div>
        {showError && <h1 className='error-msg'>*Incorrect password</h1>}
        <div className="clue">
          <div className="clue1">
            There are men dancing all around the website to help you reach the
            end
          </div>
          <div className="clue2">
            To find their <span id="key">last,</span> <br />
            one should never <br/> forget where they <br /> start
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kryptos;
