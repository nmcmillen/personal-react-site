import React from "react";
import { Accordion } from "react-bootstrap";

export default function March22() {
  return (
    <div>
      <Accordion defaultActiveKey="0" flush>
        {/* BLOG 9 */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Blog #9: Command Line Interfaces? (3/27/22)</Accordion.Header>
          <Accordion.Body>
            <p>
              Now that we have paved our frontend groundwork, we turn towards
              learning the backend in order to become true “full-stack”
              developers. Our first step is learning Python, which after some
              brief reading and examples, doesn’t look too syntactically different from
              JavaScript in how things are formatted, but I am seeing how it can
              be more powerful to tie both front and backend together.
            </p>

            <p>
              I don’t have almost any experience with using a command-line
              interface other than something like the windows operating system
              so I’m not really sure what to expect. I assume you can use it for
              data entry/extraction or setting up simple games. I have always
              played around with trading stocks, options, etc. and I know that
              people will create scripts in order to develop automated trading
              bots based off of certain parameters they have built with Python
              which is something I would especially like to learn.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        {/* BLOG 8 */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Blog #8: A New Library (3/19/22)</Accordion.Header>
          <Accordion.Body>
            <p>
              Week 8 of the Awesome Inc Bootcamp was probably one of my better
              weeks so far. This week we tackled our first project using React;
              our first foray into any type of JavaScript framework or library.
              I found building our mock restaurant website in React somewhat
              easier than the vanilla Javascript we’ve been using. I felt I was
              able to better compartmentalize the overall build and navigate
              each to-do block by block. Then, I was able to throw everything
              together and move each section around where I wanted within a page
              without much fuss. If I needed to modify a section, I only needed
              to modify one piece and not multiple items on a page so that they
              interact nicely with eachother. I felt I understood how and where
              to implement React with other sites I’ve seen or even refactoring
              my own blog to include React blocks and templates.
            </p>

            <p>
              I’m now a bit curious to see what other frameworks and libraries
              are out there that could be useful to me. While I don’t understand
              what each does, I know that Angular and Node are quite popular.
              Angular especially with my understanding of it being used for
              single page applications like Gmail which kind of baffles how you
              one-page something that holds so much information. What I would
              really like to learn is what tools are needed to let users create
              profiles and post content like that of social media or UpWork for
              example, where users generate their own content and profiles that
              can be seen and interacted with by others.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        {/* BLOG 7 */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>Blog #7: You Down With MVC?</Accordion.Header>
          <Accordion.Body>
            <p>
              Yeah you know me! Sorry, I just had to finish that one off to get
              us started. Now that I’ve got you interested in MVC (that may or
              may not be a song from Naughty By Nature), what is it all about
              and how does it apply to programming? Well, like most things in
              the world, nothing can be built in one go, you have to break it
              down! That’s where the programming concept around MVC comes in.
            </p>

            <p>
              <strong>What Does It Stand For?</strong>
            </p>

            <p>
              1. Model <br />
              2. View <br />
              3. Controller
              <br />
            </p>

            <h4>Model</h4>
            <p>
              Could you check in the back? The Model is your backend,
              essentially what’s in the background which holds and represents
              all of your data. You may be pulling data from an API, JSON, or
              some other database but the Model is the one storing and managing
              all of it.
            </p>

            <h4>View</h4>
            <p>
              The View is your storefront, the frontend of your application that
              is able to represent all of your data. You may have heard the term
              graphical user interface or GUI for short, which is what your user
              is going to see on their screen and it’s the View’s job to
              initialize and render those items.
            </p>

            <h4>Controller</h4>
            <p>
              Can I speak to the manager? The Controller is, you guessed it, the
              controller and handler of all frontend and backend. The Controller
              is meant to be the brains of the operations, the manager of our
              establishment. It communicates with the Model and the View
              separately, controlling how data it’s been given is displayed.
            </p>

            <h4>But Why?</h4>
            <p>
              The MVC model allows you to become an architect of sorts by
              breaking up the frontend and backend. You are able to build and
              manage one section without interfering with the other and vice
              versa. A separation of concerns if you will. In the development
              world this allows multiple developers being able to simultaneously
              work on different sections of the application, create separate
              views, and build larger applications with ease. Code is not left
              behind after it has been built because you are able to group and
              reuse code over and over again. <br />
              So, are you down with MVC?
            </p>
          </Accordion.Body>
        </Accordion.Item>

        {/* BLOG 6 */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Blog #6: Is This The Desert of Despair? (3/6/22)
          </Accordion.Header>
          <Accordion.Body>
            <p>
              <strong>
                What did you learn about that helped you understand the
                development process?
              </strong>
            </p>
            <p>
              Trying to wrap my head around best practices for learning and
              understanding the development process has been a little tricky
              these first couple of weeks. Sort of like getting thrown in the
              deep end, I'm just learning how to tread water before I can learn
              to swim. This week I tried to make more notes as I came across
              things that may be helpful to my project. I paid more attention to
              some various videos and code to see how people were formatting
              their code and steps taken to get to an end result. I would say
              larning async/await was actually helpful in understanding how to
              be a better developer by building one thing at a time. First block
              of code is getting data, then setting state, and finally updating
              the DOM. Each one relies on the main data block of code in order
              to do anything. Then you can fill other items of code in. Overall,
              I felt I understood more of what my big rocks are all the way down
              to the grains of sand to fill in the gaps
            </p>

            <p>
              <strong>What does it mean to develop good code?</strong>
            </p>
            <p>
              To me, developing good code means being clear, concise, and
              efficient. You also want to make each block of code as powerful as
              it can be so you're not creating a couple lines of code each time
              you need something extra. I'm also incredibly OCD about how my
              code is formatted, which has also helped me be able to read
              through my code and add, subtract, or fix as necessary because I'm
              able to understand what things are and what they do within my
              code.
            </p>

            <p>
              <strong>What does it mean to be a good developer?</strong>
            </p>
            <p>
              Being a good developer can mean many things. I think a good
              developer is someone who is always trying to learn, asks
              questions, and isn't afraid to say if they don't know how to do
              something. A good developer writes clean and efficient code that
              can be read and worked with by others on their team. You want a
              developer who can grow, adapt, and hit the end goal of what is
              important for their customers and users.
            </p>

            <p>
              <strong>What is one thing that programmers hate doing?</strong>
            </p>
            <p>
              I think that list is much longer than just ONE thing! If I had to
              choose, I would go with having to go back and redo their code and
              especially someone elses when it's messy.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
