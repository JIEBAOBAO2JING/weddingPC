 var MAIN = require('./main');
// 路由注册
function router_reg(app){
    //
    app.all('/index/:name', require('./index/index').index);
}



module.exports=function(app){
    router_reg(app);
};