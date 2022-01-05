import React from 'react'
import Link from 'next/link';
const Feedback = () => {
    return (
  
            <div className='wrapper'>
                <div className='content' >
                    <p className='text' >Thanks for your message, you will be contacted as soon as possible.</p>
                    <Link href='/' passHref><button className='action'> <i className='bx bx-left-arrow-alt feedback__icon'></i>Go back</button></Link>
                </div>
            </div>
       
        
    )
}

export default Feedback
