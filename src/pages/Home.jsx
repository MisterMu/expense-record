import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import NumberFormat from '../components/NumberFormat'

const StyledContainer = styled.div`
  text-align: center;
  height: 100%;

  .content {
    height: calc(100% - 5rem);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    h1.expense {
      font-size: 4em;
    }
  }

  .button-container {
    width: 100%;
    padding: 1rem 2rem;
    button {
      width: 100%;
      padding: 1rem;
      border: none;
      border-radius: 4px;
      font-weight: 600;
    }
  }
`

const HomePage = () => {
  const expense = 0

  const dateStr = dayjs().format('MMMM YYYY')

  return (
    <StyledContainer>
      <div className="content">
        <div>{dateStr}</div>
        <h1 className="expense">
          <NumberFormat
            number={expense}
            suffix="฿"
            suffixStyle={{ fontSize: '0.5em', fontWeight: 500 }}
          />
        </h1>
      </div>
      <div className="button-container">
        <button>Add Record Button</button>
      </div>
    </StyledContainer>
  )
}

export default HomePage
