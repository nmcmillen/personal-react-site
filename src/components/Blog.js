import React from "react";
import "./Blog.css";
import { Container, Tab, Tabs } from "react-bootstrap";
import April22 from "./Blogs/April22";
import March22 from "./Blogs/March22";
import February22 from "./Blogs/February22";
import January22 from "./Blogs/January22";

export default function Blog() {
  return (
    <Container fluid className="p-md-5" id="blog-section">
      <Container>
      <h2>Blog</h2>
      <Tabs
        defaultActiveKey="april22"
        id="uncontrolled-tab-example"
        className=""
      >
        <Tab eventKey="april22" title="Most Recent">
          <April22/>
        </Tab>
        <Tab eventKey="march22" title="March '22">
          <March22/>
        </Tab>
        <Tab eventKey="feb22" title="February '22">
          <February22/>
        </Tab>
        <Tab eventKey="jan22" title="January '22">
          <January22/>
        </Tab>
      </Tabs>
      </Container>
    </Container>
  );
}
