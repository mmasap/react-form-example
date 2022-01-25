import { useRef } from 'react';

const RefInput = (props) => {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    const sendData = {
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
    };
    console.log(sendData);

    nameInputRef.current.value = '';
    emailInputRef.current.value = '';
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
      </div>
      <div className='form-control'>
        <label htmlFor='email'>Your E-Mail</label>
        <input type='email' id='email' ref={emailInputRef} />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default RefInput;
