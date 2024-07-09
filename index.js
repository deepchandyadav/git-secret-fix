
const authtoken = "asdf123sd2@#$341";
const orgid = "dfaff341safa*&^";


console.log({authtoken, orgid});


fetch("http://google.com").then(res => {
  console.log("fetch google", authtoken);
})