exports.__esModule = true;
var WindowContext_1 = require("../Components/WindowContext");
var Config_1 = require("../Config");
var DatePicker = /** @class */ (function () {
    function DatePicker(targetInput) {
        this.input = targetInput;
    }
    DatePicker.prototype.show = function () {
        var _this = this;
        if (WindowContext_1.WindowContext.isWindowModal()) {
            this.input.off("dp.show.adjustHeight").on("dp.show.adjustHeight", function (e) { return WindowContext_1.WindowContext.adjustModalHeightForDataPicker(e); });
            this.input.off("dp.hide.adjustHeight").on("dp.hide.adjustHeight", function (e) { return WindowContext_1.WindowContext.adjustModalHeightForDataPicker(e); });
        }
        this.input.attr("data-autofocus", "disabled");
        var control = this.input.attr("data-control");
        var viewMode = this.input.attr("data-view-mode") || 'days';
        if (control == "date-picker") {
            this.input.datetimepicker({
                format: Config_1.Config.DATE_FORMAT,
                useCurrent: false,
                showTodayButton: true,
                icons: { today: 'today' },
                viewMode: viewMode,
                keepInvalid: this.input.closest("form").find("[data-change-action]").length == 0,
                locale: Config_1.Config.DATE_LOCALE
            }).data("DateTimePicker").keyBinds().clear = null;
            // Now make calendar icon clickable as well             
            this.input.parent().find(".fa-calendar").parent(".input-group-addon").click(function () { _this.input.focus(); });
        }
        else
            alert("Don't know how to handle date control of " + control);
    };
    return DatePicker;
}());
exports.DatePicker = DatePicker;
//# sourceMappingURL=datePicker.js.map