import React from 'react'
import 'bootstrap/dist/css//bootstrap.min.css'

function Pagination(props) {
    const { onPageClick } = props; 
    const PAGES = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const pageButtons = PAGES.map(pageNum => ( 
        <button 
            key={pageNum}
            className='btn btn-dark' 
            onClick={() => onPageClick(pageNum)} 
            style={{margin: 5}} 
        >
            {pageNum}
        </button>

    ))

    return (
        <ul className='nav'  style={{ display: 'flex', justifyContent: 'center' }}>
            {pageButtons}
        </ul>
    )
}


export default Pagination