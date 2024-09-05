import React from 'react'
import Navigation from '../components/Navigation'
import { Link } from 'react-router-dom'
import arrForward from "../icons/arrow-forward-outline.svg"
import arrForwardBlack from "../icons/arrow-forward-black.svg"
import editIcon from "../icons/create-outline.svg"
import briefcase from "../icons/briefcase-outline.svg"
import quest from "../images/quest.png"
import gh from "../icons/ghana.svg"
import brit from "../icons/britain.svg"
import landingpic from "../images/landingpic.png"


const LandingPage = () => {
  return (
    <>
    <Navigation />

    {/* hero */}
    <section id='hero'>
        <div className="hero-container">
            <div>
                <h1>Turn your notes into flashcards.</h1>
                <p className='james'>
                    Create flashcards that resurface at the best time for retention, right within your notes.
                </p>
                    <Link to={"/signup"}>Signup for free <img src={arrForwardBlack} alt='arrForwd'/></Link>
            </div>
            <div>
                <img src={landingpic} alt='landing' className='landingpic'/>
            </div>
        </div>
    </section>

    {/* questionare */}
    <section id='questionare'>
        <div className="questionare-container">
            <div className="questionare-left">
                <div className='q-top'>
                    <img src={editIcon} alt='edit' />
                    <h1><span>Create</span> flashcards without the hassle.</h1>
                    <p>Easily create new cards and review them to test your knowledge.</p>
                </div>
                <Link to={"/signup"}>Create now</Link>
            </div>
            <div className="questionare-right">
                {/* <div className='test-container'>
                    <h1 className='quest'>What is the capital of France ?</h1>

                    <div className='multi-ans'>
                        <div>a. Paris</div>
                        <div>b. Marseille</div>
                        <div>c. Lyon</div>
                        <div>d. I dont know</div>
                    </div>

                    <div className='ans-btns'>
                        <button>Clear Answer</button>
                        <button>Submit</button>
                    </div>
                </div> */}
                <img src={quest} alt='quest'/>
            </div>
        </div>
    </section>

    {/* manage section */}
    <section id='manage'>
        <div className='manage-container'>
            <div className='manage-left'>
                <img src={briefcase} alt='briefcase' className='brief' />
                <h1><span>Manage</span> the cards in your collections</h1>
                <p>Manage cards in your collection by adding, updating and deleting cards</p>
                <Link to={"/signup"}>Manage <img src={arrForward} className='mArrow' alt='arrForward' /></Link>
            </div>
            <div className='manage-right'>
                <div className='history'>
                    <h1>History collection</h1>

                    <div className='gh'>
                        <img src={gh} className='ghpic' alt='gh'/>
                        <h1>Ghana</h1>
                        <p>Test your knowledge in Ghanaian History</p>
                    </div>
                    <div className='brit'>
                    <img src={brit} className='britpic' alt='brit'/>
                    <h1>Britain</h1>
                    <p>Test your knowledge in Britain History</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* try now */}
    <Link to={"/signup"} className={"tryNow"}>Try it now <img src={arrForward}/></Link>

    <footer>
        <div className='logo'>Brain Deck</div>

        <ul>
            <li><Link to={"/signup"}>Contributors</Link></li>
            <li><Link to={"/signup"}>Tools</Link></li>
            <li>@2024</li>
        </ul>
    </footer>
    </>
  )
}

export default LandingPage