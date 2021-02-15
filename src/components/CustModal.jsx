import "../index.css";
import { useState } from 'react';

export default function CustModal(ChildComponent, btnName) {
  
  const [isVisible, setIsVisible] = useState(false);
  
  if (isVisible) {
    return (
      <div className="cust-modal-container">
        <div className="cust-modal">
          <button className="cust-modal-close" onClick={ () => setIsVisible(false) }>
            x
          </button>
          <ChildComponent/>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={ () => setIsVisible(true) }>
          {btnName}
        </button>
      </div>
    );
  }
}

/***
 * WORKING
 * 
 
export default function CustModal({children, btnName}) {
  
  const [isVisible, setIsVisible] = useState(false);
  
  if (isVisible) {
    return (
      <div className="cust-modal-container">
        <div className="cust-modal">
          <button className="cust-modal-close" onClick={ () => setIsVisible(false) }>
            x
          </button>
          {children}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={ () => setIsVisible(true) }>
          {btnName}
        </button>
      </div>
    );
  }
}
 */