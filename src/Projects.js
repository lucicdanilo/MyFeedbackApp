import React, { Component } from "react";
import Popup from "reactjs-popup";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    document.getElementById("title").innerHTML = "Thank you for feedback!";
    document.getElementById("subtitle").innerHTML =
      "You can leave feedback on other categories and projects if you want.";

    var projectFeedback = {
      project: event.target.selectProject.value,
      design: event.target.designSlider.value,
      performance: event.target.performanceSlider.value,
      content: event.target.contentSlider.value,
      text: event.target.textFeedback.value
    };

    var projectFeedbackJSON = JSON.stringify(projectFeedback);
    var request = new XMLHttpRequest();
    request.open(
      "POST",
      "https://cors-anywhere.herokuapp.com/https://feedbackappapi.glitch.me/projectFeedback",
      true
    );
    request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    request.send(projectFeedbackJSON);
  }

  componentDidMount() {
    document.getElementById("wellcomeImage").style.display = "none";
    this.setState({
      projects: [
        { id: "general", name: "General" },
        { id: "physicsquiz", name: "Physics Quiz" },
        { id: "conwaysgameoflife", name: "Conways Game of Life" },
        { id: "subedit", name: "Subtitle Edit" },
        { id: "myrecipeapi", name: "My Recipe API" },
        { id: "myfeedbackapp", name: "My Feedback App" }
      ]
    });
  }

  render() {
    const { projects } = this.state;

    let projectsList =
      projects.length > 0 &&
      projects.map((item, i) => {
        return (
          <option key={i} value={item.id}>
            {item.name}
          </option>
        );
      }, this);
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="boxRate">
          <h2 class="dynamicSubtitle">Feedback for Projects:</h2>
          <div class="choseProject">
            <select name="selectProject">{projectsList}</select>
          </div>
          <div class="designRate">
            <div class="slidecontainer">
              <label class="designSliderLabel" for="designSlider">
                Design:
              </label>
              <input
                type="range"
                name="designSlider"
                min="0"
                max="100"
                step="1"
              />
            </div>
          </div>
          <div class="performanceRate">
            <div class="slidecontainer">
              <label for="performanceSlider">Performance:</label>
              <input
                type="range"
                name="performanceSlider"
                min="0"
                max="100"
                step="1"
              />
            </div>
          </div>
          <div class="contentRate">
            <div class="slidecontainer">
              <label for="contentSlider">Content:</label>
              <input
                type="range"
                name="contentSlider"
                min="0"
                max="100"
                step="1"
              />
            </div>
          </div>
          <div calss="textSubmitReview">
            <textarea name="textFeedback" rows="6" cols="50">
              Here you can send me ideas for better old projects or ideas for
              new!
            </textarea>
          </div>
          <Popup
            trigger={open => (
              <input type="submit" class="submitButton" value="Submit" />
            )}
            position="right center"
            closeOnDocumentClick
          >
            <span id="popupSpan">Feedback was sent</span>
          </Popup>
        </div>
      </form>
    );
  }
}

export default Projects;
