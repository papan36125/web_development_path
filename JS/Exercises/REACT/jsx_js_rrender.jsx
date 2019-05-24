import React from 'react';
import ReactDOM from 'react-dom';

const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

// Declare new variable here:
let gooseImg = <img  src={goose} />;
ReactDOM.render(gooseImg,document.getElementById('app') );
