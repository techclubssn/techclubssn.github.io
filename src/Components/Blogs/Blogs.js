import React from "react";
import "./Blog.css";

const Blogs = () => {
  return (
    <div className="blogs">
      {/* Title  */}
      <div className="title">
        <span className="title-span">Blogs</span>
      </div>

      {/* Content */}
      <section className="blog" id="b1">
        <div class="blog-number">
          blogpost#<span className="b-number">1</span>
        </div>
        <div className="blog-title">How does BT work?</div>
        <hr />
        <div className="blog-content">
          <p>
            BLOCKCHAIN has been a buzzword in the business, financial and tech
            world for years now and yet, what it really is and does remain
            elusive to most people. Blockchain is, at its heart, a very
            ingenious form of financial data recording and handling based on the
            age-old method of the general financial ledger.
          </p>
          <p>
            Only, now it also incorporates really cool features like
            cryptographic hashing, decentralization and secure digital
            signatures that makes financial data transparent, traceable and
            unalterable.
          </p>
          <p>
            Transactions in blockchain are recorded along with a super secure
            and personalized
            <span className="content-style"> digital signature</span> which is
            computationally and virtually impossible to reproduce. This means no
            one can make transaction entries in a blockchain under your name
            without having access to a very specific private key-public key
            combination that only you have access to. The digital signature
            itself is encoded in a monstrous 256-bit string which presents such
            a humongous number of possibilities (2256 to be exact), that not
            even the best computers in the world can finish iterating through
            all the possibilities, in finite time.
          </p>
          <p>
            Information in the blockchain is transformed into ledgers accessible
            to everyone in the world through a network of computers. But how do
            we trust that all the ledgers look the same and have recorded the
            same number of transactions and in the same order? At a high level,
            the chain offers to trust whichever ledger has the most
            computational work put into it. This uses a function called
            cryptographic hashing. The hash functions that form the skeleton of
            blockchain technology are modelled in such a way that fraudulent
            transactions and conflicting ledgers require an infeasible amount of
            computational work thus rendering the transaction/ledger
            untrustworthy. They too make use of 256-bit tech to make the
            encrypted output of each transaction computationally impossible to
            reverse engineer and consequently, forge. Data and information
            stored in the blockchain are decentralized and distributed in a
            large network of computers. This reduces the ability of any parties
            to tamper with data. Blockchain technology can transfigure the way
            the world works with data and power monetary kinetics and security
            like never before. It’s exactly the kind of dynamic and secure
            fabric we require for industry 4.0 and the next big digital
            revolution.
          </p>
        </div>
        <div className="blog-author">
          <div className="author-name">Shruti Jeyaraman</div>
          <div className="author-info">2nd year, ECE</div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
