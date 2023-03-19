import React from 'react';

const Start = ({ startQuiz, showStart }) => {
    return (
        <section className='text-white text-center bg-dark' style={{ display: `${showStart ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center start-container-box">
                    <div className="col-lg-8">
                        <h1 className='fw-bold mb-4 start-heading'>Basic React JS Quiz</h1>
                        <form className='start-form'>
                            <label htmlFor='name'>Enter Name</label>
                            <input type='text-field' className='start-name' id='name' required></input>
                            <input type="submit" onClick={startQuiz} className="btn px-4 py-2 bg-light text-dark fw-bold start-button"></input>
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Start;