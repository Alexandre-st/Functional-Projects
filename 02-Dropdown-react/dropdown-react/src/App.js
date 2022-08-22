import { useState } from 'react';
import { useFormik } from 'formik';


const App =() => {

  const [ display, setDisplay ] = useState( 'none' );

  const formik = useFormik({
    initialValues: {
      preferences: '',
      type: '',
      quantity: '',
    },
    validate : values => {
      const errors = {}; 
      if (!values.capsule) {
        errors.capsule = "Can't be empty";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log("submit", values);
      // openModal(); 
      formik.resetForm({ values : ''});
    }
  });

  const handleClick = () => {
    if (display === 'none') {
      setDisplay('block');
      console.log('TARGET');
      } else {
      setDisplay('none');
    }
  };

  // I think is only avalaible with javascript (Need to try again)
  // const label = document.getElementsByTagName('label');
  // for (let i = 0; i < label.length; i++) {
  //   label[i].onclick = function() {
  //       const check = this.nextSibling.style;
  //       if (check) {
  //           check.display = (check.display === "none" ? "block" : "none");
  //       }
  //   };  
  // }

  return (
    <main>

      <section className="form">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-input">
            <label htmlFor="preferences">How do you drink your coffee?</label>
              <select {...formik.getFieldProps("preferences")}>
                <option value="capsule">Capsule</option>
                <option value="Filter">Filter</option>
                <option value="expresso">Expresso</option>
            </select>
          </div>
          <div className="form-input">
            <label htmlFor="type" onClick={handleClick}>What type of coffee?</label>
            <div className="container" style={{display:display}}>
              <div className="answer">
                <input type="checkbox" id="origin" value="Origin" {...formik.getFieldProps("type")}/>
                <div className="answer-content">
                  <label>Single Origin</label>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="answer">
                <input type="checkbox" id="decaf" value="Decaf" {...formik.getFieldProps("type")}/>
                <div className="answer-content">
                  <label>Decaf</label>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="answer">
                <input type="checkbox" id="blended" value="Blended" {...formik.getFieldProps("type")}/>
                <div className="answer-content">
                <label>Blended</label>
                <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="form-input">
            <label htmlFor="type" onClick={handleClick}>What type of coffee?</label>
            <div className="container" style={{display:display}}>
              <div className="answer">
                <input type="checkbox" id="origin" value="Origin" {...formik.getFieldProps("type")}/>
                <div className="answer-content">
                  <label>Single Origin</label>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="answer">
                <input type="checkbox" id="decaf" value="Decaf" {...formik.getFieldProps("type")}/>
                <div className="answer-content">
                  <label>Decaf</label>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="answer">
                <input type="checkbox" id="blended" value="Blended" {...formik.getFieldProps("type")}/>
                <div className="answer-content">
                <label>Blended</label>
                <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>

    </main>
  );
}

export default App;
