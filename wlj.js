var body = $response.body;

try {
    // 解析 JSON 响应
    var jsonData = JSON.parse(body);

    // 提取 possessor 和 userCode 的值
    var possessor = jsonData.possessor;
    var userCode = jsonData.userCode;

    // 打印提取的值，以便确认是否正确
    console.log("Possessor:", possessor);
    console.log("UserCode:", userCode);

    // 修改提取的值，如果需要的话
    // 例如，将 possessor 修改为新的值
    // possessor = "newPossessor";

    // 更新 JSON 数据中的值
    jsonData.possessor = possessor;
    jsonData.userCode = userCode;

    // 将修改后的 JSON 数据作为响应返回
    $done({ body: JSON.stringify(jsonData) });
} catch (error) {
    console.log("Error:", error.message);
    $done({});
}
