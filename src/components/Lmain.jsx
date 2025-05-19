import React from 'react';
import '../styles/Lmain.css';
import logo from '../assets/logo.png'
import Rectangle from '../assets/Rectangle.png'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
// import AiFillEye from '../assets/AiFillEye.png'
// import AiFillEyeInvisible from '../assets/AiFillEyeInvisible.png'

function Lmain() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [agreedToTerms, setAgreedToTerms] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gérer la soumission du formulaire ici
  };

  return (
    <div className="main-l">
      <div className="side-l">
        <div className="tout">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>

          <div className="header">
            <h1>Create account</h1>
          </div>

          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="forms name">
                <label htmlFor="name">Name</label>
                <br />
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Enter your name" 
                  required 
                />
              </div>

              <div className="forms nums">
                <label htmlFor="phone">Phone Number</label>
                <br />
                <div className="number">
                  <div className="num">
                    <div className="left">
                      {/* Option pour le sélecteur de pays */}
                      {/* <select id="countryCode" name="countryCode">
                        <option value="+237" data-flag="CMR" selected>CMR</option>
                        <option value="+44" data-flag="🇬🇧">🇬🇧</option>
                        <option value="+33" data-flag="🇫🇷">🇫🇷</option>
                        <option value="+49" data-flag="🇩🇪">🇩🇪</option>
                        <option value="+81" data-flag="🇯🇵">🇯🇵</option>
                      </select> */}
                    </div>
                    <hr />
                    <div className="right">
                      <input 
                        type="tel" 
                        id="phone" 
                        placeholder="+237 34 56 78 90" 
                        required 
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="forms email">
                <label htmlFor="email">E-mail</label>
                <br />
                <input 
                  type="email" 
                  id="email" 
                  placeholder="example@gmail.com" 
                  required 
                />
              </div>

              <div className="forms passwords">
                <label htmlFor="password">Password</label>
                <br />
                <div className="password">
                  <div className="left">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      id="password" 
                      placeholder="@#*%" 
                      required 
                    />
                  </div>
                  <div className="right">
                    <hr />
                    <div className="eye" onClick={togglePasswordVisibility}>
                      <div className="image">
                        {/* <img 
                          src={showPassword ? AiFillEyeInvisible : AiFillEye} 
                          alt={showPassword ? "Hide password" : "Show password"} 
                        /> */}
                        {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="forms passwords">
                <label htmlFor="confirmPassword">Confirm password</label>
                <br />
                <div className="password">
                  <div className="left">
                    <input 
                      type={showConfirmPassword ? "text" : "password"} 
                      id="confirmPassword" 
                      placeholder="@#*%" 
                      required 
                    />
                  </div>
                  <div className="right">
                    <hr />
                    <div className="eye" onClick={toggleConfirmPasswordVisibility}>
                      <div className="image">
                        {/* <img 
                          src={showConfirmPassword ? AiFillEyeInvisible : AiFillEye} 
                          alt={showConfirmPassword ? "Hide password" : "Show password"} 
                        /> */}
                        {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="forms button">
                <button type="submit">Sign up</button>
                <br />
                <div className="agree">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    checked={agreedToTerms}
                    onChange={() => setAgreedToTerms(!agreedToTerms)}
                  />
                  <label htmlFor="terms">I agree with term and conditions</label>
                </div>
              </div>
            </form>

            <div className="section">
              <div className="line-or">
                <span className="line"></span>
                <div><p>OR</p></div>
                <span className="line"></span>
              </div>
              <div className="text">
                <p>Already have an account ?</p>
                <a href="#" style={{paddingLeft: "4px"}}>Sign In</a>
              </div>
              <div className="btn">
                <div className="rectangle">
                  <img src={Rectangle} alt="Google icon" />
                </div>
                <div className="rectangle"></div>
                <div className="search">Continue with Google</div>
                <div className="rectangle"></div>
                <div className="rectangle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lmain;