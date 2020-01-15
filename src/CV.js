import React, { Component } from "react";
import Popup from "reactjs-popup";

class CV extends Component {
  componentDidMount() {
    document.getElementById("wellcomeImage").style.display = "none";
  }
  handleSubmit(event) {
    event.preventDefault();
    document.getElementById("title").innerHTML = "Thank you for feedback!";
    document.getElementById("subtitle").innerHTML =
      "You can leave feedback on other categories and projects if you want.";

    var cvFeedback = {
      design: event.target.designSlider.value,
      content: event.target.contentSlider.value,
      text: event.target.textFeedback.value
    };

    var cvFeedbackJSON = JSON.stringify(cvFeedback);
    var request = new XMLHttpRequest();
    request.open(
      "POST",
      "https://cors-anywhere.herokuapp.com/https://feedbackappapi.glitch.me/cvFeedback",
      true
    );
    request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    request.send(cvFeedbackJSON);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="boxRate">
          <h2 class="dynamicSubtitle">Feedback for CV:</h2>
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
              Here you can send me ideas for better CV on design and content.
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

export default CV;
