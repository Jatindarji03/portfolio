import '../styles/Header.css'
import React from 'react'
const Header = () => {
    return (
        <header className="header">
            <p>// Hi there!</p>
            <h2>I'm Jatin, a <span className='underline'>full-stack developer.</span></h2>
            <div className='skill'>
                <a href="https://skillicons.dev">
                    <img src="https://skillicons.dev/icons?i=androidstudio,c,cpp,dart,express,firebase,flutter,git,java,js,kotlin,mongodb,mysql,nodejs,react" />
                </a>
            </div>
            <div className='social'>
                <div className='social-icons'>
                    
                </div>
            </div>
        </header>
    )
}
export default Header