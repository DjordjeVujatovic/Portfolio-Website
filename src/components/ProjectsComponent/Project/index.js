import React from 'react';

const Project = ({ name, id, slideCount, readMoreState, description, readMore, closeReadMore }) => { //eslint-disable-line
  return (
    <div>
      {readMoreState ?
        <div>
          {slideCount === id ?
            <div>
              <p>{description}</p>
              <button onClick={() => closeReadMore()}>Close</button>
            </div>
            :
            null
          }
        </div>
        :
        <div>
          {
            slideCount === id ?
              <div>
                <p>{name}</p>
                <button onClick={() => readMore({ id })}>Read More</button>
              </div>
              :
              null
          }
        </div>
      }
    </div>
  );
};

export default Project;
