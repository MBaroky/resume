import { useState, useEffect } from 'react';
import data from './data.json'

function App() {
  // Using state to store the data from the JSON file
  const [jsonData, setJsonData] = useState([]);

  // Using useEffect to load the data once the component mounts
  useEffect(() => {
    setJsonData(data);
  }, []);


  return (
    <div id="wrapper">
        <nav className="navbar navbar-dark fixed-top bg-dark align-items-start toggled sidebar sidebar-dark accordion p-0" id="main-navbar">
            <div className="container-fluid d-flex flex-md-column flex-row p-0">
                <ul className="navbar-nav text-break text-light" id="accordionSidebar">
                    <li className="nav-item"><a className="nav-link px-1" href="#about"><i className="icon-user"></i><span className="text-center">About Me</span></a></li>
                    <li className="nav-item"><a className="nav-link px-1" href="#experience"><i className="icon-folder-alt"></i><span>Experience</span></a></li>
                    <li className="nav-item"><a className="nav-link px-1" href="#education"><i className="icon-graduation"></i><span>Education</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="#skills"><i className="icon-wrench"></i><span>SKILLS</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="#samples"><i className="icon-picture"></i><span>Samples</span></a></li>
                </ul>
            </div>
        </nav>
        <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <div className="container-fluid p-0">
                    <div className="row g-0 mb-3">
                        <div className="col-md-4" id="card-warpper">
                            <div id="card-top"><a className="btn btn-dark d-md-none" role="button" id="sidebarToggleTop"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" className="bi bi-list">
                                        <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                                    </svg></a>
                                <div className="card mb-3 bg-transparent">
                                    <div className="card-body text-center">
                                        <div className="border rounded-circle d-none d-sm-none d-md-inline-block mb-3 mt-4 p-2" id="profile-picture"><img alt="alt-text"  className="rounded-circle border border-light img-fluid" src="./assets/img/profile-picture.png?h=26aaac295dc033141df16855209481dd" /></div>
                                        <h2 className="text-center text-light card-title fw-bold">Mohamed El-Baroky</h2>
                                        <h4 className="text-center card-title">Front-end Developer</h4>
                                    </div>
                                </div>
                            </div>
                            <div id="card-bottom">
                                <div className="mb-3">
                                    <ul className="list-inline text-center mt-2" id="social-icons">
                                        <li className="list-inline-item"><a className="text-center" href="https://www.linkedin.com/in/mbaroky/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square"></i></a></li>
                                        <li className="list-inline-item"><a className="text-center" href="https://github.com/MBaroky" target="_blank" rel="noreferrer"><i className="fa fa-github-alt"></i></a></li>
                                        <li className="list-inline-item"><a className="text-center" href="https://wa.me/201069795428" target="_blank" rel="noreferrer"><i className="fa fa-whatsapp"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 offset-md-4 text-light" id="data-wrapper">
                            <section id="about" className="p-lg-4">
                                <div className="card bg-transparent p-4 border-0">
                                    <div className="card-header bg-dark py-3 px-0">
                                        <h6 className="fw-bold m-0"><strong>ABOUT</strong></h6>
                                    </div>
                                    <div className="card-body px-0">
                                        <ul>
                                            <li>Passionate and innovative, self educated Web Designer / Front End Developer, with sufficient knowledge in both fields of Designing and Coding.<br /></li>
                                            <li>9 years of Experience in the web career, 6 of them as a UI developer using HTML, CSS and Javascript.<br /></li>
                                            <li>Studied ReactJS (FWD Advanced track Graduate) and Computer Science introduction (Cambridge University CS50) also worked as Freelancer with Wordpress.<br /></li>
                                            <li>Ambitious, self critic and a good team player, always ready to take the lead and responsibility for the co-work and willing to elevate my proficiency, by learning new things and sharing knowledge with fellow colleagues.<br /></li>
                                        </ul>
                                    </div>
                                    <div className="card-header bg-dark py-3 px-0"></div>
                                    <div className="card-body px-0">
                                        <div className="row row-cols-4 dl-horizontal">
                                            <div className="col-2 text-end">
<svg viewBox="0 0 512 512" width="800px" height="800px"  xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M255 471L91.7 387V41h328.6v346zm-147.3-93.74L255 453l149.3-75.76V57H107.7v320.26zm146.43-65.76l98.27-49.89v-49.9l-98.14 49.82-94.66-48.69v50zm.13 32.66l-94.66-48.69v50l94.54 48.62 98.27-49.89v-49.9z"/></svg></div>
                                            <div className="col-4">
                                                <p>Exempted</p>
                                            </div>
                                            <div className="col-2 text-end">
<svg fill="#000000" width="800px" height="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
	 viewBox="0 0 480 480" xmlSpace="preserve">
<g>
	<g>
		<path d="M344,184c-57.344,0-104,46.656-104,104s46.656,104,104,104s104-46.656,104-104S401.344,184,344,184z M344,376
			c-20.416,0-39.184-7.048-54.128-18.76C309.528,329.96,320,297.896,320,264c0-11.344-1.192-22.672-3.552-33.672
			c-0.928-4.328-5.152-7.08-9.504-6.152c-4.32,0.928-7.072,5.176-6.144,9.504c2.12,9.896,3.2,20.096,3.2,30.32
			c0,29.784-8.984,57.992-25.864,82.168c-5.376-6.08-9.904-12.896-13.448-20.288c0.608-0.56,1.168-1.184,1.6-1.944
			C276.56,305.736,282,285.008,282,264c0-4.416-3.576-8-8-8s-8,3.584-8,8c0,14.136-2.896,28.088-8.32,41.008
			C256.6,299.504,256,293.824,256,288c0-48.52,39.48-88,88-88c48.52,0,88,39.48,88,88S392.52,376,344,376z"/>
	</g>
</g>
<g>
	<g>
		<path d="M372.024,154.936l5.864-2.936H384c4.424,0,8-3.584,8-8s-3.576-8-8-8h-8c-0.928,0-1.8,0.32-2.672,0.632l24.92-31.152
			c0.136-0.168,0.184-0.368,0.304-0.536c0.2-0.288,0.352-0.584,0.512-0.904c0.28-0.568,0.488-1.136,0.632-1.744
			c0.08-0.32,0.16-0.624,0.192-0.96c0.088-0.808,0.048-1.616-0.112-2.424c-0.024-0.128,0.016-0.248-0.016-0.376
			c-0.008-0.024-0.024-0.04-0.032-0.072c-0.216-0.848-0.568-1.672-1.072-2.424l-24-36.24c-1.488-2.224-3.984-3.8-6.656-3.8h-48
			c-2.672,0-5.168,1.576-6.656,3.8l-24,36.12c-1.112,1.664-1.448,3.688-1.184,5.576c-0.664,3.968,1.752,7.72,5.544,8.888
			l20.968,26.224C313.8,136.304,312.928,136,312,136h-8c-4.424,0-8,3.584-8,8s3.576,8,8,8h6.112l5.872,2.936
			C254.392,167.888,208,222.616,208,288c0,22.064,5.4,42.856,14.768,61.304C204.656,362.632,182.608,370,160,370
			c-58.448,0-106-47.552-106-106s47.552-106,106-106c24.344,0,48.112,8.456,66.928,23.8c3.424,2.792,8.456,2.28,11.256-1.144
			c2.792-3.424,2.272-8.464-1.152-11.256c-21.664-17.664-49.024-27.4-77.04-27.4c-67.272,0-122,54.728-122,122S92.728,386,160,386
			c25.416,0,50.24-8.08,70.808-22.752c4.08,6.12,8.728,11.824,13.72,17.192C220.064,398.2,190.384,408,160,408
			c-79.4,0-144-64.6-144-144s64.6-144,144-144c36.16,0,70.728,13.456,97.344,37.88c3.24,2.984,8.304,2.768,11.296-0.488
			c2.992-3.256,2.776-8.32-0.488-11.304C238.584,118.952,200.168,104,160,104C71.776,104,0,175.776,0,264s71.776,160,160,160
			c34.704,0,68.584-11.52,96.192-32.32C279.912,411.8,310.536,424,344,424c74.992,0,136-61.008,136-136
			C480,222.616,433.608,167.888,372.024,154.936z M307.872,96.792L324.28,72h39.44l15.328,23.232l-35.24,8.928L307.872,96.792z
			 M370.952,113.992l-25.704,32.128c-0.784,0.992-1.72,0.992-2.496,0l-24.504-30.624l24.184,4.84c0.512,0.104,1.048,0.16,1.568,0.16
			c0.648,0,1.304-0.08,1.936-0.24L370.952,113.992z M344,408c-66.168,0-120-53.832-120-120s53.832-120,120-120s120,53.832,120,120
			S410.168,408,344,408z"/>
	</g>
</g>
</svg></div>
                                            <div className="col-4">
                                                <p>Married</p>
                                            </div>
                                            <div className="col-2 text-end">
<svg  fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>birthday-cake</title>
<path d="M28 14.25h-3.25v-3.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 3.25h-6.5v-3.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 3.25h-6.5v-3.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 3.25h-3.25c-1.518 0.002-2.748 1.232-2.75 2.75v11c0.002 1.518 1.232 2.748 2.75 2.75h24c1.518-0.002 2.748-1.232 2.75-2.75v-11c-0.002-1.518-1.232-2.748-2.75-2.75h-0zM4 15.75h3.25v2.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-2.25h6.5v2.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-2.25h6.5v2.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-2.25h3.25c0.69 0.001 1.249 0.56 1.25 1.25v7.186l-2.719-2.719c-0.142-0.134-0.334-0.217-0.546-0.217-0.021 0-0.042 0.001-0.062 0.002l0.003-0c-0.231 0.023-0.429 0.148-0.549 0.329l-0.002 0.003c-1.664 2.514-3.309 3.809-4.824 3.66-2.324-0.188-3.852-3.52-3.866-3.553-0.121-0.262-0.382-0.441-0.685-0.441s-0.562 0.178-0.682 0.435l-0.002 0.005c-0.016 0.033-1.526 3.322-3.843 3.518-1.497 0.090-3.172-1.129-4.852-3.627-0.123-0.182-0.32-0.305-0.547-0.328l-0.003-0c-0.021-0.002-0.045-0.003-0.070-0.003-0.208 0-0.396 0.083-0.533 0.218l-2.72 2.72v-7.187c0.001-0.69 0.56-1.249 1.25-1.25h0zM28 29.25h-24c-0.69-0.001-1.249-0.56-1.25-1.25v-1.691l3.15-3.151c1.867 2.516 3.791 3.699 5.704 3.543 1.903-0.366 3.477-1.538 4.377-3.14l0.017-0.032c0.918 1.654 2.505 2.842 4.386 3.204l0.040 0.006c0.111 0.008 0.223 0.014 0.334 0.014 2.307-0.29 4.245-1.649 5.327-3.556l0.018-0.035 3.147 3.148v1.69c-0.001 0.69-0.56 1.249-1.25 1.25h-0zM7.991 8.75c1.693-0.040 3.073-1.333 3.249-2.985l0.001-0.015c0-1.132-1.883-3.35-2.692-4.251-0.138-0.153-0.336-0.249-0.558-0.249h-0.001c-0.222 0-0.421 0.097-0.558 0.25l-0.001 0.001c-0.804 0.9-2.673 3.118-2.673 4.249 0.172 1.663 1.544 2.956 3.228 3l0.004 0zM7.993 3.148c0.699 0.744 1.284 1.605 1.723 2.549l0.025 0.060c-0.173 0.833-0.883 1.456-1.746 1.493l-0.004 0c-0.86-0.040-1.565-0.661-1.73-1.478l-0.002-0.012c0.457-1.005 1.039-1.867 1.739-2.617l-0.005 0.006zM15.991 8.75c1.693-0.040 3.072-1.333 3.248-2.985l0.001-0.015c0-1.132-1.882-3.35-2.691-4.251-0.138-0.153-0.336-0.249-0.558-0.249h-0.001c-0.222 0-0.421 0.097-0.558 0.25l-0.001 0.001c-0.804 0.9-2.673 3.118-2.673 4.249 0.172 1.663 1.544 2.956 3.228 3l0.004 0zM15.993 3.148c0.699 0.744 1.284 1.605 1.722 2.549l0.025 0.060c-0.135 0.851-0.863 1.493-1.741 1.493-0.877 0-1.604-0.641-1.739-1.48l-0.001-0.010c0.457-1.005 1.039-1.867 1.739-2.617l-0.005 0.006zM23.99 8.75c1.694-0.040 3.073-1.333 3.249-2.985l0.001-0.015c0-1.132-1.883-3.35-2.691-4.251-0.138-0.153-0.337-0.249-0.559-0.249h-0.002c-0.222 0.001-0.421 0.097-0.558 0.25l-0.001 0.001c-0.803 0.901-2.67 3.118-2.67 4.249 0.171 1.663 1.543 2.955 3.226 3l0.004 0zM23.992 3.149c0.699 0.744 1.285 1.605 1.723 2.548l0.025 0.060c-0.134 0.851-0.862 1.493-1.74 1.493-0.877 0-1.604-0.641-1.739-1.48l-0.001-0.010c0.456-1.004 1.037-1.867 1.737-2.616l-0.005 0.005z"></path>
</svg></div>
                                            <div className="col-4">
                                                <p>18 Mar 1988</p>
                                            </div>
                                            <div className="col-2 text-end">
<svg version="1.1" width="800px" height="800px" id="LOCATION" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
	  viewBox="0 0 1800 1800" enable-background="new 0 0 1800 1800" xmlSpace="preserve">
<g>
	<g>
		<path fill="#333333" d="M899.993,1556.267l441.512-441.511c8.202-7.819,26.127-26.384,26.893-27.184l0.36-0.383
			c110.946-118.997,172.046-274.141,172.046-436.851c0-353.342-287.463-640.805-640.803-640.805
			c-353.342,0-640.805,287.463-640.805,640.805c0,162.714,61.1,317.857,172.038,436.851L899.993,1556.267z M900.001,71.159
			c319.355,0,579.179,259.818,579.179,579.18c0,146.968-55.159,287.114-155.315,394.639c-5.202,5.387-19.292,19.873-25.095,25.383
			L900.006,1469.1l-424.049-424.315C375.902,937.286,320.82,797.229,320.82,650.339C320.82,330.977,580.634,71.159,900.001,71.159z"
			/>
	</g>
	<g>
		<path fill="#333333" d="M998.745,225.279c110.577,0,325.781,120.91,325.781,342.553c0,17.018,13.789,30.812,30.812,30.812
			c17.014,0,30.812-13.794,30.812-30.812c0-115.37-50.989-222.331-143.563-301.184c-73.464-62.566-169.175-102.994-243.842-102.994
			c-17.014,0-30.812,13.794-30.812,30.813S981.731,225.279,998.745,225.279z"/>
	</g>
	<g>
		<path fill="#333333" d="M1286.716,1361.056c-24.003-9.809-49.854-18.548-77.134-26.264l-50.474,50.478
			c148.765,35.502,240.488,98.79,240.488,157.599c0,87.962-205.171,185.974-499.596,185.974
			c-294.417,0-499.597-98.012-499.597-185.974c0-58.805,91.723-122.097,240.488-157.599l-50.478-50.478
			c-27.271,7.716-53.126,16.455-77.121,26.264c-112.537,45.995-174.513,110.563-174.513,181.813s61.977,135.817,174.513,181.813
			c103.793,42.422,241.128,65.785,386.708,65.785c145.582,0,282.921-23.363,386.715-65.785
			c112.536-45.995,174.504-110.563,174.504-181.813S1399.252,1407.051,1286.716,1361.056z"/>
	</g>
	<g>
		<path fill="#333333" d="M901.771,945.221c-171.172,0-310.434-139.256-310.434-310.425S730.599,324.37,901.771,324.37
			c171.172,0,310.434,139.256,310.434,310.425S1072.943,945.221,901.771,945.221z M901.771,385.995
			c-137.193,0-248.809,111.612-248.809,248.801s111.616,248.801,248.809,248.801c137.192,0,248.809-111.612,248.809-248.801
			S1038.964,385.995,901.771,385.995z"/>
	</g>
</g>
</svg></div>
                                            <div className="col-4">
                                                <p>Cairo, Egypt</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section id="experience" className="p-lg-4">
                                <div className="card bg-transparent p-4 border-0">
                                    <div className="card-header bg-dark py-3 px-0">
                                        <h6 className="fw-bold m-0"><strong>Experience</strong></h6>
                                    </div>
                                    <div className="card-body px-0">
                                        <ul className="list-unstyled timeline p-0">
                                            <li>
                                                <div>
                                                    <h6>January 2016 - Present<br /></h6>
                                                    <h4>Yellow Media- an Egypt Yellow Pages Company<br /></h4>
                                                    <p>Web Designer/ Front-end Developer</p>
                                                </div>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <div>
                                                            <h5><span className="badge bg-secondary text-dark">HTML5</span></h5>
                                                        </div>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <div>
                                                            <h5><span className="badge bg-secondary text-dark">CSS3</span></h5>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div>
                                                    <h6>November 2014 - February 2015</h6>
                                                    <h4>PSO Digital</h4>
                                                    <p>Web Designer</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <h6>November 2013 - November 2014</h6>
                                                    <h4>MehwartvChannel</h4>
                                                    <p>Web Designer, 2-D Graphic Designer</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <h6>May 2010 - October 2013</h6>
                                                    <h4>Egyptian Company For International Trade - Belco</h4>
                                                    <p>Accountant</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            <section id="education" className="p-lg-4">
                                <div className="card bg-transparent p-4 border-0">
                                    <div className="card-header bg-dark py-3 px-0">
                                        <h6 className="fw-bold m-0"><strong>Education</strong></h6>
                                    </div>
                                    <div className="card-body px-0">
                                        <ul className="list-unstyled timeline p-0">
                                            <li>
                                                <div>
                                                    <h6>Finished: Feb 2023<br /></h6>
                                                    <h4>Cambridge CS50x Course<br /></h4>
                                                    <p>Introduction to Computer Science</p>
                                                </div>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <div>
                                                            <h5><span className="badge bg-secondary text-dark">C Language</span></h5>
                                                        </div>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <div>
                                                            <h5><span className="badge bg-secondary text-dark">Python</span></h5>
                                                        </div>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <div>
                                                            <h5><span className="badge bg-secondary text-dark">SQLite3</span></h5>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div>
                                                    <h6>Finished:&nbsp;Jun 2021</h6>
                                                    <h4>Udacity - FWD initiative</h4>
                                                    <p>Front End development - Advanced track<br /></p>
                                                </div>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <div>
                                                            <h5><span className="badge bg-secondary text-dark">Saas</span></h5>
                                                        </div>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <div>
                                                            <h5><span className="badge bg-secondary text-dark">WebPack</span></h5>
                                                        </div>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <div>
                                                            <h5><span className="badge bg-secondary text-dark">ReactJs</span></h5>
                                                        </div>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <div>
                                                            <h5><span className="badge bg-secondary text-dark">Redux</span></h5>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div>
                                                    <h6>Finished:&nbsp;Feb 2021</h6>
                                                    <h4>Udacity - FWD initiative</h4>
                                                    <p>Web development - professional track<br /></p>
                                                </div>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <div>
                                                            <h5><span className="badge bg-secondary text-dark">Javascript</span></h5>
                                                        </div>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <div>
                                                            <h5><span className="badge bg-secondary text-dark">NodeJs</span></h5>
                                                        </div>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <div>
                                                            <h5><span className="badge bg-secondary text-dark">Express</span></h5>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div>
                                                    <h6>Finished: Jul 2009</h6>
                                                    <h4> ITI - Information Technology Institute</h4>
                                                    <p>English Course&nbsp;</p>
                                                </div>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <div>
                                                            <h5><span className="badge bg-secondary text-dark">English</span></h5>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div>
                                                    <h6>2005 - 2009 </h6>
                                                    <h4>Cairo University </h4>
                                                    <p>Bachelor of Science (BS), Accounting</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            <section id="skills" className="p-lg-4">
                                <div className="card bg-transparent p-4 border-0">
                                    <div className="card-header bg-dark py-3 px-0">
                                        <h6 className="fw-bold m-0"><strong>SKILLS</strong></h6>
                                    </div>
                                    <div className="card-body px-0">
                                        <div className="row row-cols-1 row-cols-sm-2">
                                            <div className="col">
                                                <div>
                                                    <h4 className="small fw-bold">HTML<span className="float-end">20%</span></h4>
                                                    <div className="progress border rounded-pill progress-md mb-3">
                                                        <div className="progress-bar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: "20%"}}><span className="visually-hidden">20%</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div>
                                                    <h4 className="small fw-bold">CSS<span className="float-end">20%</span></h4>
                                                    <div className="progress border rounded-pill progress-md mb-3">
                                                        <div className="progress-bar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: "20%"}}><span className="visually-hidden">20%</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section id="samples" className="p-lg-4">
                                <div className="card bg-transparent p-4 border-0">
                                    <div className="card-header bg-dark py-3 px-0">
                                        <h6 className="fw-bold m-0"><strong>Samples</strong></h6>
                                    </div>
                                    <div className="card-body px-0">
                                        <div>
                                            <ul className="nav nav-pills nav-fill" role="tablist">
                                                <li className="nav-item" role="presentation"><a className="nav-link active" role="tab" data-bs-toggle="pill" href="#tab-1">Screenshots</a></li>
                                                <li className="nav-item" role="presentation"><a className="nav-link" role="tab" data-bs-toggle="pill" href="#tab-2">Videos</a></li>
                                                <li className="nav-item" role="presentation"><a className="nav-link" role="tab" data-bs-toggle="pill" href="#tab-3">Live</a></li>
                                            </ul>
                                            <div className="tab-content">
                                                <div className="tab-pane active" role="tabpanel" id="tab-1">
                                                    <div className="row photos gallery" data-bss-baguettebox="">
                                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f"><img alt="alt-text"  className="img-fluid" src="./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f" /></a></div>
                                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8"><img alt="alt-text"  className="img-fluid" src="./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8" /></a></div>
                                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c"><img alt="alt-text"  className="img-fluid" src="./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c" /></a></div>
                                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8"><img alt="alt-text"  className="img-fluid" src="./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8" /></a></div>
                                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c"><img alt="alt-text"  className="img-fluid" src="./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c" /></a></div>
                                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f"><img alt="alt-text"  className="img-fluid" src="./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f" /></a></div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane" role="tabpanel" id="tab-2">
                                                    <div className="row photos gallery" data-bss-baguettebox="">
                                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="https://youtu.be/xRhhd14-SCw" target="_blank" rel="noreferrer"><img alt="alt-text"  className="img-fluid" src="./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f" /></a></div>
                                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8"><img alt="alt-text"  className="img-fluid" src="./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8" /></a></div>
                                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c"><img alt="alt-text"  className="img-fluid" src="./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c" /></a></div>
                                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8"><img alt="alt-text"  className="img-fluid" src="./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8" /></a></div>
                                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c"><img alt="alt-text"  className="img-fluid" src="./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c" /></a></div>
                                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f"><img alt="alt-text"  className="img-fluid" src="./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f" /></a></div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane" role="tabpanel" id="tab-3">
                                                    <div className="row photos gallery" data-bss-baguettebox="">
                                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f"><img alt="alt-text"  className="img-fluid" src="./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f" /></a></div>
                                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8"><img alt="alt-text"  className="img-fluid" src="./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8" /></a></div>
                                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c"><img alt="alt-text"  className="img-fluid" src="./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c" /></a></div>
                                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8"><img alt="alt-text"  className="img-fluid" src="./assets/img/building.jpg?h=6ef5437d90194906d185e64880c032d8" /></a></div>
                                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c"><img alt="alt-text"  className="img-fluid" src="./assets/img/loft.jpg?h=57df6bb27a728060276c7c2ad7fd004c" /></a></div>
                                                        <div className="col-sm-6 col-md-4 col-lg-3 item"><a href="./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f"><img alt="alt-text"  className="img-fluid" src="./assets/img/desk.jpg?h=a1a264780537cd5ef55acbd34afb098f" /></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up"></i></a>
    </div>
  );
}

export default App;
