import { motion } from 'framer-motion'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff"}}
    contentArrowStyle={{ borderRight: '7px solid #232631'}}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
        <img src={experience.icon} 
        alt={experience.company_name} className='pointer-events-none' />
    }
  >
  <div>
    <h3 className="text-white font-bold text-[24px]">
      {experience.title}
    </h3>
    <p className="text-secondary font-semibold"
    style={{ margin: 0 }}>
      {experience.company_name}
    </p>
  </div>

  <ul className="mt-5 list-disc ml-5 space-y-2">
  {experience.points.map((point, index) => (
    <li
      key={`experience-point-${index}`}
      className="text-white-100 text-[14px] pl-1 tracking-wider"
    >
      {point}
    </li>
  ))}
</ul>
  </VerticalTimelineElement>
)


const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          Education is not the learning of facts, but the traning of the mind to think
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          My Education.
        </h2>
      </motion.div>

      <div className="mt-6 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}


        </VerticalTimeline>
      </div>

     
    </>
  )
}

export default SectionWrapper(Experience, "exp")