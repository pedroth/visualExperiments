import { Sort, ArrayUtils, EditDistance } from "nabla.js";
import $ from "jquery";

const WebUtils = {};

WebUtils.retrieveAndAppend = async (url, htmlId) => {
  console.log(`Reading from ${url}.. appending on ${htmlId}`);
  const html = await fetch(url).then(x => x.text());
  $(`#${htmlId}`).html(html);
  /**
   * We have to use jquery to run <script> tags in html, vanilla js doesn't work.
   * vanilla js: document.getElementById(htmlId).innerHTML = html;
   * jquery does some processing to the innerHTML string
   */
};

WebUtils.readDb = async () => {
  const time = new Date().getTime();
  if (!localStorage.db || time - localStorage.db.time > TIME2UPDATE_MILLIS) {
    console.log("retrieving db from cache");
    const dbJson = await fetch("resources/db/db.json").then(x => x.json());
    localStorage.db = JSON.stringify({ time: time, data: dbJson });
  }
  return JSON.parse(localStorage.db).data;
};

WebUtils.sortDb = db => {
  return Sort.quicksort(
    db.posts,
    (a, b) => date2int(a.date) - date2int(b.date)
  );
};

WebUtils.randomDb = db => {
  return ArrayUtils.randomPermute(db.posts);
};

WebUtils.getTagsHistogram = db =>
  db.posts
    .flatMap(p => p.tags)
    .reduce((hist, tag) => {
      if (!(tag in hist)) {
        hist[tag] = 1;
      } else {
        hist[tag] += 1;
      }
      return hist;
    }, {});

WebUtils.search = db => query => {
  if (!query || query.trim() === "") return [];
  const { distance: d } = EditDistance;
  const queryT = query.trim();
  const querySplit = queryT.split("+").map(s => s.trim());
  const tags = Object.keys(WebUtils.getTagsHistogram(db));
  const argMin = array => cost =>
    array.reduce(
      ([minC, minV], v) => {
        const c = cost(v);
        return c < minC ? [c, v] : [minC, minV];
      },
      [Number.MAX_VALUE, null]
    )[1];
  const qTagSet = querySplit
    .map(q => argMin(tags)(t => d(q, t.substring(0, q.length))))
    .reduce((s, v) => s.add(v), new Set());
  return db.posts.filter(p => p.tags.some(t => qTagSet.has(t)));
};

export default WebUtils;

//========================================================================================
/*                                                                                      *
 *                                   Private functions                                  *
 *                                                                                      */
//========================================================================================

function date2int(date) {
  var dateStrs = date.split("/");
  var acc = 0;
  var accM = 1;
  for (var j = 0; j < dateStrs.length; j++) {
    acc += parseFloat(dateStrs[j]) * accM;
    accM *= 100;
  }
  return acc;
}

const TIME2UPDATE_MILLIS = 24 * 3.6e3 * 1e3; // one day in millis;
