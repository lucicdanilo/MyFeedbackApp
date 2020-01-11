import React, { Component } from "react";
import Thanks from "./Thanks";
import ReactDOM from "react-dom";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  handleSubmit(event) {
    // ovdje pozivati backend
    ReactDOM.render(<Thanks />, document.getElementById("root"));
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
      <form>
        <div class="boxRate">
          <h2 class="dynamicSubtitle">Feedback for Projects:</h2>
          <div class="choseProject">
            <select>{projectsList}</select>
          </div>
          <div class="designRate">
            <div class="slidecontainer">
              <label class="designSliderLabel" for="designSlider">
                Ocijeni dizajn projekta:
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
              <label for="performanceSlider">
                Ocijeni performanse Projekta:
              </label>
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
              <label for="contentSlider">Ocijeni sadrazaj projekta:</label>
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
            <textarea rows="6" cols="50">
              Here you can send me ideas for better old projects or ideas for
              new!
            </textarea>
          </div>
          <input
            type="submit"
            class="submitButton"
            value="Submit"
            onClick={this.handleSubmit}
          />
        </div>
      </form>
    );
  }
}

export default Projects;
