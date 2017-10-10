import React, { Component } from 'react'
import { Nav, NavItem, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink} from 'reactstrap'

export default class Navigation extends Component {
  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdown: false
    }
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }
  render () {
    return (
      <div>
        <Nav pills>
          <NavItem>
            <NavLink href="#" active>CLICK HERE TO SPEND MONEY FOR NO REASON</NavLink>
          </NavItem>
          <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Products
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Products</DropdownItem>
              <DropdownItem>Tentacles</DropdownItem>
              <DropdownItem>Body Parts</DropdownItem>
              <DropdownItem divider/>
              <DropdownItem header>Luxury Items</DropdownItem>
              <DropdownItem>Exotic Aminals</DropdownItem>
            </DropdownMenu>
          </NavDropdown>
          <NavItem>
            <NavLink href="#">Account</NavLink>
          </NavItem>
          <NavLink href="#">Recommended</NavLink>
        </Nav>
      </div>
    )

  }
}


