import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

// const Button=()=>{
//   return(
//     <a href="#" className="button" >Get Started</a>
//   );
// }
const Email=()=>{
  return(
    <a href="mailto:srajanpatell04@gmail.com" className="button">Email Us</a>
  );
}

 function Product() {
  return (
    <div class="container">
  <main >
    <div >
      <h1 className="landingpage" class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl ">
        <span class="block xl:inline">Srajan Patel</span>
        <br />
        {/* <span class="block text-primary xl:inline">landing page.</span> */}
      </h1>
      <p className="landingpara">
      A Bachelor of Science student with practical experience in full-stack web development, having gained hands-on skills in both front-end and back-end technologies through formal training at SSI Digital Academy.Proficient in creating dynamic and responsive websites using technologies such as HTML, CSS, JavaScript, React, Python, django and databases like SQL Adept at Integrating user interfaces with python back-end services, debugging issues, and optimizing web applications for performance and scalability. Demonstrates a strong understanding of software development principles and a commitment to continuous learning in the field of web development.
      </p>
    </div>
  </main>
  {/* <Button/> */}
<Email/>

<div class="image-container">
<img className="happyteam" src="/assets/images/profile.jpg" alt="happy team image" />
</div>

<div>
  <h2 className="heading2">
    <span class="text-border">Educational </span>
    <span class="text-primary">Background </span>
    
  </h2>
</div>
<div>
  <h3 className="plugh">Full Stack Development - 2024</h3>
  <p className="plug1">SSI Digital</p>
  <h3 className="plugh">Bachelors Of Science {/*(Biotechnology)*/} - 2021</h3>
  <p className="plug1">DAVV, Indore<br></br>73%</p>
  </div>
<div >
<img className="product1" src="/assets/images/product1.jpg" alt="A plug n play template"> 
</img>
</div>
<div className='skill'>
<div>
  <h2 className="heading2">
    <span class="text-border">Skills & </span>
    <span class="text-primary">Projects </span>
    
  </h2>
</div>
<div>
  <h3 className="plugh1">Skills</h3>
  <p className="plug2"><ul>
   <li>C/C++</li>
   <li>HTML</li>
   <li>CSS</li>
   <li>Java Script</li>
   <li>JQuery</li>
   <li>Bootstrap</li>
   <li>Python</li>
   <li>SQL</li>
   <li>Django</li>
   <li>React.js</li>
  </ul></p>
  </div>
<div className='project'>
  <h3 className="plugh1">Projects</h3>
  <p className="plug2">
    <ul>
      <li><b>HTML/CSS/JavaScript</b><br></br>Link:- </li>
      <li><b>Bootstrap</b><br></br>Link:- </li>
      <li><b>React.js</b><br></br>Link:- </li>
    </ul>
  </p>
  </div>
  <div>
  <img className="product2" src="/assets/images/product2.jpg" alt="Make it your own!"/>
  </div>
  </div>
{/* <div>

<h2 className="latesth" >Work Experience</h2>
<h2 className="latest" >MIS & Project Management Officer, Pratibha Syntex Limited, Indore</h2>
<p className="latestpara">
<h1 className="latest1">(Feb 2022 - April 2024)</h1>
<ul>
<li>
<b>MIS:-</b> Automation of Performance Review Processes, Data Visualization, Created Insights & Metrics from Data, Documentation & Reporting, Dashboards for Performance Visualization, Database & Analytical Reports.</li><br></br>
<li><b>System Creation:-</b> Implemented systems in various departments like PMS(Production Management System), FMS(Flow Management System), Preventive Maintenance Plan Vs. Actual System, QMS(Quality Management System).</li><br></br>
<li><b>Time Study:-</b> Captured the Time of Individual Operation for Gap Analysis.
Efficiency Improvement Project:- 1st Hour Efficiency Improvement Project to Increase the Overall Production.</li>
</ul>
      </p>
</div> */}
{/* <div> 
  <div className="reactimgborder">
  <img className="reactimg" src="/assets/images/react.png" alt="React.js"/>
  </div>
  <p className="react">React.js</p>
  <p className="reactpara">React is a free and open-source front-end JavaScript library for building user interfaces or UI components.</p>
 
</div>
<div>
  <div className="Tailwindimgborder">
  <img className="Tailwindimg" src="/assets/images/tailwindcss.svg" alt="React.js"/>
  </div>
  <p className="Tailwind">Tailwind</p>
  <p className="Tailwindpara">Tailwind CSS is a highly customizable, low-level CSS framework for quickly creating beautiful designs without any annoying opinionated stylesheet nonsense.</p>
 
</div>
<div>
  <div className="reactimgborder">
  <img className="reactimg" src="/assets/images/nextjs.svg" alt="React.js"/>
  </div>
  <p className="react">Next.js</p>
  <p className="reactpara">Next.js is a framework for server-rendered React applications using Next.js.</p>
 
</div>
<div>
  <div className="Tailwindimgborder">
  <img className="Typescriptimg" src="/assets/images/ts.png" alt="React.js"/>
  </div>
  <p className="Tailwind">Typescript</p>
  <p className="Tailwindpara">TypeScript is a programming language developed and maintained by Microsoft.</p>
 
</div>*/}

<div className="about-container"> {/* Apply the class to the root div */}
      <h3>Contact Information</h3>
      <ul>
        <li>Phone: +91-7489683885</li>
        <li>Email: <a href="mailto:srajanpatell04@gmail.com">srajanpatell04@gmail.com</a></li>
        <li>Place: Indore</li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/srajan-patel-918357222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">Click Me!</a></li>
      </ul>
    </div>

    {/* <footer className="footer-container">
      <div className="social-icons">
        <a href="https://github.com/srajanpatell" target="_blank" rel="noopener noreferrer">
          <img src='/assets/images/github.png' className='git'></img>
        </a>
        <a href="https://x.com/srajanpatell" target="_blank" rel="noopener noreferrer">
          <img src='/assets/images/x.png' className='x'></img>
        </a>
        <a href="mailto:srajanpatell04@gmail.com">
        <img src='/assets/images/mail.jpg' className='x'></img>
        </a>
        <div className='sign'>
        </div>
      </div>
    </footer> */}

</div>




  )
}
export default Product;
