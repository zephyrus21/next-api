import { useRef } from 'react';

const Home = () => {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        text: enteredFeedback,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const loadDatahandler = () => {
    fetch('/api/feedback')
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      Hello
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='email'>Email Address</label>
          <input type='email' id='email' ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor='feedback'>Feedback</label>
          <textarea
            rows='5'
            type='feedback'
            id='feedback'
            ref={feedbackInputRef}
          />
        </div>
        <button>Submit</button>
      </form>
      <button onClick={loadDatahandler}>Load Feedback Data</button>
    </div>
  );
};

export default Home;
