import React from 'react';
import logo from './assets/icons/react-icon.png';
import './App.scss';

function App() {
  return (
    <div class="container">
    <div class="row">
        <div class="col-md-2"><img style={{ width:"100px",marginTop:"30px",marginLeft:"20px"}} alt="React logo" src={logo} /></div>
        <div class="col-md-10">
            <div class="header">
                <h1>Universal Style Guide</h1>
                <p>Created by Logicals.</p>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <nav class="navbar navbar-expand-sm sg-primary p-0">

                <ul class="navbar-nav">
                    <li class="nav-item ">
                        <a class="nav-link active" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Product</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>





    <div class="row m-0">
        <div class="side">
            <h2>Branding</h2>
            <h5>Primary</h5>
            <div>
                <div class="background-demo sg-primary text-center">Background</div>
                <p class="sg-primary-text">Primary colored text</p>
                <span>Primary Icon : </span> <i class="sg-primary-text fa fa-paint-brush" aria-hidden="true"></i>

            </div>
            <h5 class="mt-3">Secondary</h5>
            <div>
                <div class="background-demo sg-secondary text-center">Background</div>
                <p class="sg-secondary-text">Secondary colored text</p>
                <span>Primary Icon : </span> <i class="sg-secondary-text fa fa-paint-brush" aria-hidden="true"></i>

            </div>
            <h5 class="mt-3">Tertiary</h5>
            <div>
                <div class="background-demo sg-tertiary text-center">Background</div>
                <p class="sg-tertiary-text">Tertiary colored text</p>
                <span>Primary Icon : </span> <i class="sg-tertiary-text fa fa-paint-brush" aria-hidden="true"></i>

            </div>
        </div>
        <div class="main">
            <p class="text-xlarge">Page Header</p>
            <p class="text-large">Section Header</p>
            <p class="text-medium">Sub Header</p>
            <p class="text-small">Label and Paragraph</p>



        </div>
    </div>

    <div class="footer">
        <p class="m-0">&copy; Techtonic Hackathon 2019</p>
    </div>
</div>
  );
}

export default App;
