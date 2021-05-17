import React from 'react';

const Feedback = ({ feedbacks }) => {
  return (
    <ul>
      {feedbacks.map((feedback) => (
        <li key={feedback.id}>{feedback.text}</li>
      ))}
    </ul>
  );
};

export const getStaticProps = async () => {};

export default Feedback;
