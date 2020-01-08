import React, { Component } from "react";

class Website extends Component {
  render() {
    return (
      <form>
        <div class="boxRate">
          <h2 class="dynamicSubtitle">Feedback for Website:</h2>
          <div class="designRate">
            <p class="titleForSlider">Ocijeni dizajn sajta:</p>
            <div class="slidecontainer">
              <input type="range" min="0" max="10" step="1" />
            </div>
          </div>
          <div class="performanceRate">
            <p class="titleForSlider">Ocijena performansi:</p>
            <div class="slidecontainer">
              <input type="range" min="0" max="10" step="1" />
            </div>
          </div>
          <div class="contentRate">
            <p class="titleForSlider">Ocijeni sadrzaj sajta:</p>
            <div class="slidecontainer">
              <input type="range" min="0" max="10" step="1" />
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
