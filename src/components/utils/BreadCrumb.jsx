import { Children } from "react";
import { Fragment } from "react";
import Container from "./Container";
import Section from "./Section";

const Breadcrumb = ({ children }) => {
  const childrenArray = Children.toArray(children);

  const childrenWtihSeperator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <Fragment key={index}>
          {child}
          <span>/</span>
        </Fragment>
      );
    }
    return child;
  });

  return (
    <Section className="h-[60px] my-[1rem] bg-gray-100">
      <Container
        className=" mx-auto h-[60px] flex items-center"
        aria-label="breadcrumb">
        <ol className="  flex items-center space-x-4">
          {childrenWtihSeperator}
        </ol>
      </Container>
    </Section>
  );
};

export default Breadcrumb;
