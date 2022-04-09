import React from "react";
import { Accordion } from "react-bootstrap";

export default function January22() {
  return (
    <div>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Blog #1: First post! (1/26/22)</Accordion.Header>
          <Accordion.Body>
            <p>
              This first week I started the Awesome Inc. Bootcamp and began my
              journey to becoming a full stack developer. Web development has
              always piqued my interest since middle school from linking random
              pages together with basic HTML to creating advanced and
              interactive profile pages from the Myspace days. Talk about a
              flashback! A few years back I worked with a development team to
              start an online business but now I've decided to take things into
              my own hands and jump all in to learn how to do it for myself. I'm
              sort of an all in or not at all person as you'll learn along the
              way.</p>
              
              <p>Our first week has already provided some new challenges,
              especially getting used to the ins-and-outs of github. I initially
              took the Fall <em>Intro to Web</em> class where I learned bits and
              pieces of HTML, CSS, and Javascript just to get my feet wet. Now,
              I'm excited to start building on that foundation to become a full
              developer while building relationships and working as a team while
              in the bootcamp with those who have the same goals as I do. Hope
              you're all strapped in for the roller coaster ride!
            </p>
            <ul>
              <li>[x] Complete Intro to Web</li>
              <li>[x] Start Awesome Inc Bootcamp</li>
              <li>[ ] Become full stack web developer</li>
            </ul>
            <p>
              I'll tee up a fun fact for the first thing to learn about me. Did
              you know, I have actually traveled to more countries than states?
              I love to travel and have been incredibly fortunate enough to see
              a few different corners of the world. I get a bit restless when Im
              home for more than a few months without having gone somehwere new
              and am always in search of the next adventure.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
