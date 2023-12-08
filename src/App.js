import { useState } from 'react';
import './App.css';
import images from './images';

function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='accordion-item'>
      <div className={`text ${isOpen ? 'hidden' : ''}`} onClick={toggleAccordion} style={{ cursor: 'pointer' }}>
        <p>{question}</p>
        <img src={isOpen ? images.iconMinus : images.iconPlus} alt='icon' />
      </div>
      {isOpen && (
        <div className='answer'>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}


function App() {



  return (
    
    <div className="App">
      <div className='header-background'>
        <img src={images.background} alt='background-image' />

      </div>


      <div className='body-violet'>
        <div className='card-body' >

          <div className='title'>
            <img src={images.iconStart} alt='icon-start' />
            <h1>FAQs</h1>
          </div>
            <AccordionItem className='text'
              question="What is Fronted Mentor, and how will it help me?"
              answer="Frontend Mentor offers realistc coding challenges to help developers improve their fronted coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for porfolio building." />




            <AccordionItem className='text'
              question='Is Frontend Mentori free?'
              answer="Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels." />

            <AccordionItem className='text'
              question='Can I use Frontend Mentor projects in my portfolio?'
              answer="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!            " />




            <AccordionItem className='text'

              question='How can I get help if I’m stuck on challenge?'
              answer='The best place to get help is inside Frontend Mentors Discord community. There´s a help channel where you can ask questions and seek support from other community members.'
            />

         </div>
        </div>
      </div>

  );
}

export default App;
