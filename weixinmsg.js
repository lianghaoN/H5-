const formatMsg = require('./fmtwxmsg');

function help() {
    return `你个笨比，啥也不会`;
}

function userMsg(wxmsg, retmsg) {
    /*
        检测是否为文本消息，如果是文本消息则先要检测是不是支持的关键词回复。
    */
    if (wxmsg.MsgType == 'text') {
        // if (wxmsg.Content == 'help' || wxmsg.Content == '?' || wxmsg.Content == '？') {
        //     retmsg.msg = help();
        //     retmsg.msgtype = 'text';
        //     return formatMsg(retmsg);
        // } else if (wxmsg.Content == 'hello' || wxmsg.Content == '你好'){

        //     retmsg.msg = '你个憨憨，叫你输help';
        //     retmsg.msgtype = 'text';
        //     return formatMsg(retmsg);

        // } else {
        //     retmsg.msg = wxmsg.Content;
        //     retmsg.msgtype = wxmsg.MsgType;
        //     return formatMsg(retmsg);
        // }
        switch(wxmsg.Content){
            case 'help':
            case '?':
            case '？':
                retmsg.msg=help();
                retmsg.msgtype = 'text';
                return formatMsg(retmsg);
            case 'hello':
            case '你好':
                retmsg.msg = '你个憨憨，叫你输help';
                retmsg.msgtype = 'text';
                return formatMsg(retmsg);
            case 'who':
                retmsg.msg = '梁镐 2017012089';
                retmsg.msgtype = 'text';
                return formatMsg(retmsg);
            default :
            retmsg.msg = wxmsg.Content;
            retmsg.msgtype = wxmsg.MsgType;
            return formatMsg(retmsg);
        }
    } else {
        switch(wxmsg.MsgType) {
            case 'image':
            case 'voice':
                retmsg.msg = wxmsg.MediaId;
                retmsg.msgtype = wxmsg.MsgType;
                break;
            default:
                retmsg.msg = '不支持的类型';
        }

        return formatMsg(retmsg);
    }
}

exports.userMsg = userMsg;
exports.help = help;

exports.msgDispatch = function msgDispatch(wxmsg, retmsg) {
    return userMsg(wxmsg, retmsg);
};

