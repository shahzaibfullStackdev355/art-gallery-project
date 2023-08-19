


let container1 = document.querySelector("#container1")
let container2 = document.querySelector("#container2")
let container3 = document.querySelector("#container3")
let container4 = document.querySelector("#container4")
let container5 = document.querySelector("#container5")
let container6 = document.querySelector("#container6")


container2.style.display = "none";
container3.style.display = "none";
container4.style.display = "none";
container5.style.display = "none";
container6.style.display = "none";

let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let btn3 = document.querySelector("#btn3")
let btn4 = document.querySelector("#btn4")
let btn5 = document.querySelector("#btn5")
let btn6 = document.querySelector("#btn6")

btn1.classList.add("shop-link-active");

let div1 = document.querySelector("#image-slider")
let div2 = document.querySelector("#image-slider2")
let div3 = document.querySelector("#image-slider3")
let div4 = document.querySelector("#image-slider4")
let div5 = document.querySelector("#bag-slider")
let div6 = document.querySelector("#postcard-slider")
let div7 = document.querySelector("#divers-slider")



let exMachinaImg = [
    {
        "imgId": 1,
        "imageHref": "#img1",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_1.png"
    },
    {
        "imgId": 2,
        "imageHref": "#img2",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_2.png"
    },
    {
        "imgId": 3,
        "imageHref": "#img3",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_3.png"
    },
    {
        "imgId": 4,
        "imageHref": "#img4",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_4.png"
    },
    {
        "imgId": 5,
        "imageHref": "#img5",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_5.png"
    },
    {
        "imgId": 6,
        "imageHref": "#img6",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_6.png"
    },
    {
        "imgId": 7,
        "imageHref": "#img7",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_7.png"
    },
    {
        "imgId": 8,
        "imageHref": "#img8",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_8.png"
    },
    {
        "imgId": 9,
        "imageHref": "#img9",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_9.png"
    },
    {
        "imgId": 10,
        "imageHref": "#img10",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_10.png"
    },
    {
        "imgId": 11,
        "imageHref": "#img11",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_11.png"
    },
    {
        "imgId": 12,
        "imageHref": "#img12",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_12.png"
    },
    {
        "imgId": 13,
        "imageHref": "#img13",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_13.png"
    },
    {
        "imgId": 14,
        "imageHref": "#img14",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_14.png"
    },
    {
        "imgId": 15,
        "imageHref": "#img15",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_15.png"
    },
    {
        "imgId": 16,
        "imageHref": "#img16",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_16.png"
    },
    {
        "imgId": 17,
        "imageHref": "#img17",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_17.png"
    },
    {
        "imgId": 18,
        "imageHref": "#img18",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_18.png"
    },
    {
        "imgId": 19,
        "imageHref": "#img19",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_19.png"
    },
    {
        "imgId": 20,
        "imageHref": "#img20",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_20.png"
    },
    {
        "imgId": 21,
        "imageHref": "#img21",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_21.png"
    },
    {
        "imgId": 22,
        "imageHref": "#img22",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_22.png"
    },
    {
        "imgId": 23,
        "imageHref": "#img23",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_23.png"
    },
    {
        "imgId": 24,
        "imageHref": "#img24",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_24.png"
    },
    {
        "imgId": 25,
        "imageHref": "#img25",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_25.png"
    },
    {
        "imgId": 26,
        "imageHref": "#img26",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_26.png"
    },
    {
        "imgId": 27,
        "imageHref": "#img27",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_27.png"
    },
    {
        "imgId": 28,
        "imageHref": "#img28",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_28.png"
    },
    {
        "imgId": 29,
        "imageHref": "#img29",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_29.png"
    },
    {
        "imgId": 30,
        "imageHref": "#img30",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_30.png"
    },
    {
        "imgId": 31,
        "imageHref": "#img31",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_31.png"
    },
    {
        "imgId": 32,
        "imageHref": "#img32",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_32.png"
    },
    {
        "imgId": 33,
        "imageHref": "#img33",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_33.png"
    },
    {
        "imgId": 34,
        "imageHref": "#img34",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_34.png"
    },
    {
        "imgId": 35,
        "imageHref": "#img35",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_35.png"
    },
    {
        "imgId": 36,
        "imageHref": "#img36",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_36.png"
    },
    {
        "imgId": 37,
        "imageHref": "#img37",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_37.png"
    },
    {
        "imgId": 38,
        "imageHref": "#img38",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_38.png"
    },
    {
        "imgId": 39,
        "imageHref": "#img39",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_39.png"
    },
    {
        "imgId": 40,
        "imageHref": "#img40",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_40.png"
    },
    {
        "imgId": 41,
        "imageHref": "#img41",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_41.png"
    },
    {
        "imgId": 42,
        "imageHref": "#img42",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_42.png"
    },
    {
        "imgId": 43,
        "imageHref": "#img43",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_43.png"
    },
    {
        "imgId": 44,
        "imageHref": "#img44",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_44.png"
    },
    {
        "imgId": 45,
        "imageHref": "#img45",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_45.png"
    },
    {
        "imgId": 46,
        "imageHref": "#img46",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_46.png"
    },
    {
        "imgId": 47,
        "imageHref": "#img47",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_47.png"
    },
    {
        "imgId": 48,
        "imageHref": "#img48",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_48.png"
    },
    {
        "imgId": 49,
        "imageHref": "#img49",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_49.png"
    },
    {
        "imgId": 50,
        "imageHref": "#img50",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_50.png"
    },
    {
        "imgId": 51,
        "imageHref": "#img51",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_51.png"
    },
    {
        "imgId": 52,
        "imageHref": "#img52",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_52.png"
    },
    {
        "imgId": 53,
        "imageHref": "#img53",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_53.png"
    },
    {
        "imgId": 54,
        "imageHref": "#img54",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_54.png"
    },
    {
        "imgId": 55,
        "imageHref": "#img55",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_55.png"
    },
    {
        "imgId": 56,
        "imageHref": "#img56",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_56.png"
    },
    {
        "imgId": 57,
        "imageHref": "#img57",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_57.png"
    },
    {
        "imgId": 58,
        "imageHref": "#img58",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_58.png"
    },
    {
        "imgId": 59,
        "imageHref": "#img59",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_59.png"
    },
    {
        "imgId": 60,
        "imageHref": "#img60",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_60.png"
    },
    {
        "imgId": 61,
        "imageHref": "#img61",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_61.png"
    },
    {
        "imgId": 62,
        "imageHref": "#img62",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_62.png"
    },
    {
        "imgId": 63,
        "imageHref": "#img63",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_63.png"
    },
    {
        "imgId": 64,
        "imageHref": "#img64",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_64.png"
    },
    {
        "imgId": 65,
        "imageHref": "#img65",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_65.png"
    },
    {
        "imgId": 66,
        "imageHref": "#img66",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_66.png"
    },
    {
        "imgId": 67,
        "imageHref": "#img67",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_67.png"
    },
    {
        "imgId": 68,
        "imageHref": "#img68",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_68.png"
    },
    {
        "imgId": 69,
        "imageHref": "#img69",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_69.png"
    },
    {
        "imgId": 70,
        "imageHref": "#img70",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_70.png"
    },
    {
        "imgId": 71,
        "imageHref": "#img71",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_71.png"
    },
    {
        "imgId": 72,
        "imageHref": "#img72",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_72.png"
    },
    {
        "imgId": 73,
        "imageHref": "#img73",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_73.png"
    },
    {
        "imgId": 74,
        "imageHref": "#img74",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_74.png"
    },
    {
        "imgId": 75,
        "imageHref": "#img75",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_75.png"
    },
    {
        "imgId": 76,
        "imageHref": "#img76",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_76.png"
    },
    {
        "imgId": 77,
        "imageHref": "#img77",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_77.png"
    },
    {
        "imgId": 78,
        "imageHref": "#img78",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_78.png"
    },
    {
        "imgId": 79,
        "imageHref": "#img79",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_79.png"
    },
    {
        "imgId": 80,
        "imageHref": "#img80",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_80.png"
    },
    {
        "imgId": 81,
        "imageHref": "#img81",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_81.png"
    },
    {
        "imgId": 82,
        "imageHref": "#img82",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_82.png"
    },
    {
        "imgId": 83,
        "imageHref": "#img83",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_83.png"
    },
    {
        "imgId": 84,
        "imageHref": "#img84",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_84.png"
    },
    {
        "imgId": 85,
        "imageHref": "#img85",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_85.png"
    },
    {
        "imgId": 86,
        "imageHref": "#img86",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_86.png"
    },
    {
        "imgId": 87,
        "imageHref": "#img87",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_87.png"
    },
    {
        "imgId": 88,
        "imageHref": "#img88",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_88.png"
    },
    {
        "imgId": 89,
        "imageHref": "#img89",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_89.png"
    },
    {
        "imgId": 90,
        "imageHref": "#img90",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_90.png"
    },
    {
        "imgId": 91,
        "imageHref": "#img91",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_91.png"
    },
    {
        "imgId": 92,
        "imageHref": "#img92",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_92.png"
    },
    {
        "imgId": 93,
        "imageHref": "#img93",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_93.png"
    },
    {
        "imgId": 94,
        "imageHref": "#img94",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_94.png"
    },
    {
        "imgId": 95,
        "imageHref": "#img95",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_95.png"
    },
    {
        "imgId": 96,
        "imageHref": "#img96",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_96.png"
    },
    {
        "imgId": 97,
        "imageHref": "#img97",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_97.png"
    },
    {
        "imgId": 98,
        "imageHref": "#img98",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_98.png"
    },
    {
        "imgId": 99,
        "imageHref": "#img99",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_99.png"
    },
    {
        "imgId": 100,
        "imageHref": "#img100",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_100.png"
    },
    {
        "imgId": 101,
        "imageHref": "#img101",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_101.png"
    },
    {
        "imgId": 102,
        "imageHref": "#img102",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_102.png"
    },
    {
        "imgId": 103,
        "imageHref": "#img103",
        "imageAlt": "Nea oir ex machina",
        "src": "../assets/artwork-images/Nea oir ex machina art_103.png"
    },
]

