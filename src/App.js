
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  // Initialize state
  state = {
    Person: {
      fullName: "Lionel Messi",
      bio: "Lionel Messi is an Argentine professional footballer widely regarded as one of the greatest players of all time. He is known for his incredible dribbling, creativity, and goal-scoring ability.",
      imgSrc:
        "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600",
      profession: "Professional Footballer",
    },

    shows: false,
    seconds: 0,
  };

  // Lifecycle method: runs when component mounts
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds + 1,
      }));
    }, 1000);
  }

  // Lifecycle method: runs before component is removed
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Toggle profile visibility
  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { Person, shows, seconds } = this.state;

    return (
      <div className="app-container">
        <div className="profile-wrapper">
          <h1>My Profile App</h1>

          <p className="subtitle">
            Welcome! Click the button below to view the profile.
          </p>

          <button className="toggle-btn" onClick={this.toggleProfile}>
            {shows ? "Hide Profile" : "Show Profile"}
          </button>

          {shows && (
            <div className="profile-card">
              <img
                src={Person.imgSrc}
                alt={Person.fullName}
                className="profile-image"
              />

              <div className="profile-details">
                <h2>{Person.fullName}</h2>

                <h3>{Person.profession}</h3>

                <p>{Person.bio}</p>
              </div>
            </div>
          )}

          <div className="timer">
            <h3>Component Lifecycle Timer</h3>
            <p>
              Time since component mounted:
              <strong> {seconds} seconds</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
