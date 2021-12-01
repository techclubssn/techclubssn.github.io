import React from "react";
import { useState } from "react";
import "./Kryptos.css";

import Modal from '../../Containers/Modal/Modal.component'

const Kryptos = () => {

  const [dmInput, changeDmInput] = useState('')
  const [showError, setShowError] = useState(false)
  const [showEnter, setShowEnter] = useState(false)

  const [showModal, setShowModal]= useState(false)

  const onClose = () => {
    setShowModal(false)
    document.body.style.overflow = 'unset'
  }

  const showHint = () => {
    setShowModal(true)
  }

  const handleKeyDown = (event) => {
    if(event.key === 'Enter') {
      if(dmInput === '7231') {
        window.open("https://tech-club-kryptos-7231.netlify.app/");
        changeDmInput('')
      } else if (dmInput !== '') {
        setShowError(true)
      } else {
        setShowEnter(true)
      }
    }
  }

  const changeUserInput = (e) => {
    if(e.target.value.length <= 4) {
      const input = e.target.value.toUpperCase()
      changeDmInput(input)
      setShowEnter(false)
    }
    setShowError(false)
  }

  const submit = () => {
    if(dmInput === '') {
      setShowEnter(true)
    } else {
      setShowEnter(false)
    }
    if(dmInput === '7231') {
      window.open("https://tech-club-kryptos-7231.netlify.app/");
      changeDmInput('')
    } else if (dmInput !== '') {
      setShowError(true)
    }
  }

  return (
    <React.Fragment>
    {showModal && <Modal onClose={onClose}/>}
    <section className="kryptos">
      <div className="kryptos-title">Kryptos</div>
      <div className="kryptos-content">
        <div className="quote">
          The End is in the Beginning
        </div>
        <div className="write-up">
          “It is not really difficult to construct a series of inferences, each
          dependent upon its predecessor and each simple in itself. If, after
          doing so, one simply knocks out all the central inferences and
          presents one's audience with the starting-point and the conclusion,
          one may produce a startling, though perhaps a meretricious, effect.”
        </div>
        <h1 className='link-text' >Enter the 4 code key here-</h1>
        <div className="link" onClick={submit} >
          <h1 className='link-text'>https://tech-club-kryptos-</h1>
          <div className='div1' style={{display: 'inline'}} >
            <input className='link-input' type="text" value={dmInput} onChange={(e) => changeUserInput(e)} onKeyDown={handleKeyDown} autoComplete='off' spellCheck='false' autoCorrect='off' />
            <div className='div2' style={{display: 'flex'}} >
              <div className='blank' />
              <div className='blank' />
              <div className='blank' />
              <div className='blank' />
            </div>
          </div>
          <h1 className='link-text'>.netlify.app/</h1>
        </div>
        {showError && <h1 className='error-msg'>*Incorrect password</h1>}
        {showEnter && <h1 className='error-msg'>*Enter password</h1>}
        {!(showEnter || showError) && <h1 className='error-msg' style={{color: 'black'}} >No error</h1>}
        <div className="clue">
          <div className="clue1">
            There are men dancing all around the website to help you decipher the key.
          </div>
          <div className="clue2">
            To find their <span id="key">last,</span> <br />
            one should never <br/> forget where they <br /> start
          </div>
        </div>
        {!showModal && <button className='hint' onClick={showHint} >HINT</button>}
      </div>
    </section>
    </React.Fragment>
  );
};

export default Kryptos;
