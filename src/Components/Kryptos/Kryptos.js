import React from "react";
import "./Kryptos.css";

const Kryptos = () => {
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
        <div className="link">
          <a href="">
            https://tech-club-kryptos-
            <div id="d1" className="digit">
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
            </div>
            .netlify.app/
          </a>
        </div>
        <div className="clue">
          <div className="clue1">
            There are men dancing all around the website to help you reach the
            end
          </div>
          <div className="clue2">
            To find their <span id="key">last,</span> <br />
            one should never forget where they start
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kryptos;
