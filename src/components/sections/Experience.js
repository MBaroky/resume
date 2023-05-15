import React from 'react';
import Timeline from '../Timeline'

function Experience({items, skills }) {

    return (
        <Timeline   items={items} skills={skills} id="experience" type="work" />
     );
}

export default Experience;