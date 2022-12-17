import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { ReactElement, useCallback } from 'react';

import resumeData from '../../../../constants/resumeData';
import styles from './Resume.module.scss';

export default function Resume(): ReactElement {
    const experienceRenderer = useCallback(() => {
        return (
            <div className={classNames(styles["experience-wrapper"])}>
                {resumeData.work.map((work, k) => {
                    return (
                        <React.Fragment key={`comp-${k}`}>
                            <div className={classNames(styles["company-wrapper"], styles["clearfix"])} >
                                <div className={classNames(styles["experience-title"])}>{work.company}</div>
                                <div className={classNames(styles["time"])}>{`${work.startDate} - ${work.endDate}`}</div>
                            </div>

                            <div className={classNames(styles["job-wrapper"], styles["clearfix"])} >
                                <div className={classNames(styles["experience-title"])}>{work.position}</div>
                                <div className={classNames(styles["company-description"])}>
                                    {work.highlights.map((highlight, k) => {
                                        return (
                                            <div key={k}>{highlight}</div>
                                        )
                                    })}
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
        )
    }, []);


    const educationRenderer = useCallback(() => {
        return (
            <div className={classNames(styles["experience-wrapper"])}>
                {resumeData.education.map((education, k) => {
                    return (
                        <React.Fragment key={`comp-${k}`}>
                            <div className={classNames(styles["company-wrapper"], styles["clearfix"])} >
                                <div className={classNames(styles["experience-title"])}>{education.institution}</div>
                                <div className={classNames(styles["time"])}>{`${education.startDate} - ${education.endDate}`}</div>
                            </div>

                            <div className={classNames(styles["job-wrapper"], styles["clearfix"])} >
                                <div className={classNames(styles["experience-title"])}>{education.studyType}</div>
                                <div className={classNames(styles["company-description"])}>{education.location}</div>

                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
        )
    }, []);

    return (
        <div className={classNames(styles["resume-wrapper"])}>
            <section className={classNames(styles["profile"], styles["section-padding"])}>
                <div className={classNames(styles["container"])}>
                    <Image className={classNames(styles["profile-img"])} alt="profile-image" src="/profile-2.jpg" width={175} height={175} />
                    <div className={classNames(styles["name-wrapper"])}>
                        <h1>{resumeData.basics.name.split(' ')[0]}<br />{resumeData.basics.name.split(' ')[1]}</h1>

                    </div>
                    <div className={classNames(styles["clearfix"])}></div>
                    <div className={classNames(styles["contact-info"], styles["clearfix"])}>
                        <ul className={classNames(styles["list-titles"])}>
                            <li>Call</li>
                            <li>Mail</li>
                            <li>Home</li>
                            <li>Web</li>
                            <li>Github</li>
                            <li>Linkdin</li>
                        </ul>
                        <ul className={classNames(styles["list-content"])}>
                            <li>{resumeData.basics.phone}</li>
                            <li>{resumeData.basics.email}</li>
                            <li>{resumeData.basics.location.address}</li>
                            <li><a className={classNames(styles["link"])} rel="noreferrer" href={`https://${resumeData.basics.website}`} target={"_blank"}>{resumeData.basics.website}</a></li>
                            <li><a className={classNames(styles["link"])} rel="noreferrer" 
                            href="https://github.com/thomasmathew365" target={"_blank"}>Thomasmathew365</a></li>
                            <li><a className={classNames(styles["link"])} rel="noreferrer" href="https://linkedin.com/in/thomasmathew365" target={"_blank"}>Thomasmathew365</a></li>
                        </ul>
                    </div>
                    <div className={classNames(styles["contact-presentation"])}>
                        <p>As a skilled <span className={classNames(styles["bold"])}>web developer</span> with 7 years of experience, I have a strong background  in creating and implementing effective and engaging web solutions. I have deep understanding of JavaScript, <span className={classNames(styles["bold"])}>React</span> and other relevant technologies to help with designing and building high-quality, scalable, and performant UIs that provide a seamless experience for users. I am also familiar with agile development methodologies, which allow me to work efficiently and collaboratively in a team environment. I am also experience in back-end technologies with a keen interest in devops.</p>
                    </div>
                    <div className={classNames(styles["section-wrapper"], styles["clearfix"])}>
                        <h3 className={classNames(styles["section-title"])}>Skills</h3>
                        <ul>
                            {resumeData.skills.map((skill, k) => {
                                return (
                                    <React.Fragment key={k}>
                                        <li className={classNames(styles["skill-percentage"])} >{skill.name}</li>
                                        <div className={classNames(styles["skill-subtitle"])}>{skill.keywords.join(', ')}</div>
                                    </React.Fragment>
                                )
                            })}
                        </ul>

                    </div>
                    <section className={classNames(styles["experience"], styles["section-padding"])} style={{ width: '100%', padding: '5px', minHeight: '100px' }}>
                        <h3 className={classNames(styles["experience-title"])}>Education</h3>
                        {educationRenderer()}
                    </section>

                </div>
            </section >

            <section className={classNames(styles["experience"], styles["section-padding"])}>
                <div className={classNames(styles["container"])}>
                    <h3 className={classNames(styles["experience-title"])}>Experience</h3>
                    {experienceRenderer()}

                </div>
            </section>

            <div className={classNames(styles["clearfix"])}></div>



            <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="/resume-thomas-2022.pdf" download className={classNames(styles["float"])}            >
                <FontAwesomeIcon icon={faFileDownload} size="2x" />
            </motion.a>
        </div >
    );
}
