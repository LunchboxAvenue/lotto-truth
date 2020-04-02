import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Badge from 'react-bootstrap/Badge'
import Table from 'react-bootstrap/Table'
import Alert from 'react-bootstrap/Alert'
import InputGroup from 'react-bootstrap/InputGroup'
import getRandomNumberSample from '../utils/numberGenerator'
import pickFiveNumbers from '../utils/abbreviatedWheels/pickFiveNumbers'
import pickSixNumbers from '../utils/abbreviatedWheels/pickSixNumbers'
import { Formik, FieldArray } from 'formik'
import { uniq } from 'lodash'

const Wheeling: React.FC = () => {
  return (
    <Container fluid>
      <Row className="flex-xl-nowrap">
        <Col className="col-xl-2 col-md-2 col-2 d-flex flex-column">
          {/* left info */}
        </Col>
        <Col className="col-xl-8 col-md-8 col-8 d-flex flex-column main-info">
          <h1 id="introduction">
            Wheeling
          </h1>
          <p className="lead">
            Distributing a subset of the possible lottery numbers
          </p>
          <h3 id="wheeling" className="heading">
            <div className="inner">
              <span className="anchor-wrapper">Not going for jackpot?
                <a href="#wheeling" className="anchor"><span>#</span></a>
              </span>
            </div>
          </h3>
          <p>
            <a href="https://en.wikipedia.org/wiki/Lottery_wheeling" target="_blank" rel="noopener noreferrer"><span>Lottery wheeling</span></a>
            &nbsp;is all about winning smaller prizes that the lottery offers. This page will contain a collection of wheels that you
            can use yourself or in a so-called <strong>"syndicate"</strong> of your colleagues/friends. Unlike other website, we are
            not going to try to sell you our <strong>winning</strong> wheeling software. If you need wheels - here you can use them for free.
            This website uses library called <a href="https://github.com/ckknight/random-js" target="_blank" rel="noopener noreferrer"><span>random.js</span></a> to
            generate random numbers.
          </p>
          <Alert variant='info'>
            Please note that you can always win more than the minimum prize guaranteed by the wheel.
          </Alert>
          <h3 id="howtouse" className="heading">
            <div className="inner">
              <span className="anchor-wrapper">How to use
                <a href="#howtouse" className="anchor"><span>#</span></a>
              </span>
            </div>
          </h3>
          <p>
            1) Select lottery system you are going to play <br />
            2) Select a "guarantee" available for particular lottery <br />
            3) Set the Minimum and Maximum numbers in the lottery you are participating in <br />
            3) Select the available wheels <br />
            4) Press 'Randomise' and random numbers will populate your tickets <br />
            5) You can manually enter your "lucky" numbers.
          </p>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Abbreviated Wheels
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Formik
                    onSubmit={console.log}
                    initialValues={{
                      lotterySystem: 'Pick 5 Lottery',
                      wheelName: '3-win if 3',
                      combinationId: '-1',
                      selectedNumbers: [],
                      minNumber: 1,
                      maxNumber: 50,
                      ticketCost: 0
                    }}
                  >
                    {({
                      handleSubmit,
                      handleChange,
                      values,
                      setFieldValue
                    }) => {
                      const lotteries = ['Pick 5 Lottery', 'Pick 6 Lottery']
                      const wheels = values.lotterySystem === 'Pick 5 Lottery' ? pickFiveNumbers : pickSixNumbers
                      const guarantees = uniq(wheels.map(x => x.name))
                      const wheelsList = wheels.filter(x => x.name === values.wheelName)

                      var availableWheelList = wheelsList.map((val, index) => {
                        return { id: val.id, numbers: val.numbers, combinations: val.combinations }
                      })

                      const resultingStructureCopy = wheels.filter(x => x.name === values.wheelName)
                      const numbersToSelect = resultingStructureCopy && resultingStructureCopy.length > 0 ? resultingStructureCopy[0].numbers : 0
                      const selectedStructure = resultingStructureCopy && resultingStructureCopy.length > 0 && resultingStructureCopy[0].structure

                      let totalTicketCost = 0
                      if (resultingStructureCopy && resultingStructureCopy.length > 0) {
                        totalTicketCost = resultingStructureCopy[0].combinations * values.ticketCost
                      }

                      return (
                        <Form noValidate onSubmit={handleSubmit}>
                          <Form.Row>
                            <Form.Group as={Col} md="2" controlId="lotterySystemSelect">
                              <Form.Label>Lottery System</Form.Label>
                              <Form.Control
                                as="select"
                                name="lotterySystem"
                                value={values.lotterySystem}
                                onChange={handleChange}
                              >
                                {lotteries.map(lotteryName => {
                                  return <option key={lotteryName}>{lotteryName}</option>
                                })}
                              </Form.Control>
                            </Form.Group>
                            {values && values.lotterySystem && (
                              <Form.Group as={Col} md="2" controlId="exampleForm.ControlSelect2">
                                <Form.Label>Guarantee</Form.Label>
                                <Form.Control
                                  as="select"
                                  name="wheelName"
                                  value={values.wheelName}
                                  onChange={handleChange}
                                >
                                  {guarantees.map(guaranteeName => {
                                    return <option key={guaranteeName}>{guaranteeName}</option>
                                  })}
                                </Form.Control>
                              </Form.Group>
                            )}
                            <Form.Group as={Col} md="1" controlId="minNumbers">
                              <Form.Label>Min</Form.Label>
                              <Form.Control
                                type="number"
                                name="minNumber"
                                value={values.minNumber.toString()}
                                onChange={handleChange}
                              />
                            </Form.Group>
                            <Form.Group as={Col} md="1" controlId="maxNumber">
                              <Form.Label>Max</Form.Label>
                              <Form.Control
                                type="number"
                                name="maxNumber"
                                value={values.maxNumber.toString()}
                                onChange={handleChange}
                              />
                            </Form.Group>
                            <Form.Group as={Col} md="2" controlId="ticketCost">
                              <Form.Label>1 Ticket Cost</Form.Label>
                              <Form.Control
                                type="number"
                                name="ticketCost"
                                value={values.ticketCost.toString()}
                                onChange={handleChange}
                              />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="combinationId">
                              <Form.Label>Wheel Name</Form.Label>
                              <Form.Control
                                as="select"
                                name="combinationId"
                                value={values.combinationId}
                                onChange={handleChange}
                              >
                                <option value='-1'>Choose...</option>
                                {availableWheelList.map((val, index) => {
                                  return <option key={index} value={val.id}>{`Numbers: ${val.numbers}, Combinations: ${val.combinations}`}</option>
                                })}
                              </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="selectedStructure">
                              {selectedStructure && selectedStructure.length && values.selectedNumbers.length > 0 && (
                                <Table striped bordered hover size="sm">
                                  <thead>
                                    <tr>
                                      <th>Ticket #</th>
                                      <th>Combination</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {selectedStructure.map((array, index) => {
                                      let arr: number[] = []
                                      array.forEach(pseudoIndex => arr.push(values.selectedNumbers[pseudoIndex - 1]))
                                      return (
                                        <tr key={index}>
                                          <td>{index + 1}</td>
                                          <td>
                                            {arr.map(x => {
                                              return (<span key={x}>
                                                <Badge className='mr-2' variant="secondary">{x}</Badge>
                                              </span>)
                                            })}
                                          </td>
                                        </tr>)
                                    })}
                                  </tbody>
                                </Table>
                              )}
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="exampleForm.inputs">
                              <FieldArray
                                name="numbers"
                                render={arrayHelpers => (
                                  <div>
                                    {values.selectedNumbers
                                      && values.selectedNumbers.length > 0
                                      && values.selectedNumbers.map((num, index) => {
                                        return (
                                          <React.Fragment key={index}>
                                            <InputGroup>
                                              <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroupPrepend">#</InputGroup.Text>
                                              </InputGroup.Prepend>
                                              <Form.Control
                                                type="text"
                                                aria-describedby="inputGroupPrepend"
                                                name={`selectedNumbers.${index}`}
                                                value={num}
                                                onChange={handleChange}
                                              />
                                            </InputGroup>
                                          </React.Fragment>
                                        )
                                      }
                                      )}
                                  </div>
                                )}
                              />
                            </Form.Group>
                            <Form.Group as={Col} md="2" controlId="exampleForm.ControlSelect3">
                              <ButtonToolbar>
                                <Button
                                  variant="primary"
                                  disabled={values.combinationId === '-1'}
                                  onClick={() => {
                                    setFieldValue('selectedNumbers', getRandomNumberSample(values.minNumber, values.maxNumber, numbersToSelect))
                                  }}
                                >
                                  Randomise
                                </Button>
                              </ButtonToolbar>
                            </Form.Group>
                            <Form.Group as={Col} md="2">
                              <Form.Label>Total tickets cost: € {values.combinationId === '-1' ? 0 : totalTicketCost}</Form.Label>
                            </Form.Group>
                          </Form.Row>
                          {/* <Button type="submit">Submit form</Button> */}
                        </Form>
                      )
                    }}
                  </Formik>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Full Wheels
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>This is too expensive, don't even try, pal</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
        <Col className="col-xl-2 col-md-2 col-2 d-flex flex-column">
          {/* right info */}
        </Col>
      </Row>
    </Container>
  )
}

export default Wheeling