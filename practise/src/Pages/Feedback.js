import '../Styles/Feedback.css';
import React, { useState, useEffect,useCallback} from 'react';
// import { RiShoppingCartFill } from "react-icons/ri";
import { FaStar } from 'react-icons/fa';
import backgroundImage from "../Images/Photoback.png";



// const createArray = (length) => useMemo(() => [...Array(length)], [length]);
const createArray = (length) => [
  ...Array(length)
];

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? "gold" : "gray"} onClick={onSelect} 
  style={{
    fontSize: '2em',
    marginRight: '5px'
  }} />;
}

function StarRating({ totalStars = 5, onRatingChange }) {

  const [selectedStars, setSelectedStars] = useState(0);

const memoizedOnRatingChange = useCallback(onRatingChange, [selectedStars,onRatingChange]);

useEffect(() => {
  memoizedOnRatingChange(selectedStars);
}, []);

//   useEffect(() => {
//     onRatingChange(selectedStars);
//   }, []);
  // const StarArray=createArray({length:totalStars});
  return createArray(totalStars).map((_, i) => (
    <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)} />
  ));
}

function Feedback() {
  const initialState = {
    queone: '',
    quetwo: '',
    quethree: '',
    rating: 0
  };

  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState({
    queone: '',
    quetwo: '',
    quethree: ''
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formState.queone.trim()) {
      newErrors.queone = 'Please select an option either yes or No';
      valid = false;
    } else {
      newErrors.queone = '';
    }

    if (!formState.quetwo.trim()) {
      newErrors.quetwo = 'Please provide feedback';
      valid = false;
    } else {
      newErrors.quetwo = '';
    }

    if (formState.quethree.length < 6 && !formState.quetwo.trim()) {
      newErrors.quethree = 'Describe more than 6 characters ';
      valid = false;
    } else {
      newErrors.quethree = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('form submitted', formState);
      alert("Thank you for the valuable feedback, Visit again.");
      window.location.href="/";
      // setFormState(initialState);
    } else {
      alert("Form has some errors. Provide proper details.");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState({
      ...formState,
      [id]: value
    });
  };

  const handleRatingChange = (rating) => {
    setFormState({
      ...formState,
      rating
    });
  };
//   const memoizedHandleRatingChange = useCallback(handleRatingChange, []);
  return (
    <>
       {/* <div className='Feedbackpage'>
          <center><p ><RiShoppingCartFill color='Red' size={30}/>OneZ</p></center>
          </div> */}
      <div className='Feedback' style={{ backgroundImage: `url(${backgroundImage})`}}>
        <div className='Header-Container'>
        <center>
          {/* <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height: '200px' }}> */}
            <div className='form-class'>
            <form onSubmit={handleSubmit}>
              <h1>Feedback Form</h1><br/>
              <label htmlFor='queone'>Have you received the product on time?</label>
              <select className='select' id="queone" value={formState.queone} onChange={handleChange} size={1}>
                {/* <input type="text" id="queone" value={formState.queone} placeholder='Select an option' readOnly onClick={() => document.getElementById('queone').focus()}/> */}
                <option value="" disabled>Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <span className="error">{errors.queone}</span><br />
              <label htmlFor='quetwo'>Are you satisfied with the product?</label>
              <input type="text" id="quetwo" value={formState.quetwo} onChange={handleChange} />
              <span className="error">{errors.quetwo}</span><br />
              <label htmlFor='quethree'>Describe the experience for the product</label>
              <textarea id="quethree" value={formState.quethree} onChange={handleChange} />
              <span className="error">{errors.quethree}</span><br/>
              <label htmlFor='rating'>Provide rating for our service</label><br></br>
              <StarRating totalStars={5} onRatingChange={handleRatingChange} />
              <p><button type="submit" style={{ color: 'white' }}>Click me</button></p>
            </form>
            </div>
          {/* </div> */}
        </center>
        </div>
      </div>
    </>
  );
}

export default Feedback;