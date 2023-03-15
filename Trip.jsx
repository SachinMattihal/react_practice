import React from 'react'

const Trip = (props) => {
  return (
    <>
   <div className="parentBlock1">
    <div className="mainBlock">
        <img src={props.payload[0].photo} alt="" />
        <marquee direction="right" scrollamount="4"> <h2>{props.payload[0].touristPlace}</h2></marquee>
        <h3>{props.payload[0].Besttimevisit}</h3>
        <h3>{props.payload[0].IdealDuration}</h3>
        <h3>{props.payload[0].PlacestoVisit}</h3>
        <h3>{props.payload[0].ThingstoDo}</h3>
        <h3>{props.payload[0].HowtoReach}</h3>
    </div>
    <div className="mainBlock">
        <img src={props.payload[1].photo} alt="" />
        <marquee direction="left" scrollamount="4"> <h2>{props.payload[1].touristPlace}</h2></marquee>
        <h3>{props.payload[1].Besttimevisit}</h3>
        <h3>{props.payload[1].IdealDuration}</h3>
        <h3>{props.payload[1].PlacestoVisit}</h3>
        <h3>{props.payload[1].ThingstoDo}</h3>
        <h3>{props.payload[1].HowtoReach}</h3>
    </div>
    <div className="mainBlock">
        <img src={props.payload[2].photo} alt="" />
        <marquee direction="right" scrollamount="4"> <h2>{props.payload[2].touristPlace}</h2></marquee>
        <h3>{props.payload[2].Besttimevisit}</h3>
        <h3>{props.payload[2].IdealDuration}</h3>
        <h3>{props.payload[2].PlacestoVisit}</h3>
        <h3>{props.payload[2].ThingstoDo}</h3>
        <h3>{props.payload[2].HowtoReach}</h3>
    </div>
    <div className="mainBlock">
        <img src={props.payload[3].photo} alt="" />
        <marquee direction="left" scrollamount="4"> <h2>{props.payload[3].touristPlace}</h2></marquee>
        <h3>{props.payload[3].Besttimevisit}</h3>
        <h3>{props.payload[3].IdealDuration}</h3>
        <h3>{props.payload[3].PlacestoVisit}</h3>
        <h3>{props.payload[3].ThingstoDo}</h3>
        <h3>{props.payload[3].HowtoReach}</h3>
    </div>
    </div>
    <div className="parentBlock2">
    <div className="mainBlock">
        <img src={props.payload[4].photo} alt="" />
        <marquee direction="left" scrollamount="4"> <h2>{props.payload[4].touristPlace}</h2></marquee>
        <h3>{props.payload[4].Besttimevisit}</h3>
        <h3>{props.payload[4].IdealDuration}</h3>
        <h3>{props.payload[4].PlacestoVisit}</h3>
        <h3>{props.payload[4].ThingstoDo}</h3>
        <h3>{props.payload[4].HowtoReach}</h3>
    </div>
        <div className="mainBlock">
        <img src={props.payload[5].photo} alt="" />
        <marquee direction="right" scrollamount="4"> <h2>{props.payload[5].touristPlace}</h2></marquee>
        <h3>{props.payload[5].Besttimevisit}</h3>
        <h3>{props.payload[5].IdealDuration}</h3>
        <h3>{props.payload[5].PlacestoVisit}</h3>
        <h3>{props.payload[5].ThingstoDo}</h3>
        <h3>{props.payload[5].HowtoReach}</h3>
    </div>

    <div className="mainBlock">
        <img src={props.payload[6].photo} alt="" />
        <marquee direction="left" scrollamount="4"> <h2>{props.payload[6].touristPlace}</h2></marquee>
        <h3>{props.payload[6].Besttimevisit}</h3>
        <h3>{props.payload[6].IdealDuration}</h3>
        <h3>{props.payload[6].PlacestoVisit}</h3>
        <h3>{props.payload[6].ThingstoDo}</h3>
        <h3>{props.payload[6].HowtoReach}</h3>
    </div>
    <div className="mainBlock">
        <img src={props.payload[7].photo} alt="" />
        <marquee direction="right" scrollamount="4"> <h2>{props.payload[7].touristPlace}</h2></marquee>
        <h3>{props.payload[7].Besttimevisit}</h3>
        <h3>{props.payload[7].IdealDuration}</h3>
        <h3>{props.payload[7].PlacestoVisit}</h3>
        <h3>{props.payload[7].ThingstoDo}</h3>
        <h3>{props.payload[7].HowtoReach}</h3>
    </div>
    </div>
    < div className="parentBlock3">
    <div className="mainBlock">
        <img src={props.payload[8].photo} alt="" />
        <marquee direction="right" scrollamount="4"> <h2>{props.payload[8].touristPlace}</h2></marquee>
        <h3>{props.payload[8].Besttimevisit}</h3>
        <h3>{props.payload[8].IdealDuration}</h3>
        <h3>{props.payload[8].PlacestoVisit}</h3>
        <h3>{props.payload[8].ThingstoDo}</h3>
        <h3>{props.payload[8].HowtoReach}</h3>
    </div>
    <div className="mainBlock">
        <img src={props.payload[9].photo} alt="" />
        <marquee direction="left" scrollamount="4"> <h2>{props.payload[9].touristPlace}</h2></marquee>
        <h3>{props.payload[9].Besttimevisit}</h3>
        <h3>{props.payload[9].IdealDuration}</h3>
        <h3>{props.payload[9].PlacestoVisit}</h3>
        <h3>{props.payload[9].ThingstoDo}</h3>
        <h3>{props.payload[9].HowtoReach}</h3>
    </div>
    <div className="mainBlock">
        <img src={props.payload[10].photo} alt="" />
        <marquee direction="right" scrollamount="4"> <h2>{props.payload[10].touristPlace}</h2></marquee>
        <h3>{props.payload[10].Besttimevisit}</h3>
        <h3>{props.payload[10].IdealDuration}</h3>
        <h3>{props.payload[10].PlacestoVisit}</h3>
        <h3>{props.payload[10].ThingstoDo}</h3>
        <h3>{props.payload[10].HowtoReach}</h3>
    </div>
    <div className="mainBlock">
        <img src={props.payload[11].photo} alt="" />
        <marquee direction="left" scrollamount="4"> <h2>{props.payload[11].touristPlace}</h2></marquee>
        <h3>{props.payload[11].Besttimevisit}</h3>
        <h3>{props.payload[11].IdealDuration}</h3>
        <h3>{props.payload[11].PlacestoVisit}</h3>
        <h3>{props.payload[11].ThingstoDo}</h3>
        <h3>{props.payload[11].HowtoReach}</h3>
    </div>
    </div>
    <div className="parentBlock4">
    <div className="mainBlock">
        <img src={props.payload[12].photo} alt="" />
        <marquee direction="right" scrollamount="4"> <h2>{props.payload[12].touristPlace}</h2></marquee>
        <h3>{props.payload[12].Besttimevisit}</h3>
        <h3>{props.payload[12].IdealDuration}</h3>
        <h3>{props.payload[12].PlacestoVisit}</h3>
        <h3>{props.payload[12].ThingstoDo}</h3>
        <h3>{props.payload[12].HowtoReach}</h3>
    </div>
    <div className="mainBlock">
        <img src={props.payload[13].photo} alt="" />
        <marquee direction="left" scrollamount="4"> <h2>{props.payload[13].touristPlace}</h2></marquee>
        <h3>{props.payload[13].Besttimevisit}</h3>
        <h3>{props.payload[13].IdealDuration}</h3>
        <h3>{props.payload[13].PlacestoVisit}</h3>
        <h3>{props.payload[13].ThingstoDo}</h3>
        <h3>{props.payload[13].HowtoReach}</h3>
    </div>
    <div className="mainBlock">
        <img src={props.payload[14].photo} alt="" />
        <marquee direction="right" scrollamount="4"> <h2>{props.payload[14].touristPlace}</h2></marquee>
        <h3>{props.payload[14].Besttimevisit}</h3>
        <h3>{props.payload[14].IdealDuration}</h3>
        <h3>{props.payload[14].PlacestoVisit}</h3>
        <h3>{props.payload[14].ThingstoDo}</h3>
        <h3>{props.payload[14].HowtoReach}</h3>
    </div>
    <div className="mainBlock">
        <img src={props.payload[15].photo} alt="" />
        <marquee direction="left" scrollamount="4"> <h2>{props.payload[15].touristPlace}</h2></marquee>
        <h3>{props.payload[15].Besttimevisit}</h3>
        <h3>{props.payload[15].IdealDuration}</h3>
        <h3>{props.payload[15].PlacestoVisit}</h3>
        <h3>{props.payload[15].ThingstoDo}</h3>
        <h3>{props.payload[15].HowtoReach}</h3>
    </div>
    </div>
    <div className="parentBlock5">
    <div className="mainBlock">
        <img src={props.payload[16].photo} alt="" />
        <marquee direction="right" scrollamount="4"> <h2>{props.payload[16].touristPlace}</h2></marquee>
        <h3>{props.payload[16].Besttimevisit}</h3>
        <h3>{props.payload[16].IdealDuration}</h3>
        <h3>{props.payload[16].PlacestoVisit}</h3>
        <h3>{props.payload[16].ThingstoDo}</h3>
        <h3>{props.payload[16].HowtoReach}</h3>
    </div>
    <div className="mainBlock">
        <img src={props.payload[17].photo} alt="" />
        <marquee direction="left" scrollamount="4"> <h2>{props.payload[17].touristPlace}</h2></marquee>
        <h3>{props.payload[17].Besttimevisit}</h3>
        <h3>{props.payload[17].IdealDuration}</h3>
        <h3>{props.payload[17].PlacestoVisit}</h3>
        <h3>{props.payload[17].ThingstoDo}</h3>
        <h3>{props.payload[17].HowtoReach}</h3>
    </div>
    <div className="mainBlock">
        <img src={props.payload[18].photo} alt="" />
        <marquee direction="right" scrollamount="4"> <h2>{props.payload[18].touristPlace}</h2></marquee>
        <h3>{props.payload[18].Besttimevisit}</h3>
        <h3>{props.payload[18].IdealDuration}</h3>
        <h3>{props.payload[18].PlacestoVisit}</h3>
        <h3>{props.payload[18].ThingstoDo}</h3>
        <h3>{props.payload[18].HowtoReach}</h3>
    </div>
    <div className="mainBlock">
        <img src={props.payload[19].photo} alt="" />
        <marquee direction="left" scrollamount="4"> <h2>{props.payload[19].touristPlace}</h2></marquee>
        <h3>{props.payload[19].Besttimevisit}</h3>
        <h3>{props.payload[19].IdealDuration}</h3>
        <h3>{props.payload[19].PlacestoVisit}</h3>
        <h3>{props.payload[19].ThingstoDo}</h3>
        <h3>{props.payload[19].HowtoReach}</h3>
    </div>
    </div>
    </>
  )
}
export default Trip