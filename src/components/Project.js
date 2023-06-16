import React from 'react';

const Project = ({ title, image, deployedUrl, repoUrl }) => {
    return (
        <div>
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <a href={deployedUrl}>Deployed App</a>
            <a href={repoUrl}>GitHub Repo</a>
        </div>
    );
};

export default Project;
