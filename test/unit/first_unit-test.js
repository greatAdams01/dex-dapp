/* eslint-disable prettier/prettier */
/* eslint-disable node/no-extraneous-require */
const chai = require("chai");
const BN = require("bn.js")

// Enable and inject BN dependency
chai.use(require("chai-bn")(BN))

// const { expect } = require("chai");
const { ethers } = require("hardhat");
const { expect } = require("chai");

describe('FirstContract unit test', () => {
  let FirstContract, firstContract

  before(async () => {
    FirstContract = await ethers.getContractFactory('MyFirstContract');
    firstContract = await FirstContract.deploy()
    await firstContract.deployed()
  })

  beforeEach(async () => {
    await firstContract.setNumber(0)
  })

  it('Inital value is set to 0', async () => {
    expect((await firstContract.getNumber()).toString()).equal('0')
  })

  it('Retrieved value', async () => {
    await firstContract.setNumber(77)
    expect((await firstContract.getNumber()).toString()).equal('77')
  })

})