import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Sidebar = () => {
	return (
		<div id="sidebar-wrapper">
			<ul class="sidebar-nav">
				<li class="sidebar-brand">
					<a href="#">
						<b>AI Interview Assistant</b>
					</a>
				</li>


				<div>
					<p className='new-chat'>
						New Chat
					</p>
				</div>


				<div>
					<p className='custom-text'>his will be a chat thread of user.his will be a chat thread of user.his will be a chat thread of user.his will be a chat thread of user.his will be a chat thread of user.This will be a chat thread of user. This will be a chat thread of user.This will be a chat thread of user.
					</p>
					<p className='custom-text'>his will be a chat thread of user.his will be a chat thread of user.his will be a chat thread of user.his will be a chat thread of user.his will be a chat thread of user.This will be a chat thread of user. This will be a chat thread of user.This will be a chat thread of user.
					</p>
					<p className='custom-text'>his will be a chat thread of user.his will be a chat thread of user.his will be a chat thread of user.his will be a chat thread of user.his will be a chat thread of user.This will be a chat thread of user. This will be a chat thread of user.This will be a chat thread of user.
					</p>
					<p className='custom-text'>his will be a chat thread of user.his will be a chat thread of user.his will be a chat thread of user.his will be a chat thread of user.his will be a chat thread of user.This will be a chat thread of user. This will be a chat thread of user.This will be a chat thread of user.
					</p>
					<p className='custom-text'>his will be a chat thread of user.his will be a chat thread of user.his will be a chat thread of user.his will be a chat thread of user.his will be a chat thread of user.This will be a chat thread of user. This will be a chat thread of user.This will be a chat thread of user.
					</p>
					<p className='custom-text'>his will be a chat thread of user.his will be a chat thread of user.his will be a chat thread of user.his will be a chat thread of user.his will be a chat thread of user.This will be a chat thread of user. This will be a chat thread of user.This will be a chat thread of user.
					</p>
					<p className='custom-text'>his will be a chat thread of user.his will be a chat thread of user.his will be a chat thread of user.his will be a chat thread of user.his will be a chat thread of user.This will be a chat thread of user. This will be a chat thread of user.This will be a chat thread of user.
					</p>
					<p className='custom-text'>his will be a chat thread of user.his will be a chat thread of user.his will be a chat thread of user.his will be a chat thread of user.his will be a chat thread of user.This will be a chat thread of user. This will be a chat thread of user.This will be a chat thread of user.
					</p>

				</div>

				<div className='fixed-bottom'>
					{/* <li> */}
					<span style={{ color: '#fff' }}><b>Settings</b></span>
					{/* </li> */}
				</div>
			</ul>
		</div>
	);
}

export default Sidebar;