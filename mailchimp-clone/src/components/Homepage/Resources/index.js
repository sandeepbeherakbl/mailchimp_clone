import { faMailchimp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
    Container,
    Text,
    SmallText,
    TopSection,
    Button,
    Link,
    BottomSection
} from './resources.style';
import Img from '../../../Assets/resource1.jpg'
import Img2 from "../../../Assets/Resource2.png";
import Img3 from '../../../Assets/resource3.jpg';





function Resources() {
    return (
      <Container>
        <Text>Resources to give you the inside track</Text>
        <SmallText>
          Looking to get ahead? We have expert guidance, timely resources, and
          inspiring stories from entrepreneurs who’ve been in your shoes.
          Business-growing shoes.
        </SmallText>
        <TopSection>
          <div className="box1">
            <h3>FREE GUIDE</h3>
            <h1>
            Holiday Marketing Quick Guide
            </h1>
            <p>
            The biggest shopping season of the year is upon us. See our free guide for campaign templates, customer engagement ideas, and detailed tips to help you boost sales on Black Friday, Cyber Week, and into the New Year.
            </p>
            <Button>Learn More</Button>
          </div>
          <div className="box2">
            <img src={Img} alt="" />
            <div className="box3">
              <div className="logo-text">
                <FontAwesomeIcon icon={faMailchimp} size="4x" />
                <p><strong>mailchimp </strong>presents</p>
              </div>

              <h4>PODCAST</h4>
              <h1>Call Paul: New Season</h1>
              <p style={{fontSize:"1.5rem"}}>
              Paul Jarvis is back with a fresh slate of entrepreneurs exploring what it takes to build a business—and the freedom, fear, and fulfillment that come with it.
              </p>
              <Link>Listen Now</Link>
            </div>
          </div>
        </TopSection>
        <BottomSection>
          <div className="box1">
            <img src={Img3} alt="" />
          </div>

          <div className="box2">
            <div className="img">
              <img src={Img2} alt="" />
            </div>

            <div className="box-text">
              <h2>BUSINESS TIPS</h2>
              <h1>Driving Sales for Your Online Clothing Store</h1>
              <p>
              Create a loyal customer base with multichannel marketing strategies that keep shoppers coming back.
              </p>

              <Link className="link">Learn How</Link>
            </div>
          </div>
        </BottomSection>
      </Container>
    );
}

export default Resources;