import React from 'react';
import { buildFeedbackPath, extractFeedback } from './api/feedback';

const Feedback = ({ feedbacks }) => {
  return (
    <ul>
      {feedbacks.map((feedback) => (
        <li key={feedback.id}>{feedback.text}</li>
      ))}
    </ul>
  );
};

export const getStaticProps = async () => {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbacks: data,
    },
  };
};

export default Feedback;
