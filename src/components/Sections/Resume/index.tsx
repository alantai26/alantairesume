// src/components/Sections/Resume/index.tsx

import {FC, memo} from 'react';

import {SectionId} from '../../../data/data';
import Section from '../../Layout/Section';

const Resume: FC = memo(() => {
  return (
    // We keep the Section wrapper for consistent site layout and navigation
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex w-full flex-col items-center justify-center gap-y-8 py-8">
        {/* --- Embed the Resume PDF --- */}
        <object
          aria-label="My Resume PDF"
          className="h-[1100px] w-full max-w-5xl rounded-lg shadow-2xl" // Set a height for the PDF viewer
          data="/images/Alan Tai's Resume.pdf" // This path now correctly points to the public folder
        >
          {/* Fallback content for browsers that don't support embedding PDFs */}
          <p>Your browser does not support embedded PDFs. Please download the PDF to view it.</p>
        </object>

        {/* --- The PDF Download Button --- */}
        <a
          className="rounded-full bg-orange-500 px-6 py-3 text-lg font-semibold text-white shadow-md transition-transform duration-200 hover:scale-105 hover:bg-orange-600"
          download="Alan Tai's Resume.pdf"
          href="/images/Alan Tai's Resume.pdf">
          Download PDF
        </a>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
