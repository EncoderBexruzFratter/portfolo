/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        headerbg : "rgba(50,50,50,0.70)",
        bodybg : "#202020",
        herolink : "#9D9D9D",
        inverbg : "rgba(0,0,0,0.60)"
      },
      maxWidth: {
        headercon : "1235px",
        hero600 : "600px",
        hero824 : "320px",
        visual : "1248px",
        inversioncon : "612px",
        479 : "479px",
        366 : "366px",
        300 : "300px",
        242 : "242px",
        1440 : "1480px",
        1041 : "1041px",
        344 : "344px",
        185 : "133px",
        150 : "145px",
        414 : "484px",
        369 : "369px",
        506 : "506px"
      },
      minHeight: {
        640 : "640px",
      },
      minWidth:{
        1440 : "1440px",
        121 : "121px",
        366 : "366px"
      },
      height: {
        574 : "574px",
        476 : "476px",
        888 : "888px",
        560 : "560px",
        600 : "600px",
        366 : "366px",
        674 : "674px",
        763 : "763px",
        240 : "240px",
        542 : "542px"
      },
      fontSize: {
        size18 : "18px"
      },
      colors: {
        headercolor : "#DEDEDE",
        herocolor : "#959595",
        pasga : "#DEDEDE0",
        name : "#ECECEC"
      },
      padding: {
        hero129 : "123px",
        129 : "129px",
        hero157 : "157px",
        inversion : "240px",
        119 : "119px",
        128 : "128px",
        116 : "116px",
        200 : "200px",
        66 : "66px",
        hero128 : "128px",
        640 : "580px",
        290 : "290px",
        88 : "88px",
        112 : "112px",
        234 : "234px",
        226 : "226px",
        48 : "48px",
        140 : "140px",
        72 : "72px",
        109 : "109px",
        25  : "100px",
        58 : "58px",
        145 : "145px",
        22 : "88px",
        560 : "560px",
        550 : "556px",
        54  : "54px",
        70 : "70px"
      },
      borderColor: {
        footercolor : "#696969",
        launch : "#A5A5A5"
      },
      margin: {
        112 : "112px",
        275 : "275px",
        48 : "48px",
        80 : "80px",
        226 : "226px",
      },
      lineHeight: {
        48 : "48px"
      },
    },
  },
  plugins: [],
}

