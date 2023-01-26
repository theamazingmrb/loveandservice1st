import React from "react";

const Home = () => {
  return (
    <div>
      <header><img src={require('../assets/noBgBlack.png')} alt="Love and Service 1rst Logo" /></header>
      <section>
        <h1>Love in action</h1>
        <p>
          Transforming lives by providing homeless individuals with the
          resources and support they need to achieve self-sufficiency and break
          the cycle of poverty.
        </p>
        <button>DONATE TODAY</button>
      </section>
     {/* <img src="" alt="" /> */}
      <section>
        "Pay it Forward" is an initiative started in Las Vegas to help the
        homeless population get back on their feet. - LAS1 team
      </section>
      <footer>
        {/* <img src="" alt="" srcset="" /> */}
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
        <a href="#">Linkedin</a>
      </footer>
    </div>
  );
};

export default Home;
