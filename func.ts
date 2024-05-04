const toggleTableOfContentsHidden = function () {
  const textTOC = document?.getElementById("text-table-of-contents");
  if (textTOC !== null) {
    const displayStyle = window?.getComputedStyle(textTOC)?.display;
    if (displayStyle) {
      textTOC.style.display = displayStyle === "none" ? "inline" : "none";
    }
  }
};

const linkifyTableOfContents = function () {
  const heading = document.querySelector("#table-of-contents h2");
  if (heading != null) {
    heading.innerHTML =
      '<a href="javascript:toggleTableOfContentsHidden()">Table of Contents</a>';
  }
};

const orgDateToHumanDate = function () {
  let timestamps = document.querySelectorAll(".timestamp");
  let options: any = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  for (let timestamp of timestamps) {
    timestamp.innerHTML = new Date(
      timestamp.innerHTML.split("-").reverse().join("-").substring(0, 10),
    );
  }
};

const linkifyTags = function () {
  const tags = Array.from(document.querySelectorAll(".tag"));
  for (const tagHeading of tags) {
    for (let tag of tagHeading.children) {
      let tagClassName = tag.className;
      tag.addEventListener("click", () => filterByTag(tagClassName));
    }
  }
};

// Contains all the active tags on the page.
let activeTags: string[] = [];

// Filter by the provided tag, pass empty string to show all.
const filterByTag = function (filterTag: string) {
  let articles = document.querySelectorAll(".outline-2");

  if (filterTag == "") {
    activeTags = [];
  } else if (activeTags.includes(filterTag)) {
    console.log("Ignoring repeated tag application");
    return;
  } else {
    activeTags.push(filterTag);
  }
  for (let article of articles) {
    if (filterTag == "") {
      (<HTMLElement>article).hidden = false;
      continue;
    }
    let tags = article.querySelector(".tag")?.children;
    if (tags == undefined) {
      (<HTMLElement>article).hidden = true;
      continue;
    }
    var shouldKeep = false;
    for (let tag of tags) {
      if (tag.className == filterTag) {
        shouldKeep = true;
        break;
      }
    }
    (<HTMLElement>article).hidden = !shouldKeep;
  }
  let textTOC = document.getElementById("table-of-contents");
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
  textTOC.parentNode?.insertBefore(tagFilter, textTOC);
};

const globalOnLoad = function () {
  linkifyTableOfContents();
  orgDateToHumanDate();
  linkifyTags();
};
