// ==UserScript==
// @name        Ruten Images Autoloader
// @namespace   http://blog.gslin.org/plugins/autoload-images-ruten
// @description Autoload Images in ruten.com.tw
// @homepage    http://blog.gslin.org/plugins/autoload-images-ruten
// @version     20110210.0
// @include     http://goods.ruten.com.tw/item/show?*
// ==/UserScript==

(function(){
    var origLoad = unsafeWindow.onload;
    unsafeWindow.onload = function(){
        if (unsafeWindow.second_stage_image_loader) {
            unsafeWindow.second_stage_image_loader();
        }

        if (origLoad) {
            origLoad();
        }
    }
})();
