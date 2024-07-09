
const authtoken = "***REMOVED***";
const orgid = "***REMOVED***";


console.log({authtoken, orgid});


fetch("http://google.com").then(res => {
  console.log("fetch google", authtoken);
}).catch(err => {
  console.log("handle error");
})