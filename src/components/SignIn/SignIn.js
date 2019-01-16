import React from 'react';

const SignIn = ({ OnRouteChange }) => {
    return (
        <article class="br3 ba shadow-5 dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
            <main class="pa4 black-80">
                <form class="measure">
                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                        <legend class="f2 fw6 ph0 mh0">Sign In</legend>
                        <div class="mt3">
                            <label class="db fw6 lh-copy f5" for="email-address">Email</label>
                            <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                        </div>
                        <div class="mv3">
                            <label class="db fw6 lh-copy f5" for="password">Password</label>
                            <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                        </div>
                    </fieldset>
                    <div class="">
                        <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" 
                               type="submit" 
                               value="Sign in" 
                               onClick={()=>OnRouteChange('home')}
                        />
                    </div>
                    <div class="lh-copy mt3">
                        <a href="#0" class="f5 link dim black db">Register</a>
                    </div>
                </form>
            </main>
        </article>    
    );
}

export default SignIn;