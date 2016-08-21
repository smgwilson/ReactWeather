var React = require('react');

var About = () => {
  return (
    <div>
        <h1 className="text-center page-title">About</h1>
        <p>
          This is a weather application built on React.  I have built this
          for the complete React web developer course
      </p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react/">React</a> - this was the JavaScript framework used
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used open weather map to search for weather
            data by city name
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
