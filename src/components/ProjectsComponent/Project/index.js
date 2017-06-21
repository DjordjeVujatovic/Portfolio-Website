import React from 'react';

const Project = ({ name, id, slideCount, readMoreState, description, readMore, closeReadMore }) => { //eslint-disable-line
  if (slideCount !== id) {
    return null;
  }

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
          <div>
            <p>{name}</p>
            <button onClick={() => readMore({ id })}>Read More</button>
          </div>
        </div>
      }
    </div>
  );
};

export default Project;
