const chai = require("chai");
const expect = chai.expect;

const truthifier = require("../lib/index.js");

describe("not much yet", () => {
  let truthified = truthifier();

  it("true is not false", () => {
    expect(truthified).to.not.equal(false);
  });
});
