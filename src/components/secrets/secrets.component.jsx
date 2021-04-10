import React from 'react';

import './secrets.styles.scss';

const Secret = ({ color, secrets }) => (
  <div>
    {
      secrets.map((secret) => (
        <p key={secret} className='secret' style={{ 'color': color }}>{secret} <input type='text' placeholder='Who is it?' /></p>
      ))
    }
  </div>
)

export default Secret;
