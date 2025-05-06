import React, { useState, useEffect } from 'react';
import FilterSidebar from './FilterSidebar';
import PaperCard from './PaperCard';
import SearchBar from './SearchBar';
import Footer from './Footer';

const samplePapers = [
  {
    id: 1,
    title: 'Mathematics 2022',
    year: 2022,
    subject: 'Mathematics',
    pdfUrl: '#',
  },
  {
    id: 2,
    title: 'Physics 2021',
    year: 2021,
    subject: 'Physics',
    pdfUrl: '#',
  },
  {
    id: 3,
    title: 'Chemistry 2020',
    year: 2020,
    subject: 'Chemistry',
    pdfUrl: '#',
  },
  {
    id: 4,
    title: 'Mathematics 2021',
    year: 2021,
    subject: 'Mathematics',
    pdfUrl: '#',
  },
];

const subjects = ['Mathematics', 'Physics', 'Chemistry'];

function UserPage() {
  const [papers, setPapers] = useState(samplePapers);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleSubjectChange = (subject) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject]
    );
  };

  const filteredPapers = papers.filter((paper) => {
    const matchesSearch =
      paper.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject =
      selectedSubjects.length === 0 || selectedSubjects.includes(paper.subject);
    return matchesSearch && matchesSubject;
  });

  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <div style={{ display: 'flex', flex: 1 }}>
        <FilterSidebar
          subjects={subjects}
          selectedSubjects={selectedSubjects}
          onSubjectChange={handleSubjectChange}
        />
        <main style={{ flex: 1, padding: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          {filteredPapers.map((paper) => (
            <PaperCard key={paper.id} paper={paper} />
          ))}
          {filteredPapers.length === 0 && <p>No papers found.</p>}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default UserPage;
