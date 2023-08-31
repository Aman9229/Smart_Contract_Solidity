const { ethers } = require("hardhat");

async function main(){
    const[deployer]=await ethers.getSigners()
    const token=await ethers.getContractFactory("Token");
    const newdeploy=await token.deploy()
    console.log('token add',newdeploy.address);
}
main()
.then(()=>process.exit(0))
.catch((error)=>{
    console.log(error)
})

//     0x5FbDB2315678afecb367f032d93F642f64180aa3    // Local hardhat deploy project hash



