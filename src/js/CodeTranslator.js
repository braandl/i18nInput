/**
 * Created by sbrandt on 05.07.17.
 */
class CodeTranslator
{
    

    constructor () {
        this.i18nCodes = {
            "af":"fa_AF",
            "al":"al_AL",
            "dz":"ar_DZ",
            "as":"en_AS",
            "ad":"ad_AD",
            "ao":"pt_AO",
            "ai":"en_AI",
            "aq":"aq_AQ",
            "ag":"an_AG",
            "ar":"as_AR",
            "am":"am_AM",
            "aw":"nl_AW",
            "au":"en_AU",
            "at":"de_AT",
            "az":"az_AZ",
            "bs":"en_BS",
            "bh":"ar_BH",
            "bd":"bn_BD",
            "bb":"en_BB",
            "by":"by_BY",
            "be":"bl_BE",
            "bz":"en_BZ",
            "bj":"fr_BJ",
            "bm":"en_BM",
            "bt":"bt_BT",
            "bo":"es_BO",
            "ba":"hr_BA",
            "bw":"en_BW",
            "bv":"bv_BV",
            "br":"pt_BR",
            "io":"en_IO",
            "vg":"en_VG",
            "bn":"ms_BN",
            "bg":"tr_BG",
            "bf":"fr_BF",
            "bi":"fr_BI",
            "kh":"kh_KH",
            "cm":"en_CM",
            "ca":"en_CA",
            "cv":"ct_CV",
            "bq":"bq_BQ",
            "ky":"en_KY",
            "cf":"fr_CF",
            "td":"fr_TD",
            "cl":"es_CL",
            "cn":"zh_CN",
            "cx":"cx_CX",
            "cc":"ms_CC",
            "co":"es_CO",
            "km":"fr_KM",
            "cg":"fr_CG",
            "cd":"fr_CD",
            "ck":"en_CK",
            "cr":"es_CR",
            "hr":"hr_HR",
            "cu":"es_CU",
            "cw":"cw_CW",
            "cy":"el_CY",
            "cz":"cz_CZ",
            "ci":"fr_CI",
            "dk":"da_DK",
            "dj":"fr_DJ",
            "dm":"en_DM",
            "do":"es_DO",
            "ec":"es_EC",
            "eg":"ar_EG",
            "sv":"es_SV",
            "gq":"es_GQ",
            "er":"aa_ER",
            "ee":"ee_EE",
            "et":"en_ET",
            "fk":"en_FK",
            "fo":"da_FO",
            "fj":"en_FJ",
            "fi":"fo_FI",
            "fr":"fr_FR",
            "gf":"fr_GF",
            "pf":"fr_PF",
            "tf":"tf_TF",
            "ga":"fr_GA",
            "gm":"en_GM",
            "ge":"ge_GE",
            "de":"de_DE",
            "de_SP":"de_SP",
            "gh":"en_GH",
            "gi":"en_GI",
            "gr":"el_GR",
            "gl":"da_GL",
            "gd":"en_GD",
            "gp":"fr_GP",
            "gu":"em_GU",
            "gt":"es_GT",
            "gg":"gg_GG",
            "gn":"fr_GN",
            "gw":"pt_GW",
            "gy":"en_GY",
            "ht":"fr_HT",
            "hm":"hm_HM",
            "hn":"es_HN",
            "hk":"zh_HK",
            "hu":"hu_HU",
            "is":"is_IS",
            "in":"en_IN",
            "id":"id_ID",
            "ir":"fa_IR",
            "iq":"ar_IQ",
            "ie":"en_IE",
            "im":"im_IM",
            "il":"il_IL",
            "it":"it_IT",
            "jm":"jm_JM",
            "jp":"jp_JP",
            "je":"je_JE",
            "jo":"ar_JO",
            "kz":"kz_KZ",
            "ke":"ke_KE",
            "ki":"ki_KI",
            "kw":"kw_KW",
            "kg":"kg_KG",
            "la":"la_LA",
            "lv":"lv_LV",
            "lb":"lb_LB",
            "ls":"ls_LS",
            "lr":"lr_LR",
            "ly":"ly_LY",
            "li":"li_LI",
            "lt":"lt_LT",
            "lu":"lu_LU",
            "mo":"mo_MO",
            "mk":"mk_MK",
            "mg":"mg_MG",
            "mw":"mw_MW",
            "my":"my_MY",
            "mv":"mv_MV",
            "ml":"ml_ML",
            "mt":"mt_MT",
            "mh":"mh_MH",
            "mq":"mq_MQ",
            "mr":"mr_MR",
            "mu":"mu_MU",
            "yt":"yt_YT",
            "mx":"mx_MX",
            "fm":"fm_FM",
            "md":"md_MD",
            "mc":"mc_MC",
            "mn":"mn_MN",
            "me":"me_ME",
            "ms":"ms_MS",
            "ma":"ma_MA",
            "mz":"mz_MZ",
            "mm":"mm_MM",
            "na":"na_NA",
            "nr":"nr_NR",
            "np":"np_NP",
            "nl":"nl_NL",
            "nc":"nc_NC",
            "nz":"nz_NZ",
            "ni":"ni_NI",
            "ne":"ne_NE",
            "ng":"ng_NG",
            "nu":"nu_NU",
            "nf":"nf_NF",
            "kp":"kp_KP",
            "mp":"mp_MP",
            "no":"no_NO",
            "om":"om_OM",
            "pk":"pk_PK",
            "pw":"pw_PW",
            "ps":"ar_PS",
            "pa":"es_PA",
            "pg":"en_PG",
            "py":"es_PY",
            "pe":"es_PE",
            "ph":"en_PH",
            "pn":"pn_PN",
            "pl":"pl_PL",
            "pt":"pt_PT",
            "pr":"en_PR",
            "qa":"ar_QA",
            "ro":"ro_RO",
            "ru":"ru_RU",
            "rw":"rw_RW",
            "re":"fe_RE",
            "ws":"ws_WS",
            "sm":"it_SM",
            "sa":"ar_SA",
            "sn":"fr_SN",
            "rs":"rs_RS",
            "sc":"en_SC",
            "sl":"en_SL",
            "sg":"sg_SG",
            "sx":"sx_SX",
            "sk":"sk_SK",
            "si":"si_SI",
            "sb":"en_SB",
            "so":"so_SO",
            "za":"za_ZA",
            "gs":"gs_GS",
            "kr":"ko_KR",
            "ss":"ss_SS",
            "es":"es_ES",
            "lk":"lk_LK",
            "bl":"bl_BL",
            "sh":"en_SH",
            "kn":"en_KN",
            "lc":"en_LC",
            "mf":"mf_MF",
            "pm":"fr_PM",
            "vc":"en_VC",
            "sd":"ar_SD",
            "sr":"nl_SR",
            "sj":"sj_SJ",
            "sz":"en_SZ",
            "se":"sv_SE",
            "ch":"de_CH",
            "sy":"ar_SY",
            "st":"pt_ST",
            "tw":"zh_TW",
            "tj":"tj_TJ",
            "tz":"sw_TZ",
            "th":"th_TH",
            "tl":"tl_TL",
            "tg":"tr_TG",
            "tk":"tk_TK",
            "to":"to_TO",
            "tt":"en_TT",
            "tn":"ar_TN",
            "tr":"tr_TR",
            "tm":"tm_TM",
            "tc":"en_TC",
            "tv":"tv_TV",
            "um":"en_UM",
            "vi":"en_VI",
            "gb":"en_EN",
            "us":"en_US",
            "ug":"en_UG",
            "ua":"ru_UA",
            "ae":"ar_AE",
            "uy":"rd_UY",
            "uz":"uz_UZ",
            "vu":"vu_VU",
            "va":"va_VA",
            "ve":"es_VE",
            "vn":"vn_VN",
            "wf":"wf_WF",
            "eh":"eh_EH",
            "ye":"ar_YE",
            "zm":"en_ZM",
            "zw":"em_ZW",
            "ax":"sv_AX"
        }
        this.i18nCodes.findKeyByValue = function( value ) {
            for(let prop in this ) {
                if( this.hasOwnProperty( prop ) ) {
                    if( this[ prop ] === value ) {
                        return prop;
                    }
                }
            }
            return null;
        };


        this.i18nCodes.getAllProps = function() {
            let res = [];
            for(let prop in this ) {
                if( this.hasOwnProperty( prop ) ) {
                    res.push(this[prop]);
                }
            }
            return res;
        };
    }

