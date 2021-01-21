import React from 'react'

function Input(props) {
    const { handleInput } = props; 
        return(
            <div className='inputContainer'>
                <div className='form-group-col'>
                    <label className="text-light">Search: </label>
                    <input 
                        name='characterSearch' 
                        type='text' 
                        className='form-control-row col-sm-6'
                        onChange={event => {handleInput(event)} }
                    />
                </div>
                <div>
                    <button className='btn btn-dark'>Are these the droids you're looking for?</button>
                </div>
            </div>
        );
    }

export default Input 