// @flow
import React, { Component } from "react"
import FullscreenSlide from "../../../../../components/FullscreenSlide/index"
import styled from 'styled-components';
import {PALETTE} from "../../../../../services/styleTools"

const IntroStyl = styled.div`
  height: 100%;
`


class Approved extends Component {
  constructor(props) {
    super(props)

    this.state = {
      opem: "",
    };
  }

  toggleDialog = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const {
      open
    } = this.state


    return (
      <div className="Approved">
        <div onClick={this.toggleDialog}>ANO</div>

        {open &&

          <div>Dialog</div>

        }

      </div>
    )
  }
}
export default Approved