let exHumusImg = [
    {
        "imgId": 1,
        "imageHref": "#img1",
        "imageAlt": "Nea oir art_Humus_Seraph",
        "src": "../assets/artwork-images2/Nea oir art_Humus_Seraph_1.png"

    },
    {
        "imgId": 2,
        "imageHref": "#img2",
        "imageAlt": "Nea oir art_Humus_Seraph",
        "src": "../assets/artwork-images2/Nea oir art_Humus_Seraph_2.png"

    },
    {
        "imgId": 3,
        "imageHref": "#img3",
        "imageAlt": "Nea oir art_Humus_Seraph",
        "src": "../assets/artwork-images2/Nea oir art_Humus_Seraph_3.png"

    },
    {
        "imgId": 4,
        "imageHref": "#img4",
        "imageAlt": "Nea oir art_Humus_Seraph",
        "src": "../assets/artwork-images2/Nea oir art_Humus_Seraph_4.png"

    },
    {
        "imgId": 5,
        "imageHref": "#img5",
        "imageAlt": "Nea oir art_Humus_Seraph",
        "src": "../assets/artwork-images2/Nea oir art_Humus_Seraph_5.png"

    },
    {
        "imgId": 6,
        "imageHref": "#img6",
        "imageAlt": "Nea oir art_Humus_Seraph",
        "src": "../assets/artwork-images2/Nea oir art_Humus_Seraph_6.png"

    },
    {
        "imgId": 7,
        "imageHref": "#img7",
        "imageAlt": "Nea oir art_Humus_Seraph",
        "src": "../assets/artwork-images2/Nea oir art_Humus_Seraph_7.png"

    },
    {
        "imgId": 8,
        "imageHref": "#img8",
        "imageAlt": "Nea oir art_Humus_Seraph",
        "src": "../assets/artwork-images2/Nea oir art_Humus_Seraph_8.png"

    },
    {
        "imgId": 9,
        "imageHref": "#img9",
        "imageAlt": "Nea oir art_Humus_Seraph",
        "src": "../assets/artwork-images2/Nea oir art_Humus_Seraph_9.png"

    },
    {
        "imgId": 10,
        "imageHref": "#img10",
        "imageAlt": "Nea oir art_Humus_Seraph",
        "src": "../assets/artwork-images2/Nea oir art_Humus_Seraph_10.png"

    },

    {
        "imgId": 11,
        "imageHref": "#img11",
        "imageAlt": "Nea oir art_Humus_Seraph",
        "src": "../assets/artwork-images2/Nea oir art_Humus_Seraph_11.png"

    },
    {
        "imgId": 12,
        "imageHref": "#img12",
        "imageAlt": "Nea oir art_Humus_Seraph",
        "src": "../assets/artwork-images2/Nea oir art_Humus_Seraph_12.png"

    },
    {
        "imgId": 13,
        "imageHref": "#img13",
        "imageAlt": "Nea oir art_Humus_Seraph",
        "src": "../assets/artwork-images2/Nea oir art_Humus_Seraph_13.png"

    },
    {
        "imgId": 14,
        "imageHref": "#img14",
        "imageAlt": "Nea oir art_Humus_Seraph",
        "src": "../assets/artwork-images2/Nea oir art_Humus_Seraph_14.png"

    },
    {
        "imgId": 15,
        "imageHref": "#img15",
        "imageAlt": "Nea oir art_Humus_Seraph",
        "src": "../assets/artwork-images2/Nea oir art_Humus_Seraph_15.png"

    },
    {
        "imgId": 16,
        "imageHref": "#img16",
        "imageAlt": "Nea oir art_Humus_Seraph",
        "src": "../assets/artwork-images2/Nea oir art_Humus_Seraph_16.png"

    },
    {
        "imgId": 17,
        "imageHref": "#img17",
        "imageAlt": "Nea oir art_Humus_Seraph",
        "src": "../assets/artwork-images2/Nea oir art_Humus_Seraph_17.png"

    },
    {
        "imgId": 18,
        "imageHref": "#img18",
        "imageAlt": "Nea oir art_Humus_Seraph",
        "src": "../assets/artwork-images2/Nea oir art_Humus_Seraph_18.png"

    },
    {
        "imgId": 19,
        "imageHref": "#img19",
        "imageAlt": "Nea oir art_Humus_Seraph",
        "src": "../assets/artwork-images2/Nea oir art_Humus_Seraph_19.png"

    },
    {
        "imgId": 20,
        "imageHref": "#img20",
        "imageAlt": "Nea oir art_Humus_Seraph",
        "src": "../assets/artwork-images2/Nea oir art_Humus_Seraph_20.png"

    },
    {
        "imgId": 21,
        "imageHref": "#img21",
        "imageAlt": "Nea oir art_Humus_Seraph",
        "src": "../assets/artwork-images2/Nea oir art_Humus_Seraph_21.png"

    }
]

