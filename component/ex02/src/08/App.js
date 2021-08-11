import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell, faCheckCircle, faTimesCircle, faFighterJet } from '@fortawesome/free-solid-svg-icons';
import { faBell as farBell } from '@fortawesome/free-regular-svg-icons';
import { faApple, faReact } from '@fortawesome/free-brands-svg-icons';
export default function App() {
    library.add({faApple})
    return(
      <Fragment>
          <h2>React Font Awesome Examples</h2>

          {/* solid */}
          <h4> solid </h4>
          <FontAwesomeIcon icon={faBell}/>
          <FontAwesomeIcon icon={faCheckCircle} size={'10x'} style={{color:'blue'}}/>
          <FontAwesomeIcon icon={faTimesCircle} size={'2x'} style={{color:'red'}}/>
          <FontAwesomeIcon icon={faFighterJet} size={'10x'} style={{color:'#00000010'}}/>

          <h4> regular </h4>
          <FontAwesomeIcon icon={farBell}/>

          <h4> brands </h4>
          <FontAwesomeIcon icon={["fab","apple"]} size={'5x'}/>
          <FontAwesomeIcon icon={faReact} style={{fontSize:'25rem', color:'aquamarine'}}/>
      </Fragment>
    )
}