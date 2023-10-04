import React from 'react';
import './Style.css'

function Resume() {
  return (
    <div>
      <div id="resume" className="resume">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>|Experience|</h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item pb-0">
                <h4>Summary</h4>
                <p>
                  <em>
                    I'm a front-end developer with a passion for creating unique user experiences. I'm friendly, a team player, and believe that as long as you set your mind to it, you can accomplish anything.
                  </em>
                </p>
                <ul></ul>
              </div>
              <div className="resume-item pb-0">
                <h4>Tekcitadel LLC / FrontEnd Developer</h4>
                <p>
                  -Worked closely with product managers to create project requirements and define application features.<br />
                  -Developed front-end web page with React js, Javascript.<br />
                  -Developed new software functionalities, ensuring that clients' vision and requirements were met.<br />
                  -Collaborate with clients to develop site-map guidelines and requirements to capture content features<br />
                </p>
                <ul>
                  <li>USA(Remote)</li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Beckontech UI/UX Design</h4>
                <p>
                  <em>
                    -Successfully introduced a Continuous Deployment process for all projects using Git as the source control and Jenkins along with React JS as the compiler and file transfer mechanism.
                  </em>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="resume-item">
                <h4>Education Development Consult / Web Development</h4>
                <p>
                  <em>
                    -Corrected issues related to the site and its features when needed.<br />
                    -Improve the existing pages for website and add other powerful features.
                  </em>
                </p>
              </div>
              <div className="resume-item">
                <h4>Connect Technologies / Junior Frontend Developer</h4>
                <p>
                  <em>
                    -Responsible for the development of all WordPress-based projects. These consisted of bespoke theme development, E-Commerce implementation with WooCommerce, and Payment Gateway integration with Paypal, Stripe, and WorldPay.<br />
                    -Develop customer mobile-friendly WordPress templates and themes to align with site design and branding for clients
                  </em>
                </p>
              </div>
              <div className="resume-item">
                <h4>Training</h4>
                <p>
                  <em>ALX / Training</em>
                </p>
                <p>6 (Six) MONTH Kigali, Rwanda</p>
                <p>
                  <em>Andela / Training</em>
                </p>
                <p>6 (Six) MONTH Kigali, Rwanda</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