let fashionImg = [
    {
        "imgId": 1,
        "imageHref": "#img1",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_1.png"
    },
    {
        "imgId": 2,
        "imageHref": "#img2",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_2.png"
    },
    {
        "imgId": 3,
        "imageHref": "#img3",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_3.png"
    },
    {
        "imgId": 4,
        "imageHref": "#img4",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_4.png"
    },
    {
        "imgId": 5,
        "imageHref": "#img5",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_5.png"
    },
    {
        "imgId": 6,
        "imageHref": "#img6",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_6.png"
    },
    {
        "imgId": 7,
        "imageHref": "#img7",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_7.png"
    },
    {
        "imgId": 8,
        "imageHref": "#img8",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_8.png"
    },
    {
        "imgId": 9,
        "imageHref": "#img9",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_9.png"
    },
    {
        "imgId": 10,
        "imageHref": "#img10",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_10.png"
    },
    {
        "imgId": 11,
        "imageHref": "#img11",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_11.png"
    },
    {
        "imgId": 12,
        "imageHref": "#img12",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_12.png"
    },
    {
        "imgId": 13,
        "imageHref": "#img13",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_13.png"
    },
    {
        "imgId": 14,
        "imageHref": "#img14",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_14.png"
    },
    {
        "imgId": 15,
        "imageHref": "#img15",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_15.png"
    },
    {
        "imgId": 16,
        "imageHref": "#img16",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_16.png"
    },
    {
        "imgId": 17,
        "imageHref": "#img17",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_17.png"
    },
    {
        "imgId": 18,
        "imageHref": "#img18",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_18.png"
    },
    {
        "imgId": 19,
        "imageHref": "#img19",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_19.png"
    },
    {
        "imgId": 20,
        "imageHref": "#img20",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_20.png"
    },
    {
        "imgId": 21,
        "imageHref": "#img21",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_21.png"
    },
    {
        "imgId": 22,
        "imageHref": "#img22",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_22.png"
    },
    {
        "imgId": 23,
        "imageHref": "#img23",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_23.png"
    },
    {
        "imgId": 24,
        "imageHref": "#img24",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_24.png"
    },
    {
        "imgId": 25,
        "imageHref": "#img25",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_25.png"
    },
    {
        "imgId": 26,
        "imageHref": "#img26",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_26.png"
    },
    {
        "imgId": 27,
        "imageHref": "#img27",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_27.png"
    },
    {
        "imgId": 28,
        "imageHref": "#img28",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_28.png"
    },
    {
        "imgId": 29,
        "imageHref": "#img29",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_29.png"
    },
    {
        "imgId": 30,
        "imageHref": "#img30",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_30.png"
    },
    {
        "imgId": 31,
        "imageHref": "#img31",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_31.png"
    },
    {
        "imgId": 32,
        "imageHref": "#img32",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_32.png"
    },
    {
        "imgId": 33,
        "imageHref": "#img33",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_33.png"
    },
    {
        "imgId": 34,
        "imageHref": "#img34",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_34.png"
    },
    {
        "imgId": 35,
        "imageHref": "#img35",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_35.png"
    },
    {
        "imgId": 36,
        "imageHref": "#img36",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_36.png"
    },
    {
        "imgId": 37,
        "imageHref": "#img37",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_37.png"
    },
    {
        "imgId": 38,
        "imageHref": "#img38",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_38.png"
    },
    {
        "imgId": 39,
        "imageHref": "#img39",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_39.png"
    },
    {
        "imgId": 40,
        "imageHref": "#img40",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_40.png"
    },
    {
        "imgId": 41,
        "imageHref": "#img41",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_41.png"
    },
    {
        "imgId": 42,
        "imageHref": "#img42",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_42.png"
    },
    {
        "imgId": 43,
        "imageHref": "#img43",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_43.png"
    },
    {
        "imgId": 44,
        "imageHref": "#img44",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_44.png"
    },
    {
        "imgId": 45,
        "imageHref": "#img45",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_45.png"
    },
    {
        "imgId": 46,
        "imageHref": "#img46",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_46.png"
    },
    {
        "imgId": 47,
        "imageHref": "#img47",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_47.png"
    },
    {
        "imgId": 48,
        "imageHref": "#img48",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_48.png"
    },
    {
        "imgId": 49,
        "imageHref": "#img49",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_49.png"
    },
    {
        "imgId": 50,
        "imageHref": "#img50",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_50.png"
    },
    {
        "imgId": 51,
        "imageHref": "#img51",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_51.png"
    },
    {
        "imgId": 52,
        "imageHref": "#img52",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_52.png"
    },
    {
        "imgId": 53,
        "imageHref": "#img53",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_53.png"
    },
    {
        "imgId": 54,
        "imageHref": "#img54",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_54.png"
    },
    {
        "imgId": 55,
        "imageHref": "#img55",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_55.png"
    },
    {
        "imgId": 56,
        "imageHref": "#img56",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_56.png"
    },
    {
        "imgId": 57,
        "imageHref": "#img57",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_57.png"
    },
    {
        "imgId": 58,
        "imageHref": "#img58",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_58.png"
    },
    {
        "imgId": 59,
        "imageHref": "#img59",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_59.png"
    },
    {
        "imgId": 60,
        "imageHref": "#img60",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_60.png"
    },
    ,
    {
        "imgId": 61,
        "imageHref": "#img61",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_61.png"
    },
    {
        "imgId": 62,
        "imageHref": "#img62",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_62.png"
    },
    {
        "imgId": 63,
        "imageHref": "#img63",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_63.png"
    },
    {
        "imgId": 64,
        "imageHref": "#img64",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_64.png"
    },
    {
        "imgId": 65,
        "imageHref": "#img65",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_65.png"
    },
    {
        "imgId": 66,
        "imageHref": "#img66",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_66.png"
    },
    {
        "imgId": 67,
        "imageHref": "#img67",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_67.png"
    },
    {
        "imgId": 68,
        "imageHref": "#img68",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_68.png"
    },
    {
        "imgId": 69,
        "imageHref": "#img69",
        "imageAlt": "Nea oir FASHIONISTAS Seraph art",
        "src": "../assets/artwork-images3/Nea oir FASHIONISTAS Seraph art_69.png"
    }
]

