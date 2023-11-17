import React from 'react';

const Square = ({ onClick }) => {
    return (
        <div>
            <svg
                onClick={onClick}
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512">
                <path d="M464 48V464H48V48H464zM48 0H0V48 464v48H48 464h48V464 48 0H464 48z"/>
            </svg>
        </div>
    );
};

export default Square;