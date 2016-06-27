/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'wallpaper-cnc_10b153922',
                type: 'image',
                rect: ['0px', '0px','985px','554px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"wallpaper-cnc_10b15392.png",'0px','0px'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'PokerVIP-Poker-Dude-Badge',
                type: 'image',
                rect: ['288px', '40px','226px','226px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"PokerVIP-Poker-Dude-Badge.png",'0px','0px'],
                filter: [0, 0, 1, 3.3333333333333, 0, 0.65, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'table-darkergreen-nologo2',
                type: 'image',
                rect: ['20px', '115px','692px','365px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"table-darkergreen-nologo.png",'0px','0px']
            },
            {
                id: 'notebook-308849_960_720',
                type: 'image',
                rect: ['592px', '249px','36px','48px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"notebook-308849_960_720.png",'0px','0px'],
                transform: [[],['25']]
            },
            {
                id: 'RoundRect',
                type: 'rect',
                rect: ['165px', '354px','66px','93px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                opacity: 0.7,
                fill: ["rgba(0,86,0,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(219,24,24,1.00)", 0, 0, 0]
            },
            {
                id: 'RoundRectCopy',
                type: 'rect',
                rect: ['165px', '115px','66px','93px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                opacity: 0.7,
                fill: ["rgba(0,86,0,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(219,24,24,1.00)", 0, 0, 0]
            },
            {
                id: 'card-111',
                type: 'rect',
                rect: ['270', '354','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'ostvatText',
                type: 'text',
                rect: ['111px', '220px','54px','20px','auto', 'auto'],
                text: "Остават                   ",
                font: ['Verdana, Geneva, sans-serif', 10, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'card-222',
                type: 'rect',
                rect: ['290', '354','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'card-333',
                type: 'rect',
                rect: ['326', '353px','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'card-444',
                type: 'rect',
                rect: ['351', '353px','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'card-555',
                type: 'rect',
                rect: ['386', '353px','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'enemyHandAnimation',
                type: 'rect',
                rect: ['278', '115','auto','auto','auto', 'auto']
            },
            {
                id: 'card-666',
                type: 'rect',
                rect: ['409', '355','auto','auto','auto', 'auto'],
                title: 'sixCard',
                tabindex: '6',
                cursor: ['pointer']
            },
            {
                id: 'op1',
                type: 'image',
                rect: ['272px', '108px','69px','94px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bicycle_kingdoms_of_a_new_world_playing_cards_blue_back.png",'0px','0px'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0.00)", 3, 3, 0]
            },
            {
                id: 'op2',
                type: 'image',
                rect: ['305px', '108px','69px','94px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bicycle_kingdoms_of_a_new_world_playing_cards_blue_back.png",'0px','0px'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0.00)", 3, 3, 0]
            },
            {
                id: 'op3',
                type: 'image',
                rect: ['342px', '108px','69px','94px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bicycle_kingdoms_of_a_new_world_playing_cards_blue_back.png",'0px','0px'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0.00)", 3, 3, 0]
            },
            {
                id: 'op4',
                type: 'image',
                rect: ['378px', '108px','69px','94px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bicycle_kingdoms_of_a_new_world_playing_cards_blue_back.png",'0px','0px'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0.00)", 3, 3, 0]
            },
            {
                id: 'lastCard',
                type: 'image',
                rect: ['165px', '241px','58px','75px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ace_of_spades.png",'0px','0px'],
                boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"],
                transform: [[],['90']]
            },
            {
                id: 'op5',
                type: 'image',
                rect: ['414px', '108px','69px','94px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bicycle_kingdoms_of_a_new_world_playing_cards_blue_back.png",'0px','0px'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0.00)", 3, 3, 0]
            },
            {
                id: 'op6',
                type: 'image',
                rect: ['447px', '108px','69px','94px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bicycle_kingdoms_of_a_new_world_playing_cards_blue_back.png",'0px','0px'],
                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0.00)", 3, 3, 0]
            },
            {
                id: 'Spades',
                type: 'image',
                rect: ['165px', '367px','66px','66px','auto', 'auto'],
                opacity: 0.9743589906611,
                fill: ["rgba(0,0,0,0)",im+"Spades.png",'0px','0px'],
                filter: [0, 0, 1, 0, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: 'SpadesCopy',
                type: 'image',
                rect: ['165px', '128px','66px','66px','auto', 'auto'],
                opacity: 0.9743589906611,
                fill: ["rgba(0,0,0,0)",im+"Spades.png",'0px','0px'],
                filter: [0, 0, 1, 0, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                transform: [[],['180']]
            },
            {
                id: 'teste',
                type: 'group',
                rect: ['104px', '231px','71','91','auto', 'auto'],
                c: [
                {
                    id: 'testeCard1',
                    type: 'image',
                    rect: ['0px', '0px','67px','87px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"bicycle_kingdoms_of_a_new_world_playing_cards_blue_back.png",'0px','0px']
                },
                {
                    id: 'testeCard2',
                    type: 'image',
                    rect: ['1px', '1px','67px','87px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"bicycle_kingdoms_of_a_new_world_playing_cards_blue_back.png",'0px','0px']
                },
                {
                    id: 'testeCard3',
                    type: 'image',
                    rect: ['2px', '2px','67px','87px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"bicycle_kingdoms_of_a_new_world_playing_cards_blue_back.png",'0px','0px']
                },
                {
                    id: 'testeCard4',
                    type: 'image',
                    rect: ['3px', '3px','67px','87px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"bicycle_kingdoms_of_a_new_world_playing_cards_blue_back.png",'0px','0px']
                },
                {
                    id: 'testeCard5',
                    type: 'image',
                    rect: ['4px', '4px','67px','87px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"bicycle_kingdoms_of_a_new_world_playing_cards_blue_back.png",'0px','0px']
                }]
            },
            {
                id: 'opponentScore',
                type: 'text',
                rect: ['182px', '148px','auto','auto','auto', 'auto'],
                text: "66",
                align: "left",
                font: ['Verdana, Geneva, sans-serif', 23, "rgba(0,135,0,1.00)", "900", "none", "normal"]
            },
            {
                id: 'playerScore',
                type: 'text',
                rect: ['182px', '385px','auto','auto','auto', 'auto'],
                text: "66",
                align: "left",
                font: ['Verdana, Geneva, sans-serif', 23, "rgba(0,135,0,1.00)", "900", "none", "normal"]
            },
            {
                id: 'cardsLenght',
                type: 'text',
                rect: ['160px', '215px','21px','auto','auto', 'auto'],
                text: "12",
                align: "left",
                font: ['Verdana, Geneva, sans-serif', 14, "rgba(0,236,0,1.00)", "900", "none", "normal"]
            },
            {
                id: 'enemyWinAnimation',
                type: 'rect',
                rect: ['642px', '86px','auto','auto','auto', 'auto']
            },
            {
                id: 'kartiText',
                type: 'text',
                rect: ['180px', '220px','auto','auto','auto', 'auto'],
                text: "карти.",
                align: "left",
                font: ['Verdana, Geneva, sans-serif', 10, "rgba(0,0,0,1)", "700", "none", "normal"]
            },
            {
                id: '_7002071-spades-poker-cards-wallpaper',
                type: 'image',
                rect: ['0px', '2px','985px','554px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"7002071-spades-poker-cards-wallpaper.jpg",'0px','0px']
            },
            {
                id: 'enemyLoseAnimation',
                type: 'rect',
                rect: ['644px', '385px','auto','auto','auto', 'auto'],
                overflow: 'visible'
            },
            {
                id: 'Block',
                type: 'rect',
                rect: ['0px', '0px','985px','554px','auto', 'auto'],
                opacity: 0.30081300813008,
                fill: ["rgba(0,86,0,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Welcome',
                type: 'image',
                rect: ['366px', '334px','224px','100px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"Welcome.png",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'card-111',
                symbolName: 'firstCardHandAnimation',
                autoPlay: {

                }
            },
            {
                id: 'card-333',
                symbolName: 'thirtdCardHandAnimation',
                autoPlay: {

                }
            },
            {
                id: 'enemyWinAnimation',
                symbolName: 'enemyWinAnimation',
                autoPlay: {

                }
            },
            {
                id: 'card-444',
                symbolName: 'fourthCardHandAnimation',
                autoPlay: {

                }
            },
            {
                id: 'card-222',
                symbolName: 'seconCardHandAnimation',
                autoPlay: {

                }
            },
            {
                id: 'enemyHandAnimation',
                symbolName: 'enemyHandAnimation',
                autoPlay: {

                }
            },
            {
                id: 'card-666',
                symbolName: 'sixthCardHandAnimation',
                autoPlay: {

                }
            },
            {
                id: 'card-555',
                symbolName: 'fifthCardHandAnimation',
                autoPlay: {

                }
            },
            {
                id: 'enemyLoseAnimation',
                symbolName: 'enemyLoseAnimation',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Welcome}": [
                ["style", "top", '588px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '100px'],
                ["style", "opacity", '1'],
                ["style", "left", '379px'],
                ["style", "width", '224px']
            ],
            "${_card-222}": [
                ["style", "top", '355px'],
                ["transform", "scaleY", '1.02174'],
                ["transform", "scaleX", '0.89128'],
                ["style", "left", '310px'],
                ["style", "cursor", 'pointer']
            ],
            "${_op1}": [
                ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.00)'],
                ["subproperty", "filter.drop-shadow.offsetV", '3px'],
                ["subproperty", "filter.drop-shadow.blur", '0px'],
                ["style", "top", '108px'],
                ["transform", "skewY", '0deg'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '94px'],
                ["style", "width", '69px'],
                ["style", "left", '272px'],
                ["subproperty", "filter.drop-shadow.offsetH", '3px']
            ],
            "${_teste}": [
                ["style", "left", '104px'],
                ["style", "top", '231px']
            ],
            "${_PokerVIP-Poker-Dude-Badge}": [
                ["subproperty", "filter.sepia", '0.65'],
                ["subproperty", "filter.saturate", '3.3333333333333'],
                ["style", "top", '40px'],
                ["style", "height", '180px'],
                ["subproperty", "filter.grayscale", '0'],
                ["style", "left", '288px'],
                ["style", "width", '180px']
            ],
            "${_ostvatText}": [
                ["style", "top", '220px'],
                ["style", "font-size", '10px'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "height", '20px'],
                ["style", "font-weight", '700'],
                ["style", "left", '111px'],
                ["style", "width", '54px']
            ],
            "${_lastCard}": [
                ["subproperty", "boxShadow.blur", '3px'],
                ["transform", "rotateZ", '90deg'],
                ["style", "left", '165px'],
                ["style", "width", '58px'],
                ["style", "top", '241px'],
                ["style", "height", '75px'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)']
            ],
            "${_card-444}": [
                ["style", "left", '378px'],
                ["style", "cursor", 'pointer']
            ],
            "${_card-111}": [
                ["style", "top", '354px'],
                ["transform", "scaleY", '1.01075'],
                ["transform", "scaleX", '1.04545'],
                ["style", "opacity", '1'],
                ["style", "left", '272px'],
                ["style", "cursor", 'pointer']
            ],
            "${_Spades}": [
                ["style", "top", '367px'],
                ["subproperty", "filter.saturate", '0'],
                ["style", "height", '66px'],
                ["style", "opacity", '0.9743589906611'],
                ["style", "left", '165px'],
                ["style", "width", '66px']
            ],
            "${_SpadesCopy}": [
                ["style", "top", '128px'],
                ["style", "width", '66px'],
                ["transform", "rotateZ", '180deg'],
                ["style", "height", '66px'],
                ["style", "opacity", '0.9743589906611'],
                ["style", "left", '165px'],
                ["subproperty", "filter.saturate", '0']
            ],
            "${_Block}": [
                ["style", "top", '0px'],
                ["style", "overflow", 'visible'],
                ["style", "height", '554px'],
                ["style", "opacity", '0.30081300813008'],
                ["style", "left", '0px'],
                ["style", "width", '985px']
            ],
            "${_card-666}": [
                ["style", "top", '355px'],
                ["transform", "scaleY", '1.04444'],
                ["transform", "scaleX", '1.04545'],
                ["style", "left", '452px'],
                ["style", "cursor", 'pointer']
            ],
            "${_op4}": [
                ["style", "top", '108px'],
                ["style", "width", '69px'],
                ["style", "left", '378px'],
                ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.00)'],
                ["style", "height", '94px'],
                ["subproperty", "filter.drop-shadow.offsetH", '3px'],
                ["subproperty", "filter.drop-shadow.offsetV", '3px'],
                ["subproperty", "filter.drop-shadow.blur", '0px']
            ],
            "${_RoundRect}": [
                ["style", "top", '354px'],
                ["color", "background-color", 'rgba(0,86,0,1.00)'],
                ["subproperty", "filter.drop-shadow.color", 'rgba(219,24,24,1.00)'],
                ["style", "height", '93px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '165px'],
                ["style", "width", '66px']
            ],
            "${_testeCard3}": [
                ["style", "top", '2px'],
                ["style", "height", '87px'],
                ["style", "left", '2px'],
                ["style", "width", '67px']
            ],
            "${_wallpaper-cnc_10b153922}": [
                ["style", "top", '0px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '554px'],
                ["style", "left", '0px'],
                ["style", "width", '985px']
            ],
            "${_cardsLenght}": [
                ["style", "top", '215px'],
                ["style", "font-size", '14px'],
                ["color", "color", 'rgba(0,236,0,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '160px'],
                ["style", "width", '21px']
            ],
            "${_op3}": [
                ["style", "top", '108px'],
                ["style", "width", '69px'],
                ["style", "left", '342px'],
                ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.00)'],
                ["style", "height", '94px'],
                ["subproperty", "filter.drop-shadow.offsetH", '3px'],
                ["subproperty", "filter.drop-shadow.offsetV", '3px'],
                ["subproperty", "filter.drop-shadow.blur", '0px']
            ],
            "${_opponentScore}": [
                ["style", "top", '148px'],
                ["color", "color", 'rgba(0,135,0,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '182px'],
                ["style", "font-size", '23px']
            ],
            "${_enemyLoseAnimation}": [
                ["style", "top", '385px'],
                ["style", "left", '644px'],
                ["style", "overflow", 'visible']
            ],
            "${_table-darkergreen-nologo2}": [
                ["style", "left", '20px'],
                ["style", "top", '115px']
            ],
            "${_testeCard5}": [
                ["style", "top", '4px'],
                ["style", "height", '87px'],
                ["style", "left", '4px'],
                ["style", "width", '67px']
            ],
            "${_op6}": [
                ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.00)'],
                ["style", "left", '447px'],
                ["style", "width", '69px'],
                ["style", "top", '108px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '94px'],
                ["subproperty", "filter.drop-shadow.blur", '0px'],
                ["subproperty", "filter.drop-shadow.offsetV", '3px'],
                ["subproperty", "filter.drop-shadow.offsetH", '3px']
            ],
            "${_notebook-308849_960_720}": [
                ["style", "top", '249px'],
                ["transform", "rotateZ", '25deg'],
                ["style", "height", '48px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '592px'],
                ["style", "width", '36px']
            ],
            "${_card-333}": [
                ["style", "left", '342px'],
                ["style", "cursor", 'pointer']
            ],
            "${_testeCard4}": [
                ["style", "height", '87px'],
                ["style", "top", '3px'],
                ["style", "left", '3px'],
                ["style", "width", '67px']
            ],
            "${_op5}": [
                ["style", "top", '108px'],
                ["style", "width", '69px'],
                ["style", "left", '414px'],
                ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.00)'],
                ["style", "height", '94px'],
                ["subproperty", "filter.drop-shadow.offsetH", '3px'],
                ["subproperty", "filter.drop-shadow.offsetV", '3px'],
                ["subproperty", "filter.drop-shadow.blur", '0px']
            ],
            "${_testeCard2}": [
                ["style", "height", '87px'],
                ["style", "top", '1px'],
                ["style", "left", '1px'],
                ["style", "width", '67px']
            ],
            "${__7002071-spades-poker-cards-wallpaper}": [
                ["style", "top", '-8px'],
                ["style", "cursor", 'auto'],
                ["style", "height", '554px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '985px']
            ],
            "${_RoundRectCopy}": [
                ["style", "top", '115px'],
                ["subproperty", "filter.drop-shadow.color", 'rgba(219,24,24,1.00)'],
                ["color", "background-color", 'rgba(0,86,0,1.00)'],
                ["style", "height", '93px'],
                ["style", "opacity", '0.7'],
                ["style", "left", '165px'],
                ["style", "width", '66px']
            ],
            "${_playerScore}": [
                ["style", "top", '385px'],
                ["color", "color", 'rgba(0,135,0,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '182px'],
                ["style", "font-size", '23px']
            ],
            "${_testeCard1}": [
                ["style", "top", '0px'],
                ["style", "height", '87px'],
                ["style", "left", '0px'],
                ["style", "width", '67px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '988px'],
                ["style", "height", '554px'],
                ["style", "overflow", 'auto']
            ],
            "${_kartiText}": [
                ["style", "top", '220px'],
                ["style", "font-weight", '700'],
                ["style", "left", '180px'],
                ["style", "font-size", '10px']
            ],
            "${_op2}": [
                ["style", "top", '108px'],
                ["style", "width", '69px'],
                ["style", "left", '305px'],
                ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0.00)'],
                ["style", "height", '94px'],
                ["subproperty", "filter.drop-shadow.offsetH", '3px'],
                ["subproperty", "filter.drop-shadow.offsetV", '3px'],
                ["subproperty", "filter.drop-shadow.blur", '0px']
            ],
            "${_card-555}": [
                ["style", "left", '414px'],
                ["style", "cursor", 'pointer']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3875,
            autoPlay: true,
            timeline: [
                { id: "eid451", tween: [ "style", "${_Welcome}", "top", '250px', { fromValue: '588px'}], position: 648, duration: 725 },
                { id: "eid462", tween: [ "style", "${_Welcome}", "top", '334px', { fromValue: '250px'}], position: 2340, duration: 160, easing: "easeInQuart" },
                { id: "eid452", tween: [ "style", "${_Welcome}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 590 },
                { id: "eid6", tween: [ "style", "${__7002071-spades-poker-cards-wallpaper}", "opacity", '0', { fromValue: '1'}], position: 1750, duration: 1000 },
                { id: "eid457", tween: [ "style", "${__7002071-spades-poker-cards-wallpaper}", "left", '988px', { fromValue: '0px'}], position: 2750, duration: 102 },
                { id: "eid490", tween: [ "style", "${_Welcome}", "left", '382px', { fromValue: '379px'}], position: 1898, duration: 442 },
                { id: "eid461", tween: [ "style", "${_Welcome}", "left", '1056px', { fromValue: '382px'}], position: 2340, duration: 160, easing: "easeInQuart" }            ]
        }
    }
},
"sixthCardPopUpAnimation": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '67px', '87px', 'auto', 'auto'],
                    id: 'card-6',
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)'],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/10_of_spades.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_card-6}": [
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "left", '0px'],
                ["style", "width", '67px'],
                ["style", "top", '0px'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "height", '87px'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["subproperty", "boxShadow.spread", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '87px'],
                ["style", "width", '67px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 399,
            autoPlay: false,
            labels: {
                "start": 0,
                "onTop": 202
            },
            timeline: [
                { id: "eid103", tween: [ "style", "${_card-6}", "top", '-10px', { fromValue: '0px'}], position: 0, duration: 202 },
                { id: "eid104", tween: [ "style", "${_card-6}", "top", '0px', { fromValue: '-10px'}], position: 202, duration: 197 }            ]
        }
    }
},
"fourthCardPopUpAnimation": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'card-4',
                    fill: ['rgba(0,0,0,0)', 'images/king_of_spades2.png', '0px', '0px'],
                    rect: ['0px', '0px', '70px', '90px', 'auto', 'auto'],
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_card-4}": [
                ["style", "top", '0px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "left", '0px'],
                ["style", "height", '90px'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["style", "width", '70px']
            ],
            "${symbolSelector}": [
                ["style", "height", '90px'],
                ["style", "width", '70px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: false,
            labels: {
                "start": 0,
                "onTop": 445
            },
            timeline: [
                { id: "eid18", tween: [ "style", "${_card-4}", "top", '-10px', { fromValue: '0px'}], position: 0, duration: 445 },
                { id: "eid19", tween: [ "style", "${_card-4}", "top", '0px', { fromValue: '-10px'}], position: 445, duration: 305 }            ]
        }
    }
},
"thirdCardPopUpAnimation": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'card-3',
                    fill: ['rgba(0,0,0,0)', 'images/queen_of_hearts2.png', '0px', '0px'],
                    rect: ['0px', '0px', '70px', '90px', 'auto', 'auto'],
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_card-3}": [
                ["style", "top", '0px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "left", '0px'],
                ["style", "height", '90px'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["style", "width", '70px']
            ],
            "${symbolSelector}": [
                ["style", "height", '90px'],
                ["style", "width", '70px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: false,
            labels: {
                "start": 0,
                "onTop": 440
            },
            timeline: [
                { id: "eid93", tween: [ "style", "${_card-3}", "top", '-10px', { fromValue: '0px'}], position: 0, duration: 440 },
                { id: "eid94", tween: [ "style", "${_card-3}", "top", '0px', { fromValue: '-10px'}], position: 440, duration: 310 }            ]
        }
    }
},
"secondCardPopUpAnimation": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'card-2',
                    fill: ['rgba(0,0,0,0)', 'images/5_of_diamonds.png', '0px', '0px'],
                    rect: ['0px', '0px', '70px', '90px', 'auto', 'auto'],
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '90px'],
                ["style", "width", '70px']
            ],
            "${_card-2}": [
                ["style", "-webkit-transform-origin", [49,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [49,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [49,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [49,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [49,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "left", '0px'],
                ["style", "width", '70px'],
                ["style", "top", '0px'],
                ["style", "height", '90px'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 468,
            autoPlay: false,
            labels: {
                "start": 0,
                "onTop": 249
            },
            timeline: [
                { id: "eid22", tween: [ "style", "${_card-2}", "top", '-10px', { fromValue: '0px'}], position: 0, duration: 249 },
                { id: "eid23", tween: [ "style", "${_card-2}", "top", '0px', { fromValue: '-10px'}], position: 249, duration: 219 }            ]
        }
    }
},
"firstCardPopUpAnimation": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'card-1',
                    fill: ['rgba(0,0,0,0)', 'images/8_of_hearts.png', '0px', '0px'],
                    rect: ['0px', '0px', '70px', '90px', 'auto', 'auto'],
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '90px'],
                ["style", "width", '70px']
            ],
            "${_card-1}": [
                ["style", "top", '0px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "left", '0px'],
                ["style", "height", '90px'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["style", "width", '70px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 430,
            autoPlay: false,
            labels: {
                "onTop": 200
            },
            timeline: [
                { id: "eid24", tween: [ "style", "${_card-1}", "top", '-10px', { fromValue: '0px'}], position: 0, duration: 200 },
                { id: "eid25", tween: [ "style", "${_card-1}", "top", '0px', { fromValue: '-10px'}], position: 200, duration: 230 }            ]
        }
    }
},
"fifthCardPopUpAnimation": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'card-5',
                    fill: ['rgba(0,0,0,0)', 'images/jack_of_hearts.png', '0px', '0px'],
                    rect: ['0px', '0px', '70px', '90px', 'auto', 'auto'],
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '90px'],
                ["style", "width", '70px']
            ],
            "${_card-5}": [
                ["style", "top", '0px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "left", '0px'],
                ["style", "height", '90px'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["style", "width", '70px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: false,
            labels: {
                "start": 0,
                "onTop": 440
            },
            timeline: [
                { id: "eid16", tween: [ "style", "${_card-5}", "top", '-10px', { fromValue: '0px'}], position: 0, duration: 440 },
                { id: "eid17", tween: [ "style", "${_card-5}", "top", '0px', { fromValue: '-10px'}], position: 440, duration: 310 }            ]
        }
    }
},
"sixthCardHandAnimation": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'card-66',
                    type: 'rect',
                    rect: ['2px', '1px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'card-66',
                symbolName: 'sixthCardPopUpAnimation',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '90px'],
                ["style", "width", '66px']
            ],
            "${_card-66}": [
                ["style", "top", '1px'],
                ["transform", "scaleY", '1.03904'],
                ["transform", "scaleX", '0.98881'],
                ["style", "height", '87px'],
                ["style", "left", '0px'],
                ["style", "width", '67px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3318,
            autoPlay: false,
            timeline: [
                { id: "eid151", tween: [ "style", "${_card-66}", "top", '-109px', { fromValue: '2px'}], position: 28, duration: 484, easing: "easeInQuart" },
                { id: "eid152", tween: [ "transform", "${_card-66}", "scaleX", '0.82039', { fromValue: '0.98881'}], position: 28, duration: 500, easing: "easeInQuart" },
                { id: "eid150", tween: [ "style", "${_card-66}", "left", '-94px', { fromValue: '0px'}], position: 28, duration: 484, easing: "easeInQuart" },
                { id: "eid148", tween: [ "style", "${_card-66}", "width", '67px', { fromValue: '67px'}], position: 28, duration: 0 },
                { id: "eid149", tween: [ "style", "${_card-66}", "height", '87px', { fromValue: '87px'}], position: 28, duration: 0 },
                { id: "eid153", tween: [ "transform", "${_card-66}", "scaleY", '0.86207', { fromValue: '1.03904'}], position: 28, duration: 484, easing: "easeInQuart" },
                { id: "eid144", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_card-66}', [] ], ""], position: 27.924136461982 },
                { id: "eid475", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_card-66}', [] ], ""], position: 3318 }            ]
        }
    }
},
"fifthCardHandAnimation": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'card-55',
                    type: 'rect',
                    rect: ['0px', '2px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'card-55',
                symbolName: 'fifthCardPopUpAnimation',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_card-55}": [
                ["style", "top", '2px'],
                ["transform", "scaleY", '1.03904'],
                ["transform", "scaleX", '0.98881'],
                ["style", "height", '90px'],
                ["style", "left", '-1px'],
                ["style", "width", '70px']
            ],
            "${symbolSelector}": [
                ["style", "height", '94px'],
                ["style", "width", '69px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 433,
            autoPlay: false,
            timeline: [
                { id: "eid251", tween: [ "style", "${_card-55}", "height", '90px', { fromValue: '90px'}], position: 0, duration: 0, easing: "easeInQuart" },
                { id: "eid258", tween: [ "style", "${_card-55}", "top", '-114px', { fromValue: '2px'}], position: 0, duration: 300, easing: "easeInQuart" },
                { id: "eid259", tween: [ "transform", "${_card-55}", "scaleY", '0.86207', { fromValue: '1.03904'}], position: 0, duration: 300, easing: "easeInQuart" },
                { id: "eid260", tween: [ "style", "${_card-55}", "left", '-61px', { fromValue: '-1px'}], position: 0, duration: 300, easing: "easeInQuart" },
                { id: "eid250", tween: [ "style", "${_card-55}", "width", '70px', { fromValue: '70px'}], position: 0, duration: 0, easing: "easeInQuart" },
                { id: "eid261", tween: [ "transform", "${_card-55}", "scaleX", '0.82039', { fromValue: '0.98881'}], position: 0, duration: 310, easing: "easeInQuart" }            ]
        }
    }
},
"fourthCardHandAnimation": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'card-44',
                    type: 'rect',
                    rect: ['10px', '2px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'card-44',
                symbolName: 'fourthCardPopUpAnimation',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '94px'],
                ["style", "width", '69px']
            ],
            "${_card-44}": [
                ["style", "top", '2px'],
                ["transform", "scaleY", '1.03904'],
                ["style", "height", '90px'],
                ["transform", "scaleX", '0.98881'],
                ["style", "left", '-1px'],
                ["style", "width", '70px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: false,
            timeline: [
                { id: "eid242", tween: [ "style", "${_card-44}", "left", '-25px', { fromValue: '-1px'}], position: 0, duration: 300, easing: "easeInQuart" },
                { id: "eid239", tween: [ "style", "${_card-44}", "width", '70px', { fromValue: '70px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid243", tween: [ "transform", "${_card-44}", "scaleX", '0.82039', { fromValue: '0.98881'}], position: 0, duration: 310, easing: "easeInQuart" },
                { id: "eid240", tween: [ "style", "${_card-44}", "top", '-114px', { fromValue: '2px'}], position: 0, duration: 300, easing: "easeInQuart" },
                { id: "eid241", tween: [ "transform", "${_card-44}", "scaleY", '0.86207', { fromValue: '1.03904'}], position: 0, duration: 300, easing: "easeInQuart" },
                { id: "eid140", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_card-44}', [] ], ""], position: 0 }            ]
        }
    }
},
"thirtdCardHandAnimation": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'card-33',
                    type: 'rect',
                    rect: ['0px', '2px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'card-33',
                symbolName: 'thirdCardPopUpAnimation',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_card-33}": [
                ["style", "top", '2px'],
                ["transform", "scaleY", '1.03904'],
                ["style", "height", '90px'],
                ["transform", "scaleX", '0.98881'],
                ["style", "left", '0px'],
                ["style", "width", '70px']
            ],
            "${symbolSelector}": [
                ["style", "height", '94px'],
                ["style", "width", '69px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 915,
            autoPlay: false,
            timeline: [
                { id: "eid268", tween: [ "style", "${_card-33}", "width", '70px', { fromValue: '70px'}], position: 0, duration: 0, easing: "easeInQuart" },
                { id: "eid269", tween: [ "style", "${_card-33}", "height", '90px', { fromValue: '90px'}], position: 0, duration: 0, easing: "easeInQuart" },
                { id: "eid271", tween: [ "style", "${_card-33}", "top", '-107px', { fromValue: '2px'}], position: 0, duration: 70, easing: "easeInQuart" },
                { id: "eid280", tween: [ "style", "${_card-33}", "top", '-113px', { fromValue: '2px'}], position: 70, duration: 601, easing: "easeInQuart" },
                { id: "eid270", tween: [ "style", "${_card-33}", "left", '-5px', { fromValue: '0px'}], position: 0, duration: 70, easing: "easeInQuart" },
                { id: "eid282", tween: [ "style", "${_card-33}", "left", '11px', { fromValue: '-5px'}], position: 70, duration: 601, easing: "easeInQuart" },
                { id: "eid283", tween: [ "transform", "${_card-33}", "scaleX", '0.82039', { fromValue: '0.98881'}], position: 70, duration: 620, easing: "easeInQuart" },
                { id: "eid281", tween: [ "transform", "${_card-33}", "scaleY", '0.86207', { fromValue: '1.03904'}], position: 70, duration: 601, easing: "easeInQuart" },
                { id: "eid141", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_card-33}', [] ], ""], position: 0 }            ]
        }
    }
},
"firstCardHandAnimation": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'card-11',
                    type: 'rect',
                    rect: ['6px', '1px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'card-11',
                symbolName: 'firstCardPopUpAnimation',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '93px'],
                ["style", "width", '66px']
            ],
            "${_card-11}": [
                ["style", "top", '1px'],
                ["transform", "scaleY", '1.03332'],
                ["style", "height", '90px'],
                ["transform", "scaleX", '0.94762'],
                ["style", "left", '-2px'],
                ["style", "width", '70px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 552,
            autoPlay: false,
            timeline: [
                { id: "eid307", tween: [ "transform", "${_card-11}", "scaleY", '0.83333', { fromValue: '1.03332'}], position: 0, duration: 181, easing: "easeInQuart" },
                { id: "eid300", tween: [ "style", "${_card-11}", "left", '78px', { fromValue: '-2px'}], position: 0, duration: 181, easing: "easeInQuart" },
                { id: "eid301", tween: [ "style", "${_card-11}", "top", '-112px', { fromValue: '1px'}], position: 0, duration: 181, easing: "easeInQuart" },
                { id: "eid328", tween: [ "style", "${_card-11}", "width", '61px', { fromValue: '70px'}], position: 0, duration: 181, easing: "easeInQuart" },
                { id: "eid306", tween: [ "transform", "${_card-11}", "scaleX", '0.83333', { fromValue: '0.94762'}], position: 0, duration: 181, easing: "easeInQuart" },
                { id: "eid299", tween: [ "style", "${_card-11}", "height", '90px', { fromValue: '90px'}], position: 0, duration: 0, easing: "easeInQuart" },
                { id: "eid143", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_card-11}', [] ], ""], position: 0 }            ]
        }
    }
},
"seconCardHandAnimation": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'card-22',
                    type: 'rect',
                    rect: ['6px', '1px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'card-22',
                symbolName: 'secondCardPopUpAnimation',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_card-22}": [
                ["style", "top", '1px'],
                ["transform", "scaleY", '1.02222'],
                ["style", "height", '90px'],
                ["transform", "scaleX", '1.00476'],
                ["style", "left", '0px'],
                ["style", "width", '70px']
            ],
            "${symbolSelector}": [
                ["style", "height", '92px'],
                ["style", "width", '70px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 862,
            autoPlay: false,
            timeline: [
                { id: "eid289", tween: [ "style", "${_card-22}", "top", '-111px', { fromValue: '1px'}], position: 0, duration: 468, easing: "easeInQuart" },
                { id: "eid286", tween: [ "style", "${_card-22}", "width", '70px', { fromValue: '70px'}], position: 0, duration: 0, easing: "easeInQuart" },
                { id: "eid295", tween: [ "transform", "${_card-22}", "scaleY", '0.83333', { fromValue: '1.02222'}], position: 0, duration: 468, easing: "easeInQuart" },
                { id: "eid288", tween: [ "style", "${_card-22}", "left", '49px', { fromValue: '0px'}], position: 0, duration: 468, easing: "easeInQuart" },
                { id: "eid294", tween: [ "transform", "${_card-22}", "scaleX", '0.83333', { fromValue: '1.00476'}], position: 0, duration: 468, easing: "easeInQuart" },
                { id: "eid287", tween: [ "style", "${_card-22}", "height", '90px', { fromValue: '90px'}], position: 0, duration: 0, easing: "easeInQuart" },
                { id: "eid142", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_card-22}', [] ], ""], position: 0 }            ]
        }
    }
},
"enemyWin": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'bicycle_kingdoms_of_a_new_world_playing_cards_blue_backCopy11',
                    type: 'image',
                    rect: ['0px', '0px', '67px', '87px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bicycle_kingdoms_of_a_new_world_playing_cards_blue_back.png', '0px', '0px']
                },
                {
                    id: 'bicycle_kingdoms_of_a_new_world_playing_cards_blue_backCopy12',
                    type: 'image',
                    rect: ['34px', '11px', '67px', '87px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bicycle_kingdoms_of_a_new_world_playing_cards_blue_back.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bicycle_kingdoms_of_a_new_world_playing_cards_blue_backCopy11}": [
                ["style", "top", '0px'],
                ["style", "height", '87px'],
                ["style", "left", '0px'],
                ["style", "width", '67px']
            ],
            "${_bicycle_kingdoms_of_a_new_world_playing_cards_blue_backCopy12}": [
                ["style", "height", '87px'],
                ["style", "top", '11px'],
                ["style", "left", '34px'],
                ["style", "width", '67px']
            ],
            "${symbolSelector}": [
                ["style", "height", '98px'],
                ["style", "width", '101px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"enemyWinAnimation": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'enemyWin2',
                    type: 'rect',
                    rect: ['-162px', '206px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'enemyWin2',
                symbolName: 'enemyWin',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '100px'],
                ["style", "width", '103px']
            ],
            "${_enemyWin2}": [
                ["style", "top", '145px'],
                ["transform", "scaleY", '1.01733'],
                ["transform", "scaleX", '1.01733'],
                ["style", "opacity", '1'],
                ["style", "left", '-322px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1224,
            autoPlay: false,
            timeline: [
                { id: "eid427", tween: [ "style", "${_enemyWin2}", "left", '1px', { fromValue: '-322px'}], position: 250, duration: 895 },
                { id: "eid430", tween: [ "style", "${_enemyWin2}", "opacity", '0', { fromValue: '1'}], position: 548, duration: 597 },
                { id: "eid425", tween: [ "style", "${_enemyWin2}", "top", '1px', { fromValue: '145px'}], position: 250, duration: 895 }            ]
        }
    }
},
"enemyHandAnimation": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: '_2_of_heartsCopy',
                    fill: ['rgba(0,0,0,0)', 'images/2_of_hearts.png', '0px', '0px'],
                    rect: ['0px', '0px', '58px', '79px', 'auto', 'auto'],
                    boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65098)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${__2_of_heartsCopy}": [
                ["style", "top", '0px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["style", "height", '79px'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["style", "left", '0px'],
                ["style", "width", '58px']
            ],
            "${symbolSelector}": [
                ["style", "height", '79px'],
                ["style", "width", '58px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 457,
            autoPlay: false,
            labels: {
                "start": 0
            },
            timeline: [
                { id: "eid340", tween: [ "style", "${__2_of_heartsCopy}", "top", '118px', { fromValue: '0px'}], position: 0, duration: 430 },
                { id: "eid339", tween: [ "style", "${__2_of_heartsCopy}", "left", '48px', { fromValue: '0px'}], position: 0, duration: 430 },
                { id: "eid337", tween: [ "style", "${__2_of_heartsCopy}", "width", '58px', { fromValue: '58px'}], position: 0, duration: 0 },
                { id: "eid338", tween: [ "style", "${__2_of_heartsCopy}", "height", '79px', { fromValue: '79px'}], position: 0, duration: 0 }            ]
        }
    }
},
"enemyLoseAnimation": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'enemyLose',
                    type: 'rect',
                    rect: ['-302px', '-134px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'enemyLose',
                symbolName: 'enemyWin',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_enemyLose}": [
                ["style", "top", '-153px'],
                ["style", "opacity", '1'],
                ["style", "left", '-324px']
            ],
            "${symbolSelector}": [
                ["style", "height", '98px'],
                ["style", "width", '101px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid415", tween: [ "style", "${_enemyLose}", "top", '0px', { fromValue: '-153px'}], position: 149, duration: 750 },
                { id: "eid414", tween: [ "style", "${_enemyLose}", "left", '0px', { fromValue: '-324px'}], position: 149, duration: 750 },
                { id: "eid416", tween: [ "style", "${_enemyLose}", "opacity", '0', { fromValue: '1'}], position: 337, duration: 563 }            ]
        }
    }
},
"winAnimation": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'winer',
                    type: 'image',
                    rect: ['0px', '0px', '991px', '554px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/WINNER-wallpaper-winner-38541833-1920-1080.jpg', '0px', '0px']
                },
                {
                    rect: ['436px', '424px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Tahoma, Geneva, sans-serif', 24, 'rgba(255,255,255,1.00)', '900', 'none', ''],
                    textShadow: ['rgba(60,149,196,0.65)', 3, 3, 3],
                    text: 'Play again.',
                    id: 'Text2',
                    opacity: 1,
                    cursor: ['pointer'],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_winer}": [
                ["style", "top", '0px'],
                ["style", "height", '554px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px'],
                ["style", "width", '991px']
            ],
            "${_Text2}": [
                ["subproperty", "textShadow.blur", '3px'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '413px'],
                ["style", "font-size", '30px'],
                ["style", "top", '619px'],
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '1'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
                ["subproperty", "textShadow.color", 'rgba(60,149,196,0.65)'],
                ["subproperty", "textShadow.offsetV", '3px']
            ],
            "${symbolSelector}": [
                ["style", "height", '554px'],
                ["style", "width", '991px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            timeline: [
                { id: "eid485", tween: [ "style", "${_Text2}", "left", '413px', { fromValue: '413px'}], position: 2000, duration: 0, easing: "easeOutBounce" },
                { id: "eid477", tween: [ "style", "${_winer}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 1000 },
                { id: "eid483", tween: [ "style", "${_Text2}", "top", '417px', { fromValue: '619px'}], position: 250, duration: 1750, easing: "easeOutBounce" },
                { id: "eid484", tween: [ "style", "${_Text2}", "font-size", '30px', { fromValue: '30px'}], position: 2000, duration: 0, easing: "easeOutBounce" }            ]
        }
    }
},
"playerWinAnimation": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'winnerAnime',
                    type: 'rect',
                    rect: ['-7', '-7', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['407px', '603px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Tahoma, Geneva, sans-serif', 30, 'rgba(255,255,255,1)', '900', 'none', 'normal'],
                    align: 'left',
                    id: 'playAgain',
                    text: 'Play again.',
                    cursor: ['pointer'],
                    type: 'text'
                }
            ],
            symbolInstances: [
            {
                id: 'winnerAnime',
                symbolName: 'winnerAnime',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_playAgain}": [
                ["style", "top", '603px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '407px']
            ],
            "${symbolSelector}": [
                ["style", "height", '639px'],
                ["style", "width", '975px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: false,
            timeline: [
                { id: "eid498", tween: [ "style", "${_playAgain}", "top", '404px', { fromValue: '603px'}], position: 0, duration: 3000, easing: "easeOutBounce" }            ]
        }
    }
},
"winnerAnime": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'winnerWallpaper',
                    type: 'image',
                    rect: ['8px', '-8px', '985px', '568px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/WINNER-wallpaper-winner-38541833-1920-1080.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_winnerWallpaper}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.97111'],
                ["transform", "scaleX", '0.9838'],
                ["style", "height", '554px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px'],
                ["style", "width", '988px']
            ],
            "${symbolSelector}": [
                ["style", "height", '554px'],
                ["style", "width", '988px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            timeline: [
                { id: "eid511", tween: [ "transform", "${_winnerWallpaper}", "scaleX", '1', { fromValue: '0.9838'}], position: 0, duration: 257 },
                { id: "eid509", tween: [ "transform", "${_winnerWallpaper}", "scaleY", '1', { fromValue: '0.97111'}], position: 0, duration: 257 },
                { id: "eid494", tween: [ "style", "${_winnerWallpaper}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 2000 }            ]
        }
    }
},
"LoseAnimation": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'playerLoseAnimation',
                    type: 'image',
                    rect: ['234px', '131px', '501px', '275px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/you-lose-banner-sm-%40x2.png', '0px', '0px']
                },
                {
                    rect: ['407px', '603px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Tahoma, Geneva, sans-serif', 30, 'rgba(255,255,255,1)', '900', 'none', 'normal'],
                    align: 'left',
                    id: 'playAgain',
                    text: 'Play again.',
                    cursor: ['pointer'],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_playerLoseAnimation}": [
                ["transform", "scaleX", '0'],
                ["transform", "scaleY", '0'],
                ["style", "left", '234px'],
                ["style", "top", '131px']
            ],
            "${_playAgain}": [
                ["style", "top", '603px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '407px']
            ],
            "${symbolSelector}": [
                ["style", "height", '0px'],
                ["style", "width", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: false,
            timeline: [
                { id: "eid533", tween: [ "style", "${_playAgain}", "top", '404px', { fromValue: '603px'}], position: 750, duration: 1750, easing: "easeOutBounce" },
                { id: "eid531", tween: [ "transform", "${_playerLoseAnimation}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 750 },
                { id: "eid532", tween: [ "transform", "${_playerLoseAnimation}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 750 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-2973069");
