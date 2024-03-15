import "./App.css";
import LinkedIn from "/linked-in.png";
import GitHub from "/git-hub.png";
import Leetcode from "/leetcode.png";
import Instagram from "/instagram.png";
import Website from "/website.png";
export default function App() {
     return (
          <div className="link-tree">
               <h5 className="head-text">My Links</h5>
               <h1 className="user-name">Sreesanjay S</h1>
               <div className="link-card-group">
                    <a
                         href="https://www.linkedin.com/in/sreesanjay-s/"
                         target="_blank"
                    >
                         <div className="link-card">
                              <img src={LinkedIn} alt="" />
                              <p className="card-text">Linked In</p>
                         </div>
                    </a>
                    <a href="https://github.com/Sreesanjay" target="_blank">
                         <div className="link-card">
                              <img src={GitHub} alt="" />
                              <p className="card-text">Git Hub</p>
                         </div>
                    </a>
                    <a
                         href="https://leetcode.com/sreesanjay_s/"
                         target="_blank"
                    >
                         <div className="link-card">
                              <div className="link-wrapper">
                                   <img
                                        src={Leetcode}
                                        alt=""
                                        className="leetcode-icon"
                                   />
                              </div>
                              <p className="card-text">Leetcode</p>
                         </div>
                    </a>
                    <a
                         href="https://www.instagram.com/sreesanjay_/"
                         target="_blank"
                    >
                         <div className="link-card">
                              <div className="link-wrapper">
                                   <img src={Instagram} alt="" />
                              </div>
                              <p className="card-text">Instagram</p>
                         </div>
                    </a> 
                    <a href="https://sreesanjay.github.io/" target="_blank">
                         <div className="link-card">
                              <div className="link-wrapper">
                                   <img src={Website} alt="" />
                              </div>
                              <p className="card-text">Website</p>
                         </div>
                    </a>
               </div>
          </div>
     );
}