let downSyndromeImg = [
    {
        "imgId": 1,
        "imageHref": "#img1",
        "imageAlt": "Nea oir Downs syndrome art",
        "src": "../assets/artwork-images4/Nea oir Downs syndrome art_1.png"

    },
    {
        "imgId": 2,
        "imageHref": "#img2",
        "imageAlt": "Nea oir Downs syndrome art",
        "src": "../assets/artwork-images4/Nea oir Downs syndrome art_2.png"

    },
    {
        "imgId": 3,
        "imageHref": "#img3",
        "imageAlt": "Nea oir Downs syndrome art",
        "src": "../assets/artwork-images4/Nea oir Downs syndrome art_3.png"

    },
    {
        "imgId": 4,
        "imageHref": "#img4",
        "imageAlt": "Nea oir Downs syndrome art",
        "src": "../assets/artwork-images4/Nea oir Downs syndrome art_4.png"

    }
]

let merchBagImg = [
    {
        "imgId": 1,
        "imageHref": "#img1",
        "imageAlt": "Neaoir bag",
        "src": "../assets/artwork-images5/bags/bag1.png"
    },
    {
        "imgId": 2,
        "imageHref": "#img2",
        "imageAlt": "Neaoir bag",
        "src": "../assets/artwork-images5/bags/bag2.png"
    },
    {
        "imgId": 3,
        "imageHref": "#img3",
        "imageAlt": "Neaoir bag",
        "src": "../assets/artwork-images5/bags/bag3.png"
    },
    {
        "imgId": 4,
        "imageHref": "#img4",
        "imageAlt": "Neaoir bag",
        "src": "../assets/artwork-images5/bags/bag4.png"
    },
    {
        "imgId": 5,
        "imageHref": "#img5",
        "imageAlt": "Neaoir bag",
        "src": "../assets/artwork-images5/bags/bag5.png"
    },
    {
        "imgId": 6,
        "imageHref": "#img6",
        "imageAlt": "Neaoir bag",
        "src": "../assets/artwork-images5/bags/bag6.png"
    }
]

