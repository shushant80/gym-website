import React, { useState } from 'react';
import './Join.css';

const Join = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="Join" id="join-us">
            <div className="join-content">
                <div className="left-j">
                    <hr />
                    <div>
                        <span className="stroke-text">READY TO</span>
                        <span>Transform</span>
                    </div>
                    <div>
                        <span>YOUR GYM</span>
                        <span className="stroke-text">WITH US?</span>
                    </div>
                </div>
                <div className="right-j">
                    <button className="btn btn-j" onClick={openModal}>Join Now</button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>Join Us</h2>
                        <p>Fill out the details below to join us!</p>
                        <div className="modal-details">
                            <p>Name: Quick Solutions Key</p>
                            <p>Email:  info@quicksolutionskey.com</p>
                            <p>Number:  +91-8349444345, +91-9310507070</p>
                        </div>
                        {/* <button className="btn btn-j" onClick={closeModal}>Close</button> */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Join;
