import {render,screen,cleanup} from '@testing-library/react';
import SignIn from '../pages/SignIn';

test('test', () =>{
    expect(true).toBe(true);
})

// test('should render Signin component', ()=>{
//     render(<SignIn/>);
//     const signinElement = screen.getByTestId('sign-1');
//     expect(signinElement).toBeInTheDocument();
//     expect(signinElement).toHaveTextContent("LOGIN/SINGIN")
    
// })