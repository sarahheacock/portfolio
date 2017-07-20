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
    const info = (this.props.link === "projects")?
      this.props.data.map((p) => {
        return(
          <a href={p.link}><img src={p.image} className="project" /></a>
        );
      }):
      Object.keys(this.props.data).map((k) => {
        if(k === "bold"){
          return(<b>{this.props.data[k]}</b>);
        }
        else if(k === "text"){
          return(<p>{this.props.data[k]}</p>);
        }
      });

    return (
      <section id={this.props.link}>
        <div className="main-content">
          <PageHeader>{`${this.props.link.charAt(0).toUpperCase()}${this.props.link.slice(1)}`}</PageHeader>
          {info}
        </div>
      </section>
    );
  }
}

export default Section;
