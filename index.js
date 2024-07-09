
const authtoken = "bltb7128d70e9b7fddd";
const orgid = "dfaff341safa*&^";


console.log({authtoken, orgid});


fetch("http://google.com").then(res => {
  console.log("fetch google", authtoken);
}).catch(err => {
  console.log("handle error");
})