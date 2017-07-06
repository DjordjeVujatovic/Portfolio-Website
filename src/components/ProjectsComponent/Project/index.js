import React from 'react';
import FaClose from 'react-icons/lib/fa/close';
import FaGithub from 'react-icons/lib/fa/github';
import GoBook from 'react-icons/lib/go/book';


const Project = ({ slideCount, readMoreState, name, id, snippet, githubRepo, description, toolsUsed, backgroundImage, readMore, closeReadMore }) => { //eslint-disable-line
  const backgroundProjectImage = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '98%',
    borderRadius: '10px',
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .40) 0%, rgba(0, 0, 0, .30) 100%), url(${backgroundImage})`,
    backgroundSize: 'cover',
  };
  const backgroundReadMoreImage = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .40) 0%, rgba(0, 0, 0, .30) 100%), url(${backgroundImage})`,
    backgroundSize: 'cover',
  };

  if (slideCount !== id) {
    return null;
  }

  return (
    <div className="projectComponentContainer">
      {readMoreState ?
        <div className="readMoreContainer" style={backgroundReadMoreImage}>
          {slideCount === id ?
            <div className="readMoreWrapper">
              <div className="topContainer">
                <div className="toolsUsedContainer">
                  <div className="toolsBanner">
                    <div>
                      <p>Tools Used</p>
                    </div>
                  </div>
                  <div className="toolsUsed">
                    {toolsUsed.map(tool => (
                      <p>{tool}</p>
                    ))}
                  </div>
                </div>
                <div className="descriptionContainer">
                  <div className="descriptionBanner"><div><p>{name} ?</p></div></div>
                  <div className="description">
                    <div>
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="readMoreButtonContainer">
                <button className="closeReadMoreButton" onClick={() => closeReadMore()}><FaClose /></button>
                <button className="gitHubButton">
                  <a href={`${githubRepo}`}><FaGithub /></a>
                </button>
              </div>
            </div>
            :
            null
          }
        </div>
        :
        <div className="projectContainer" style={backgroundProjectImage}>
          <div className="textContainer">
            <div className="projectName">
              <div>
                <p>{name}</p>
              </div>
            </div>
            <div className="projectSnippetContainer">
              <div className="projectSnippet">
                <p>{snippet}</p>
              </div>
            </div>
          </div>
          <div className="readMoreButtonContainer">
            <button className="readMoreButton" onClick={() => readMore({ id })}><GoBook /></button>
          </div>
        </div>
      }
    </div>
  );
};

export default Project;
