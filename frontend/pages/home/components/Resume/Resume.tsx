import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { ReactElement, useCallback } from 'react';

import resumeData from '../../../../constants/resumeData';
import styles from './Resume.module.scss';

export default function Resume(): ReactElement {
    const experienceRenderer = useCallback(() => {
        return (
            <div className="experience-wrapper">
                {resumeData.work.map((work, k) => {
                    return (
                        <>
                            <div className="company-wrapper clearfix" key={`comp-${k}`}>
                                <div className="experience-title">{work.company}</div>
                                <div className="time">{`${work.startDate} - ${work.endDate}`}</div>
                            </div>

                            <div key={`job-${k}`} className="job-wrapper clearfix" >
                                <div className="experience-title">{work.position}</div>
                                <div className="company-description">
                                    {work.highlights.map((highlight, k) => {
                                        return (
                                            <div key={k}>{highlight}</div>
                                        )
                                    })}
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        )
    }, []);


    const educationRenderer = useCallback(() => {
        return (
            <div className="experience-wrapper">
                {resumeData.education.map((education, k ) => {
                    return (
                        <>
                            <div className="company-wrapper clearfix" key={`comp-${k}`}>
                                <div className="experience-title">{education.institution}</div>
                                <div className="time">{`${education.startDate} - ${education.endDate}`}</div>
                            </div>

                            <div className="job-wrapper clearfix" key={`job-${k}`}>
                                <div className="experience-title">{education.studyType}</div>
                                <div className="company-description">{education.location}</div>

                            </div>
                        </>
                    )
                })}
            </div>
        )
    }, []);

    return (
        <div className="resume-wrapper">
            <section className="profile section-padding">
                <div className="container">
                    <div className="picture-resume-wrapper">
                        <img className="profile-img" src="/profile.png" />
                        <div className="clearfix"></div>
                    </div>
                    <div className="name-wrapper">
                        <h1>{resumeData.basics.name.split(' ')[0]}<br />{resumeData.basics.name.split(' ')[1]}</h1>
                    </div>
                    <div className="clearfix"></div>
                    <div className="contact-info clearfix">
                        <ul className="list-titles">
                            <li>Call</li>
                            <li>Mail</li>
                            <li>Home</li>
                            <li>Web</li>
                            <li>Github</li>
                            <li>Linkdin</li>
                        </ul>
                        <ul className="list-content ">
                            <li>{resumeData.basics.phone}</li>
                            <li>{resumeData.basics.email}</li>
                            <li>{resumeData.basics.location.address}</li>
                            <li><a href={`https://${resumeData.basics.website}`}>{resumeData.basics.website}</a></li>
                            <li><a href="https://github.com/thomasmathew365" target={"_blank"}>Thomasmathew365</a></li>
                            <li><a href="https://linkedin.com/in/thomasmathew365" target={"_blank"}>Thomasmathew365</a></li>
                        </ul>
                    </div>
                    <div className="contact-presentation">
                        <p>As a skilled <span className="bold">web developer</span> with 7 years of experience, I have a strong background  in creating and implementing effective and engaging web solutions. I have deep understanding of JavaScript, <span className="bold">React</span> and other relevant technologies to help with designing and building high-quality, scalable, and performant UIs that provide a seamless experience for users. I am also familiar with agile development methodologies, which allow me to work efficiently and collaboratively in a team environment. I am also experience in back-end technologies with a keen interest in devops.</p>
                    </div>
                    <div className="section-wrapper clearfix">
                        <h3 className="section-title">Skills</h3>
                        <ul>
                            {resumeData.skills.map((skill, k) => {
                                return (
                                    <>
                                        <li className="skill-percentage" key={`li-${k}`}>{skill.name}</li>
                                        <div className="skill-subtitle" key={`sub-${k}`}>{skill.keywords.join(', ')}</div>
                                    </>
                                )
                            })}
                        </ul>

                    </div>
                    <section className="experience section-padding" style={{ width: '100%', padding: '5px' }}>
                        <div className="container">
                            <h3 className="experience-title">Education</h3>
                            {educationRenderer()}

                        </div>
                    </section>

                </div>
            </section >

            <section className="experience section-padding">
                <div className="container">
                    <h3 className="experience-title">Experience</h3>
                    {experienceRenderer()}

                </div>
            </section>

            <div className="clearfix"></div>

            <a href="/Resume-Thomas-Mathew.pdf" download className={classNames(styles["float"])}>
                <FontAwesomeIcon icon={faFileDownload} size="2x" />
            </a>
        </div >
    );
}
