import './App.scss';
import React from "react";


function App() {
    
    return (
            <div className="App">
            <div className="Credit">Credits go to awesome Hannah and the boy band</div>
            <div className="App-header">
                <h1> Latest Weather <br /> at Elysium Planitia</h1>
                <p> InSight has temporarily suspended daily weather measurements. As <br />more data becomes available, it will appear below. Meanwhile, get the <br />latest Mars weather from the <a href="https://science.nasa.gov/mission/msl-curiosity/science-instruments/#h-rover-environmental-monitoring-station-rems" target="_blank" rel="noopener noreferrer"> Curiosity Rover</a>. </p>
                <div className="today-weather-info">
                    <div className="today-weather-card-1">
                        <h1> Sol 681 </h1>
                        <p> October 25, 2020</p>
                    </div>
                    <div className="today-weather-card-2">
                        <p> High: 24 F/C </p>
                        <p> Low: -139.8 F/C </p>
                    </div>
                </div>
                <div className="weather-info">
                    <div className="weather-card">
                        <h1> Sol 675 </h1>
                        <p> Oct. 19 </p>
                        <hr />
                        <p> High: 3.4 F</p>
                        <p> Low: -142.4 F</p>
                    </div>
                    <div className="weather-card">
                        <h1> Sol 676 </h1>
                        <p> Oct. 20 </p>
                        <hr />
                        <p> High: 2.3 F</p>
                        <p> Low: -142.4 F</p>
                    </div>
                    <div className="weather-card">
                        <h1> Sol 677 </h1>
                        <p> Oct. 21 </p>
                        <hr />
                        <p> High: 1.7 F</p>
                        <p> Low: -143 F</p>
                    </div>
                    <div className="weather-card">
                        <h1> Sol 678 </h1>
                        <p> Oct. 22 </p>
                        <hr />
                        <p> High: 15.7 F</p>
                        <p> Low: -143.9 F</p>
                    </div>
                    <div className="weather-card">
                        <h1> Sol 679 </h1>
                        <p> Oct. 23 </p>
                        <hr />
                        <p> High: 11.2 F</p>
                        <p> Low: -142 F</p>
                    </div>
                    <div className="weather-card">
                        <h1> Sol 680 </h1>
                        <p> Oct. 24 </p>
                        <hr />
                        <p> High: 4.5 F</p>
                        <p> Low: -142.3 F</p>
                    </div>
                    <div className="weather-card">
                        <h1> Sol 681 </h1>
                        <p> Oct. 25 </p>
                        <hr />
                        <p> High: 24 F</p>
                        <p> Low: -139.8 F</p>
                    </div>
                </div>
                </div>
            </div>
    );
}

export default App;
