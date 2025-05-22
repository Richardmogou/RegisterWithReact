
import '../styles/Rmain.css'
import svg from '../assets/svg.png'
import MdOutlineSupportAgent from '../assets/MdOutlineSupportAgent.png'
import Illustration from '../assets/Illustration.png'
import Vectors from '../assets/Vectors.png'
import Ellipse36 from '../assets/Ellipse36.png'
import Ellipse34 from '../assets/Ellipse34.png'
import Ellipse38 from '../assets/Ellipse38.png'
import Vector3 from '../assets/Vector3.png'
import Vector4 from '../assets/Vector4.png'

function Rmain(){
    return(
        <div className='main-r'>
        <div className='rectangleu'>
                <div className="rect back">
                    <div className="elipse">
    
                    </div>
                </div>
                <div className="rect top">
                    <div className="headers">
                        <a href=""><img src={MdOutlineSupportAgent} alt="MdOutlineSupportAgent"/>Support</a>
                        <a href=""><img src={svg} alt="svg"/> En</a>
                    </div>
                    <div className="mainer">
                        <div className="mainers">
                            <div className="container">
                                <div className="cart un">
                                    <div className="textos">
                                        <h1>Grow your tech impact</h1>
                                        <p>List your IT services, tools, or digital packages. Get discovered by businesses in need of reliable tech solutions.</p>
                                    </div>
                                    <div className="imagine">
                                        <img src={Illustration} alt="Illustration"/>
                                    </div>
                                </div>
                                <div className="cart deux">
                                    <div className="stat">
                                        <img src={Vectors} alt="stat"/>
                                    </div>
                                    <div className="test">
                                        <p>
                                            Active Projects: 
                                        </p>
                                        <p>12Available Offers: 87</p>
                                    </div>
                                </div>
                            </div>
                            <div className="context">
                                <h1>Why joining us ?</h1>
                                <p>My-DBD connects IT experts and companies to create valuable digital deals.Publish your solutions, grow your visibility, and collaborate with trust.</p>
                            </div>
    
                        </div>
    
                    </div>
                    <div className="footers">
                        <div className="sticker">
                            <div className="stickers uns"><img src={Vector3} alt="Vector3" /></div>
                            <div className="stickers deus"><img src={Ellipse36} alt="Ellipse36"/></div>
                            <div className="stickers trois">
                                <div className="elpsi">
                                    <img src={Ellipse38} alt="Ellipse38"/>
                                </div>
                            
                                <div className="elps">
                                    <img src={Ellipse34} alt="Ellipse34"/>
                                </div>
                            </div>
                            <div className="stickers quart"><img src={Ellipse36} alt="Ellipse36"/></div>
                            <div className="stickers cinq"><img src={Vector4} alt='vector4'/></div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
        
    )
}
export default Rmain