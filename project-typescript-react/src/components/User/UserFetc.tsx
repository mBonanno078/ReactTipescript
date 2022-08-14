import React, { useEffect, useState } from "react";
import './UserFetch.scss';

// export interface infoUser {
//     login: string;
//     id: number;
//     node_id: string;
//     avatar_url: string;
//     gravatar_id: string;
//     url: string;
//     html_url: string;
//     followers_url: string;
//     following_url: string;
//     gists_url: string;
//     starred_url: string;
//     subscriptions_url: string;
//     organizations_url: string;
//     repos_url: string;
//     events_url: string;
//     received_events_url: string;
//     type: string;
//     site_admin: boolean;
// }

const url: string = 'https://api.github.com/users';

const User = () => {

    const [getUser, setGetUser] = useState([]);
    const [checkUser, setCheckUser] = useState(false);

    useEffect(() => {
         url &&
            (async () => {
              try {
                const resUser = await fetch(url);
                const userContent = await resUser.json();
                if (resUser.status === 200) {
                    setGetUser(userContent);
                    setCheckUser(true);
                    
                } else {
                  throw new Error(resUser.statusText);
                }
              } catch (error) {
                return Promise.reject(error);
              }
            })();

      }, []);
    
    return(
      <div className="content-user">
        <h1 className="title">
            Users the github
        </h1>
        {checkUser ? (
                <ul className="users">
                    {Object.values(getUser).map((el) => {     
                    const {avatar_url, login, id,  html_url, created_at} = el;
                    return (
                        <li className="user-card" key={id}>
                            <a href={html_url} className="user">
                                <div className="content-image">
                                    <img className="avatar" src={avatar_url} alt={login} />
                                </div>
                                <div className="content-info">
                                    <h4 className="name">
                                        {login}
                                    </h4>
                                    <p className="subscrive">
                                        {created_at}
                                    </p>
                                    <p className="drescription">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab doloremque possimus impedit accusamus numquam. Iure fugiat beatae, nam inventore possimus dolor veniam ad ipsam. Facere numquam similique nam autem quas!
                                    </p>
                                </div>
                            </a>
                        </li>
                    );
                    })}

                </ul>
            ) : 
            (
                <p className="error">
                    no users to show... 
                </p>
            )
        }
      </div>
    );
}

export default User;