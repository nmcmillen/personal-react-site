import React from "react";
import { Accordion } from "react-bootstrap";

export default function April22() {
  return (
    <div>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Blog #10: Rounding 3rd (4/3/22)</Accordion.Header>
          <Accordion.Body>
            <p>
              Now that we are wrapping up week 10 of the bootcamp, I’m starting
              to feel a little more proficient in finding my way around
              problems. This week we learned Python through an Evercraft build
              along with Test Driven Development. I felt Python was somewhat
              easy to learn having known another language instead of starting
              from scratch as I did with JavaScript. I was actually quite
              surprised in how similar the languages are with some processes
              sharing the same methods or with little translation. The more I
              used Python, the more powerful it felt in comparison to vanilla JS
              so I look forward to diving deeper into it.
            </p>

            <p>
              My biggest issue with our Evercraft project was simply not
              understanding the game of Evercraft (D&D) which definitely held me
              up throughout the process. I had expected learning Python to be a
              struggle at first since my biggest hurdle throughout the bootcamp
              is working on a brand new project while also trying to learn a new
              language and/or library so I was glad to be able to get through
              writing Python reasonably well. As we move forward, I feel the
              next hurdle is going to be tying both the front and backend
              together just not knowing how they work in sync.
            </p>

            <p>
              I’m still unsure where I’m headed with a final project until I
              know more of what I’m fully capable of after the next couple of
              weeks. Ideally, I’d like to create some sort of site where a user
              can login and create and/or search other data on the site. With so
              many sites these days, at least that I use, being driven by user
              generated content, I think that would be most useful for me to
              learn and build an entire project with features that many social
              media type sites use. Time will tell!
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
