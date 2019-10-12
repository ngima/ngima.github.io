import React, {Component} from 'react';

export default class Resume extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <div id="resume">
                <section id="skills">

                    <div className="row skill">

                        <div className="three columns header-col">
                            <h1><span>Skills</span></h1>
                        </div>

                        <div className="nine columns main-col">

                            <p>
                                {resumeData.skillsDescription}
                            </p>

                            <div className="bars">

                                <ul className="skills">
                                    {
                                        resumeData.skills && resumeData.skills.map((item) => {
                                            return (
                                                <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>

                            </div>

                        </div>

                    </div>

                </section>
                <section id="works">
                    <div className="row work">
                        <div className="three columns header-col">
                            <h1><span>Work</span></h1>
                        </div>

                        <div className="nine columns main-col">
                            {
                                resumeData.work && resumeData.work.map((item) => {
                                    return (
                                        <div className="row item">
                                            <div className="twelve columns">
                                                <h3>{item.CompanyName}</h3>
                                                <p className="info">
                                                    {item.specialization}
                                                    <span>&bull;</span> <em
                                                    className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                                                <p>
                                                    {item.Achievements}
                                                </p>
                                            </div>

                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
                <section id="education">

                    <div className="row education">

                        <div className="three columns header-col">
                            <h1><span>Education</span></h1>
                        </div>

                        <div className="nine columns main-col">
                            {
                                resumeData.education && resumeData.education.map((item) => {
                                    return (
                                        <div className="row item">
                                            <div className="twelve columns">
                                                <h3>{item.UniversityName}</h3>
                                                <p className="info">
                                                    {item.Specialization}
                                                    <span>&bull;</span> <em
                                                    className="date">{item.From} - {item.To}</em></p>
                                                <p>
                                                    {item.Achievements}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </section>
                <section id="projects">
                    <div className="row work">
                        <div className="three columns header-col">
                            <h1><span>Projects</span></h1>
                        </div>

                        <div className="nine columns main-col">
                            {
                                resumeData.projects && resumeData.projects.map((item) => {
                                    return (
                                        <div className="row item">
                                            <div className="twelve columns">
                                                <a href={item.Link} target="_blank"><h3>{item.ProjectName}</h3></a>
                                                <p className="info">
                                                    {item.Role}
                                                    <span>&bull;</span>{item.Company}
                                                    <span>&bull;</span> <em
                                                    className="date">{item.Client} {item.Period}</em></p>
                                                <p>
                                                    {item.Description}
                                                </p>
                                            </div>

                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>

                </section>
            </div>

        );
    }
}