import React from 'react';
import "./VerticalTimeline.css"

const VerticalTimeline = () => {
  const timelineItems = [
    {
      title: "Event 1",
      date: "2022-01-01",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Event 2",
      date: "2022-02-01",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Event 3",
      date: "2022-03-01",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const timelineItemsJSX = timelineItems.map((item, index) => {
    return (
      <li key={index}>
        <h3>{item.title}</h3>
        <p>{item.date}</p>
        <p>{item.description}</p>
      </li>
    );
  });

  return (
    <div>
    <ul className="vertical-timeline">
      {timelineItemsJSX}
    </ul>
    </div>
  );
}

export default VerticalTimeline;
