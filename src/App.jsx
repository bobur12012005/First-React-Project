import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <main>
                <header>
                    <div className="left">
                        <button className='logo'>
                            <img src="/logotype/logotype[1].svg" />
                            <img src="/logotype/logotype[2].svg" />
                        </button>
                    </div>
                    <div className="center">
                        <nav>
                            <a className='active-link' href="#">Home</a>
                            <a href="#">Contact</a>
                            <a href="#">Location</a>
                            <a href="#">About Us</a>
                        </nav>
                    </div>
                    <div className="right">
                        <button className='sign-up'>Sign Up</button>
                    </div>
                </header>

                <section className="interior-design">
                    <div className="left">
                        <h2>Get the inspiration of interior design here</h2>
                        <p>architecture not only about engineering, it even lands to art and aesthetics. With us, you will get a residentical design with an extraordinary touch of art.</p>
                        <button>Let's go</button>
                    </div>
                    <div className="right">
                        <div className="img-place">
                            <img src="/images/interior-design.png" />
                        </div>
                    </div>
                </section>

                <section className="working-process">
                    <div className="top">
                        <h2>How it works</h2>
                        <p>Spice up your space even simpler than you think</p>
                    </div>
                    <div className="video">
                        <div className="left"></div>
                        <div className="right">
                            <p>We provide design and build for commercial building, interior and furniture to improve the better life.</p>
                        </div>
                        <div className="play-button">
                            <div className="inner-circle">
                                <img src="/icons/play.svg" />
                            </div>
                        </div>
                    </div>
                    <div className="other">
                        <div className="left">
                            <img src="/images/other-img.jpg" />
                        </div>
                        <div className="right">
                            <h2>Our mission is to <br /> deliver aesthetic visual <br /> for your home</h2>
                            <p>By applying bacis psychology principles, <br /> we are going to explain how perception works and <br /> how we can use this understanding to maximise <br /> the space that we occupy in our homes.</p>
                        </div>
                    </div>
                </section>

                <section className="project">
                    <div className="top">
                        <h2>Our project</h2>
                        <p>Introducing our first official project</p>
                        <div className="double-line">
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="projects-container">
                        <div className="project">
                            <div className="project-top">
                                <h2>Project Livingroom</h2>
                                <p>A simple guide to create the perfect livingro- om for . Night Watc works beautifully in a wi- de gamut of arrangements.</p>
                            </div>
                            <img src="/images/livingroom.jpg" />
                        </div>
                        <div className="project">
                            <div className="project-top">
                                <h2>Project Workspace</h2>
                                <p>A simple guide to create the perfect livingro- om for . Night Watc works beautifully in a wi- de gamut of arrangements.</p>
                            </div>
                            <img src="/images/workplace.jpg" />
                        </div>
                        <div className="project">
                            <div className="project-top">
                                <h2>Project Library</h2>
                                <p>A simple guide to create the perfect livingro- om for . Night Watc works beautifully in a wi- de gamut of arrangements.</p>
                            </div>
                            <img src="/images/library.jpg" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default App