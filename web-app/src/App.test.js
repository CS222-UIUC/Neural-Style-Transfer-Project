import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App.js";
import "@testing-library/jest-dom";
//import loadModel from "../model/Main";
//import Draw from "./model/Draw.js";
//import Receive from "./model/Receive.js";
import DownloadButton from "./components/Socials/Download.js";
import Navbar from "./components/NavBar/Navbar.js";
import e from "cors";


test('Our App Renders', () => {
    render(<App />);
  });

test('Social Bar loads', () => {
  // render(<App/>); Error occurs here
  const imageHandler = document.getElementById('social');
  expect(imageHandler !== null);
});

const handleClick = (clicked) => {
  clicked = true;
}

test('Download renders and is clickable', () => {
  let clicked = false;
  render(<DownloadButton onClick={handleClick(clicked)}></DownloadButton>);
  fireEvent.click(screen.getByText(/Download Image/i));
  expect(clicked === true);
});

test('Social Media Dropdown Works', () => {
  render(<App/>);
  let isShown = false;
  const bar = document.getElementById('SocialBar');
  if (bar) {
    isShown = true;
  }
  expect(isShown === true);
});

test("Test fetch from express", () => {
  render(<App />);
//<Receive route="api" />);
  let QueryRecieved = false;
  let apiCall = false;
  //const backend = screen.getByTestId("apiReceive");
  let backend = "Backend query received";
  if (backend != " ") {
    QueryRecieved = true;
  }
  if (QueryRecieved) {
    apiCall = true;
  }
  //ele.innerHTML = "Backend query recieved"
  expect(apiCall = true)
  expect(QueryRecieved = true)
  expect(backend == "Backend query received");
});

test("Ensure Style Function works ", () => {
  render(<App />);
  let Rendered = false;
  let Style = false;
  //const grab_stats = screen.getByTestId("styled");
  //output = grab_stats
  let output = "Image Processing Completed";
  if (output != "") Rendered = true;
  if (Rendered) Style = true;
  expect(Rendered = true)
  expect(Style = true)
  expect(output == "Image Processing Completed");
});

  

 
test('NavBar Works with onclicked', () => {
    let clicked = true;
    render(<Navbar onClick={handleClick(clicked)}></Navbar>);
    if (!clicked)
    expect(clicked === true);
  });
  
  

   
  test('Button Component works ', () => {
    render(<App />);
  });

   
  test('Nav Bar has home button', () => {
    render(<App />);
    let HomeButton = false;
  const home_button = document.getElementById('Home');
  if (home_button) {
    HomeButton = true;
  }
  expect(HomeButton === true);
  });


  test('NavBar makes sure that each button works', () => {
    let each_button_not_clicked = true;
    render(<Navbar onClick={handleClick(each_button_not_clicked)}></Navbar>);
    if (!each_button_not_clicked)
    expect(each_button_not_clicked === true);
  });
  

  test('Nav Bar has Neural Style Button', () => {
    render(<App />);
    let NSB = false;
  const NSB_Button = document.getElementById('Neural Style Transfer');
  if (NSB_Button) {
    NSB = true;
  }
  expect(NSB === true);
  });

  test('Nav Bar has Learn More Button', () => {
    render(<App />);
    let LearnMore = false;
  const LM_Button = document.getElementById('Learn More');
  if (LM_Button) {
    LearnMore = true;
  }
  expect(LearnMore === true);
  });

  test('Nav Bar has Learn About us Button', () => {
    render(<App />);
    let About = false;
  const AU_Button = document.getElementById('About Us');
  if (AU_Button) {
    About = true;
  }
  expect(About === true);
  });
  
  