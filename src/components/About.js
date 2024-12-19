import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
export default function Features() {
  return (
    <div className='foot'>
      <h1 className='cent'>Welcome to Contact</h1>
      <div className="about-container"> {/* Apply the class to the root div */}
      <h3>Contact Information</h3>
      <ul>
        <li>Phone: +91-7489683885</li>
        <li>Email: <a href="mailto:srajanpatell04@gmail.com">srajanpatell04@gmail.com</a></li>
        <li>Place: Indore</li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/srajan-patel-918357222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">Click Me!</a></li>
      </ul>
    </div>
    </div>
  )
}
