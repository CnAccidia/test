const url = $request.url;
const regex = /SID=(\w+);USERID=(\w+);unb=(\w+);cookie2=(\w+);umt=(\w+);utdid=(\w+);token=(\w+);deviceId=(\w+)/;
const match = url.match(regex);

if (match) {
    const SID = match[1];
    const USERID = match[2];
    const unb = match[3];
    const cookie2 = match[4];
    const umt = match[5];
    const utdid = match[6];
    const token = match[7];
    const deviceId = match[8];

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
    $done({});
}
