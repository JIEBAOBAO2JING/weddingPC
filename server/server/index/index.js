var MAIN = require('../main.js');
function run(Request, Response)
{
    var Params = MAIN.getParams(Request)
    if(Request.params && Request.params.name){
        var funs = {
            //商家首页
            'list' : list,
            //商家筛选条件
            'busTag':busTag,
            //商家详情
            'busDetails':busDetails,
        }
        funs[Request.params.name](Params, Request, Response);
    }else{
       Response.end('this is 桩接口')
    }
}
/**
 * 商家首页
 * @param {Object} Request
 * @param {Object} Response
 */
function list(Params, Request, Response) {
    var fileName = 'index/data/busList1.json';
    MAIN.responseStub(Response,fileName);
}

/**
 * 商家筛选条件
 * @param {Object} Request
 * @param {Object} Response
 */
function busTag(Params, Request, Response) {
    var fileName;
    if(Params.type == 'bus'){
        fileName = 'index/data/tag1.json';
    }else if(Params.type == 'meal'){
        fileName = 'index/data/tag2.json';
    }else{
        fileName = 'index/data/none.json';
    }
    MAIN.responseStub(Response,fileName);
}

/**
 * 商家详情
 * @param {Object} Request
 * @param {Object} Response
 */
function busDetails(Params, Request, Response) {
    var fileName = 'index/busData/busDetails.json';
    MAIN.responseStub(Response,fileName);
}

exports.index = run;