import React from 'react';

const Project = ({ name, id, slideCount, readMoreState, projectState, description, readMore, closeReadMore }) => { //eslint-disable-line
  return (
    <div>
      {readMoreState ?
        <div>
          {slideCount === id ?
            <div className="readMoreContainer">
              <p>{description}</p>
              <button onClick={() => closeReadMore()}>Close</button>
              <button>gitHub</button>
            </div>
            :
            null
          }
        </div>
        :
        <div>
          {
            slideCount === id ?
              <div className="projectContainerOpen">
                <p>{name}</p>
                <button onClick={() => readMore()}>Read More</button>
              </div>
              :
              <div className="projectContainerClose" />
          }
        </div>
      }
    </div>
  );
};

export default Project;
