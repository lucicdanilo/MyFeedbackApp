import React, { Component } from "react";
import Thanks from "./Thanks";
import ReactDOM from "react-dom";

class CV extends Component {
  componentDidMount() {
    document.getElementById("wellcomeImage").style.display = "none";
  }
  handleSubmit(event) {
    // ovdje pozivati backend
    ReactDOM.render(<Thanks />, document.getElementById("root"));
  }
  render() {
    return (
      <form>
        <div class="boxRate">
          <h2 class="dynamicSubtitle">Feedback for CV:</h2>
          <div class="designRate">
            <div class="slidecontainer">
              <label class="designSliderLabel" for="designSlider">
                Ocijeni dizajn CV-a:
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
          <div class="contentRate">
            <div class="slidecontainer">
              <label for="contentSlider">Ocijeni sadrazaj CV-a:</label>
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
              Here you can send me ideas for better CV on design and content.
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

export default CV;
