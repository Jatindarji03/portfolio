import '../styles/Header.css'
import React from 'react'
const Header = () => {
    return (
        <header className="header">
            <p>// Hi there!</p>
            <h2>I'm Jatin, a <span className='underline'>full-stack developer.</span></h2>
            <div className='skill'>
                <div className='skill-icon'>
                    <img src="https://skillicons.dev/icons?i=androidstudio" alt='skill' />
                </div>
                <div className='skill-icon'>
                    <img src="https://skillicons.dev/icons?i=c" alt='skill' />
                </div>
                <div className='skill-icon'>
                    <img src="https://skillicons.dev/icons?i=cpp" alt='skill' />
                </div>
                <div className='skill-icon'>
                    <img src="https://skillicons.dev/icons?i=dart" alt='skill' />
                </div>
                <div className='skill-icon'>
                    <img src="https://skillicons.dev/icons?i=express" alt='skill' />
                </div>
                <div className='skill-icon'>
                    <img src="https://skillicons.dev/icons?i=firebase" alt='skill' />
                </div>
                <div className='skill-icon'>
                    <img src="https://skillicons.dev/icons?i=flutter" alt='skill' />
                </div>
                <div className='skill-icon'>
                    <img src="https://skillicons.dev/icons?i=git" alt='skill' />
                </div>
                <div className='skill-icon'>
                    <img src="https://skillicons.dev/icons?i=java" alt='skill' />
                </div>
                <div className='skill-icon'>
                    <img src="https://skillicons.dev/icons?i=js" alt='skill' />
                </div>
                <div className='skill-icon'>
                    <img src="https://skillicons.dev/icons?i=kotlin" alt='skill' />
                </div>
                <div className='skill-icon'>
                    <img src="https://skillicons.dev/icons?i=mongodb" alt='skill' />
                </div>
                <div className='skill-icon'>
                    <img src="https://skillicons.dev/icons?i=mysql" alt='skill' />
                </div>
                <div className='skill-icon'>
                    <img src="https://skillicons.dev/icons?i=nodejs" alt='skill' />
                </div>
                <div className='skill-icon'>
                    <img src="https://skillicons.dev/icons?i=react" alt='skill' />
                </div>
            </div>

            <div className='social'>
                <div className='social-icon'>
                    <a href='https://github.com/Jatindarji03' target='_blank' rel="noreferrer">
                        <img src="https://skillicons.dev/icons?i=github" alt='social' />
                    </a>
                </div>
                <div className='social-icon'>
                    <a href='https://www.instagram.com/jatindarji03/' target='_blank' rel="noreferrer">
                        <img src="https://skillicons.dev/icons?i=instagram" alt='social' />
                    </a>
                </div>
                <div className='social-icon'>
                    <a href='https://x.com/jatindarji03' target='_blank' rel="noreferrer">
                        <img src="https://skillicons.dev/icons?i=twitter" alt='social' />
                    </a>
                </div>
                <div className='social-icon'>
                    <a href='https://www.linkedin.com/in/jatin-darji/' target='_blank' rel="noreferrer">
                        <img src="https://skillicons.dev/icons?i=linkedin" alt='social' />
                    </a>
                </div>

            </div>

        </header>
    )
}
export default Header