import React, { Component } from 'react';
import './SideNavBar.css';

class SideNavBar extends Component {
  
  changeHandler = (e) => {
    this.props.handleYearClick(e.target.value);
  }

  changeLaunchHandler = (e) => {
    this.props.handleLaunchClick(e.target);
  }

  changeLandHandler = (e) => {
    this.props.handleLandClick(e.target.value);
  }

  render() {
    const { handleFiltersClick, isDisabled} = this.props;

    return (
      <div className="sidenav">
        <h4 className="filter">Filters</h4>
        <p className="launch_year">Launch Year</p>
        <div className="horizontal_line"></div>
        <div className="button"> 
          <div className="left_button">
            <div id="launch-year">
              <label className="blue">
                <input
                  type="radio"
                  name="button6"
                  value="2006"
                  checked={this.props.selected === "2006"}
                  onChange={(e) => this.changeHandler(e)}
                />
                <span>2006</span>
              </label>
              <label className="green">
                <input
                  type="radio"
                  name="button8"
                  value="2008"
                  checked={this.props.selected === "2008"}
                  onChange={(e) => this.changeHandler(e)}
                />
                <span>2008</span>
              </label>
              <label className="yellow">
                <input
                  type="radio"
                  name="button10"
                  value="2010"
                  checked={this.props.selected === "2010"}
                  onChange={(e) => this.changeHandler(e)}
                />
                <span>2010</span>
              </label>
              <label className="pink">
                <input
                  type="radio"
                  name="button12"
                  value="2012"
                  checked={this.props.selected === "2012"}
                  onChange={(e) => this.changeHandler(e)}
                />
                <span>2012</span>
              </label>
              <label className="purple">
                <input
                  type="radio"
                  name="button14"
                  value="2014"
                  checked={this.props.selected === "2014"}
                  onChange={(e) => this.changeHandler(e)}
                />
                <span>2014</span>
              </label>
              <label className="purple">
                <input
                  type="radio"
                  name="button16"
                  value="2016"
                  checked={this.props.selected === "2016"}
                  onChange={(e) => this.changeHandler(e)}
                />
                <span>2016</span>
              </label>
              <label className="purple">
                <input
                  type="radio"
                  name="button18"
                  value="2018"
                  checked={this.props.selected === "2018"}
                  onChange={(e) => this.changeHandler(e)}
                />
                <span>2018</span>
              </label>
              <label className="purple">
                <input
                  type="radio"
                  name="button20"
                  value="2020"
                  checked={this.props.selected === "2020"}
                  onChange={(e) => this.changeHandler(e)}
                />
                <span>2020</span>
              </label>
            </div> 
          </div>
          <div className="right_button">
            <div id="launch-year">
              <label className="purple">
                <input
                  type="radio"
                  name="button7"
                  value="2007"
                  checked={this.props.selected === "2007"}
                  onChange={(e) => this.changeHandler(e)}
                />
                <span>2007</span>
              </label>
              <label className="purple">
                <input
                  type="radio"
                  name="button9"
                  value="2009"
                  checked={this.props.selected === "2009"}
                  onChange={(e) => this.changeHandler(e)}
                />
                <span>2009</span>
              </label>
              <label className="purple">
                <input
                  type="radio"
                  name="button11"
                  value="2011"
                  checked={this.props.selected === "2011"}
                  onChange={(e) => this.changeHandler(e)}
                />
                <span>2011</span>
              </label>
              <label className="purple">
                <input
                  type="radio"
                  name="button13"
                  value="2013"
                  checked={this.props.selected === "2013"}
                  onChange={(e) => this.changeHandler(e)}
                />
                <span>2013</span>
              </label>
              <label className="purple">
                <input
                  type="radio"
                  name="button15"
                  value="2015"
                  checked={this.props.selected === "2015"}
                  onChange={(e) => this.changeHandler(e)}
                />
                <span>2015</span>
              </label>
              <label className="purple">
                <input
                  type="radio"
                  name="button17"
                  value="2017"
                  checked={this.props.selected === "2017"}
                  onChange={(e) => this.changeHandler(e)}
                />
                <span>2017</span>
              </label>
              <label className="purple">
                <input
                  type="radio"
                  name="button19"
                  value="2019"
                  checked={this.props.selected === "2019"}
                  onChange={(e) => this.changeHandler(e)}
                />
                <span>2019</span>
              </label>
            </div>
          </div>
        </div>
        <p className="successful-launch">Successful Launch</p>
        <div className="success-line"></div>
        <div className="button">
          <div className="left_button">
            <div id="success-launch">
              <label className="purple">
                <input
                  type="radio"
                  name="true"
                  value="launchTrueBtn"
                  checked={this.props.launchSelected === "launchTrueBtn"}
                  onChange={(e) => this.changeLaunchHandler(e)}
                />
                <span>True</span>
              </label>
            </div>
          </div>
          <div className="right_button">
            <div id="success-launch">
              <label className="purple">
                <input
                  type="radio"
                  name="false"
                  value="launchFalseBtn"
                  checked={this.props.launchSelected === "launchFalseBtn"}
                  onChange={(e) => this.changeLaunchHandler(e)}
                />
                <span>False</span>
              </label>
            </div>
          </div>
        </div>

        <p className="successful-launch">Successful Landing</p>
        <div className="success-line"></div>
        <div className="button">
          <div className="left_button">
            <div id="success-land">
              <label className="purple">
                <input
                  type="radio"
                  name="landTrueBtn"
                  value="true"
                  checked={this.props.landSelected === "true"}
                  onChange={(e) => this.changeLandHandler(e)}
                />
                <span>True</span>
              </label>
            </div>
          </div>
          <div className="right_button">
            <div id="success-land">
              <label className="purple">
                <input
                  type="radio"
                  name="landFalseBtn"
                  value="false"
                  checked={this.props.landSelected === "false"}
                  onChange={(e) => this.changeLandHandler(e)}
                />
                <span>False</span>
              </label>
            </div>
          </div>
        </div>
        <div className="center_button">
          <button type="button" onClick={handleFiltersClick} 
          disabled={isDisabled} className="blue_button"
          
          >Apply Filters</button>
        </div>
      </div>
    )
}
}

export default SideNavBar;