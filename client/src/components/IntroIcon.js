import React from 'react'
import styled from 'styled-components'

const IntroIcon = () => {
  return (
    <Wrapper>
      <svg
        width='356'
        height='383'
        viewBox='0 0 356 383'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1.00001 116.5L1.00002 268.5C1.00002 285.7 10.3333 297.333 15 301L47 321L98.5 351C113.5 359.667 145.1 377.8 151.5 381C157.9 384.2 159.167 380.667 159 378.5V223.5C159 217.9 160.333 216.833 161 217H191.5C196.7 217 198 218.667 198 219.5V275C198 281 201.333 280.833 203 280L238 260C244.333 256.333 258 248.4 262 246C266 243.6 267 241 267 240V101.5C267 98.3 269.667 98.5 271 99C275.667 101.833 287 108.6 295 113C303 117.4 305 120.167 305 121V253C305 262.6 304.333 265.667 304 266L302 267L286.5 276L238.5 303.5C232.833 306.833 219.1 314.8 209.5 320C199.9 325.2 197.833 328.833 198 330V375C198 383.8 202 383 204 381.5L229.5 366.5L300.5 326C311.167 320 334.5 306.1 342.5 298.5C350.5 290.9 354.5 273.667 355.5 266V111.5C355.5 96.3 344.5 84.5 339 80.5L292.5 53C265 37 208.9 4.40001 204.5 2.00001C200.1 -0.399992 198 2.33334 197.5 4.00001V162.5C197.5 165.7 195.833 166.167 195 166H163C159.8 166 159 163.667 159 162.5V106C159 102 155 103 153 104L149.5 106C134.667 114.5 103.4 132.3 97 135.5C90.6 138.7 89.3334 142.5 89.5 144V283C89.5 285.8 86.8334 285.167 85.5 284.5C77.8334 280 61.3 270.3 56.5 267.5C51.7 264.7 50.8333 263 51 262.5V126C51 120 52.3333 117.833 53 117.5L68 109L130.5 73.5C134.833 70.8333 145.1 64.6 151.5 61C157.9 57.4 159.167 54.8333 159 54V4.00001C159 0.800008 154.667 1.33334 152.5 2.00001L109 27C89.1667 38.3333 44.4 63.9 24 75.5C3.60001 87.1 0.166681 107.667 1.00001 116.5Z'
          fill='#31E8FF'
          stroke='#31E8FF'
        />
      </svg>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100px;
    transition: all 4s ease-out;
    animation: disappear 0.1s linear forwards;
    animation-delay: 2s;
  }

  path {
    stroke-width: 5;
    stroke: var(--primary-x);
    stroke-dasharray: 3600;
    stroke-dashoffset: 0;
  }
  path {
    animation: animate-icon 2s linear forwards;
  }

  @keyframes animate-icon {
    0% {
      stroke-dashoffset: 0;
    }
    20% {
      stroke-dashoffset: 0;
    }
    40% {
      stroke-dashoffset: 3600;
    }
    80% {
      stroke-dashoffset: 7200;
      fill: transparent;
    }
    100% {
      stroke-dashoffset: 7200;
    }
  }

  @keyframes disappear {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(0);
    }
  }
`

export default IntroIcon
