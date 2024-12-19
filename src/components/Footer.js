import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="footer-container">
      <div className="social-icons">
      <a href="https://drive.google.com/file/d/1DT96UdBbW8_dn5j4SS58AXJTjQoCc6WK/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
          <img src='/assets/images/personal-profile.png' className='resume'></img>
        </a>
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
    </footer>
    </div>
  )
}
