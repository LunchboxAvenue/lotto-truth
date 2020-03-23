import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';


const Truth: React.FC = () => {
  return (
    <Container fluid>
      <Row className="flex-xl-nowrap">
        <Col className="col-xl-2 col-md-2 col-2 d-flex flex-column">
          {/* left info */}
        </Col>
        <Col className="col-xl-8 col-md-8 col-8 d-flex flex-column main-info">
          <h1 id="introduction">
            Introduction
          </h1>
          <p className="lead">
            Learn the truth behind lottery and your chances to win it
          </p>
          <h3 id="truth" className="heading">
            <div className="inner">
              <span className="anchor-wrapper">The Truth
                <a href="#truth" className="anchor"><span>#</span></a>
              </span>
            </div>
          </h3>
          <p>
            Which of these two combinations look more likely to be drawn in your
            opinion: <code>"1, 2, 3, 4, 5, 6"</code> or <code>"2, 13, 18, 27, 33, 41"</code> ? <br />
            Most of us would point to the <strong>second</strong> combination of numbers,
            but both of them are <strong>exactly as likely</strong> to be drawn.
            Dive deeper into <a href="https://en.wikipedia.org/wiki/Lottery_mathematics" target="_blank" rel="noopener noreferrer"><span>lottery mathematics</span></a> for calculations.
          </p>
          <p>
            You might have seen information describing that one <strong>set of numbers</strong> (e.g. "contains at least one even number")
            being more likely drawn than the <strong>other set of numbers</strong> (e.g. "contains only numbers from 40 to 50").
            While this is the case when speaking of sets, you are <strong>no longer</strong> speaking of individual combination of lottery numbers.
            You are talking about the probability that the lottery numbers have a certain property.
            You are obviously more likely to draw a lottery combination that belongs to a large set rather than the small
            one, but <strong>the larger the set, the less likely</strong> is that your combination will be drawn.
          </p>
          <Alert variant='info'>
            The probability for a particular combination of numbers is exactly the same for each and every possible lottery drawing. Period. <br />
            Always keep this in mind, especially when you see people trying to sell you the next winning combination of numbers or lottery number
            generators.
          </Alert>
          <h3 id="gamblers-fallacy" className="heading">
            <div className="inner">
              <span className="anchor-wrapper">Gambler's Fallacy
                <a href="#gamblers-fallacy" className="anchor"><span>#</span></a>
              </span>
            </div>
          </h3>
          <p>
            <a href="https://en.wikipedia.org/wiki/Gambler%27s_fallacy" target="_blank" rel="noopener noreferrer"><span>Gambler's fallacy</span></a> - is
            a belief that the event is more likely to happen in the future, while it is known that such events <strong>do not</strong> depend on the past.
            You see a person tossing a coin, and notice that he has tossed <code>"heads"</code> six times in a row. You assume that his luck should run out and
            the next one must be <code>"tails"</code>. Or the opposite, you might assume that he is lucky, so the next toss is likely to be <code>"heads"</code> again.
            This is the example of the gambler's fallacy, because previous events do not change the probability of the next coin toss event, it is always going
            to stay <code>"1/2"</code> (50%) (heads or tails).
          </p>
          <p>
            Speaking of lottery, there are plenty of websites providing statistics about the number of times particular number was drawn, <code>"most/least common
            numbers"</code>, <code>"hot/cold numbers"</code>, present you information in sortable tables, etc, <strong>but</strong> there is no point in
            analyzing this information, because lottery number draw is an independent event.
          </p>
          <p>
            Gambler's fallacy <strong>does not</strong> apply to games such as poker or blackjack, because the likelyhood of a particular card
            being drawn does in fact depend on the previous draws. In a deck of 52 cards, there's a <code>4/52</code> (7.69%) chance of drawing
            any particular card. For example, if you pick a card from the top of the deck, and it's a <code>King</code>, the probability changes for your
            next draw. <code>3/51</code> (5.88%) chance to draw another <code>King</code>, but chances to draw any other rank has increased to <code>4/51</code> (7.84%).
          </p>
          <h3 id="lottery-probability" className="heading">
            <div className="inner">
              <span className="anchor-wrapper">Speaking of probability
                <a href="#lottery-probability" className="anchor"><span>#</span></a>
              </span>
            </div>
          </h3>
          <p>
            There are plenty of lotteries to choose from, some are restricted only to it's country residents, some are transnational.
            For probability comparison we are going to use <a href="https://en.wikipedia.org/wiki/Eurojackpot" target="_blank" rel="noopener noreferrer"><span>Eurojackpot</span></a>
            &nbsp;and <a href="https://en.wikipedia.org/wiki/Powerball" target="_blank" rel="noopener noreferrer"><span>Powerball</span></a>.
          </p>
          <p>
            In <strong>Eurojackpot</strong> to win the jackpot you have to guess 5 main numbers (from 1 to 50) and 2 additional numbers (from 1 to 10)
            Your chances to win the jackpot are <code>(1/95 344 200)</code> which is around <code><strong>0.00000</strong>104%</code>
          </p>
          <p>
            In <strong>Powerball</strong> to win the jackpot you have to guess 5 main numbers (from 1 to 69) and 1 additional numbers (from 1 to 26)
            Your chances to win the jackpot are <code>(1/292 201 338)</code> which is around <code><strong>0.000000</strong>342%</code>
          </p>
          <p>
            As you can see, your chances are slightly better when playing <strong>Eurojackpot</strong> than <strong>Powerball</strong>. <br />
            National lotteries usually provide better odds of winning, but the jackpot amount gets smaller. <br />
          </p>
          <h3 id="should-you-play" className="heading">
            <div className="inner">
              <span className="anchor-wrapper">Should you play?
                <a href="#should-you-play" className="anchor"><span>#</span></a>
              </span>
            </div>
          </h3>
          <p>
            Let's be honest, the chances of winning are so slim, that it's safe to say that you are not going to win the next lottery jackpot. <br />
            So why would you play?
          </p>
          <p>
            You may want to play for entartainment or join your colleagues to cooperatively take a chance on winning the jackpot.
            Maybe you've got free money that you are willing to bet for a tiny chance to completely change your life. 
            Or maybe, you're just feeling lucky today. Oh, and if you do win the lottery, I suggest you look at&nbsp;
            <a target="_blank"
              href="https://www.reddit.com/r/AskReddit/comments/24vzgl/you_just_won_a_656_million_dollar_lottery_what_do/chba4bf/"
              rel="noopener noreferrer">
                <span>this reddit comment</span>
            </a>
            , explaining in detail what you should and should not do.
          </p>
          <p>
            If you decide to play the lottery, please follow these rules:
          </p>
          <p>
            <strong>Never</strong> think of playing lottery as a way to make money. <br />
            Any gambling should be seen as a form of <strong>entertainment</strong>. <br />
            Only gamble with money you <strong>can afford to lose</strong>. <br />
            Set your money <strong>limit</strong> in advance. <br />

            There are far better ways to get more money: [ ... ]
          </p>
          <h3 id="scratchcards" className="heading">
            <div className="inner">
              <span className="anchor-wrapper">Scratchcards / Instant Lotteries
                <a href="#scratchcards" className="anchor"><span>#</span></a>
              </span>
            </div>
          </h3>
          <p>
            As an advice for scratchcards, you should stay away from the cheapest ones. <br />
            First of all, everybody buys a cheap scratchcard, so the chance of winning a good prize is pretty low. <br />
            Secondly, in a cheap scratchcard the top prize is not going to be that big. <br />
          </p>
          <p>
            So as far as scratchcards go, if you decide to buy one - you're better off buying a more expensive one.
          </p>
        </Col>
        <Col className="col-xl-2 col-md-2 col-2 d-flex flex-column">
          {/* right info */}
        </Col>
      </Row>
    </Container>
  )
}

export default Truth