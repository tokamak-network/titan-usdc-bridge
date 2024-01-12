
const {ethers} = require("ethers")
const { Wallet }  = require("ethers")
const optimismSDK = require("@eth-optimism/sdk")
require('dotenv').config()
const l1Url = `${process.env.ETH_NODE_URI_sepolia}`
const l2Url = `${process.env.ETH_NODE_URI_opsepolia}`
const erc20Addrs = {
    l1Addr: "0x693a591A27750eED2A0e14BC73bB1F313116a1cb",
    l2Addr: "0x35D48A789904E9b15705977192e5d95e2aF7f1D3"
}

let crossChainMessenger
let l1ERC20, l2ERC20    // OUTb contracts to show ERC-20 transfers
let ourAddr             // The address of the signer we use.
const erc20ABI = [
    // balanceOf
    {
      constant: true,
      inputs: [{ name: "_owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "balance", type: "uint256" }],
      type: "function",
    },
    // faucet
    {
      inputs: [],
      name: "faucet",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    }
  ]    // erc20ABI

const getSigners = async () => {
    const l1RpcProvider = new ethers.providers.JsonRpcProvider(l1Url)
    const l2RpcProvider = new ethers.providers.JsonRpcProvider(l2Url)
    const privateKey =`${process.env.PRIVATE_KEY}`
    const l1Wallet = new ethers.Wallet(privateKey, l1RpcProvider)
    const l2Wallet = new ethers.Wallet(privateKey, l2RpcProvider)

    return [l1Wallet, l2Wallet]
}   // getSigners


const oneToken = BigInt(1e6)

const setup = async() => {
    const [l1Signer, l2Signer] = await getSigners()
    ourAddr = l1Signer.address
    crossChainMessenger = new optimismSDK.CrossChainMessenger({
        l1ChainId: 11155111,   //sepolia
        l2ChainId: 11155420,   // opsepolia
        l1SignerOrProvider: l1Signer,
        l2SignerOrProvider: l2Signer,
    })
    l1ERC20 = new ethers.Contract(erc20Addrs.l1Addr, erc20ABI, l1Signer)
    l2ERC20 = new ethers.Contract(erc20Addrs.l2Addr, erc20ABI, l2Signer)
  }    // setup


const reportERC20Balances = async () => {
    const l1Balance = (await l1ERC20.balanceOf(ourAddr)).toString().slice(0,-6)
    const l2Balance = (await l2ERC20.balanceOf(ourAddr)).toString().slice(0,-6)
    console.log(`OUTb on L1:${l1Balance}     OUTb on L2:${l2Balance}`)

    if (l1Balance != 0) {
        return
    }

    // console.log(`You don't have enough OUTb on L1. Let's call the faucet to fix that`)
    // const tx = (await l1ERC20.faucet())
    // console.log(`Faucet tx: ${tx.hash}`)
    // console.log(`\tMore info: https://goerli.etherscan.io/tx/${tx.hash}`)
    // await tx.wait()
    const newBalance = (await l1ERC20.balanceOf(ourAddr)).toString().slice(0,-6)
    console.log(`New L1 OUTb balance: ${newBalance}`)
}    // reportERC20Balances

const depositERC20 = async () => {

    console.log("Deposit ERC20")
    await reportERC20Balances()
    const start = new Date()

    // Need the l2 address to know which bridge is responsible
    const allowanceResponse = await crossChainMessenger.approveERC20(
      erc20Addrs.l1Addr, erc20Addrs.l2Addr, oneToken)
    await allowanceResponse.wait()
    console.log(`Allowance given by tx ${allowanceResponse.hash}`)
    console.log(`\tMore info: https://goerli.etherscan.io/tx/${allowanceResponse.hash}`)
    console.log(`Time so far ${(new Date()-start)/1000} seconds`)

    const response = await crossChainMessenger.depositERC20(
      erc20Addrs.l1Addr, erc20Addrs.l2Addr, oneToken)
    console.log(`Deposit transaction hash (on L1): ${response.hash}`)
    console.log(`\tMore info: https://goerli.etherscan.io/tx/${response.hash}`)
    await response.wait()
    console.log("Waiting for status to change to RELAYED")
    console.log(`Time so far ${(new Date()-start)/1000} seconds`)
    await crossChainMessenger.waitForMessageStatus(response.hash,
                                                    optimismSDK.MessageStatus.RELAYED)

    await reportERC20Balances()
    console.log(`depositERC20 took ${(new Date()-start)/1000} seconds\n\n`)
}     // depositERC20()



const main = async () => {
    await setup()
    await depositERC20()
    // await withdrawERC20()
}  // main



main().then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })