/**
 * User: 閮忛珮闃�
 * Date: 14-2-25
 * 淇℃伅鎻愮ず妗嗘彃浠讹紝渚濊禆Sea.JS銆丣query
 */
(function(window,$){

	var fakemr = {};
   
    /*鏄剧ず涓荤殑DIV*/
    function _showMainDiv() {
        if ($("#_fakeMr_load_mask_div").length == 0) {
            $('body').append(getMaskDiv(), getMessageMainDiv());
        } else {
            $('#_fakeMr_Message_Text,#_fakeMr_load_mask_div').show();
        }
    }

    /*鍏抽棴鎵€鏈夌殑*/
    function _closeWinDiv() {
        $('#_fakeMr_Message_Text,#_fakeMr_load_mask_div').each(function (index, item) {
            $(item).empty().hide();
        });
    }

    /**
     * 鎻愮ず妗�
     * @param text 闇€瑕佹樉绀虹殑鏂囨湰
     * User 閮忛珮闃�
     */
    fakemr.showMessage = function (text) {
        _showMainDiv();
        $('#_fakeMr_Message_Text').append(getMessage_TextDiv(text), getMessage_closeButton());
        BindCloseMessageEven();
    };
    /**
     * 閫氱煡
     * @param text
     * @param closeTime
     * User 閮忛珮闃�
     */
    fakemr.showNotify = function (text, closeTime) {
        _showMainDiv();
        $('#_fakeMr_Message_Text').empty().append(getMessage_TextDiv(text, closeTime));
        var hrefThis = this;
        setTimeout(function () {
            _closeWinDiv();
        }, closeTime);
    };
    /**
     * 纭妗�
     * @param text  鏂囨湰
     * @param leftButton 绗竴涓寜閽�
     * @param rightButton  绗簩涓寜閽�
     * @param leftCallback 绗竴涓寜閽洖璋�
     * @param rightCallback 绗簩涓寜閽洖璋�
     * User 閮忛珮闃�
     */
    fakemr.showConfirm = function (text, leftButton, rightButton, leftCallback, rightCallback) {
        _showMainDiv();
        $('#_fakeMr_Message_Text').empty().append(getMessage_TextDiv(text), getConfirm_leftButton(leftButton), getConfirm_rightButton(rightButton));
        BindCloseConfirmEven(leftCallback, rightCallback);
    };

    /*鍐呭灞曠ず灞�*/
    function getMessage_TextDiv(_str) {
        var _fakeMr_Text = $('<div id="_fakeMr_Text">' + _str + '</div>');
        var cssStr = { 'font-size': '13px', 'padding': '15px 0' };
        return _fakeMr_Text.css(cssStr);
    }

    /*鍏抽棴Alert绐楀彛浜嬩欢*/
    function BindCloseMessageEven() {
        $("#_fakeMr_close").click(function () {
            _closeWinDiv();
        });
    }

    /*鍏抽棴纭鎻愮ず妗嗕簨浠躲€愬瓨鍦╟allback銆�*/
    function BindCloseConfirmEven(leftCallback, rightCallback) {
        $("#_fakeMr_Confirm_leftButton").click(function () {
            _closeWinDiv();
            (leftCallback && typeof(leftCallback) === "function") && leftCallback();
        });
        $("#_fakeMr_Confirm_rightButton").click(function () {
            _closeWinDiv();
            (rightCallback && typeof(rightCallback) === "function") && rightCallback();
        });
    }

    /*鍏抽棴鎸夐挳*/
    function getMessage_closeButton() {
        var _fakeMr_closeButton = $('<a id="_fakeMr_close"></a>');
        var cssStr = {
            'font-size': '13px'
        };
        var pDom = $('<p>').css({
            'border-top': '1px solid #CCCCCC',
            'line-height': '40px'
        }).text("鍏抽棴");
        return _fakeMr_closeButton.css(cssStr).append(pDom);
    }

    /*纭妗嗗乏杈规寜閽�*/
    function getConfirm_leftButton(_str) {
        var _fakeMr_Confirm_leftButton = $('<a id="_fakeMr_Confirm_leftButton">' + '</a>');
        var cssStr = {
            'font-size': '13px',
            'float': 'right',
            'border-left': '1px solid #CCCCCC',
            'width': '49%',
			'border-top': '1px solid #CCCCCC',
            'line-height': '40px'
        };
        var pDom = $('<p>').css({
            'line-height': '40px'
        }).text(_str);
        return _fakeMr_Confirm_leftButton.css(cssStr).append(pDom);
    }

    /*纭妗嗗彸杈圭殑*/
    function getConfirm_rightButton(_str) {
        var _fakeMr_Confirm_rightButton = $('<a id="_fakeMr_Confirm_rightButton">' + '</a>');
        var cssStr = {
            'font-size': '13px',
            'float': 'right',
            'width': '49%',
			'border-top': '1px solid #CCCCCC',
            'line-height': '40px'
        };
        var pDom = $('<p>').css({
            'line-height': '40px'
        }).text(_str);
        return _fakeMr_Confirm_rightButton.css(cssStr).append(pDom);
    }

    /*body绗竴灞傜殑DIV*/
    function getMessageMainDiv() {
        var _fakeMr_Message_Text = $('<div id="_fakeMr_Message_Text"></div>');
        var cssStr = {
            'background': '#FFFFFF',
            'border-radius': '8px',
            'left': '50%',
            'position': 'fixed',
            'top': '40%',
            'width': '80%',
            'margin-left': '-40%',
            'text-align': 'center',
            "box-sizing": "content-box",
            'z-index': '999999999'
        };
        return _fakeMr_Message_Text.css(cssStr);
    }

    /*閬僵灞�*/
    function getMaskDiv() {
        var _maskDiv = $('<div id="_fakeMr_load_mask_div"></div>');
        return _maskDiv.css({
            'display': 'block',
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'background-color': '#000000',
            'top': '0',
            'left': '0',
            'opacity': '.6',
            'z-index': '999999998'
        }).click(function () {
            _closeWinDiv();
        });
    }

    $(function () {
        var dev = location.href.indexOf("?dev") > 0;
        var str = "\u0076\u0065\u0072\u0073\u0069\u006f\u006e\u003a\u0031\u002e\u0030\u002c\u4f5c\u8005\u003a\u90cf\u9ad8\u9633\u0028\u0046\u0061\u006b\u0065\u004d\u0072\u0029\u002c\u0051\u0051\u003a\u0031\u0031\u0037\u0034\u0035\u0034\u0030\u0035\u535a\u5ba2\u003a\u0068\u0074\u0074\u0070\u003a\u002f\u002f\u006d\u0079\u002e\u006f\u0073\u0063\u0068\u0069\u006e\u0061\u002e\u006e\u0065\u0074\u002f\u006a\u0067\u0079";
//        $('body').attr("Plug_Alert_Message_Author_Info", str);
        if (dev) {
            var enStr = "\u203b\u0041\u0075\u0074\u0068\u006f\u0072\u003a\u0046\u0061\u006b\u0065\u004d\u0072\u203b\u0020\u0025\u0063\u0048\u0069\u002c\u0020\u0048\u0065\u006c\u006c\u006f\u0020\u0065\u0076\u0065\u0072\u0079\u006f\u006e\u0065\u003a\u0020\u0049\u0020\u0061\u006d\u0020\u0046\u0061\u006b\u0065\u004d\u0072\u0020\u0074\u0068\u0065\u0020\u0073\u0069\u0074\u0065\u0020\u0049\u0020\u0064\u0065\u0076\u0065\u006c\u006f\u0070\u0065\u0064\u0020\u0075\u0073\u0069\u006e\u0067\u0020\u0074\u0068\u0065\u0020\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u0020\u0062\u006f\u0078\u0020\u0070\u006c\u0075\u0067\u0069\u006e\u002c\u0020\u0076\u0065\u0072\u0073\u0069\u006f\u006e\u0020\u0031\u002e\u0030\u0020\u004d\u0079\u0020\u0062\u006c\u006f\u0067\u003a\u0068\u0074\u0074\u0070\u003a\u002f\u002f\u006d\u0079\u002e\u006f\u0073\u0063\u0068\u0069\u006e\u0061\u002e\u006e\u0065\u0074\u002f\u006a\u0067\u0079";
            if (window.console && window.console.log) {
//                console.log(enStr, "color:green");
            }
        }
    });
	
	window.Message = fakemr
})(window,jQuery);
//        Message.showMessage(jsonResult.result.cn);
//        Message.showNotify(jsonResult.result.cn,1000);
/*Message.showConfirm("鎴戞槸閮忛珮闃冲悧锛�","鏄�","涓嶆槸",function(){
 //绗竴涓洖璋�
 },function(){
 //绗簩涓洖璋�
 });*/