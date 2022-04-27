const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ZombieFactory", function () {
  it("createRandomZombie should create a zombie", async function () {
    const ZombieFactory = await ethers.getContractFactory("ZombieFactory");
    const zombieFactory = await ZombieFactory.deploy();
    await zombieFactory.deployed();

    const createZombietx = await zombieFactory.createRandomZombie("First");
    await createZombietx.wait();
    const zombie = await zombieFactory.zombies(0);
    console.log(zombie['dna'].toNumber());
    expect(zombie['name']).to.equal("First");
    expect(zombie['dna'].toNumber()).is.not.null;
  });
});
