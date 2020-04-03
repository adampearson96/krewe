import React from "react";
import showdown from "showdown"
import Img from "gatsby-image"


const converter = new showdown.Converter();

class WorkCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      activeClass: ""
    }
  }
  toggleActive = () => {
    this.setState(
      {
        active: !this.state.active,
      },
      () => {
        this.state.active
          ? this.setState({ activeClass: "active" })
          : this.setState({ activeClass: "" })
      }
    )
  }

  render() {
    return (
      <div className={this.props.row}>
        <div className={`outer-container ${this.state.activeClass}`} onClick={() => this.toggleActive()}>
          <div className="col-one">
            <h3>{this.props.title}</h3>
            { !!this.props.image ? 
              <Img fluid={this.props.image} alt="" /> : null
            }
          </div>
          <div className="col-two">
            <div className="inner">
              <h3>{this.props.title}</h3>
              <div className="content" dangerouslySetInnerHTML={{ __html: converter.makeHtml(this.props.content) }}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WorkCard