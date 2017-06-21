import React from 'react';

const Project = ({ name, id, key, slideCount, projects, filter, readMoreState, projectState, description, readMore, closeReadMore, changeComponentState }) => { //eslint-disable-line
  return (
    <div>
      {
        slideCount === id ?
          <div className="projectComponentContaioner">
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
          :
          <div className="projectComponentContainerClose" />
      }
    </div>
  );
};

export default Project;
