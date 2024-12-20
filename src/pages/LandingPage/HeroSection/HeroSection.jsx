import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import replatformDemoVideo from "../../../assets/videos/ReplatformVideo.mp4";
import playBtn from "../../../assets/commonImages/play-btn.svg";

import "./HeroSection.scss";

const HeroSection = () => {

    const [videoNotActive, setVideoNotActive] = useState(true);
    const videoRef = useRef(null);

    const handleVideoPlay = () => {
        if (videoNotActive) {
            videoRef.current.play();
            videoRef.current.controls = true;
        } else {
            videoRef.current.pause();
            videoRef.current.controls = false;
            videoRef.current.autoplay = true;
        }
        setVideoNotActive(!videoNotActive);
    };

    return (
        <div className='hero-section'>

            {/* content section top */}
            <div className="content">
                <div className="hero-baner-content">
                    <h1 className="title"> 
                        <span className="title-highlight-text">
                            Enterprise SRE/DevOps Platform. 
                            &nbsp;
                        </span>
                        Simple & Scalable.
                    </h1>
                    <p className="subTitle">
                        RePlatform simplifies Kubernetes deployment, config management, and incident handling. Enjoy real-time monitoring, customizable alerts, and a user-friendly interface to streamline workflows and boost efficiency. Focus on building, we handle the rest.
                    </p>
                    <div className="searchInput">
                        <button type="submit">
                            {/* Subscribe Now */}
                            <Link to={"https://calendly.com/praveen-shukla-c42/30min"} target='_blank'> Book Demo </Link>
                        </button>
                    </div>
                </div>
            </div>

            <section id='demo' className='demo'>
                <div className="demo-wrapper">
                    <div className="video-container">
                        <video 
                            src={replatformDemoVideo} 
                            className={`demo-video ${videoNotActive ? "" : "opacity-normal"}`} 
                            ref={videoRef}
                            onClick={handleVideoPlay}
                            controls={false}
                        ></video>
                        <div className={`video-controller ${videoNotActive ? "active" : ""}`}>
                            {videoNotActive ? 
                                    <img src={playBtn} alt="Play button" onClick={handleVideoPlay}/>
                                : 
                                    " " 
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSection