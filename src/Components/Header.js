import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from 'react';
const Header = () => {

    const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.altKey && event.keyCode === 13) {
        inputRef.current.focus();
        document.getElementById('searchbar').style.background = "white";
        document.getElementById('searchactive').style.color = "black";
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


    return (
        <div className='whole_header'>
            <div className="notesname">RAWG</div>
            <div className="searchbar" id='searchbar'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input ref={inputRef} type="text" placeholder='Search 850,828 games' id='searchactive'/>
                <div className='keyBinding'>
                    <div className="alt-key">alt</div> + 
                    <div className="enter-key">enter</div>
                </div>
            </div>
        </div>
    );
}

export default Header;
