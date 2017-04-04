import React, { Component } from "react";
var assert = require('assert');
import { expect } from "chai";
import { shallow } from "enzyme";
import { Dashboard } from "../src/app/components/dashboard";

describe("Component:Dashboard", (prop) => {
  describe("dashboard", function () {
    it('contains div with an expectation', function () {
      expect(shallow(<Dashboard />).contains(<div className="navbar-header" />)).to.equal(false);
    });
  });
});