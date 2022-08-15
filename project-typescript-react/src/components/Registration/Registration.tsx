import React, { useState } from 'react';
import './Registration.scss';

const Registration = () => {
    const [fullName, setFullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [success, setSuccess] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [messageError, setMessageError] = useState<string>('');

    const onSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        
        if(fullName && email && password) {
            setSuccess(!success);
            messageError && setMessageError('');          
        } else {
           setSuccess(!success);
           setMessageError('Fill out all fields!');           
        }
    }
    
    const closeModal = () => {
        setSuccess(!success);
        
       if(!messageError) {
           setEmail('');
           setFullName('');
           setPassword('');
       }
    }

    return(
      <div className="container-registrattion">
        <h1 className="title-registration first-letter">
            invia registrazione
        </h1>
        <div className="content-form">
            <form className='registration-form'>
                <label htmlFor="name" className='label'>
                    full name
                </label>
                <input type="text" 
                       className='input full-name' 
                       id='name' 
                       name='name'
                       value={fullName}
                       onChange={(e) => setFullName(e.target.value)}
                />
                 <label htmlFor="email" className='label'>
                    email
                </label>
                <input type="email" 
                       className='input email' 
                       id='email' 
                       name='email'
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                />
                 <label htmlFor="name" className='label'>
                    password
                </label>
                <input type="password" 
                       className='input password' 
                       id='password' 
                       name='password'
                       required
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                />
                <div className="content-button">
                    <button type="submit" className='btn submit' onClick={onSubmit}>
                        sign up
                    </button>
                </div>
            </form>
        </div>
        {success &&
              <div className={`success-modal ${success ? 'show' : ''}`}>
             {!messageError &&
                <h2 className="text-succes first-letter">
                    <b className='name'>
                        {fullName}, &nbsp;
                    </b>
                    la tua richiesta è stata inviata
                </h2>
             }
             {messageError &&
                <h2 className="text-succes first-letter">
                    {messageError}
                </h2>
             
             }
              <div className="content-button-close">
                  <button 
                      type="submit" 
                      className='btn close' 
                      onClick={closeModal}>
                      close
                  </button>
              </div>
          </div>
        }
      </div>
    );
}

export default Registration;