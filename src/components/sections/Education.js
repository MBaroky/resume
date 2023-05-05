import React from 'react';
import Timeline from '../Timeline'

function Education({items, skills}) {
    return (
        <Timeline items={items} skills={skills} id="education" type="education" />
     );
}

export default Education;