let merchPostCardImg = [
    {
        "imgId": 1,
        "imageHref": "#img1",
        "imageAlt": "Neaoir Postcards",
        "src": "../assets/artwork-images5/postcards/Postcards.001.webp"
    },
    {
        "imgId": 2,
        "imageHref": "#img2",
        "imageAlt": "Neaoir Postcards",
        "src": "../assets/artwork-images5/postcards/Postcards.002.webp"
    },
    {
        "imgId": 3,
        "imageHref": "#img3",
        "imageAlt": "Neaoir Postcards",
        "src": "../assets/artwork-images5/postcards/Postcards.003.webp"
    },
    {
        "imgId": 4,
        "imageHref": "#img4",
        "imageAlt": "Neaoir Postcards",
        "src": "../assets/artwork-images5/postcards/Postcards.004.webp"
    },
    {
        "imgId": 5,
        "imageHref": "#img5",
        "imageAlt": "Neaoir Postcards",
        "src": "../assets/artwork-images5/postcards/Postcards.005.webp"
    },
    {
        "imgId": 6,
        "imageHref": "#img6",
        "imageAlt": "Neaoir Postcards",
        "src": "../assets/artwork-images5/postcards/Postcards.006.webp"
    },
    {
        "imgId": 7,
        "imageHref": "#img7",
        "imageAlt": "Neaoir Postcards",
        "src": "../assets/artwork-images5/postcards/Postcards.007.webp"
    },
    {
        "imgId": 8,
        "imageHref": "#img8",
        "imageAlt": "Neaoir Postcards",
        "src": "../assets/artwork-images5/postcards/Postcards.008.webp"
    },
    {
        "imgId": 9,
        "imageHref": "#img9",
        "imageAlt": "Neaoir Postcards",
        "src": "../assets/artwork-images5/postcards/Postcards.009.webp"
    },
    {
        "imgId": 10,
        "imageHref": "#img10",
        "imageAlt": "Neaoir Postcards",
        "src": "../assets/artwork-images5/postcards/Postcards.010.webp"
    },
    {
        "imgId": 11,
        "imageHref": "#img11",
        "imageAlt": "Neaoir Postcards",
        "src": "../assets/artwork-images5/postcards/Postcards.011.webp"
    },
    {
        "imgId": 12,
        "imageHref": "#img12",
        "imageAlt": "Neaoir Postcards",
        "src": "../assets/artwork-images5/postcards/Postcards.012.webp"
    },
    {
        "imgId": 13,
        "imageHref": "#img13",
        "imageAlt": "Neaoir Postcards",
        "src": "../assets/artwork-images5/postcards/Postcards.013.webp"
    }
]

