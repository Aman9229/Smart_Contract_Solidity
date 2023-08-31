
const {expect} = require('chai');

 
describe("Hello testing",function(){
    // Token description 
   it("deployment assign Aman patel ",async function(){
       
       //  call singners object
     const[owner]=await ethers.getSigners();

     

     // instance create here use contract name
     const token = await ethers.getContractFactory("HelloTesting");

     // depoloyment
     const hardhatToken= await token.deploy();
     console.log("owner address:-", owner.address);
      expect(hardhatToken=="Aman patel")
   
   });
});



// token name describe here  Token.js  CONTRACT NAME " TOKEN ""
describe("Token contract",function(){
     // Token description 
    it("deployment assign total no of token to the owner",async function(){
        
        //  call singners object
      const[owner]=await ethers.getSigners();



      // instance create here use contract name
      const token = await ethers.getContractFactory("Token");
      
      // depoloyment
      const hardhatToken= await token.deploy();

      // balance of owner =1000;
      const ownerBalance= await hardhatToken.balanceof(owner.address);
      console.log("owner address:-", owner.address);

    // total supply = 1000; 
      expect(await hardhatToken.totalsupply()).to.equal(ownerBalance);
    });

    
    // SECOND TESTING 
    // amount transfer testing
    it("should transfer token b/w accounts",async function(){
        
        //  call singner object
      const[owner,add1,add2]=await ethers.getSigners();

       // instance create here
       const token = await ethers.getContractFactory("Token");

        // depoloyment of contract 
       const hardhatToken= await token.deploy();

        // transfer 10 token from owner to add1 
        await hardhatToken.transfer(add1.address,10);
        expect(await hardhatToken.balanceof(add1.address)).to.equal(10);

        await hardhatToken.connect(add1).transfer(add2.address,5);
        expect(await hardhatToken.balanceof(add2.address)).to.equal(5); 
       
    });

    it("should fail if sender is not enough tokens",async function(){
        
        //  call singner object
      const[owner,add1,add2]=await ethers.getSigners();

       // instance create here
       const token = await ethers.getContractFactory("Token");

        // depoloyment of contract 
       const hardhatToken= await token.deploy();
       // total balance of owner after the transation 
       const initiaBal=await hardhatToken.balanceof(owner.address);
       // check condition 
       expect (await hardhatToken.balanceof(owner.address)).to.equal(initiaBal);
       
       
    });


    it("should update balances after transaction",async function(){
        
        //  call singner object
      const[owner,add1,add2]=await ethers.getSigners();

       // instance create here
       const token = await ethers.getContractFactory("Token");

        // depoloyment of contract 
       const hardhatToken= await token.deploy();
       // check owner balance 
       const initialOwnerBal= await hardhatToken.balanceof(owner.address); // owner balance 1000
       // owner to add1 5 token transfer
            await hardhatToken.transfer(add1.address,5);
            // owner to add2 5 token transfer 
            await hardhatToken.transfer(add2.address,10);
         // check owner final balance 
            const finalBal=await hardhatToken.balanceof(owner.address)
            expect(finalBal).to.equal(initialOwnerBal-15); // total 15 token transfer from owner to add1, add2
         // check transfer balance is 5 token or not , from owner to add1
            const add1Bal= await hardhatToken.balanceof(add1.address);
            expect(add1Bal).to.equal(5);
        // check transfer balance is 10 token or not , from owner to add2
            const add2Bal= await hardhatToken.balanceof(add2.address);
            expect(add2Bal).to.equal(10);
       
       
    });

 
});


// here is using chai and mocha 

// facing some problem in testing , using chai and mocha ( hardhatToken.balanceOf ) hardhatToken.balanceOf() is not a function .

/*
const {expect} = require('chai');
const {ethers} = require("hardhat");
describe("Token contract",function(){

    let Token;
    let hardhatToken;
    let owner;
    let add1;
    let add2;
    let addrs;

    beforeEach(async function(){
        Token=await ethers.getContractFactory("Token");
        [owner,add1,add2,addrs]=await ethers.getSigners();
        hardhatToken= await Token.deploy();
    });
    describe("Deployment",function(){
        it('should set right owner',async function(){
            expect(await hardhatToken.owner()).to.equal(owner.address)
        });
        it("should assign the total supply of token",async function(){
            const ownerBalance= await hardhatToken.balanceof(owner.address);
            expect(await hardhatToken.totalsupply()).to.equal(ownerBalance);
        });
    });

    describe("transaction",function(){
        it("should transfer tokens b/w accounts",async function(){
            await hardhatToken.transfer(add1.address,5);
            // balance transfer owner to add1.account
            const add1Bal=await hardhatToken.balanceof(add1.address);
            expect(add1Bal).to.equal(5);

            await hardhatToken.connect(add1).transfer(add2.address,5);
            const add2Bal=hardhatToken.balanceof(add2.adddess);
            expect(add2Bal).to.equal(5);
        });
        it(" should fail if sender is not enough token" ,async function(){
            const initiaBal=await hardhatToken.balanceof(owner.address)
            await expect(hardhatToken.connect(add1)).transfer(owner.address,1).to.be.revertedWith("not enough token");
            expect (await hardhatToken.balanceof(owner.address)).to.equal(initiaBal);

        });
        it("should update balances after transaction",async function(){
            const initialOwnerBal= await hardhatToken.balanceof(owner.address);
            await hardhatToken.transfer(add1.address,5);
            await hardhatToken.transfer(add2.address,10)
 
            const finalBal=await hardhatToken.balanceof(owner.address)
            expect(finalBal).to.equal(initialOwnerBal-15);

            const add1Bal= await hardhatToken.balanceof(add1.address);
            expect(add1Bal).to.equal(5);

            const add2Bal= await hardhatToken.balanceof(add2.address);
            expect(add2Bal).to.equal(10);

        })
    });
   
});


*/