    translateShortToIso(short) {
        let res =  this.i18nCodes[short];
        if (res !== null && res !== undefined){
            return res;
        } else {
            throw("Selected Element Seems not to be valid");
        }
    }

    translateIsoAssocArrayToShort(i18nArray) {
        if (!Array.isArray(i18nArray)) {
            throw ("Input Parameter must be of Type Array");
        }

        let resultArray = [];
        i18nArray.each(this, function (key, value) {
            resultArray[this.translateShortToIso(key)] = value;
        });

        return resultArray;
    }

    translateIsoAssocArrayToShortObject(i18nArray) {
        if (!Array.isArray(i18nArray)) {
            throw ("Input Parameter must be of Type Array");
        }

        let resultArray ={};
        i18nArray.each(this, function (key, value) {
            resultArray[this.translateShortToIso(key)] = value;
        });

        return resultArray;
    }

    translateIsoArrayToShort(i18nArray) {
        if (!Array.isArray(i18nArray)) {
            throw ("Input Parameter must be of Type Array");
        }

        let resultArray = [];
        for (let i = 0; i < i18nArray.length; i++) {
            resultArray.push(this.translateShortToIso(i18nArray[i]));
        }

        return resultArray;
    }

    translateIsoToShort(i18n) {
        let res = this.i18nCodes.findKeyByValue(i18n);
        if (res !== null && res !== undefined){
            return res;
        } else {
            throw("Selected Language is not available '" +i18n+ "'");
        }
    }
}

export default CodeTranslator;