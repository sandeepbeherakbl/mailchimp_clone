import { faMailchimp } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
    Container,
    Wrapper
} from './footer.style';
import courier from '../../../Assets/Courier.svg';


function Footer() {
    return (
      <Container>
        <Wrapper>
          <div>
            <p>Products</p>
            <li>Why mailchimp?</li>
            <li>Product Updates</li>
            <li>Email Marketing</li>
            <li>Websites</li>
            <li>Transactional Email</li>
            <li>How We Compare</li>
            <li>GDRP Compliance</li>
            <li>Security</li>
            <li>Status</li>
            <li>Mobile App</li>
          </div>
          <div>
            <p>Resources</p>
            <li>Guide & Tutorials</li>
            <li>Marketing Tips</li>
            <li>Marketing Glossary</li>
            <li>Browse by Topic</li>
            <li>Integrations Drectory</li>
          </div>
          <div>
            <p>Community</p>
            <li>Agencies & Freelancers</li>
            <li>Developers</li>
            <li>Events</li>
          </div>
          <div>
            <p>Company</p>
            <li>Our Story</li>
            <li>Newsroom</li>
            <li>Annual Report</li>
            <li>Careers</li>
          </div>
          <div>
            <p>Help</p>
            <li>Contact Us</li>
            <li>Hire an Expert</li>
          </div>
          <div className="box">
            <FontAwesomeIcon icon={faMailchimp} size="4x" className="logo" />{" "}
            <span style={{fontSize:"1.5rem"}}><strong>mailchimp </strong>presents</span>
            <h4>
              Films, podcasts and original series that celebrate the
              entrepreneurial spirit.
            </h4>
            <li>
              Check it out <FontAwesomeIcon icon={faArrowRight} />
            </li>
            <div className="box2">
             <img src={courier} alt="" />
              <h4>
                Expert insights, industry trends, and inspiring stories that
                help you live and work on your own terms.
              </h4>
              <li>
                Check it out <FontAwesomeIcon icon={faArrowRight} />
              </li>
            </div>
          </div>
        </Wrapper>
      </Container>
    );
}

export default Footer;