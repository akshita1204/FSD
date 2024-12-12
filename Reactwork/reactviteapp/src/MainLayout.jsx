import React from 'react';
import {Link,Outlet} from 'react-router-dom' 
function MainLayout() {
  return (
    <div >
        <nav>
            <ul>
                <li>
                <Link to='login/'>Login</Link>
                </li>

                <li>
                <Link to='register/'>Register</Link>
                </li>

            </ul>
        </nav>

    <Outlet/> 
    {/* //React Router allows you to define nested routes, meaning you can have routes inside other routes */}




    </div>
  )
}

export default MainLayout;