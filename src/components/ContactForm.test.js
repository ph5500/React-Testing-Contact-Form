import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';



test('testing to see if form displays', () => {
    //ARRANGE
    const { getByTestId } = render(<ContactForm />)
    //ACT
    //ASSERT
    const theForm = getByTestId(/contactform/i)
    expect(theForm).toBeVisible();
})








test('inputs are visible', () => {
    //ARRANGE - set up the testing environment
    const { getByLabelText } = render(<ContactForm />);

    // ACT
    // None. Tapped out

    // ASSERT


    const firstNameInput = getByLabelText(/First name/i)
    const lastNameInput = getByLabelText(/Last name/i)
    const emailInput = getByLabelText(/Email/i)
    const messageInput = getByLabelText(/Message/i)
    expect(firstNameInput).toBeVisible();
    expect(lastNameInput).toBeVisible();
    expect(emailInput).toBeVisible();
    expect(messageInput).toBeVisible();

})


test('Allows text input', () => {
    //ARRANGE
    const { getByLabelText } = render(<ContactForm />)
    const firstNameInput = getByLabelText(/First Name/i)
    const lastNameInput = getByLabelText(/last name/i)
    const emailInput = getByLabelText(/email/i)
    const messageInput = getByLabelText(/message/i)
    //ACT
    fireEvent.change(firstNameInput, { target: { value: "Phil" } });
    fireEvent.change(lastNameInput, { target: { value: "Fives" } });
    fireEvent.change(emailInput, { target: { value: "philfives@gmail.com" } });
    fireEvent.change(messageInput, { target: { value: "Whatsup big doggs" } })
})




    // getByLabelText(/firstName/);// getByLabelText throws an exception when it fails -- so you can just use it to check that the input is in the DOM rather than having to say `expect().toBeInDocument()`!
// })



