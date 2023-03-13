import React from 'react'
import styled from 'styled-components'
import { FaCss3Alt } from 'react-icons/fa'
import { SiJavascript, SiMongodb } from 'react-icons/si'
import { DiReact, DiNodejsSmall, DiPostgresql } from 'react-icons/di'
import { GrMysql } from 'react-icons/gr'

const Skills = () => {
  return (
    <Wrapper>
      <h3 className='title'> Skills </h3>
      <p>Here are all of the stuffs that I can work with: </p>
      <article className='content'>
        <div>
          <p>
            🔥 <span>General</span>
          </p>
          <ul>
            <li>
              <FaCss3Alt /> <span>HTML & CSS</span>
            </li>
            <li>
              <SiJavascript /> <span>Javascript</span>
            </li>
          </ul>
        </div>
        <div>
          <p>
            🔥 <span>Frameworks</span>
          </p>
          <ul>
            <li>
              <DiNodejsSmall /> <span>NodeJS</span>
            </li>
            <li>
              <DiReact /> <span>React</span>
            </li>
          </ul>
        </div>
        <div>
          <p>
            🔥 <span>Database</span>
          </p>
          <ul>
            <li>
              <GrMysql /> <span>MySQL</span>
            </li>
            <li>
              <DiPostgresql /> <span>Postgres</span>
            </li>
            <li>
              <SiMongodb /> <span>MongoDB</span>
            </li>
          </ul>
        </div>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  max-width: 60vw;
  margin-bottom: 10rem;

  .content {
    gap: 2rem;
    display: flex;
    flex-wrap: wrap;
  }
  .content > div {
    flex-basis: 50%;
  }

  ul {
    color: var(--primary-x1);
  }

  li {
    margin-left: 1rem;
  }

  @media (min-width: 576px) {
    .content {
      max-width: 70vw;
      gap: 3rem;
    }
    img {
      flex: 2;
      object-fit: cover;
      border-radius: 5px;
    }
    li {
      margin-left: 2rem;
    }
  }

  @media (min-width: 768px) {
    .content {
      flex-direction: row;
    }
    .info {
      flex: 8;
    }
  }

  ///////////////////////////
  .title {
    color: var(--primary-x1);
    text-align: left;
  }
  p {
    color: var(--primary-100);
  }
  span {
    color: var(--primary-300);
  }
  p span {
    color: var(--primary-100);
  }
`

export default Skills
