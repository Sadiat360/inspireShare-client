import './DropdownArrow.scss'

function DropdownArrow({isOpen}){
    return(
        <svg xmlns="http://www.w3.org/2000/svg"
         height="24px"
          viewBox="0 -960 960 960" 
          width="24px" 
          fill="#5f6368"
          className={`dropdown-arrow ${isOpen ? 'dropdown-arrow--open' : ''}`}><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
    )
}
export default DropdownArrow;