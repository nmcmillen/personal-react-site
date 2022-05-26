import React from "react";
import { Accordion } from "react-bootstrap";

export default function April22() {
  return (
    <div>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Blog #11: Same But Different (4/10/22)
          </Accordion.Header>
          <Accordion.Body>
            <p>
              As we dive in more with Python, I continue to see the similarities
              it has with Javascript. It’s almost like a “Copy my homework, but
              change a couple words so it doesn’t look like you copied me”
              situation where the two share similar formatting and methods.
              Initial function set up is nearly the same, if else statements,
              arrays in JS are called lists in Python but are the same thing,
              etc. Learning JavaScript felt more difficult at first but I think
              that made learning Python a whole lot smoother. Python is a
              familiar face that reads almost like plain english with cleaner
              formatting over JS. Then add in an extra pinch of salt that kicks
              the flavor up a notch in terms of overall simplicity and
              capability. After struggling through JS to then get easily
              acquainted with Python, I can see where it’s becoming one of the
              most popular and easiest languages to learn.
            </p>

            <p>
              The more I learn with Python, I’m leaning towards building an
              automated stock trading bot. With a plethora of stock API’s and
              documentation out there for Python, it’s a task I think I could
              take on and am genuinely interested in learning. Automation
              fascinates me and seems way over my head, but I’m starting to
              understand what it actually takes to build. There are a couple
              Python packages/API’s through Robin Hood and Yahoo Finance that
              I’ve seen so far that I’m going to look into more. Potentially
              learning how to build a GUI to work with the bot is another added
              stretch I think is doable. Still unsure where I want to go since
              there are so many options for a final project, so I’ll try to
              narrow that down shortly.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
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
