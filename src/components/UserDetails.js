
import React from 'react';
import './UserDetails.css';

function UserDetails() {
  return (
    <div>
        <div className='dp'>
            <a href='#'><img className='dpicon' src='https://media.gettyimages.com/photos/virat-kohli-of-india-poses-during-the-india-test-squad-portrait-on-picture-id1076464716?k=20&m=1076464716&s=612x612&w=0&h=8ZlKRvWxK7OQseD27gQfiv5nG4naB5kDZY9RJ-fF3gU=' alt='dp' /></a>
        </div>
        <div className='name'>
            <p>virat.kholi</p><img className='vficon' src='https://cdn-icons-png.flaticon.com/128/7641/7641727.png' alt='vi' />
        </div>
        <div className='options'>
            <a id='msg' className='btn' href='#'><b>Message</b></a>
            <a className='btn' href='#'><b>Follow</b></a>
            <a className='btn' href='#'><b>...</b></a>
        </div>
        <div className='account'>
            <p><b>1414</b>posts</p>&emsp;&emsp;&emsp;<span><p><b>212M</b>followers</p></span>&emsp;&emsp;&emsp;<span><p><b>252</b> following</p></span>
        </div>
        <div className='about'>
            <b>Virat.Kholi</b>
            <p>Carpediem</p>
            <a href='#'><b>one8.com</b></a>
        </div>
    </div>
  )
}

export default UserDetails