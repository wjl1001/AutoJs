/* 
 * description: 用来获取发现老板页中所有boss的nick name
 * return: 如果获取成功返回nick name 列表，否则返回null
 */
function get_nick_name_list() {
    var nick_name_list = new Array()

    /* 判断当前是否处于发现老板界面 */
    if(className("android.view.View").text("发现老板").exists()){
        /* 获取发现老板界面中，所有的boss集合 */
        var object = className("android.widget.Button").find()

        /* 判断是否找到boss */
        if (!object.empty()) {
            log("*** find " + object.length + " boss ***")

            for (var i = 0; i < object.length; i++) {
                var boss_info = object.get(i)
                nick_name_list[i] = boss_info.parent().child(0).text()
                log(nick_name_list[i])
            }

            return nick_name_list
        } else {
            log("not find boss")
        }
    } else {
        log("不在发现老板界面")
    }

    return null
}

function scroll_up() {
    
}