// import * as React from 'react';
import Sidebar from './includes/sidebar.js';
// import { SendIcon } from './molecules/sendIcon.jsx';
import SendIcon from '../assets/arrow.png'
import recordIcon from '../assets/record.png';
import elipse from '../assets/Elipse.png';
import { useEffect } from 'react';
// import { ipcRenderer } from 'electron';
// import { ipcRenderer } from '../electron/electron-shim.js';
// import { ipcRenderer } from 'electron';
let ipcRenderer;
// import { ipcRenderer } from 'electron';


// import Sendicon from 'public/arrow.png';


const Home = () => {
	useEffect(() => {

		if (window.require) {
			const electron = window.require("electron");
			ipcRenderer = electron.ipcRenderer;
		}
		else {
			ipcRenderer = {
				send: () => console.log("send is not available in web browser"),
				on: () => console.log("on is not available in web browser"),
				removeAllListeners: () => console.log("removeAllListeners is not available in web browser")
				// Add any other methods you need for testing or development in a web browser
			};
		}


	}, [])

	const recordAudio = (e) => {
		// window.Electron
		console.log("ee")
		ipcRenderer.send('record');
	}
	return (
		<>
			<div className="app-container">
				<div className="sidebar">
					<Sidebar />
				</div>
				{/* Main Content */}
				<div className="chat-main">
					<div className="main-content">
						<div className='main-heading'>
							<div className='chat-sec'>
								{/* <div className='chat-heading'>
									<h1 className="mt-3">Welcome to Ai Interview Assistant</h1>
									<span className='p-3'>
										<h5>Maximizing Interview Success Through AI-Powered Guidance</h5>
									</span>
									<div class="info-container">
										<div class="info">
											<img src={elipse} style={{ width: '5%' }} />
											<p> <b>Accurate Answers</b></p>
											<p>Trustworthy, precise responses tailored to you.</p>
										</div>
										<div class="info">
											<img src={elipse} style={{ width: '5%' }} />
											<p><b>Audio Analysis</b></p>
											<p>Deep insights from cutting-edge audio technology.</p>
										</div>
										<div class="info">
											<img src={elipse} style={{ width: '5%' }} />
											<p><b>Fast response</b></p>
											<p>Rapid assistance for seamless productivity.</p>
										</div>
									</div>
								</div> */}
								<div className='chat-box'>
									{/* Questions */}
									<div className='quesAns'>
										<img className="rounded p-1" src={recordIcon} style={{ backgroundColor: 'white', margin: '6px' }} />
										<div class="d-flex flex-column flex-grow-1 p-1">
											<div class="flex-grow-1">
												In  and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.
											</div>
										</div>
									</div>
									{/* Response */}
									<div className='quesAns'>
										<img className="rounded p-1" src={recordIcon} style={{ backgroundColor: 'white', margin: '6px' }} />
										<div class="d-flex flex-column flex-grow-1 p-1">
											<div class="flex-grow-1">
												In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='d-flex w-100 chat-input'>
								<div className='audio-recorder' onClick={(e) => recordAudio(e)}>
									<img src={recordIcon} />
								</div>
								<form>
									<div className="input-group d-flex">
										<textarea type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type your question" row="7"></textarea>
										<button type="submit" className="btn btn-primary">
											<img src={SendIcon} style={{ width: '30px' }} />
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home;