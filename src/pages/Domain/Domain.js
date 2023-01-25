import React from 'react'
import { useParams } from 'react-router-dom'

const Domain  = () => {
    const params = useParams()
    const domainId = params.domainId

    const domains = {aic: 'Analog IC', ml: 'Machine Learning', riot: 'Robotics & IoT', vlsi: 'VLSI', wd: 'Web Development'}
    return(
        <div className="blogs">
            {/* Title  */}
            <div className="title">
                <span className="title-span">{domains[domainId]}</span>
            </div>

            {/* Content */}
            <section className="blog" id="b1">
                <div className="blog-number">
                session#<span className="b-number">1</span>
                </div>
                <div className="blog-title">Session Title</div>
                <div className="blog-content">
                <p>
                    A para about the session. (optional) Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Slides Link: <span className="content-style">Link to Slides</span>
                </p>
                <p>
                    Resources Link: <span className="content-style">Link to youtube/ website</span>
                </p>
                </div>

                <br />
                <br />
                <div className="blog-number">
                session#<span className="b-number">2</span>
                </div>
                <div className="blog-title">Session Title</div>
                <div className="blog-content">
                <p>
                    A para about the session. (optional) Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Slides Link: <span className="content-style">Link to Slides</span>
                </p>
                <p>
                    Resources Link: <span className="content-style">Link to youtube/ website</span>
                </p>
                </div>
            </section>
            
        </div>
    )
}

export default Domain