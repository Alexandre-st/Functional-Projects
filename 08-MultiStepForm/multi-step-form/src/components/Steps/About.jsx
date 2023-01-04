import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../../contexts/state";
import { Button, Field, Form } from "../Forms";
const About = () => {
  
  const [state, setState] = useAppState();
  const { handleSubmit, register } = useForm({ defaultValues: state });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate('/confirm');
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>About</legend>
        <Field label='About Me'>
          <textarea {...register('about')} id='about' className='form-control' />
        </Field>
        <div className="button-row">
          <Button variant='secondary' onClick={() => navigate('/education')}>
            {'<'} Previous
          </Button>
          <Button>Next {'>'}</Button>
        </div>
      </fieldset>
    </Form>
  );
};
 
export default About;