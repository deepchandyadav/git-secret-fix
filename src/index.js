
const authtoken = "removed";
const organization_uid = "removed";
const access_token = "removed";
const password = "removed";
const user_password = "removed";

console.log({ authtoken, organization_uid });

fetch("http://google.com")
  .then((res) => {
    console.log("fetch google", authtoken);
  })
  .catch((err) => {
    console.log("handle error");
  });
