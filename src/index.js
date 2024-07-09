
const authtoken = "blt63b7080da56f5ddd";
const organization_uid = "blt3155bffc7360dddd";
const access_token = "abcadfqwe134asdf1234a";
const password = "thisismyfakepassword1241414";
const user_password = "thisisverrrrrysecretpassword";

console.log({ authtoken, organization_uid });

fetch("http://google.com")
  .then((res) => {
    console.log("fetch google", authtoken);
  })
  .catch((err) => {
    console.log("handle error");
  });
