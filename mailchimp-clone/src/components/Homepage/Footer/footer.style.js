import styled from 'styled-components';


export const Container = styled.div`
width: 100%;
  padding-top: 7.5rem;
  padding-bottom: 7.5rem;
  background-color: #efeeea;
  
`;

export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  margin: 0 auto;
  align-items: flex-start;
  justify-content: center;
  color: #241c15;

  @media (max-width: 575px) {
    flex-wrap: wrap;
  }

  div {
    height: auto;
    margin: 0 1rem;
    line-height:2rem;
    @media (max-width: 575px) {
      width: 100%;
      margin-top: 2rem;
    }

    p {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      color: #241c15;
      font-weight: 500;
      text-align:left;
    }

    li {
      margin-bottom: 0.855rem;
      list-style: none;
      font-weight: 400;
      font-size: 1.5rem;
      text-align:left;
    }

    h4 {
      font-size: 1.5em;
      font-family: Means Web, Georgia, Times, Times New Roman, serif;
      font-weight: 300;
      line-height: 1.5;
    }
  }

  .box {
    width: 15%;
    margin: 0 1.875rem;
    text-align:left;
    @media (max-width: 575px) {
      width: 100%;
      margin: 2rem 0 0 1rem;
    }

    .logo {
      margin-top: -0.5rem;
    }

    h4 {
      margin: 1rem 0;

      @media (max-width: 575px) {
        width: 60%;
        margin: 1rem 0;
        font-size: 1.5rem;
      }
    }
  }

  .box2 {
    width: 100%;
    margin-top: 5rem;

    @media (max-width: 575px) {
      width: 50%;
      margin-top: 2rem;
    }

    h4 {
      @media (max-width: 575px) {
        width: 100%;
        margin: 1rem 0;
        font-size:1.5rem;
      }
    }
  }
`;