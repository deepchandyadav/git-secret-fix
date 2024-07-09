
const authtoken = "***REMOVED***";
const organization_uid = "***REMOVED***";
const access_token = ***REMOVED***;
const password = "***REMOVED***";
const user_password = "***REMOVED***";

console.log({ authtoken, organization_uid });

fetch("http://google.com")
  .then((res) => {
    console.log("fetch google", authtoken);
  })
  .catch((err) => {
    console.log("handle error");
  });
