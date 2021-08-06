import axios from 'axios'
import { useState } from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import './RandomAdvice.css'

function RandomAdvice() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const getAdvice = async () => {
    try {
      setLoading(status => !status) //sets loading to true
      const message = await axios('https://api.adviceslip.com/advice')
      setLoading(status => !status) //sets loading to false
      setMessage(message.data.slip.advice)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container className='random-advice-component 
      d-flex 
      flex-column 
      align-items-center
      justify-content-around'
    >
      <Row>
        <h1 className='heading'>
          Advice Generator
        </h1>
      </Row>
      <Row>
        <Col>
          {
            !loading ?
              <Button onClick={getAdvice} className='btn-dark'>Click for Advice</Button>
              :
              <Button disabled className='btn-secondary'>Loading...</Button>
          }
        </Col>
      </Row>
      <Row >
        {
          message ?
            <em className='message p-3'>'{message}'</em>
            :
            ''
        }
      </Row>

    </Container>
  )
}

export default RandomAdvice