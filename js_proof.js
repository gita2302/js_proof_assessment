/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const bank_accounts = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (holder_accno, holder_name, holder_age, holder_address, holder_balance) {
    const account_holder = {
        "Acc_no    ": holder_accno,
        "Name      ": holder_name,
        "Age       ": holder_age,
        "Address   ": holder_address,
        "Account_Balance ": holder_balance,

    }
    bank_accounts.push(account_holder);
    console.log("Account Holder's details is successfully added");

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0; i<bank_accounts.length; i++)
        console.log(bank_accounts[i]);

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {

    console.log("total_account_holders:"+bank_accounts.length);
    }

// call your functions below this line
mintNFT("10114579","George","40","San Francisco,USA","$5000000");
mintNFT("10143642","Adam","25","San Francisco,USA","$756785467");
mintNFT("10478674","Richard","29","San Francisco,USA","$765736789");
mintNFT("16467014","Chris","32","San Francisco,USA","$989080832");
mintNFT("16467343","Donald","39","San Francisco,USA","$7598340044");
mintNFT("16465646","Joe","45","San Francisco,USA","$2743893923");
mintNFT("16467123","Rishi","36","San Francisco,USA","$6537282829");
mintNFT("16467987","Sundar","31","San Francisco,USA","$265346526432");
listNFTs();
getTotalSupply();
