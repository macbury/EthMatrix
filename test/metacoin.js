var MetaCoin = artifacts.require("./MetaCoin.sol");
contract('MetaCoin', (accounts) => {
  let instance = null
  beforeEach(async () => {
    instance = await MetaCoin.deployed();
  })

  it("should allow buy tokens", async () => {
    let account = accounts[4]
    await instance.buyToken([1,2,3,4,5], { from: account, value: web3.toWei(1, 'ether') });
    let balance = await instance.balanceOf.call(account)
    assert.equal(balance.valueOf(), 50000, "50000 is in second account")
    assert.ok(web3.eth.getBalance(account).lessThan(web3.toWei(100, 'ether')));
  })

  it("should deny buing tokens", async () => {
    let emptyAccount = accounts[3]
    try {
      await instance.buyToken({ from: emptyAccount, value: web3.toWei(1000, 'ether') });
      assert.fail();
    } catch (err) {
      assert.ok(/sender doesn't have enough funds to send tx/.test(err.message))
      let balance = await instance.balanceOf.call(emptyAccount)
      assert.equal(balance.valueOf(), 0, "0 is in second account")
    }
  })
});
