import React from "react";
import ReactPlayer from "react-player";
import "../../css/resident.css";
import ToggleWidget from "./ToggleWidget";
import SliderWidget from "./SliderWidget";

const ResidentDashboardGrid = () => {
  return (
    <div className="residentDashboardGrid">
      <div className="switchRow">
        <div className="switchItem">
          <span className="switchTitle">Front Door</span>
          <span className="widget">
            <ToggleWidget />
          </span>
        </div>
        <div className="switchItem">
          <span className="switchTitle">Baking Oven</span>
          <span className="widget">
            <ToggleWidget />
          </span>
        </div>
        <div className="switchItem">
          <span className="switchTitle">Range Stove</span>
          <span className="widget">
            <ToggleWidget />
          </span>
        </div>
      </div>
      <div className="switchRow2">
        <div className="slideItem">
          <span className="widget" style={{ marginLeft: "100px" }}>
            <SliderWidget />
          </span>
        </div>
        <div className="videoItem">
          <div className="videoPlayerTitle">Security Camera</div>
          <div style={{ display: "flex" }}>
            <div style={{ paddingLeft: "20px" }}>
              <ReactPlayer
                controls
                width="100%"
                height="100%"
                url="https://www.youtube.com/watch?v=4i_GFrlaStQ"
              />
            </div>
            <span style={{ paddingLeft: "120px" }}>
              <ToggleWidget />
            </span>
          </div>
        </div>
      </div>
      <div className="switchGroup">
        <span className="switchGroupTitle">Lights</span>
        <div className="switchRow">
          <div className="switchItem">
            <span className="switchTitle">Living Room</span>
            <span className="widget">
              <ToggleWidget />
            </span>
          </div>
          <div className="switchItem">
            <span className="switchTitle">Bath Room</span>
            <span className="widget">
              <ToggleWidget />
            </span>
          </div>
          <div className="switchItem">
            <span className="switchTitle">Kitchen Area</span>
            <span className="widget">
              <ToggleWidget />
            </span>
          </div>
        </div>
        <div className="switchRow">
          <div className="switchItem">
            <span className="switchTitle">Master Room</span>
            <span className="widget">
              <ToggleWidget />
            </span>
          </div>
          <div className="switchItem">
            <span className="switchTitle">Kids Room</span>
            <span className="widget">
              <ToggleWidget />
            </span>
          </div>
          <div className="switchItem">
            <span className="switchTitle">Patio & Lawn</span>
            <span className="widget">
              <ToggleWidget />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentDashboardGrid;
