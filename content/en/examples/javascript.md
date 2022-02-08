---
title: JavaScript
position: 2
category: Examples
---

## Date and time

```js
/* Date and Time */
new Date().toLocaleString();
// FR: 16/07/2021 à 17:49:08

/* Date */
new Date().toLocaleDateString();
// FR: 16/07/2021

/* Time */
new Date().toLocaleTimeString();
// FR: 17:49:08

/* Formatted Date and Time */
function DateTimeFormat() {
  var DateTimeFormat = new Date();

  var DateFormat = DateTimeFormat.toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  var TimeFormat = DateTimeFormat.toLocaleTimeString().split(":", 2).join(":");

  console.log(DateFormat + " " + TimeFormat);
}

DateTimeFormat();
// FR: vendredi 16 juillet 2021 17:48
```

## Display the browser

```js
navigator.sayswho = (function () {
  var ua = navigator.userAgent,
    tem,
    M =
      ua.match(
        /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
      ) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return "IE " + (tem[1] || "");
  }
  if (M[1] === "Chrome") {
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
    if (tem != null) return tem.slice(1).join(" ").replace("OPR", "Opera");
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
  return M.join(" ");
})();

return navigator.sayswho;
```

## Display OS

```js
function getOS() {
  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = "Mac OS";
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = "iOS";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = "Windows";
  } else if (/Android/.test(userAgent)) {
    os = "Android";
  } else if (!os && /Linux/.test(platform)) {
    os = "Linux";
  }

  return os;
}
return getOS();
```

## Size converter (1)

```js
export const convertKo = (number) => {
  const x = number;
  let res;

  if (x >= Math.pow(1024, 3)) res = Math.round(x / Math.pow(1024, 3)) + " To";
  else if (x >= Math.pow(1024, 2))
    res = Math.round(x / Math.pow(1024, 2)) + " Go";
  else if (x >= 1024) res = Math.round(x / 1024) + " Mo";
  else res = x + " Ko";

  return res;
};
```

## Size converter (2)

```js
export const convertByte = (a, d = 0, k = 1024) => {
  const i = Math.floor(Math.log(a) / Math.log(k));
  return (
    parseFloat((a / Math.pow(k, i)).toFixed(d)) +
    " " +
    ["o", "Ko", "Mo", "Go", "To"][i]
  );
};
```

## Bandwidth converter

```js
export const convertBandwidth = (a, d = 2, k = 125000) => {
  return parseFloat((a / k).toFixed(d)) + " Mbps";
};
```

## Capitalize on the first letter

```js
export const capitalizeFirstLetter = (a) => {
  return a.charAt(0).toUpperCase() + a.slice(1);
};
```