let diversImg = [
    {
        "imgId": 1,
        "imageHref": "#img1",
        "imageAlt": "Nea oir Diver art",
        "src": "../assets/artwork-images6/Nea oir art_1.png"

    },
    {
        "imgId": 2,
        "imageHref": "#img2",
        "imageAlt": "Nea oir Diver art",
        "src": "../assets/artwork-images6/Nea oir art_2.png"

    },
    {
        "imgId": 3,
        "imageHref": "#img3",
        "imageAlt": "Nea oir Diver art",
        "src": "../assets/artwork-images6/Nea oir art_3.png"
    },
    {
        "imgId": 4,
        "imageHref": "#img4",
        "imageAlt": "Nea oir Diver art",
        "src": "../assets/artwork-images6/Nea oir art_4.png"
    },
    {
        "imgId": 5,
        "imageHref": "#img5",
        "imageAlt": "Nea oir Diver art",
        "src": "../assets/artwork-images6/Nea oir art_5.png"
    },
    {
        "imgId": 6,
        "imageHref": "#img6",
        "imageAlt": "Nea oir Diver art",
        "src": "../assets/artwork-images6/Nea oir art_6.png"
    },
    {
        "imgId": 7,
        "imageHref": "#img7",
        "imageAlt": "Nea oir Diver art",
        "src": "../assets/artwork-images6/Nea oir art_7.png"
    },
    {
        "imgId": 8,
        "imageHref": "#img8",
        "imageAlt": "Nea oir Diver art",
        "src": "../assets/artwork-images6/Nea oir art_8.png"
    },
    {
        "imgId": 9,
        "imageHref": "#img9",
        "imageAlt": "Nea oir Diver art",
        "src": "../assets/artwork-images6/Nea oir art_9.png"
    },
    {
        "imgId": 10,
        "imageHref": "#img10",
        "imageAlt": "Nea oir Diver art",
        "src": "../assets/artwork-images6/Nea oir art_10.png"
    },
    {
        "imgId": 11,
        "imageHref": "#img11",
        "imageAlt": "Nea oir Diver art",
        "src": "../assets/artwork-images6/Nea oir art_11.png"
    },
    {
        "imgId": 12,
        "imageHref": "#img12",
        "imageAlt": "Nea oir Diver art",
        "src": "../assets/artwork-images6/Nea oir art_12.png"
    },
    {
        "imgId": 13,
        "imageHref": "#img13",
        "imageAlt": "Nea oir Diver art",
        "src": "../assets/artwork-images6/Nea oir art_13.png"
    },
    {
        "imgId": 14,
        "imageHref": "#img14",
        "imageAlt": "Nea oir Diver art",
        "src": "../assets/artwork-images6/Nea oir art_14.png"
    },
    {
        "imgId": 15,
        "imageHref": "#img15",
        "imageAlt": "Nea oir Diver art",
        "src": "../assets/artwork-images6/Nea oir art_15.png"
    },
    {
        "imgId": 16,
        "imageHref": "#img16",
        "imageAlt": "Nea oir Diver art",
        "src": "../assets/artwork-images6/Nea oir art_16.png"
    },
    {
        "imgId": 17,
        "imageHref": "#img17",
        "imageAlt": "Nea oir Diver art",
        "src": "../assets/artwork-images6/Nea oir art_17.png"
    },
    {
        "imgId": 18,
        "imageHref": "#img18",
        "imageAlt": "Nea oir Diver art",
        "src": "../assets/artwork-images6/Nea oir art_18.png"
    },
    {
        "imgId": 19,
        "imageHref": "#img19",
        "imageAlt": "Nea oir Diver art",
        "src": "../assets/artwork-images6/Nea oir art_19.png"
    },
    {
        "imgId": 20,
        "imageHref": "#img20",
        "imageAlt": "Nea oir Diver art",
        "src": "../assets/artwork-images6/Nea oir art_20.png"
    },
    {
        "imgId": 21,
        "imageHref": "#img21",
        "imageAlt": "Nea oir Diver art",
        "src": "../assets/artwork-images6/Nea oir art_21.png"
    },
    {
        "imgId": 22,
        "imageHref": "#img22",
        "imageAlt": "Nea oir Diver art",
        "src": "../assets/artwork-images6/Nea oir art_22.png"
    },
    {
        "imgId": 23,
        "imageHref": "#img23",
        "imageAlt": "Nea oir Diver art",
        "src": "../assets/artwork-images6/Nea oir art_23.png"
    },
    {
        "imgId": 24,
        "imageHref": "#img24",
        "imageAlt": "Nea oir Diver art",
        "src": "../assets/artwork-images6/Nea oir art_24.png"
    },
    {
        "imgId": 25,
        "imageHref": "#img25",
        "imageAlt": "Nea oir Diver art",
        "src": "../assets/artwork-images6/Nea oir art_25.png"
    },
    {
        "imgId": 26,
        "imageHref": "#img26",
        "imageAlt": "Nea oir Diver art",
        "src": "../assets/artwork-images6/Nea oir art_26.png"
    },
    {
        "imgId": 27,
        "imageHref": "#img27",
        "imageAlt": "Nea oir Diver art",
        "src": "../assets/artwork-images6/Nea oir art_27.png"

    },
    {
        "imgId": 28,
        "imageHref": "#img28",
        "imageAlt": "Nea oir Diver art",
        "src": "../assets/artwork-images6/Nea oir art_28.png"

    }
]


