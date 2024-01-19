const regexToken = /token:\s*([^\r\n]+)/i;
const regexDeviceID = /deviceid:\s*([^\r\n]+)/i;
const regexMebID = /meb_id:\s*([^\r\n]+)/i;
const regexUserID = /userid:\s*([^\r\n]+)/i;

const headers = $request.headers;
const body = $request.body;

const tokenMatch = regexToken.exec(headers);
const deviceIDMatch = regexDeviceID.exec(headers);
const mebIDMatch = regexMebID.exec(body);
const userIDMatch = regexUserID.exec(body);

if (tokenMatch && tokenMatch[1] && deviceIDMatch && deviceIDMatch[1]) {
    const extractedToken = tokenMatch[1];
    const extractedDeviceID = deviceIDMatch[1];

    console.log(`Extracted Token: ${extractedToken}`);
    console.log(`Extracted DeviceID: ${extractedDeviceID}`);

    if (mebIDMatch && mebIDMatch[1]) {
        const extractedMebID = mebIDMatch[1];
        console.log(`Extracted meb_id: ${extractedMebID}`);
    }

    if (userIDMatch && userIDMatch[1]) {
        const extractedUserID = userIDMatch[1];
        console.log(`Extracted userid: ${extractedUserID}`);
    }

    // 在这里你可以根据需要进行处理，例如将提取到的信息存储起来或者进行其他操作
} else {
    console.log('Token or DeviceID not found in the headers.');
}

$done({});
