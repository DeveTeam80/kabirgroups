(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"backgroundColorRatios":[0],"id":"rootPlayer","layout":"absolute","data":{"defaultLocale":"en","history":{},"displayTooltipInTouchScreens":true,"textToSpeechConfig":{"pitch":1,"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"speechOnQuizQuestion":false,"rate":1},"locales":{"en":"locale/en.txt"},"name":"Player736"},"propagateClick":false,"gap":10,"scrollBarColor":"#000000","backgroundColor":["#FFFFFF"],"children":["this.MainViewer","this.Image_BC1F6E28_AC35_0B10_41DF_DD9EED6A9336","this.Image_BD00D861_AC33_3710_41C0_81D4318A0711"],"hash": "a8de231e97813216cee9769f606bbb28dd6861fbc56f83eb738e26652b0400d9", "definitions": [{"bottom":"0%","id":"Image_BC1F6E28_AC35_0B10_41DF_DD9EED6A9336","left":"0.04%","propagateClick":false,"verticalAlign":"middle","horizontalAlign":"center","data":{"name":"Image4745"},"class":"Image","width":"10%","minHeight":1,"backgroundOpacity":0,"minWidth":1,"height":"10%","scaleMode":"fit_inside","url":trans('Image_BC1F6E28_AC35_0B10_41DF_DD9EED6A9336.url')},{"class":"PanoramaPlayer","arrowKeysAction":"translate","mouseControlMode":"drag_rotation","keepModel3DLoadedWithoutLocation":true,"touchControlMode":"drag_rotation","aaEnabled":true,"id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","displayPlaybackBar":true},{"vrThumbstickRotationStep":20,"progressBackgroundColorRatios":[0],"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowBlurRadius":3,"playbackBarBackgroundOpacity":1,"subtitlesFontSize":"3vmin","subtitlesGap":0,"subtitlesBackgroundColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","data":{"name":"Main Viewer"},"propagateClick":false,"progressRight":"33%","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","progressOpacity":0.7,"toolTipPaddingBottom":4,"playbackBarLeft":0,"playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","progressBarBackgroundColorDirection":"horizontal","subtitlesBackgroundOpacity":0.2,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesTextShadowOpacity":1,"playbackBarHeadBorderRadius":0,"progressBarBorderColor":"#000000","toolTipPaddingTop":4,"playbackBarHeadBorderColor":"#000000","playbackBarHeadBorderSize":0,"playbackBarBorderSize":0,"playbackBarHeadShadow":true,"subtitlesFontColor":"#FFFFFF","subtitlesBorderColor":"#FFFFFF","toolTipFontSize":"1.11vmin","progressBarBackgroundColorRatios":[0],"vrPointerColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesTextShadowHorizontalLength":1,"toolTipPaddingLeft":6,"progressBorderRadius":2,"id":"MainViewer","progressBorderColor":"#000000","toolTipFontColor":"#606060","toolTipBackgroundColor":"#F6F6F6","playbackBarBottom":5,"progressBackgroundColor":["#000000"],"toolTipPaddingRight":6,"vrPointerSelectionColor":"#FF6600","toolTipShadowColor":"#333138","firstTransitionDuration":0,"progressBottom":10,"playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"progressBarBackgroundColor":["#3399FF"],"progressLeft":"33%","progressHeight":2,"subtitlesFontFamily":"Arial","progressBorderSize":0,"subtitlesBottom":50,"surfaceReticleColor":"#FFFFFF","progressBarBorderRadius":2,"playbackBarProgressBorderSize":0,"toolTipTextShadowColor":"#000000","vrPointerSelectionTime":2000,"subtitlesTop":0,"class":"ViewerArea","subtitlesTextShadowVerticalLength":1,"width":"100%","playbackBarRight":0,"playbackBarBackgroundColorDirection":"vertical","minHeight":50,"playbackBarHeadWidth":6,"toolTipFontFamily":"Arial","minWidth":100,"progressBarBorderSize":0,"playbackBarProgressBorderRadius":0,"toolTipBorderColor":"#767676","playbackBarProgressBackgroundColor":["#3399FF"],"height":"100%","subtitlesTextShadowColor":"#000000"},{"id":"mainPlayList","class":"PlayList","items":[{"end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_A707A8A7_AC0F_3710_41E0_2D8C26328A56_camera","media":"this.panorama_A707A8A7_AC0F_3710_41E0_2D8C26328A56"}]},{"bottom":"0%","id":"Image_BD00D861_AC33_3710_41C0_81D4318A0711","propagateClick":false,"right":"0%","verticalAlign":"middle","horizontalAlign":"center","data":{"name":"Image5184"},"class":"Image","width":"10%","minHeight":1,"backgroundOpacity":0,"minWidth":1,"height":"10%","scaleMode":"fit_inside","url":trans('Image_BD00D861_AC33_3710_41C0_81D4318A0711.url')},{"displayOriginPosition":{"pitch":-90,"class":"RotationalCameraDisplayPosition","stereographicFactor":1,"yaw":-4.26,"hfov":165},"initialSequence":"this.sequence_A6FB38AE_AC0F_1710_41C7_058B4B79303E","displayMovements":[{"class":"TargetRotationalCameraDisplayMovement","duration":1000},{"duration":3000,"targetPitch":-80.82,"targetStereographicFactor":0,"easing":"cubic_in_out","targetHfov":120,"class":"TargetRotationalCameraDisplayMovement"}],"initialPosition":{"pitch":-80.82,"class":"PanoramaCameraPosition","yaw":-4.26,"hfov":120},"id":"panorama_A707A8A7_AC0F_3710_41E0_2D8C26328A56_camera","class":"PanoramaCamera","enterPointingToHorizon":true},{"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_A707A8A7_AC0F_3710_41E0_2D8C26328A56_t.webp","cube":{"class":"ImageResource","levels":[{"height":3072,"tags":"ondemand","url":"media/panorama_A707A8A7_AC0F_3710_41E0_2D8C26328A56_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":6,"width":18432,"colCount":36},{"height":1536,"tags":"ondemand","url":"media/panorama_A707A8A7_AC0F_3710_41E0_2D8C26328A56_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":3,"width":9216,"colCount":18},{"height":1024,"tags":"ondemand","url":"media/panorama_A707A8A7_AC0F_3710_41E0_2D8C26328A56_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":2,"width":6144,"colCount":12},{"height":512,"tags":["ondemand","preload"],"url":"media/panorama_A707A8A7_AC0F_3710_41E0_2D8C26328A56_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":1,"width":3072,"colCount":6}]}}],"vfov":180,"thumbnailUrl":"media/panorama_A707A8A7_AC0F_3710_41E0_2D8C26328A56_t.webp","id":"panorama_A707A8A7_AC0F_3710_41E0_2D8C26328A56","class":"Panorama","hfovMax":135,"data":{"label":"DJI_0977"},"hfov":360,"hfovMin":"120%","label":trans('panorama_A707A8A7_AC0F_3710_41E0_2D8C26328A56.label'),"overlays":["this.overlay_A3879641_AC17_1B13_41D1_06385CE34296","this.overlay_A34BC28D_AC13_7B10_41E4_2744E1D0CFDA","this.overlay_BC020905_AC13_0910_41E3_C5B3D1A2384A","this.overlay_A3D97A05_AC1F_0B10_41E2_27BDD0676669","this.overlay_BF741A55_AC35_0B30_41DF_5C8A6D648883"]},{"id":"sequence_A6FB38AE_AC0F_1710_41C7_058B4B79303E","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5}]},{"data":{"label":"Text"},"areas":["this.HotspotPanoramaOverlayArea_A38BF65F_AC17_1B30_41D3_D87ECF75D16A"],"items":["this.HotspotPanoramaOverlayTextImage_A3870640_AC17_1B10_41DB_230C33063B64"],"maps":[],"enabledInCardboard":true,"useHandCursor":true,"id":"overlay_A3879641_AC17_1B13_41D1_06385CE34296","class":"HotspotPanoramaOverlay"},{"data":{"label":"Arrow White Down"},"areas":["this.HotspotPanoramaOverlayArea_A345B34E_AC13_7910_41CD_EAE198C65262"],"items":[{"pitch":1.13,"distance":50,"yaw":5.4,"data":{"label":"Arrow White Down"},"vfov":4.94,"scaleMode":"fit_inside","hfov":5.36,"image":"this.res_BDADC052_AC33_1730_41CF_04C45888B7D0","class":"HotspotPanoramaOverlayImage"}],"maps":[],"enabledInCardboard":true,"useHandCursor":true,"id":"overlay_A34BC28D_AC13_7B10_41E4_2744E1D0CFDA","class":"HotspotPanoramaOverlay"},{"data":{"label":"Polygon"},"areas":["this.HotspotPanoramaOverlayArea_BC37292D_AC13_0910_41C5_F8DFB7A7EC22"],"items":[{"pitch":-80.51,"distance":50,"yaw":65.61,"vfov":86.35,"image":{"class":"ImageResource","levels":[{"height":2048,"url":"media/panorama_A707A8A7_AC0F_3710_41E0_2D8C26328A56_HS_1xv0e24k.webp","class":"ImageResourceLevel","width":1823}]},"hfov":79.75,"data":{"label":"Polygon"},"class":"HotspotPanoramaOverlayImage"}],"maps":[],"enabledInCardboard":true,"useHandCursor":true,"id":"overlay_BC020905_AC13_0910_41E3_C5B3D1A2384A","class":"HotspotPanoramaOverlay"},{"data":{"label":"Text"},"areas":["this.HotspotPanoramaOverlayArea_BC119A37_AC1F_0B70_41C0_F4D3736788E4"],"items":["this.HotspotPanoramaOverlayTextImage_A3DBCA03_AC1F_0B10_41C9_F02E53BE3DC8"],"maps":[],"enabledInCardboard":true,"useHandCursor":true,"id":"overlay_A3D97A05_AC1F_0B10_41E2_27BDD0676669","class":"HotspotPanoramaOverlay"},{"data":{"label":"Text"},"areas":["this.HotspotPanoramaOverlayArea_BF4B4A73_AC35_0BF0_41E1_F114A6B5FCDF"],"items":["this.HotspotPanoramaOverlayTextImage_BF74FA52_AC35_0B30_41D6_B22D98FE2B3F"],"maps":[],"enabledInCardboard":true,"useHandCursor":true,"id":"overlay_BF741A55_AC35_0B30_41DF_5C8A6D648883","class":"HotspotPanoramaOverlay"},{"id":"HotspotPanoramaOverlayArea_A38BF65F_AC17_1B30_41D3_D87ECF75D16A","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"mapColor":"any"},{"distance":50,"data":{"label":"Text"},"vfov":9.39,"id":"HotspotPanoramaOverlayTextImage_A3870640_AC17_1B10_41DB_230C33063B64","class":"HotspotPanoramaOverlayImage","pitch":7.4,"yaw":4.99,"image":{"class":"ImageResource","levels":["this.imlevel_BDBD2170_AC33_19F0_41D2_A9BF6C401CDB"]},"hfov":17.21},{"id":"HotspotPanoramaOverlayArea_A345B34E_AC13_7910_41CD_EAE198C65262","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"mapColor":"any"},{"id":"res_BDADC052_AC33_1730_41CF_04C45888B7D0","class":"ImageResource","levels":[{"height":118,"url":"media/res_BDADC052_AC33_1730_41CF_04C45888B7D0_0.webp","class":"ImageResourceLevel","width":118}]},{"id":"HotspotPanoramaOverlayArea_BC37292D_AC13_0910_41C5_F8DFB7A7EC22","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"mapColor":"image"},{"id":"HotspotPanoramaOverlayArea_BC119A37_AC1F_0B70_41C0_F4D3736788E4","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"mapColor":"any"},{"distance":50,"data":{"label":"Text"},"vfov":15.42,"id":"HotspotPanoramaOverlayTextImage_A3DBCA03_AC1F_0B10_41C9_F02E53BE3DC8","class":"HotspotPanoramaOverlayImage","roll":26.57,"pitch":-57.07,"yaw":1.57,"image":{"class":"ImageResource","levels":["this.imlevel_B9AAD035_AC0D_7770_41C2_CC984ACD6EA4"]},"hfov":47.91},{"id":"HotspotPanoramaOverlayArea_BF4B4A73_AC35_0BF0_41E1_F114A6B5FCDF","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"mapColor":"any"},{"distance":50,"data":{"label":"Text"},"vfov":16.96,"id":"HotspotPanoramaOverlayTextImage_BF74FA52_AC35_0B30_41D6_B22D98FE2B3F","class":"HotspotPanoramaOverlayImage","roll":94.04,"pitch":-85.83,"yaw":87.29,"image":{"class":"ImageResource","levels":["this.imlevel_BEA2C203_AC0D_7B10_41DE_C47B5C3D2B42"]},"hfov":37.02},{"height":425.25,"width":783.17,"id":"imlevel_BDBD2170_AC33_19F0_41D2_A9BF6C401CDB","class":"ImageResourceLevel","url":trans('imlevel_BDBD2170_AC33_19F0_41D2_A9BF6C401CDB.url')},{"height":664.45,"width":2180.3,"id":"imlevel_B9AAD035_AC0D_7770_41C2_CC984ACD6EA4","class":"ImageResourceLevel","url":trans('imlevel_B9AAD035_AC0D_7770_41C2_CC984ACD6EA4.url')},{"height":750.16,"width":1684.66,"id":"imlevel_BEA2C203_AC0D_7B10_41DE_C47B5C3D2B42","class":"ImageResourceLevel","url":trans('imlevel_BEA2C203_AC0D_7B10_41DE_C47B5C3D2B42.url')}],"scrollBarMargin":2,"scripts":{"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"textToSpeech":TDV.Tour.Script.textToSpeech,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"openLink":TDV.Tour.Script.openLink,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"showPopupImage":TDV.Tour.Script.showPopupImage,"quizFinish":TDV.Tour.Script.quizFinish,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"shareSocial":TDV.Tour.Script.shareSocial,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"registerKey":TDV.Tour.Script.registerKey,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"unregisterKey":TDV.Tour.Script.unregisterKey,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"quizStart":TDV.Tour.Script.quizStart,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPixels":TDV.Tour.Script.getPixels,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getComponentByName":TDV.Tour.Script.getComponentByName,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"existsKey":TDV.Tour.Script.existsKey,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"executeJS":TDV.Tour.Script.executeJS,"initQuiz":TDV.Tour.Script.initQuiz,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"showWindow":TDV.Tour.Script.showWindow,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"initAnalytics":TDV.Tour.Script.initAnalytics,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"init":TDV.Tour.Script.init,"getMainViewer":TDV.Tour.Script.getMainViewer,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setValue":TDV.Tour.Script.setValue,"historyGoForward":TDV.Tour.Script.historyGoForward,"downloadFile":TDV.Tour.Script.downloadFile,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"startMeasurement":TDV.Tour.Script.startMeasurement,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"mixObject":TDV.Tour.Script.mixObject,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"historyGoBack":TDV.Tour.Script.historyGoBack,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getKey":TDV.Tour.Script.getKey,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"playAudioList":TDV.Tour.Script.playAudioList,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getOverlays":TDV.Tour.Script.getOverlays,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"cloneBindings":TDV.Tour.Script.cloneBindings,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"isPanorama":TDV.Tour.Script.isPanorama,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"clone":TDV.Tour.Script.clone,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"createTween":TDV.Tour.Script.createTween,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"enableVR":TDV.Tour.Script.enableVR,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"translate":TDV.Tour.Script.translate,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"disableVR":TDV.Tour.Script.disableVR,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"resumePlayers":TDV.Tour.Script.resumePlayers,"setLocale":TDV.Tour.Script.setLocale,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"toggleVR":TDV.Tour.Script.toggleVR},"class":"Player","defaultMenu":["fullscreen","mute","rotation"],"width":"100%","minHeight":0,"start":"this.init()","minWidth":0,"height":"100%","watermark":false};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.7, Thu May 8 2025