import React from 'react';

const Gmail = () => {

  // EMAIL CONFIG   // EMAIL CONFIG   // EMAIL CONFIG   // EMAIL CONFIG   // EMAIL CONFIG

  const email = 'roniebenitez01@gmail.com';
  const subject = 'Project Request';

  const sendEmail = () => {
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoUrl;
  };

  return sendEmail();
}

export default Gmail;
