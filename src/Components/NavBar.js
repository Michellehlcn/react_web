import React from 'react';
import avatar from '../img/image0.jpeg';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWordpress} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';

function NavBar () {
	return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt=""/>
                 </div>

	                <ul className="nav-items">
	                    <li className="nav-item">
	                        <NavLink to="/" exact activeClassName="active">
	                            HOME
	                        </NavLink>
	                    </li>
	                    <li className="nav-item">
	                        <NavLink to="/about" exact activeClassName="active">
	                            ABOUT
	                        </NavLink>
	                    </li>
	                    <li className="nav-item">
	                        <NavLink to="/portfolios" exact activeClassName="active">
	                            PORTFOLIO
	                        </NavLink>
	                    </li>
	                    <li className="nav-item">
	                        <NavLink to={{ pathname:"https://michellehlcn.wordpress.com"}} target="_blank" exact activeClassName="active">
	                            PERSONAL BLOG
	                        </NavLink>
	                    </li>
	                    <li className="nav-item">
	                        <NavLink to="/contact" exact activeClassName="active">
	                            CONTACT ME
	                        </NavLink>
	                    </li>
	                </ul>
	           	

				<div className="icons">

					<Link to={{ pathname:"https://michellehlcn.wordpress.com"}} target="_blank" className="icon-holder">
						<FontAwesomeIcon icon={faWordpress} className="icon fb" />
					</Link>
						<Link to={{ pathname:"https://github.com/Michellehlcn"}} target="_blank" className="icon-holder">
						<FontAwesomeIcon icon={faGithub} className="icon gh" />
					</Link>
						<Link to={{ pathname:"https://www.linkedin.com/in/huu-linh-chi-nguyen/"}} target="_blank" className="icon-holder">
						<FontAwesomeIcon icon={faLinkedin} className="icon yt" />
					</Link>
					
					<Link to={{ pathname:"https://twitter.com/Chisoulofmusic"}} target="_blank" className="icon-holder">
						<FontAwesomeIcon icon={faTwitter} className="icon tt" />
					</Link>
				</div>

					<footer className="footer">
						<p>
							@2022 Michellehlcn

						</p>
					</footer>

			</nav>
		</div>

		)
}

export default NavBar;