exMachinaImg.forEach(element => {
    div1.innerHTML += `
        <div class="magnific-img">
        <a class="image-popup-vertical-fit" href="${element.src}" title="Artwork${element.imgId}">
            <img src="${element.src}" alt="${element.imageAlt}" />
            <i class="fa fa-search-plus" aria-hidden="true" style="display: none;"></i>
        </a>
        </div>

        `
});

exHumusImg.forEach(element => {
    div2.innerHTML += `
    <div class="magnific-img">
    <a class="image-popup-vertical-fit" href="${element.src}" title="Artwork${element.imgId}">
    <img src="${element.src}" alt="${element.imageAlt}" />
    <i class="fa fa-search-plus" aria-hidden="true" style="display: none;"></i>
    </a>
    </div>

    `
});

fashionImg.forEach(element => {
    div3.innerHTML += `
  <div class="magnific-img">
  <a class="image-popup-vertical-fit" href="${element.src}" title="Artwork${element.imgId}">
      <img src="${element.src}" alt="${element.imageAlt}" />
      <i class="fa fa-search-plus" aria-hidden="true" style="display: none;"></i>
  </a>
  </div>

  `
});

downSyndromeImg.forEach(element => {
    div4.innerHTML += `
  <div class="magnific-img">
  <a class="image-popup-vertical-fit" href="${element.src}" title="Artwork${element.imgId}">
      <img src="${element.src}" alt="${element.imageAlt}" />
      <i class="fa fa-search-plus" aria-hidden="true" style="display: none;"></i>
  </a>
  </div>

  `
});


merchBagImg.forEach(element => {
    div5.innerHTML += `
  <div class="magnific-img">
  <a class="image-popup-vertical-fit" href="${element.src}" title="Artwork${element.imgId}">
      <img src="${element.src}" alt="${element.imageAlt}" />
      <i class="fa fa-search-plus" aria-hidden="true" style="display: none;"></i>
  </a>
  </div>

  `
});



merchPostCardImg.forEach(element => {
    div6.innerHTML += `
  <div class="magnific-img">
  <a class="image-popup-vertical-fit" href="${element.src}" title="Artwork${element.imgId}">
      <img src="${element.src}" alt="${element.imageAlt}" />
      <i class="fa fa-search-plus" aria-hidden="true" style="display: none;"></i>
  </a>
  </div>

  `
});


