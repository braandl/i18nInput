!function e(t,n,r){function i(o,l){if(!n[o]){if(!t[o]){var s="function"==typeof require&&require;if(!l&&s)return s(o,!0);if(a)return a(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var c=n[o]={exports:{}};t[o][0].call(c.exports,function(e){var n=t[o][1][e];return i(n||e)},c,c.exports,e,t,n,r)}return n[o].exports}for(var a="function"==typeof require&&require,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e){return e&&e.__esModule?e:{default:e}}(e("./InitMember")),s=function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.i18nCodes.findKeyByValue=function(e){for(var t in this)if(this.hasOwnProperty(t)&&this[t]===e)return t;return null},e.i18nCodes.getAllProps=function(){var e=[];for(var t in this)this.hasOwnProperty(t)&&e.push(this[t]);return e},e}return a(t,l.default),o(t,[{key:"initMember",value:function(){this.i18nCodes={af:"fa_AF",al:"al_AL",dz:"ar_DZ",as:"en_AS",ad:"ad_AD",ao:"pt_AO",ai:"en_AI",aq:"aq_AQ",ag:"an_AG",ar:"as_AR",am:"am_AM",aw:"nl_AW",au:"en_AU",at:"de_AT",az:"az_AZ",bs:"en_BS",bh:"ar_BH",bd:"bn_BD",bb:"en_BB",by:"by_BY",be:"bl_BE",bz:"en_BZ",bj:"fr_BJ",bm:"en_BM",bt:"bt_BT",bo:"es_BO",ba:"hr_BA",bw:"en_BW",bv:"bv_BV",br:"pt_BR",io:"en_IO",vg:"en_VG",bn:"ms_BN",bg:"tr_BG",bf:"fr_BF",bi:"fr_BI",kh:"kh_KH",cm:"en_CM",ca:"en_CA",cv:"ct_CV",bq:"bq_BQ",ky:"en_KY",cf:"fr_CF",td:"fr_TD",cl:"es_CL",cn:"zh_CN",cx:"cx_CX",cc:"ms_CC",co:"es_CO",km:"fr_KM",cg:"fr_CG",cd:"fr_CD",ck:"en_CK",cr:"es_CR",hr:"hr_HR",cu:"es_CU",cw:"cw_CW",cy:"el_CY",cz:"cz_CZ",ci:"fr_CI",dk:"da_DK",dj:"fr_DJ",dm:"en_DM",do:"es_DO",ec:"es_EC",eg:"ar_EG",sv:"es_SV",gq:"es_GQ",er:"aa_ER",ee:"ee_EE",et:"en_ET",fk:"en_FK",fo:"da_FO",fj:"en_FJ",fi:"fo_FI",fr:"fr_FR",gf:"fr_GF",pf:"fr_PF",tf:"tf_TF",ga:"fr_GA",gm:"en_GM",ge:"ge_GE",de:"de_DE",gh:"en_GH",gi:"en_GI",gr:"el_GR",gl:"da_GL",gd:"en_GD",gp:"fr_GP",gu:"em_GU",gt:"es_GT",gg:"gg_GG",gn:"fr_GN",gw:"pt_GW",gy:"en_GY",ht:"fr_HT",hm:"hm_HM",hn:"es_HN",hk:"zh_HK",hu:"hu_HU",is:"is_IS",in:"en_IN",id:"id_ID",ir:"fa_IR",iq:"ar_IQ",ie:"en_IE",im:"im_IM",il:"il_IL",it:"it_IT",jm:"jm_JM",jp:"jp_JP",je:"je_JE",jo:"ar_JO",kz:"kz_KZ",ke:"ke_KE",ki:"ki_KI",kw:"kw_KW",kg:"kg_KG",la:"la_LA",lv:"lv_LV",lb:"lb_LB",ls:"ls_LS",lr:"lr_LR",ly:"ly_LY",li:"li_LI",lt:"lt_LT",lu:"lu_LU",mo:"mo_MO",mk:"mk_MK",mg:"mg_MG",mw:"mw_MW",my:"my_MY",mv:"mv_MV",ml:"ml_ML",mt:"mt_MT",mh:"mh_MH",mq:"mq_MQ",mr:"mr_MR",mu:"mu_MU",yt:"yt_YT",mx:"mx_MX",fm:"fm_FM",md:"md_MD",mc:"mc_MC",mn:"mn_MN",me:"me_ME",ms:"ms_MS",ma:"ma_MA",mz:"mz_MZ",mm:"mm_MM",na:"na_NA",nr:"nr_NR",np:"np_NP",nl:"nl_NL",nc:"nc_NC",nz:"nz_NZ",ni:"ni_NI",ne:"ne_NE",ng:"ng_NG",nu:"nu_NU",nf:"nf_NF",kp:"kp_KP",mp:"mp_MP",no:"no_NO",om:"om_OM",pk:"pk_PK",pw:"pw_PW",ps:"ar_PS",pa:"es_PA",pg:"en_PG",py:"es_PY",pe:"es_PE",ph:"en_PH",pn:"pn_PN",pl:"pl_PL",pt:"pt_PT",pr:"en_PR",qa:"ar_QA",ro:"ro_RO",ru:"ru_RU",rw:"rw_RW",re:"fe_RE",ws:"ws_WS",sm:"it_SM",sa:"ar_SA",sn:"fr_SN",rs:"rs_RS",sc:"en_SC",sl:"en_SL",sg:"sg_SG",sx:"sx_SX",sk:"sk_SK",si:"si_SI",sb:"en_SB",so:"so_SO",za:"za_ZA",gs:"gs_GS",kr:"ko_KR",ss:"ss_SS",es:"es_ES",lk:"lk_LK",bl:"bl_BL",sh:"en_SH",kn:"en_KN",lc:"en_LC",mf:"mf_MF",pm:"fr_PM",vc:"en_VC",sd:"ar_SD",sr:"nl_SR",sj:"sj_SJ",sz:"en_SZ",se:"sv_SE",ch:"de_CH",sy:"ar_SY",st:"pt_ST",tw:"zh_TW",tj:"tj_TJ",tz:"sw_TZ",th:"th_TH",tl:"tl_TL",tg:"tr_TG",tk:"tk_TK",to:"to_TO",tt:"en_TT",tn:"ar_TN",tr:"tr_TR",tm:"tm_TM",tc:"en_TC",tv:"tv_TV",um:"en_UM",vi:"en_VI",gb:"en_GB",us:"en_US",ug:"en_UG",ua:"ru_UA",ae:"ar_AE",uy:"rd_UY",uz:"uz_UZ",vu:"vu_VU",va:"va_VA",ve:"es_VE",vn:"vn_VN",wf:"wf_WF",eh:"eh_EH",ye:"ar_YE",zm:"en_ZM",zw:"em_ZW",ax:"sv_AX"}}}]),o(t,[{key:"translateShortToIso",value:function(e){var t=this.i18nCodes[e];if(null!==t&&void 0!==t)return t;throw"Selected Element Seems not to be valid"}},{key:"translateIsoAssocArrayToShort",value:function(e){if(!Array.isArray(e))throw"Input Parameter must be of Type Array";var t=[];return e.each(this,function(e,n){t[this.translateShortToIso(e)]=n}),t}},{key:"translateIsoArrayToShort",value:function(e){if(!Array.isArray(e))throw"Input Parameter must be of Type Array";for(var t=[],n=0;n<e.length;n++)t.push(this.translateShortToIso(e[n]));return t}},{key:"translateIsoToShort",value:function(e){var t=this.i18nCodes.findKeyByValue(e);if(null!==t&&void 0!==t)return t;throw"Selected Language is not available '"+e+"'"}}]),t}();n.default=s},{"./InitMember":3}],2:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e){return e&&e.__esModule?e:{default:e}}(e("./InitMember")),s=function(e){function t(e,n){r(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));a.container=e,a.main=n;for(var o=String(e.attr("languages").replace(/'/g,'"')),l=$.parseJSON(o),s=0;s<l.length;s++){var u=n.codeTranslator.translateIsoToShort(l[s]);-1===a.languages.indexOf(u)?a.languages.push(u):console.warn("Languages can not be added twice. Second '"+l[s]+"' was ignored.")}return void 0===e.attr("animate")||"false"!==e.attr("animate")&&!1!==Boolean(e.attr("animate"))||(a.FADEIN_SPEED=0,a.FADEIN_DELAY=0),a.loadStyles(),a.parsePlaceholder(),a.initFlagController(),a}return a(t,l.default),o(t,[{key:"initMember",value:function(){this.FADEIN_SPEED=400,this.FADEIN_DELAY=15,this.main=null,this.flaggerChooser=null,this.container=null,this.languages=[],this.currentFlag=0,this.isAnimating=!1,this.inputStyleClasses="",this.pickerClass="",this.hoverAnimationTimeout=null,this.flaggerLeaveAnimationTimeout=null,this.flaggerCancelAnimationTimeout=null,this.placeHolderType="string",this.placeholder=""}}]),o(t,[{key:"parsePlaceholder",value:function(){if(void 0!==this.container.attr("placeholder")){var e=String(this.container.attr("placeholder").replace(/'/g,'"')),t="";try{t=$.parseJSON(e)}catch(n){t=e}if(Array.isArray(t)){if(this.placeHolderType="array",this.placeholder=[],t.length<this.languages.length)throw"If multiple Placeholders are provided, please provide a placeholder for every language";for(var n=0;n<t.length;n++)this.placeholder[this.languages[n]]=t[n]}else this.placeHolderType="string",this.placeholder=t}}},{key:"loadStyles",value:function(){void 0!==this.container.attr("expander-class")&&(this.inputStyleClasses=this.container.attr("expander-class")),void 0!==this.container.attr("picker-class")&&(this.pickerClass=this.container.attr("picker-class"))}},{key:"initFlagController",value:function(){""!==this.pickerClass?this.container.append("<div class='"+this.pickerClass+"'></div>"):this.container.append("<div class='default-picker'></div>"),this.flagger=$(this.container.children()[this.container.children().length-1]),this.flagger.css({left:this.main.inputTool.input.outerWidth()-24,"margin-top":-(this.main.inputTool.input.outerHeight()+24)/2}),this.flagger.html('<span title="Language: '+this.main.codeTranslator.translateShortToIso(this.languages[0])+'" class="flag-icon flag-icon-'+this.languages[0]+'"></span>'),this.loadFlags();var e=this;this.flagger.hover(function(){1!==e.languages.length&&(clearTimeout(e.flaggerLeaveAnimationTimeout),clearTimeout(e.flaggerCancelAnimationTimeout),e.isAnimating||($(this).css({cursor:"pointer"}),e.hoverAnimationTimeout=setTimeout(function(){e.fadeIn()},50)))},function(){e.isAnimating||clearTimeout(e.hoverAnimationTimeout)}),this.flagger.mouseleave(function(){e.flaggerCancelAnimationTimeout=setTimeout(function(){e.fadeOut(function(){e.isAnimating=!1})},1e3)})}},{key:"fadeIn",value:function(){this.isAnimating=!0;var e=this;this.flaggerChooser.show(),this.flaggerChooser.fadeIn(50);var t=this.flaggerChooser.children().length;this.flaggerChooser.children().each(function(t){$(this).delay(t*e.FADEIN_DELAY).fadeIn(e.FADEIN_SPEED)}),this.flaggerChooser.delay(t*e.FADEIN_DELAY).queue(function(){e.isAnimating=!1})}},{key:"fadeOut",value:function(e){this.isAnimating=!0;var t=this,n=this.flaggerChooser.children().length;this.flaggerChooser.children().each(function(e){$(this).delay(e*t.FADEIN_DELAY*3).fadeOut(t.FADEIN_SPEED)}),setTimeout(function(){t.flaggerChooser.fadeOut("fast"),t.flaggerChooser.hide(),e.call()},(n-2)*t.FADEIN_DELAY*3)}},{key:"replaceCurrent",value:function(e){this.flagger.html(e.html()),this.main.inputTool.changedInputView()}},{key:"loadFlags",value:function(){var e=this,t=this;""!==this.inputStyleClasses?this.container.append("<div class='"+this.inputStyleClasses+"'></div>"):this.container.append("<div></div>"),null!=this.flaggerChooser&&this.flaggerChooser.remove(),this.flaggerChooser=$(this.container.children()[this.container.children().length-1]),this.flaggerChooser.css({position:"absolute","margin-top":"-2px",display:"none",padding:"2px","background-color":"#FFFFFF",width:this.main.inputTool.input.outerWidth(),border:"1px solid "+this.main.inputTool.input.css("border-color"),"z-index":2});for(var n=Math.floor((this.flaggerChooser.innerWidth()-2*this.flaggerChooser.css("padding"))/(this.flagger.outerWidth()+2)),r=0;r<this.languages.length;r++){(function(r){if(r===e.currentFlag)return"continue";e.flaggerChooser.append('<div style="float:right; display: none; padding:0 0 2px 2px;" ><span title="Language: '+e.main.codeTranslator.translateShortToIso(e.languages[r])+'" class="flag-icon flag-icon-'+e.languages[r]+'"></span></div>');var i=$(e.flaggerChooser.children()[e.flaggerChooser.children().length-1]);i.hover(function(){$(this).css({cursor:"pointer"})}),i.click(function(){t.currentFlag=r,t.replaceCurrent($(this)),t.fadeOut(function(){t.isAnimating=!1,t.loadFlags()})}),r%n==0&&e.flaggerChooser.append("<div style='clear: both;'></div>")})(r)}this.flaggerChooser.append("<div style='clear: both;'></div>"),this.flaggerChooser.on("mouseleave",function(){t.flaggerLeaveAnimationTimeout=setTimeout(function(){t.fadeOut(function(){t.isAnimating=!1})},250)}),this.flaggerChooser.on("mouseenter",function(){clearTimeout(t.flaggerCancelAnimationTimeout),clearTimeout(t.flaggerLeaveAnimationTimeout)})}}]),t}();n.default=s},{"./InitMember":3}],3:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(){function e(){r(this,e),this.initMember()}return i(e,[{key:"initMember",value:function(){}}]),e}();n.default=a},{}],4:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e){return e&&e.__esModule?e:{default:e}}(e("./InitMember")),s=function(e){function t(e,n){r(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));a.container=e,void 0!==e.attr("input-class")&&(a.inputStyleClasses=e.attr("input-class"));var o=void 0!==e.attr("placeholder")?"placeholder=''":"",l=parseInt(e.attr("rows"));return 1!==l&&l?e.append("<textarea "+o+" class='"+a.inputStyleClasses+"' style='line-height: 12px' type='text' rows='"+l+"'></textarea>"):e.append("<input "+o+" class='"+a.inputStyleClasses+"' type='text' />"),a.input=$(e.children()[e.children().length-1]),a.main=n,a.input.css({width:e.attr("width")<35?35:e.attr("width"),height:e.attr("height")<12?12:e.attr("height")}),e.css({width:a.input.outerWidth(),"padding-bottom":"2px","padding-top":"2px"}),a.addElementMethods(),a.initKeyLogging(),a}return a(t,l.default),o(t,[{key:"initMember",value:function(){this.container=null,this.main=null,this.input=null,this.inputvalues=[],this.inputStyleClasses="",this.inputvalues.size=function(){var e=0,t=void 0;for(t in this)this.hasOwnProperty(t)&&"size"!==t&&"each"!==t&&"hasKey"!==t&&e++;return e},this.inputvalues.each=function(e,t){var n=void 0;for(n in this)this.hasOwnProperty(n)&&"size"!==n&&"each"!==n&&"hasKey"!==n&&t.apply(e,[n,this[n]])},this.inputvalues.hasKey=function(e){for(var t in this)if(t===e)return!0;return!1}}}]),o(t,[{key:"initKeyLogging",value:function(){var e=this;this.input.keyup(function(){var t=e.main.flagsTool.languages[e.main.flagsTool.currentFlag];e.inputvalues[t]=$(this).val()})}},{key:"changedInputView",value:function(){var e=this.main.flagsTool.languages[this.main.flagsTool.currentFlag];"string"===this.main.flagsTool.placeHolderType?this.input.attr("placeholder",this.main.flagsTool.placeholder):"array"===this.main.flagsTool.placeHolderType&&this.input.attr("placeholder",this.main.flagsTool.placeholder[e]),this.input.val(this.inputvalues[e])}},{key:"addElementMethods",value:function(){var e=this,t=function(){for(var t=[],n=0;n<e.main.flagsTool.languages.length;n++)e.inputvalues.hasKey(e.main.flagsTool.languages[n])&&void 0!==e.inputvalues[e.main.flagsTool.languages[n]]&&0!==e.inputvalues[e.main.flagsTool.languages[n]].length||t.push(e.main.flagsTool.languages[n]);return e.main.codeTranslator.translateIsoArrayToShort(t)};this.container[0].i18n=function(t){return void 0!==e.inputvalues&&void 0!==e.inputvalues[t]?e.inputvalues[t]:void 0!==e.inputvalues?e.main.codeTranslator.translateIsoAssocArrayToShort(e.inputvalues):""},this.container[0].complete=function(){return 0===t().length},this.container[0].missing=t,this.container[0].setValue=function(t,n){if(t instanceof Array){if(!(n instanceof Array))throw"Either both, or non argument must be of type Array";if(t.length!==n.length)throw"Both input arrays must have the same size";for(var r=0;r<t.length;r++){var i=e.main.codeTranslator.translateIsoToShort(t[r]);if(!e.main.isi18nRegistered(i))throw"Language "+t+" is not registered with the View";e.inputvalues[i]=n[r]}}else{var a=e.main.codeTranslator.translateIsoToShort(t);if(!e.main.isi18nRegistered(a))throw"Language "+t+" is not registered with the View";e.inputvalues[a]=n}return e.changedInputView(),!0},this.container[0].allLocales=function(){return e.main.codeTranslator.i18nCodes.getAllProps()},this.container[0].registerFormIncompleteHandler=function(t){return"function"!=typeof t?(console.warn("The Handler must be of type function"),!1):(e.main.failHandler=t,!0)},this.container.init.prototype.i18n=function(e){return document.getElementById($(this).attr("id").replace("#","")).i18n(e)},this.container.init.prototype.complete=function(){return document.getElementById($(this).attr("id").replace("#","")).complete()},this.container.init.prototype.missing=function(){return document.getElementById($(this).attr("id").replace("#","")).missing()},this.container.init.prototype.setValue=function(e,t){return document.getElementById($(this).attr("id").replace("#","")).setValue(e,t)},this.container.init.prototype.allLocales=function(){return document.getElementById($(this).attr("id").replace("#","")).allLocales()},this.container.init.prototype.registerFormIncompleteHandler=function(e){return document.getElementById($(this).attr("id").replace("#","")).registerFormIncompleteHandler(e)}}}]),t}();n.default=s},{"./InitMember":3}],5:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=r(e("./InitMember")),u=r(e("./FlagsTool")),c=r(e("./InputTool")),h=r(e("./CodeTranslator")),f=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.container=$("#"+e),n.initCodeTranslator(),n.initInputTool(),n.initFlagsTool(),n.registerSubmitHandler(),n.inputTool.changedInputView(),n}return o(t,s.default),l(t,[{key:"initMember",value:function(){this.flagsTool=null,this.container=null,this.inputTool=null,this.codeTranslator=null,this.failHandler=null}}]),l(t,[{key:"initInputTool",value:function(){this.inputTool=new c.default(this.container,this)}},{key:"initFlagsTool",value:function(){this.flagsTool=new u.default(this.container,this)}},{key:"initCodeTranslator",value:function(){this.codeTranslator=new h.default(this.container,this)}},{key:"isi18nRegistered",value:function(e){return-1!==this.flagsTool.languages.indexOf(e)}},{key:"registerSubmitHandler",value:function(){var e=this.findForm(this.container);if(null!==e){var t=this;e.submit(function(){var e=t.container.i18n();e.each=t.inputTool.inputvalues.each,e.each(this,function(e,n){$(this).append("<input type='hidden' name='"+t.container.attr("id")+"["+e+"]' value='"+n+"'>")});var n=t.container.attr("submitOnMissing"),r=void 0===n||null===n||"true"===String(n)||"True"===String(n),i=t.container.complete()||r;return i||r?t.inputTool.input.removeClass("i18n-view-incomplete"):(t.inputTool.input.addClass("i18n-view-incomplete"),null!==t.failHandler&&setTimeout(function(){t.failHandler.call()},0)),i})}}},{key:"findForm",value:function(e){return void 0===e.parent()||null===e.parent()||"BODY"===e.parent().prop("nodeName")?null:"FORM"===e.parent().prop("nodeName")?e.parent():this.findForm(e.parent())}}]),t}();n.default=f},{"./CodeTranslator":1,"./FlagsTool":2,"./InitMember":3,"./InputTool":4}],6:[function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}}(e("./MainController"));window.i18nInputView=function(e){return new r.default(e)}},{"./MainController":5}]},{},[6]);
//# sourceMappingURL=srcmaps/i18nInput.js.map
