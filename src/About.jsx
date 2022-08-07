import React from 'react'
import { Underlay, Overlay } from "./DirtyFigmaExport"
import { useRef,useState } from 'react'


const About = () => {
    const [transform, setTransform] = useState("")

    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
      };

  return (
        <div className='relative '>
          <div  className=' absolute '>
            <p style={{ flex: "1 1 0%", color: "white", fontSize: 12, lineHeight: "1em", textAlign: "right" }}>
              <a  style={{ color: "white" }} className="">
                About Me
              </a>{" "}
              <a style={{ color: "white" }} href="https://codesandbox.io/s/zxpv7">
                Contact
              </a>
            </p>
          </div>

          <div className='bg-gray-200 text-black' ref={ref}>
      Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
    iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
          </div>
      
      
  )
}

export default About