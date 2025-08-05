import { Link } from "react-router-dom";

import { eye,arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <>
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
          Hi, I'm
          <span className="font-semibold mx-2 text-white">Rajiv Ranjan</span>
          👋
          <br />A budding programmer exploring new fields of development.
          <br />
          <br />
          <Link
            to="https://rajivranjanmars.github.io/portfolio-scss/assets/Rajiv_Ranjan.pdf"
            className="neo-brutalism-white neo-btn"
          >
            <img src={eye} alt="arrow" className="w-4 h-4 object-contain" />
            My Resume
          </Link>
        </h1>
      </>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          playing with new technologirs <br /> and creating new solutions 
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          let's took a glimpse of these projects. <br />
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          Hope on !
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
       Let's collaborate on a new project  <br/>
       
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Contact me 
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
