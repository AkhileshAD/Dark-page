import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Icon from './Icon';



function App() {


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  return (
    <>
      <div className='containerr'>
        <div className="linear-graidant"><span className='spn1'>This page is included in a free SaaS Website Kit. </span> <span className='spn2'>  View the complete Kit </span>
          <img src="/images/Icons.png" alt="Image Not Found" /></div>
        <div className='heading-start'>
          <img className='img1' src="/images/logo1.png" alt="Image Not Found" />
          <p className='p1'>made by</p>
          <img className='img2' src="/images/Vector.png" alt="Image Not Found" />
          <p className='p2' >Framer</p>
          <div className={`heading-end ${isMenuOpen ? "is-open" : ""}`}>
            <p className="p3">About</p>
            <p className="p3">Features</p>
            <p className="p3">Customers</p>
            <p className="p3">Updates</p>
            <p className="p3">Help</p>

          </div>
          <button className='btnget' type="button">Get For Free </button>
          <label class="hamburger">
            <input type="checkbox" onClick={toggleMenu} />
            <svg viewBox="0 0 32 32">
              <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
              <path class="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>

        <div className='middle-containerr'>
          <div className='version'><span className='spn-version'>Version 2.0 is here </span>
            <span className='spn-read'>Read more</span><img className='img-arrow' src="/images/Icons.svg" alt="" /></div>
          <div className='one-task-containerr'> <h1 className='one-task'>One Task at a Time</h1>
            <img className='cursor-img' src="/images/cursor 2.svg" alt="" />
            <img className='msg-icon' src="/images/message 1.svg" alt="" />
          </div>
          <h2 className='celebrate-h2'>Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.</h2>

          <div className='linear-gradient'>  </div>
          <img className='radial-gradient' src="/images/Ellipse 2.svg" alt="" />
          <button className='btnr2' type="button">Get For Free</button>
          <div className='linear-g2'></div>
          <h4 className='txt1'>Trusted by the world’s most innovative teams</h4>
          <div className='img-containerr'>
            <img className='imgbox1' src="/images/acme 1.svg" alt="Image Not Found" />
            <img className='imgbox2' src="/images/quantum 1.svg" alt="Image Not Found" />
            <img className='imgbox1' src="/images/echo 1.svg" alt="Image Not Found" />
            <img className='imgbox2' src="/images/celestia 1.svg" alt="Image Not Found" />
            <img className='imgbox1' src="/images/pulse 1.svg" alt="Image Not Found" />
            <img className='imgbox2' src="/images/apex 1.svg" alt="Image Not Found" />
          </div>
        </div>

        <div className='containerr3'>
          <div className='texts-containerr'>
            <h1 className='h1e'>Everything you need</h1>
            <h3 className='h3enjoy'>Enjoy customizable lists, team work tools,
              and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.</h3>
          </div>
          <div className='boxs-containerr' > <img className='tree1' src="/images/Frame 21.svg" alt="Image Not Found" />
            <h2 className='tree2'>Integration ecosystem</h2>
            <h3 className='tree1'>Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.</h3>
          </div>
          <div className='boxs-containerr' > <img className='tree1' src="/images/Frame 21.svg" alt="Image Not Found" />
            <h2 className='tree2'>Goal setting and tracking</h2>
            <h3 className='tree1'>Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.</h3>
          </div>
          <div className='boxs-containerr' >   <img className='tree1' src="/images/Frame 21.svg" alt="Image Not Found" />
            <h2 className='tree2'>Secure data encryption</h2>
            <h3 className='tree1'>With end-to-end encryption, your data is securely stored and protected from unauthorized access.</h3>
          </div>
        </div>


        <div className="containerr-4">
          <h1 className='inter-h1' >Intuitive interface</h1>
          <div className='conr-h3'>
            <h3 className='h3-tag' >Celebrate the joy of accomplishment with an app designed to track your progress,
              motivate your efforts, and celebrate your successes, one task at a time.</h3>
          </div>
          <img className='night-img' src="/images/App Night.svg" alt="Image Not Found" />
        </div>

        <div className='freq-con'>
          <h1 className='h1-ferq'>Frequently asked questions</h1>
          <div className='how-div'>How does the pricing work for teams    <img className='imgvec' src="/images/Vector.svg" alt="" />     </div>
          <div className='how-div'>How does the pricing work for teams    <img className='imgvec' src="/images/Vector.svg" alt="" />     </div>
          <div className='how-div'>How does the pricing work for teams    <img className='imgvec' src="/images/Vector.svg" alt="" />     </div>
          <div className='how-div'>How does the pricing work for teams    <img className='imgvec' src="/images/Vector.svg" alt="" />    </div>
        </div>

        <div className='con-img-get'>
          <div className='con-last'>
            <h1 className='last-tag'>Get instant access</h1>
            <h3 className='last-tag1'>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</h3>
            <div className='con-int'>
              <div className="inputbox">
                <input required="required" type='email' />
                <span>Email</span>
                <i></i>
              </div>
              <button className='btn btn-light ' type="button">Get Access</button>
            </div>
          </div>
          <img className='imgheli' src="/images/helix2 1.svg" alt="Image Not Found" />
          <img className='imgemoj' src="/images/emojistar 1.svg" alt="Image Not Found" />
          <div className='last-section'>
            <h1 className='copyright'>@ 2024 Your Company, Inc. All rights reserved</h1>
            <div className='last-img-con'>
              <img className='img-veco' src="/images/Vectorxr.svg" alt="Image Not Found" />
              <img className='img-veco' src="/images/Vectorx.svg" alt="Image Not Found" />
              <img className='img-veco' src="/images/Vector (1).svg" alt="Image Not Found" />
              <img className='img-veco' src="/images/Vector (2).svg" alt="Image Not Found" />
              <img className='img-veco' src="/images/Vector (3).svg" alt="Image Not Found" />
              <img className='img-veco' src="/images/Vector (4).svg" alt="Image Not Found" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
