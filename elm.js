const body = $request.body;
const regex = /SID=(\w+);USERID=(\w+);unb=(\w+);cookie2=(\w+);umt=(\w+);utdid=(\w+);token=(\w+);deviceId=(\w+)/;
const match = body.match(regex);

if (match) {
    const SID = match[1];
    const USERID = match[2];
    const unb = match[3];
    const cookie2 = match[4];
    const umt = match[5];
    const utdid = match[6];
    const token = match[7];
    const deviceId = match[8];

    console.log("Matched parameters:");
    console.log("SID:", SID);
    console.log("USERID:", USERID);
    console.log("unb:", unb);
    console.log("cookie2:", cookie2);
    console.log("umt:", umt);
    console.log("utdid:", utdid);
    console.log("token:", token);
    console.log("deviceId:", deviceId);

    $done({
        headers: {
            "SID": SID,
            "USERID": USERID,
            "unb": unb,
            "cookie2": cookie2,
            "umt": umt,
            "utdid": utdid,
            "token": token,
            "deviceId": deviceId
        }
    });
} else {
    console.log("No match found in the request body.");
    $done({});
}
