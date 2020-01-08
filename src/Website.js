import React, { Component } from "react";

class Website extends Component {
  render() {
    return (
      <form>
        <div class="boxRate">
          <h2 class="dynamicSubtitle">Feedback for Website:</h2>
          <div class="designRate">
            <div class="slidecontainer">
              <label for="designSlider">Ocijeni dizajn Website-a:</label>
              <input
                type="range"
                name="designSlider"
                min="0"
                max="10"
                step="1"
              />
            </div>
          </div>
          <div class="performanceRate">
            <div class="slidecontainer">
              <label for="performanceSlider">
                Ocijeni performanse Website-a:
              </label>
              <input
                type="range"
                name="performanceSlider"
                min="0"
                max="10"
                step="1"
              />
            </div>
          </div>
          <div class="contentRate">
            <div class="slidecontainer">
              <label for="contentSlider">Ocijeni sadrzaj Website:</label>
              <input
                type="range"
                name="contentSlider"
                min="0"
                max="10"
                step="1"
              />
            </div>
          </div>
          <div calss="textSubmitReview">
            <textarea rows="6" cols="50">
              Here you can send me ideas for better website on design,
              performance, content and etc.
            </textarea>
          </div>
          <input type="submit" class="submitButton" value="Submit" />
        </div>
      </form>
    );
  }
}

export default Website;
