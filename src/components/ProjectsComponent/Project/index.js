import React from 'react';

const Project = ({ slideCount, readMoreState, name, id, snippet, githubRepo, description, toolsUsed, readMore, closeReadMore }) => { //eslint-disable-line
  if (slideCount !== id) {
    return null;
  }

  return (
    <div className="projectComponentContainer">
      {readMoreState ?
        <div className="readMoreContainer">
          {slideCount === id ?
            <div className="readMoreWrapper">
              <div className="toolsUsed">
                {toolsUsed.map(tool => (
                  <p>{tool}</p>
                ))}
              </div>
              <div className="description">
                <p>{description}</p>
              </div>
              <div className="buttonContainer">
                <button className="closeReadMoreButton" onClick={() => closeReadMore()}>Close</button>
                <button className="gitHubButton">GitHub</button>
              </div>
            </div>
            :
            null
          }
        </div>
        :
        <div className="projectContainer">
          <div className="textContainer">
            <div className="projectName">
              <div>
                <p>{name}</p>
              </div>
            </div>
            <div className="projectSnippet">
              <div>
                <p>{snippet}</p>
              </div>
            </div>
          </div>
          <div className="readMoreButtonContainer">
            <button className="readMoreButton" onClick={() => readMore({ id })}>Read More</button>
          </div>
        </div>
      }
    </div>
  );
};

export default Project;
