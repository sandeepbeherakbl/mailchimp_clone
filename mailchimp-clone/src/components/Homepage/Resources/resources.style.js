import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 25rem;
  margin-bottom: 7.5rem;
  text-align: center;
  width: 75%;
  margin-left: auto;
  margin-right: auto;

  @media(max-width: 575px) {
    width: 100%;
    margin-top: 15rem;
  }
`;


export const Text = styled.h1`
  width: 75%;
  margin: 0 auto 2rem;
  font-size: 5rem;
  letter-spacing: -0.03125rem;
  font-weight: 300;
  line-height: 1;

  @media (max-width: 575px) {
    text-align: center!important
    width: 100%;
    font-size: 2.3rem;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.03125rem;
    margin-bottom: 1rem;
  }
`;


export const SmallText = styled.p`
  width: 75%;
  margin-bottom: 4.5rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.5em;
  @media (max-width: 575px) {
    width: 80%;
    color: #403b3b;
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5;
  }
`;


export const TopSection = styled.div`
  display: flex;
  
  @media(max-width: 575px) {
    flex-wrap: wrap;
  }

  .box1 {
    width: 60%;
    margin-right: 1%;
    margin-bottom: 1%;
    background-color: #fdece5;
    padding: 7.5rem 8rem 8.125rem;
    position: relative;

      @media(max-width: 575px) {
        width: 75%;
            padding-left: 3.75rem;
    padding-right: 3.75rem
      }
    
    h3 {
      font-size: 2rem;
      letter-spacing: 0.03125rem;
      margin-bottom: 0.625rem;
      font-weight: 500;
      line-height: 1;

      @media (max-width: 575px) {
        
      }
    }
    h1 {
      font-size: 7rem;
      letter-spacing: -0.03125rem;
      font-weight: 300;
      line-height: 1;
      margin-bottom: 2.5rem;

      
    }

    p {
      text-align: left;
      margin-bottom: 2.5rem;
      font-size: 2em;
      font-weight: 400;
      line-height: 1.5;
     
    }
  }

  .box2 {
    width: 40%;
    height: 50%;
    display: flex;
    flex-direction: column;
    text-align: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #8c8c8c;
    border-top: none;

    @media(max-width: 575px) {
      width: 80%;
      margin: 0 auto;
    }

    img {
      object-fit: cover;
    width: 100%;
    height: auto;
    display: block;
    
}
    }

    h4 {
      font-size: 2rem;
      letter-spacing: 0.03125rem;
      padding-bottom: 0.625rem;
      font-weight: 500;
      line-height: 1;
      @media(max-width: 575px) {
        font-size: 1rem;
        padding-bottom: 1rem;
      }
    }

    h1 {
      padding-bottom: 0.9375rem;
      font-size: 4rem;
      font-weight: 300;
      line-height: 1.1;
    }

    .box3 {
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
      text-align: left;
      padding: 1.5rem;
      height: 50%;

      .logo-text {
        display: flex;
        padding-bottom: 2.1875rem;

        p {
          padding: 0.2rem 0 0 0.2rem;
          font-weight: 400;
          line-height: 1.5;
          font-size: 2em;

          @media(max-width: 575px) {
            font-size: 1.5em;
          }
        }
      }
    }
  }
`;
    

export const Button = styled.button`
color: #fff;
    background-color: #007c89;
    font-weight: 600;
    font-size: .9375rem;
    padding: 1.25rem 2.5rem;
    -webkit-box-shadow: 0 0 0 0.0625rem #007c89 inset;
    box-shadow: inset 0 0 0 0.0625rem #007c89;
}`;

export const Link = styled.a`
  margin-top: 4rem;
  font-size: 2rem;
  padding-bottom: -1rem;

  @media(max-width: 575) {
    font-size: 1rem;
  }
`;

export const BottomSection = styled.div`
  width: 100%;
  display: flex;
  flex-basic: auto;
  @media (max-width: 575px) {
    flex-wrap: wrap;
    margin-top: 2rem;
  }

  .box1 {
    width: 34%;
    margin-right: 1%;
    @media (max-width: 575px) {
      width: 80%;
      margin: 0 auto;
      height: auto;
    }

    img {
      width: 100%;
      height: auto;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50%;
    }
  }

  .box2 {
    width: 65%;
    display: flex;
    background-color: #fdece5;
    cursor: pointer;

    @media (max-width: 575px) {
      width: 80%;
      flex-wrap: wrap;
      margin: 0 auto;
      margin-top: 3rem;
    }

    .img {
      width: 50%;
      padding: 1.25rem;
      -ms-flex-item-align: center;
      align-self: center;

      @media (max-width: 575px) {
        width: 100%;
        margin-top: 2rem;
      }

      img {
        width: 100%;
        text-align: center;
        height: auto;
      }
    }

    .box-text {
      width: 50%;
      height: 100%;
      text-align: left;
      padding-top: 5.9375rem;
      padding-bottom: 1.8375rem;
      padding-right: 1.25rem;
      @media (max-width: 575px) {
        width: 100%;
        padding-top: 2.9375rem;
      }

      .link {
        @media (max-width: 575px) {
          padding-left: 2rem;
        }
      }

      h2 {
        font-size: 2rem;
        letter-spacing: 0.03125rem;
        margin-top: -1rem;
        margin-bottom: 0.625rem;
        font-weight: 500;
        line-height: 1;

        @media (max-width: 575px) {
          padding-left: 2rem;
        }
      }

      h1 {
        font-size: 4rem;
        font-weight: 300;
        line-height: 1.1;
        margin-bottom: 0.625rem;

        @media (max-width: 575px) {
          padding-left: 2rem;
        }
      }

      p {
        margin-bottom: 0.8125rem;
        font-size: 2rem;
        font-weight: 400;
        line-height: 1.5;
        @media (max-width: 575px) {
          padding-left: 2rem;
        }
      }
    }
  }
`;


