import React, { useEffect, useState } from 'react';
import { LuRefreshCw } from 'react-icons/lu';
import { FaInfoCircle } from 'react-icons/fa';
import { AiFillCustomerService } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const images = [
    'boat1.jpg',
    'street.jpg',
    'cart.jpg',
    'cycle.jpg',
    'boat2.jpg',
    'plane.jpg',
    'boat3.jpg',
    'bike.jpg',
    'street2.jpg',
];

const Captcha = () => {
    const navigate = useNavigate()
    const [type, setType] = useState('boat')
    const [selectedImages, setSelectedImages] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleImageClick = (imageName) => {
        if (selectedImages.includes(imageName)) {
            setSelectedImages(selectedImages.filter(img => img !== imageName));
        } else {
            setSelectedImages([...selectedImages, imageName]);
        }
    };

    const handleSubmit = () => {
        // Check if selected images are correct
        const correctImages = ['boat1.jpg', 'boat2.jpg', 'boat3.jpg'];
        const isCorrect = selectedImages.every(img => correctImages.includes(img));

        if (isCorrect) {
            // Captcha passed
            navigate('/home')
        } else {
            // Captcha failed
            setErrorMessage('Please select the correct images.');
            setSelectedImages([]);
        }
    };

    const shuffle = () => {
        images.sort(() => Math.random() - 0.5);
        setSelectedImages([]);
        setErrorMessage('')
    }

    useEffect(() => {
        shuffle()
        setErrorMessage('')
    }, [])

    return (
        <div id='mainDiv'>
            <h3>Let's confirm you are human</h3>
            <p>Choose all <span id='type'>the {type}</span></p>

            <div id='captchaDiv'>
                <div className='captchaImageBox'>
                    {images.map((imageName, index) => (
                        <img
                            key={index}
                            src={imageName}
                            alt={`Image ${index + 1}`}
                            onClick={() => handleImageClick(imageName)}
                            style={{ border: selectedImages.includes(imageName) ? '2px solid blue' : '2px solid transparent' }}
                        />
                    ))}
                </div>
            </div>
            <div id='bottom'>
                <div>
                    <button className='btn' onClick={() => shuffle()}><LuRefreshCw size={20} /></button>
                    <button className='btn'><FaInfoCircle size={20} /></button>
                    <button className='btn'><AiFillCustomerService size={20} /></button>
                </div>
                <button id='cnfrmBtn' onClick={handleSubmit}>confirm</button>
            </div>
            {errorMessage && <p id='error'>{errorMessage}</p>}
        </div >
    );
};

export default Captcha;