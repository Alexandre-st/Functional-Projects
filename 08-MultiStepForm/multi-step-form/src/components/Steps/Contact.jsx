import { forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import { useAppState } from '../../contexts/state';
import { Button, Field, Form, Input } from '../Forms';

// forwadRef can enable receiving ref as a prop 
const Contact = forwardRef((props, ref) => {
  const [state, setState] = useAppState();
  const { handleSubmit, register } = useForm({
    defaultValues: state,
    mode: "onSubmit"
  });

  const saveData = (data) => {
    setState({ ...state, ...data });
  };

  return (
    <Form onSubmit={handleSubmit(saveData)} nextStep={'/education'}>
      <fieldset>
        <legend>Contact</legend>
        <Field label="First Name">
          <Input {...register("firstName")} id="first-name" />
        </Field>
        <Field label="Last Name">
          <Input {...register("lastName")} id="last-name"/>
        </Field>
        <Field label="Email">
          <Input
            {...register("email")} type="email" id="email" />
        </Field>
        <Field label="Password">
          <Input {...register("password")} type="password" id="password" autoComplete="off" />
        </Field>
        <Button ref={ref}>Next {">"}</Button>
      </fieldset>
    </Form>
  );
});
 
export default Contact;