import React from 'react';
import PropTypes from 'prop-types';
import { PageHeader } from 'react-bootstrap';

//components
import About from './About';
import Contact from './Contact';
import Projects from './Projects';

// class Section extends React.Component {
//   static propTypes = {
//     project: PropTypes.number.isRequired,
//     link: PropTypes.string.isRequired,
//     data: PropTypes.object.isRequired,
//     message: PropTypes.object.isRequired,
//     updateState: PropTypes.func.isRequired,
//     sayHello: PropTypes.func.isRequired
//   }
//
//   componentDidMount(){
//     this.props.handleResize();
//   }
//
//   render(){
//     const Title = `${this.props.link.charAt(0).toUpperCase()}${this.props.link.slice(1)}`;
//     const content = (Title === "About") ?
//       <About data={this.props.data}/> :
//       ((Title === "Projects") ?
//         <Projects
//           data={this.props.data}
//           project={this.props.project}
//           updateState={this.props.updateState}
//         />:
//         <Contact
//           data={this.props.data}
//           message={this.props.message}
//           updateState={this.props.updateState}
//           sayHello={this.props.sayHello}
//         />
//       );
//     const cl = (Title === "Projects") ? "main-content" : "main-content every-other";
//
//     return (
//       <section id={this.props.link}>
//         <div className={cl}>
//           <PageHeader className="pageTitle">{Title}</PageHeader>
//           <div className="section-content">{content}</div>
//         </div>
//       </section>
//     );
//   }
// }
const Section = (props) => {
  const Title = `${props.link.charAt(0).toUpperCase()}${props.link.slice(1)}`;
  const content = (Title === "About") ?
    <About data={props.data}/> :
    ((Title === "Projects") ?
      <Projects
        data={props.data}
        project={props.project}
        updateState={props.updateState}
      />:
      <Contact
        data={props.data}
        message={props.message}
        updateState={props.updateState}
        sayHello={props.sayHello}
      />
    );
  const cl = (Title === "Projects") ? "main-content" : "main-content every-other";

  return (
    <section id={props.link}>
      <div className={cl}>
        <PageHeader className="pageTitle">{Title}</PageHeader>
        <div className="section-content">{content}</div>
      </div>
    </section>
  );
}

export default Section;

Section.propsTypes = {
  project: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  updateState: PropTypes.func.isRequired,
  sayHello: PropTypes.func.isRequired
}
