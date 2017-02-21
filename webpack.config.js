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
            FilmAndScreenList:"modules/filmAndScreen/FilmAndScreenList",
            ShowHall:"modules/filmAndScreen/ShowHall",
            ShowScreen:"modules/filmAndScreen/ShowScreen",
            FilmAndScreen:"modules/filmAndScreen/filmAndScreen",
            //袁怡
            Screenings:"modules/screenings/Screenings",
            ScreeningsTable:"modules/screenings/ScreeningsTable",
            AddModal3:"modules/screenings/AddModal",
            UpdateModal3:"modules/screenings/UpdateModal",
            Lookoverseats:"modules/screenings/Lookoverseats",
            //李凤
            Information:"modules/student/Student",
            StudentTable:"modules/student/StudentTable",
            AddModal:"modules/student/AddModal",
            UpdateModal:"modules/student/UpdateModal",
            //组长
            AddModal2:"modules/films/AddModal",
            UpdateModal2:"modules/films/UpdateModal",
             Films:"modules/films/Films",
            FilmsTable:"modules/films/FilmsTable"

        }
    }
}