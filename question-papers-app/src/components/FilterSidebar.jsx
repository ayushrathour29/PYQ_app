import React from 'react';

function FilterSidebar({ subjects, selectedSubjects, onSubjectChange }) {
  return (
    <aside style={{ width: '200px', padding: '1rem', backgroundColor: '#fff', borderRight: '1px solid #ddd' }}>
      <h3>Filter by Subject</h3>
      {subjects.map((subject) => (
        <div key={subject}>
          <label>
            <input
              type="checkbox"
              checked={selectedSubjects.includes(subject)}
              onChange={() => onSubjectChange(subject)}
            />
            {subject}
          </label>
        </div>
      ))}
    </aside>
  );
}

export default FilterSidebar;