diversImg.forEach(element => {
    div7.innerHTML += `
      <div class="magnific-img">
      <a class="image-popup-vertical-fit" href="${element.src}" title="Artwork${element.imgId}">
          <img src="${element.src}" alt="${element.imageAlt}" />
          <i class="fa fa-search-plus" aria-hidden="true" style="display: none;"></i>
      </a>
      </div>

      `
});



btn1.addEventListener('click', () => {

    btn1.classList.add("shop-link-active");

    btn2.classList.remove("shop-link-active");
    btn3.classList.remove("shop-link-active");
    btn4.classList.remove("shop-link-active");
    btn5.classList.remove("shop-link-active");
    btn6.classList.remove("shop-link-active");


    container1.style.display = "block";
    container2.style.display = "none";
    container3.style.display = "none";
    container4.style.display = "none";
    container5.style.display = "none";
    container6.style.display = "none";
    console.log("test");
})


btn2.addEventListener('click', () => {
    btn2.classList.add("shop-link-active");

    btn1.classList.remove("shop-link-active");
    btn3.classList.remove("shop-link-active");
    btn4.classList.remove("shop-link-active");
    btn5.classList.remove("shop-link-active");
    btn6.classList.remove("shop-link-active");


    container2.style.display = "block";
    container1.style.display = "none";
    container3.style.display = "none";
    container4.style.display = "none";
    container5.style.display = "none";
    container6.style.display = "none";





    console.log("test");
})


btn3.addEventListener('click', () => {
    btn3.classList.add("shop-link-active");

    btn1.classList.remove("shop-link-active");
    btn2.classList.remove("shop-link-active");
    btn4.classList.remove("shop-link-active");
    btn5.classList.remove("shop-link-active");
    btn6.classList.remove("shop-link-active");


    container3.style.display = "block";
    container1.style.display = "none";
    container2.style.display = "none";
    container4.style.display = "none";
    container5.style.display = "none";
    container6.style.display = "none";



    console.log("test");
})


btn4.addEventListener('click', () => {
    btn4.classList.add("shop-link-active");

    btn1.classList.remove("shop-link-active");
    btn2.classList.remove("shop-link-active");
    btn3.classList.remove("shop-link-active");
    btn5.classList.remove("shop-link-active");
    btn6.classList.remove("shop-link-active");


    container4.style.display = "block";
    container1.style.display = "none";
    container2.style.display = "none";
    container3.style.display = "none";
    container5.style.display = "none";
    container6.style.display = "none";






    console.log("test");
})


btn5.addEventListener('click', () => {
    btn5.classList.add("shop-link-active");

    btn1.classList.remove("shop-link-active");
    btn2.classList.remove("shop-link-active");
    btn3.classList.remove("shop-link-active");
    btn4.classList.remove("shop-link-active");
    btn6.classList.remove("shop-link-active");


    container5.style.display = "block";
    container1.style.display = "none";
    container2.style.display = "none";
    container3.style.display = "none";
    container4.style.display = "none";
    container6.style.display = "none";





    console.log("test");
})





btn6.addEventListener('click', () => {
    btn6.classList.add("shop-link-active");

    btn1.classList.remove("shop-link-active");
    btn2.classList.remove("shop-link-active");
    btn3.classList.remove("shop-link-active");
    btn4.classList.remove("shop-link-active");
    btn5.classList.remove("shop-link-active");

    container6.style.display = "block";
    container1.style.display = "none";
    container2.style.display = "none";
    container3.style.display = "none";
    container4.style.display = "none";
    container5.style.display = "none";




    console.log("test");
})












// fetch("./static/artwork.json")
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         let response = data
//         console.log(data);

//         response.forEach(element => {
//             div1.innerHTML += `
//       <div class="magnific-img">
//       <a class="image-popup-vertical-fit" href="${element.src}" title="Artwork${element.imgId}">
//           <img src="${element.src}" alt="1" />
//           <i class="fa fa-search-plus" aria-hidden="true" style="display: none;"></i>
//       </a>
//       </div>

//       `
//         });

//     })
//     .catch((error) => {
//         console.log(error);
//         let h1 = document.querySelector("#error")
//         h1.innerText = "IMAGES NOT LOADED"
//         console.log("data rejected")
//     })






let collectionType = document.querySelector("#collectionType")
let artworkNo = document.querySelector("#artwork-no")
let artworkCollection = document.querySelector("#artwork-collection")
let merchCollection = document.querySelector("#merch-collection")

artworkNo.style.display = "none"
artworkCollection.style.display = "none"
merchCollection.style.display = "none"

collectionType.addEventListener('change', function () {
    // Get the selected option value
    const selectedValue = collectionType.value;
    if (selectedValue == "Artworks") {
        artworkCollection.style.display = "initial"
        artworkNo.style.display = "initial"
        merchCollection.style.display = "none"
    }
    else {
        merchCollection.style.display = "initial"
        artworkNo.style.display = "initial"
        artworkCollection.style.display = "none"
    }

    // console.log(selectedValue);
});
