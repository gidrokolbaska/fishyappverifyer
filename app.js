const sdk = new window.Appwrite();
sdk.setEndpoint("http://appwrite.fishyapp.ru/v1").setProject("63dd026b480ab089a636");

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');
const secret = urlParams.get('secret');

let promise = sdk.account.updateVerification(userId,secret);
promise.then(function (res){
    console.log(res);
    document.getElementById("message").innerText = JSON.stringify(res);
    window.location.replace('appwrite-callback-63dd026b480ab089a636');

},function (error){
    console.log(error);
    document.getElementById("message").innerText = JSON.stringify(error);
})
