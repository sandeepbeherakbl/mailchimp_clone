
import styles from "./Homepage.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from './Footer';
import Resources from './Resources';
import Aos from "aos";
import "aos/dist/aos.css";
export default function Homepage() {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(true);
  const [changeColor, setChangeColor] = useState(false);
  const [color, setColor] = useState("transparent");
  const scrollevent = (e) => {
    if (window.scrollY > 100) {
      return setColor("#ffff");
    } else {
      return setColor("transparent");
    }
  };
  localStorage.setItem("CanpaignSubmit", "false");
  useEffect(() => {
    window.addEventListener("scroll", scrollevent);
    return () => window.removeEventListener("scroll", scrollevent);
  }, []);
  return (
    <div className={styles.main_div}>
      <div className={styles.navbar} style={{ background: `${color}` }}>
        <div style={{ marginTop: "3rem", display: "flex" }}>
          <div style={{ marginLeft: "3.5rem" }}>Products</div>
          <div style={{ marginLeft: "3.5rem" }}>Resources</div>
          <div style={{ marginLeft: "3.5rem" }}>Inspiration</div>
          <div style={{ marginLeft: "4rem" }}>Pricing</div>
          <div style={{ marginLeft: "23rem", marginTop: "-0.8rem" }} className={styles.xyz}>
            <img src="/logo1.png"/>
          </div>
          <div style={{ marginLeft: "-1rem" }}>
            <img src="/logo2.png" />
          </div>
          <div className={styles.logoTag}>
            <img src="/logo3.png" />
          </div>
          <div
            style={{
              marginLeft: "2rem",
              color: "#241C15",
              marginTop: "-.8rem",
            }}
          >
            <a href="https://mailchimpp.herokuapp.com/login">
              <button
                style={{
                  padding: "10.5px 31px",
                  fontWeight: "500",
                  fontStyle: "normal",
                  fontSize: "14px",
                  color: "#241C15",
                  lineHeight: "15px",
                  border: " 0.8px solid #241C15",
                  background: "transparent",
                }}
              >
                Log In
              </button>
            </a>
          </div>
          <div style={{ marginLeft: "2rem", marginTop: "-1rem" }}>
            <a href="https://mailchimpp.herokuapp.com/register">
              <button
                className={styles.navSingup}
                style={{
                  padding: "12px 36px",
                  background: " #007C89",
                  color: "#FFF",
                  border: "none",
                }}
              >
                Sign Up
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.mainpage}>
        <div className={styles.mainleft}>
          <div className={styles.leftone}>
            Get down to business and grow sales
          </div>
          <div className={styles.lefttwo}>
            Engage your customers and boost your business with Mainchimp’s
            advanced, yet easy-to-use marketing platform.
          </div>
          <div className={styles.leftthree}>
            <a href="https://mailchimpp.herokuapp.com/register">
              <button className={styles.btnleft}>Sign Up</button>
            </a>
            <div className={styles.com}>Compare Plans</div>
          </div>
        </div>
        <div className={styles.mainright} data-aos="fade-up" data-aos-duration="1200">
          <img src="/mainimg.png" style={{width:"100%"}}/>
        </div>
      </div>

      <div className={styles.Doit}>Do it all with Mailchimp</div>
      <div className={styles.audience}>
        Bring your audience data, marketing channels, and insights together so
        you can reach your goals faster—all from a single platform.
      </div>
      <div className={styles.secondlast}>
        <div className={styles.slleft}>
          <div
            className={styles.sllf}
            style={{ marginLeft: "3.25rem", paddingLeft: "1rem" }}
          >
            Get your business online
          </div>
          <div className={styles.sllm} style={{ marginLeft: "6rem" }}>
            Give your brand a home with a custom domain. Then launch a website
            to sell products or take appointments, all with built-in marketing
            tools to help you boost sales and find fans.
          </div>
          <div>
            <button className={styles.btnsl}>Websites and Stores </button>
          </div>
        </div>
        <div className={styles.slright}>
          <div data-aos="fade-up" data-aos-duration="1200">
            <img src="/flone.png" style={{width:"100%"}}/>
          </div>
        </div>
      </div>
      <div className={styles.secondlast}>
        <div className={styles.slleft}>
          <div className={styles.sllf} style={{ marginLeft: "1rem" }}>
            Market your business
          </div>
          <div className={styles.sllm}>
            Send the right messages on all the right channels. Build emails,
            social ads, landing pages, postcards, and more from one place.
          </div>
          <div>
            <button className={styles.btnsl} style={{ marginLeft: "-8rem" }}>
              Marketing campaigns{" "}
            </button>
          </div>
        </div>
        <div className={styles.slright}>
          <div data-aos="fade-up" data-aos-duration="1200">
            <img src="/frothy.png" style={{width:"100%"}}/>
          </div>
        </div>
      </div>
      <Resources/>
      <Footer/>
    </div>
  );
}