import React from 'react';
import PropTypes from 'prop-types';
import { PageHeader } from 'react-bootstrap';


class Section extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    link: PropTypes.string.isRequired,
    current: PropTypes.string.isRequired,
    getData: PropTypes.func.isRequired,
    updateState: PropTypes.func.isRequired
  }

  componentDidMount(){
    this.props.getData(`/page/${this.props.link}`);
  }

  render(){

    return (
      <section id={this.props.link}>
        <div className="main-content">
          <PageHeader>{`${this.props.link.charAt(0).toUpperCase()}${this.props.link.slice(1)}`}</PageHeader>
        </div>
      </section>
    );
  }
}

export default Section;
