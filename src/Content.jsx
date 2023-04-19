import React,{useState} from 'react';
import Slide from "./Slide.jsx";
const maxnoofslides=5;
let value=1;
function Content() 
{
  const leftbuttontext="<";
  const rightbuttontext=">";
  const [currentpos,setcurrentpos]=useState(0);
  //console.log(Math.round(Math.random()*10));

  function leftbuttonclick()
  {
    console.log("left button clicked");
    if(value==1)
    {
      value=maxnoofslides;
      setcurrentpos(Math.round(Math.random()*10));
    }
    else if(value>maxnoofslides)
    {
      value=1;
      setcurrentpos(Math.round(Math.random()*10));
    }
    else
    {
      value--;
      setcurrentpos(Math.round(Math.random()*10));
    }
  };
  function rightbuttonclick()
  {
    console.log("right button clicked");
    if(value>=maxnoofslides)
    {
      value=1;
      setcurrentpos(Math.round(Math.random()*10));
    }
    else
    {
      value++;
      setcurrentpos(Math.round(Math.random()*10));
    }
  };
  function coachsubbuttonclick()
  {
    console.log("coach sub button clicked");
    value=6;
    setcurrentpos(Math.round(Math.random()*10));
  };
  function dslsubbuttonclick()
  {
    console.log("dsl sub button clicked");
    value=7;
    setcurrentpos(Math.round(Math.random()*10));
  };
  function prodsubbuttonclick()
  {
    console.log("production sub button clicked");
    value=8;
    setcurrentpos(Math.round(Math.random()*10));
  };
    return (
    <div class="row">
        <div class="sidebuttons col col-1 col-md-1">
          <div class="row siderowsplit">
        </div>
        <div class="row sidebuttonrow">
            <button class="w-100 btn btn-lg btn-primary buttonformat" onClick={leftbuttonclick} type="submit">{leftbuttontext}</button>
        </div>
        <div class="row siderowsplit">
          </div>
        </div>
        <Slide slidevalue={value} coachsubbuttonclick={coachsubbuttonclick} dslsubbuttonclick={dslsubbuttonclick} prodsubbuttonclick={prodsubbuttonclick}/>
        <div class="sidebuttons col col-1 col-md-1">
          <div class="sidebuttons col col-1 col-md-1">
            <div class="row siderowsplit">
            </div>
            <div class="row sidebuttonrow">
              <button class="w-100 btn btn-lg btn-primary buttonformat" onClick={rightbuttonclick} type="submit">{rightbuttontext}</button>
            </div>
            <div class="row siderowsplit">
            </div>
        </div>
      </div>
    </div>);
}

export default Content;
