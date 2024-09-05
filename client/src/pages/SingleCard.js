import React from 'react'
import "../components/styles/SingleCard.css"
import HeaderLoginSignup from '../components/HeaderLoggedIn'
import Sidebar from '../components/Sidebar'
import add from "../icons/add-outline-white.svg"
import edit from "../icons/pencil-outline.svg"
import remove from "../icons/trash-outline.svg"

const SingleCard = () => {
  return (
    <>
        <HeaderLoginSignup />

        <div className='singleCard-cont'>
          <Sidebar />

          <div className='singleCard-block'>
            <div className='singleCard-top'>
              <h1 className='lang'>English</h1>

              <button> <img src={add} alt='add'/>Add new</button>
            </div>

            <div className='singleCard-bottom'>
              <div className='singleCard-box'>
                <div className='cardPlaced'>
                  <h1>Front</h1>
                  <h1>Back</h1>
                </div>

                {/* cardPlaced Block container */}

                <div className='crdBlock-cont'>
                  <div className='cardPlaced-block'>
                    <input type='text' className='front' placeholder='front' />
                    <input type='text' className='back' placeholder='back' />
                    <div className='actions'>
                      <img src={edit} alt='edit'/>
                      <img src={remove} alt='trash'/>
                    </div>
                  </div>
                  <div className='cardPlaced-block'>
                    <input type='text' className='front' placeholder='front' />
                    <input type='text' className='back' placeholder='back' />
                    <div className='actions'>
                      <img src={edit} alt='edit'/>
                      <img src={remove} alt='trash'/>
                    </div>
                  </div>
                  <div className='cardPlaced-block'>
                    <input type='text' className='front' placeholder='front' />
                    <input type='text' className='back' placeholder='back' />
                    <div className='actions'>
                      <img src={edit} alt='edit'/>
                      <img src={remove} alt='trash'/>
                    </div>
                  </div>
                  <div className='cardPlaced-block addCard'>
                    <input type='text' className='front' placeholder='front' />
                    <input type='text' className='back' placeholder='back' />
                    <div className='actions'>
                      <img src={edit} alt='edit'/>
                      <img src={remove} alt='trash'/>
                      <button>Add</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default SingleCard