import React, { Component } from "react";

class CV extends Component {
  render() {
    return (
      <form>
        <div class="boxRate">
          <h2 class="dynamicSubtitle">Feedback for CV:</h2>
          <div class="designRate">
            <p class="titleForSlider">Ocijeni dizajn CV-a:</p>
            <div class="slidecontainer">
              <input type="range" min="0" max="10" step="1" />
            </div>
          </div>
          <div class="contentRate">
            <p class="titleForSlider">Ocijeni sadrzaj CV-a:</p>
            <div class="slidecontainer">
              <input type="range" min="0" max="10" step="1" />
            </div>
          </div>
          <div calss="textSubmitReview">
            <textarea rows="6" cols="50">
              Here you can send me ideas for better CV on design and content.
            </textarea>
          </div>
          <input type="submit" class="submitButton" value="Submit" />
        </div>
      </form>
    );
  }
}

export default CV;
