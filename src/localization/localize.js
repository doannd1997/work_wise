const conf = require("./config.json");

const en = require("../../res/localize/current/en.json");
const vi = require("../../res/localize/current/vi.json");

export default localization = {
    curLang: null,
    getLang: function(lang_id){
        switch (this.curLang){
            case "en":
                return en[lang_id]
                break;
            default:
                return vi[lang_id];
                break;
        };
        return "[no_lang]" + lang_id
    },
    initConfigLang: function(){
        this.curLang = global.userData.getCurLang();
    }
}