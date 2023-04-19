import React,{useState} from 'react';

function Slide(props) 
{
    if(props.slidevalue==1)
    {
      return (
        <div class="content col col-10 col-md-10">
          <h1 class="contenttext"> <b> {"GOC Workshop Landscape"} </b></h1>
          <img class="slidecontent" src="images/armoury_gate_backdrop.jpg" alt="" ></img>
        </div>
      );
    }
    if(props.slidevalue==2)
    {
      return (
        <div class="content col col-10 col-md-10">
          <h1 class="contenttext"> <b> {"Calendar"} </b></h1>
          <img class="slidecontent" src="images/slide_2.jpg" alt="" ></img>
        </div>
      );
    }
    if(props.slidevalue==3)
    {
      return (
        <div class="content col col-10 col-md-10">
          <h1 class="contenttext"> <b> {"Engagements"} </b></h1>
          <img class="slidecontent" src="images/schedule.jpg" alt="" ></img>
        </div>
      );
    }
    if(props.slidevalue==4)
    {
      return (
        <div class="content col col-10 col-md-10">
          <h1 class="contenttext"> <b> {"Overall Layout"} </b></h1>
          <img class="slidecontent" src="images/GOC_layout.jpg" alt="" ></img>
        </div>
      );
    }
    if(props.slidevalue==5)
    {
      return (
        <div class="splitlayoutcontent col col-10 col-md-10">
          <h1 class="contenttext"> <b> {"Split Layout"} </b></h1>
          <div class="subcontentrow row">
            <div class="subcontentcol col col-4 col-md-4">
              <button class="w-100 btn btn-lg btn-primary cellbutton" onClick={props.coachsubbuttonclick} type="submit">c&w</button>
            </div>
            <div class="subcontentcol col col-4 col-md-4">
              <button class="w-100 btn btn-lg btn-primary cellbutton" onClick={props.dslsubbuttonclick} type="submit">dsl</button>
            </div>
            <div class="subcontentcol col col-4 col-md-4">
              <button class="w-100 btn btn-lg btn-primary cellbutton" onClick={props.prodsubbuttonclick} type="submit">prod</button>
            </div>
          </div>
        </div>
      );
    }
    if(props.slidevalue==6)
    {
      return (
        <div class="content col col-10 col-md-10">
          <h1 class="contenttext"> <b> Coaching Wing </b></h1>
          <img class="slidecontent" src="images/coaching_wing.jpg" alt="" ></img>
        </div>
      );
    }
    if(props.slidevalue==7)
    {
      return (
        <div class="content col col-10 col-md-10">
          <h1 class="contenttext"> <b> Diesel Wing </b></h1>
          <img class="slidecontent" src="images/dsl_wing.jpg" alt="" ></img>
        </div>
      );
    }
    if(props.slidevalue==8)
    {
      return (
        <div class="content col col-10 col-md-10">
          <h1 class="contenttext"> <b> Production Wing </b></h1>
          <img class="slidecontent" src="images/prod_wing.jpg" alt="" ></img>
        </div>
      );
    }
}

export default Slide;
