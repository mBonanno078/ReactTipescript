import React, { useState } from 'react';
import './Registration.scss';

interface User {
    fullName: string,
    email: string,
    password: string
}

const Registration = () => {
    const [user, setUser] = useState<User>({
        fullName: '',
        email: '',
        password: ''
    });

    const [success, setSuccess] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<string>('');

    const onSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        
        if(user.fullName && user.email && user.password) {
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
        setUser({
            fullName: '',
            email: '',
            password: ''
        });
       }
    }

    const onChangeUser = ( e: React.FormEvent<HTMLInputElement> ) => {
        const {name, value} = e.currentTarget;
        setUser({...user, [name]: value });
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
                       name='fullName'
                       value={user.fullName}
                       onChange={onChangeUser}
                />
                 <label htmlFor="email" className='label'>
                    email
                </label>
                <input type="email" 
                       className='input email' 
                       id='email' 
                       name='email'
                       value={user.email}
                       onChange={onChangeUser}
                />
                 <label htmlFor="name" className='label'>
                    password
                </label>
                <input type="password" 
                       className='input password' 
                       id='password' 
                       name='password'
                       required
                       value={user.password}
                       onChange={onChangeUser}
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
                        {user.fullName}, &nbsp;
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