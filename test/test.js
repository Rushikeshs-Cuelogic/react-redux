import React, { Component } from "react";
var assert = require('assert');
import { expect } from "chai";
import { shallow } from "enzyme";
import { Dashboard } from "../src/app/components/dashboard";

describe("Component:Dashboard", (prop) => {
  
    it('contains div with an expectation', () => {
      expect(shallow(<Dashboard />).contains(<div className="navbar-header" />)).to.equal(false);
  
  });
});