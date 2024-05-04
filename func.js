var toggleTableOfContentsHidden = function () {
    var _a;
    var textTOC = document === null || document === void 0 ? void 0 : document.getElementById("text-table-of-contents");
    if (textTOC !== null) {
        var displayStyle = (_a = window === null || window === void 0 ? void 0 : window.getComputedStyle(textTOC)) === null || _a === void 0 ? void 0 : _a.display;
        if (displayStyle) {
            textTOC.style.display = displayStyle === "none" ? "inline" : "none";
        }
    }
};
var linkifyTableOfContents = function () {
    var heading = document.querySelector("#table-of-contents h2");
    if (heading != null) {
        heading.innerHTML =
            '<a href="javascript:toggleTableOfContentsHidden()">Table of Contents</a>';
    }
};
var orgDateToHumanDate = function () {
    var timestamps = document.querySelectorAll(".timestamp");
    var options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
    };
    for (var _i = 0, _a = Array.from(timestamps); _i < _a.length; _i++) {
        var timestamp = _a[_i];
        // timestamp.innerHTML is like [2024-01-01]
        timestamp.innerHTML = new Date(parseInt(timestamp.innerHTML.substring(1, 5)), // year
        parseInt(timestamp.innerHTML.substring(6, 8)) - 1, // monthIndex (0-based)
        parseInt(timestamp.innerHTML.substring(9, 11))).toLocaleDateString(undefined, options);
    }
};
var linkifyTags = function () {
    var tags = Array.from(document.querySelectorAll(".tag"));
    for (var _i = 0, tags_1 = tags; _i < tags_1.length; _i++) {
        var tagHeading = tags_1[_i];
        var _loop_1 = function (tag) {
            var tagClassName = tag.className;
            tag.addEventListener("click", function () { return filterByTag(tagClassName); });
        };
        for (var _a = 0, _b = Array.from(tagHeading.children); _a < _b.length; _a++) {
            var tag = _b[_a];
            _loop_1(tag);
        }
    }
};
// Contains all the active tags on the page.
var activeTags = [];
// Filter by the provided tag, pass empty string to show all.
var filterByTag = function (filterTag) {
    var _a, _b;
    var articles = document.querySelectorAll(".outline-2");
    if (filterTag == "") {
        activeTags = [];
    }
    else if (activeTags.includes(filterTag)) {
        console.log("Ignoring repeated tag application");
        return;
    }
    else {
        activeTags.push(filterTag);
    }
    for (var _i = 0, _c = Array.from(articles); _i < _c.length; _i++) {
        var article = _c[_i];
        if (filterTag == "") {
            article.hidden = false;
            continue;
        }
        var tags = (_a = article.querySelector(".tag")) === null || _a === void 0 ? void 0 : _a.children;
        if (tags == undefined) {
            article.hidden = true;
            continue;
        }
        var shouldKeep = false;
        for (var _d = 0, _e = Array.from(tags); _d < _e.length; _d++) {
            var tag = _e[_d];
            if (tag.className == filterTag) {
                shouldKeep = true;
                break;
            }
        }
        article.hidden = !shouldKeep;
    }
    var textTOC = document.getElementById("table-of-contents");
    if (!textTOC) {
        console.log("Could not find table of contents element!");
        return;
    }
    if (filterTag == "") {
        textTOC.hidden = false;
        return;
    }
    textTOC.hidden = true;
    var tagFilter = document.createElement("span");
    tagFilter.className = "tag";
    tagFilter.innerHTML = "<span>" + filterTag + " X" + "</span>";
    tagFilter.onclick = function (_) {
        // TODO: Bug when clearing multiple tags, should instead filter on
        // the remaining tags. Would need marking tags specially.
        // Probably should switch filterTag to array too.
        filterByTag("");
        tagFilter.remove();
    };
    (_b = textTOC.parentNode) === null || _b === void 0 ? void 0 : _b.insertBefore(tagFilter, textTOC);
};
var globalOnLoad = function () {
    linkifyTableOfContents();
    orgDateToHumanDate();
    linkifyTags();
};
