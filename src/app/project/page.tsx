'use client';

import React from 'react';
import { projects } from '../components/Project';
import Card from '../components/Card';

const ProjectPage: React.FC = () => {
  return (
    <main className='main'>
      {projects.map((project, i) => (
        <Card key={`p_${i}`} {...project} i={i} />
      ))}
    </main>
  );
};

export default ProjectPage;
