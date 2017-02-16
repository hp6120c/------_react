var path = require("path");
module.exports = {
    //入口
    entry : path.join(__dirname,"public/js/main.js"),
    //输出
    output : {
        path : path.join(__dirname,"public/dist"),
        filename : "[name].bundle.js"
    },
    module : {
        loaders : [
            {test:/\.css$/,loader:"style!css"},
            {test:/\.js$/,exclude:/node_modules/,loader:"babel"
            ,query:{presets:['es2015','react']}}
        ]
    },
    resolve : {
        root : path.join(__dirname,"public"),
        alias : {
            tools:"modules/common/tools",
            Login:"modules/login/Login",
            Reg:"modules/reg/Reg",
            Content:"modules/index/Content",
            InputElement:"modules/common/InputElement",
            Student:"modules/student/Student",
            StudentTable:"modules/student/StudentTable",
            AddModal:"modules/student/AddModal",
            UpdateModal:"modules/student/UpdateModal"
        }
    }
}
