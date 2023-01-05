import { useForm } from 'react-hook-form';
import { useAppState } from "../../contexts/state";
import { Button, Form, Section, SectionRow } from '../Forms';

export const Confirm = () => {
  const [state] = useAppState();
  const { handleSubmit } = useForm({ defaultValues: state });

  const submitData = (data) => {
    console.info(data);
    // Submit data to ther server
  }

  return (
    <Form onSubmit={handleSubmit(submitData)}>
      <h1>Confirm</h1>
      <Section title='Personal info' url='/'>
        <SectionRow>
          <div>First name</div>
          <div>{state.firstName}</div>
        </SectionRow>
        <SectionRow>
          <div>Last Name</div>
          <div>{state.lastName}</div>
        </SectionRow>
        <SectionRow>
          <div>Email</div>
          <div>{state.email}</div>
        </SectionRow>
      </Section>
      <Section title='Education' url='/education'>
        <SectionRow>
          <div>University</div>
          <div>{state.university}</div>
        </SectionRow>
        <SectionRow>
          <div>Degree</div>
          <div>{state.degree}</div>
        </SectionRow>
      </Section>
      <Section title='About' url='about'>
        <div>About me</div>
        <div>{state.about}</div>
      </Section>
      <div>
        <Button>Submit</Button>
      </div>
    </Form>
  );
};