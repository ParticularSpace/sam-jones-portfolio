import React from 'react';
import Project from './Project';

const Portfolio = () => {
    // Replace these with your actual projects
    const projects = [
        {
            title: "Project 1",
            image: "project1.jpg",
            deployedUrl: "https://example.com/project1",
            repoUrl: "https://github.com/ParticularSpace/A1"
        }
    ];

    return (
        <section>
            <h2>Portfolio</h2>
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </section>
    );
};

export default Portfolio;
