import React from 'react';
import { render } from '@testing-library/react';
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





    // getByLabelText(/firstName/);// getByLabelText throws an exception when it fails -- so you can just use it to check that the input is in the DOM rather than having to say `expect().toBeInDocument()`!
// })



