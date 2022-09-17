import React from 'react'
import emailjs from '@emailjs/browser';

var public_key = process.env.EMAIL_JS_API_PUBLIC_KEY;
const priv_key = process.env.EMAIL_JS_API_PRIV_KEY;


var contactdetail = {
    to_email: 'tadi.nandan@gmail.com',
    to_name: 'Nandan Tadi',
    message: 'Code For Good on 9/17 @ 10 AM'
  };


const sendIt = function() {
    emailjs.send('service_kdfqz4m', 'template_7jesark', contactdetail, 'D1eYFDiYusByCe98H')
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);

    })
}

export default sendIt;

