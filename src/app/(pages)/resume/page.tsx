"use client";

import React from "react";
import { ResumeName, ResumeContact, ResumeEvents, ResumeSkills, ResumeSummary } from '@brianwhaley/pixelated-components';
// import '@brianwhaley/pixelated-components/dist/components/resume/pixelated.resume.css';
import ResumeData from '@/app/data/resume.json';

export default function Home() {

	return (
		<section className="p-resume" id="resume-section">
            <div className="section-container">

                <div className="p-name grid12">
                <ResumeName data={ResumeData.items[0].properties.name} />
                </div>

                <div className="grid3 bigpad">{/*divider*/}
                <div className="p-contact">
                    <ResumeContact title="Contact Information" data={ResumeData.items[0].properties.contact} />
                </div>
                <div className="p-education">
                    <ResumeEvents title="Education" data={ResumeData.items[0].properties.education} />
                </div>
                <div className="p-skills">
                    <ResumeSkills title="Skills" data={ResumeData.items[0].properties.skills} />
                </div>
                </div>

                <div className="grid9 bigpad">
                <ResumeSummary title="Professional Summary" data={ResumeData.items[0].properties.summary} />
                <ResumeEvents title="Work History" data={ResumeData.items[0].properties.experience} dateFormat="yyyy" showDate />
                <ResumeEvents title="Volunteer Work" data={ResumeData.items[0].properties.volunteer} dateFormat="yyyy" showDate />
                <ResumeEvents title="Certifications" data={ResumeData.items[0].properties.certifications} />
                </div>
            </div>
        </section>
	);
}
