/* ---------------- data ---------------- */
const DESTS = {
  hudson:{id:"hudson",name:"Hudson",state:"NY",tagline:"Art, cafés, and a quiet river-town weekend.",
    blurb:"A weekend of galleries, local food, and river views at the north end of the Hudson Valley.",
    tags:["art","food","shopping"],room:180,
    travel:{train:{t:"About 2 hr",mins:120,how:"Amtrak Empire Service from Moynihan Train Hall to Hudson",cost:74},
            car:{t:"About 2 hr 15 min",mins:135,how:"Taconic State Parkway, then NY-23B into town",cost:40}},
    weather:"Late October highs are usually in the upper 50s °F with nights near 40 °F. Pack a warm layer.",
    access:"Warren Street is flat and an easy walk from the station. Olana's grounds are hilly and the house tour has stairs.",
    pets:"Riverfront Park and many Warren Street shops welcome leashed dogs.",
    scene:{sky:["#f4d8a6","#8fb6c4"],hills:["#8a9a62","#5f7148","#3e4f36"],river:"#6a93a3",leaves:["#c9772b","#d9a531","#a8452a"]},
    acts:[
      {id:"h-arr",name:"Arrive at Hudson station",kind:"Transit",mins:15,cost:0,lat:42.2536,lng:-73.7985,note:"A five-minute walk up to Warren Street."},
      {id:"h-dep",name:"Train home from Hudson station",kind:"Transit",mins:15,cost:0,lat:42.2536,lng:-73.7985,note:"Arrive 15 minutes early; the platform is across the tracks."},
      {id:"h-warren",name:"Warren Street galleries & antiques",kind:"Art",mins:120,cost:0,lat:42.2500,lng:-73.7880,note:"Walk the length of Warren Street from Front Street to 7th."},
      {id:"h-river",name:"Sunset at Hudson Riverfront Park",kind:"Nature",mins:45,cost:0,lat:42.2532,lng:-73.7998,note:"Views across to the Hudson–Athens Lighthouse."},
      {id:"h-wm",name:"Dinner at Wm. Farmer and Sons",kind:"Food",mins:90,cost:55,lat:42.2522,lng:-73.7972,note:"Reserve ahead for Friday nights."},
      {id:"h-perche",name:"Breakfast at Café Le Perche",kind:"Food",mins:60,cost:22,lat:42.2494,lng:-73.7873,note:"Bakery and café on Warren Street."},
      {id:"h-olana",name:"Olana State Historic Site",kind:"History",mins:150,cost:20,lat:42.2178,lng:-73.8291,note:"Frederic Church's hilltop home. Book the house tour ahead."},
      {id:"h-grazin",name:"Lunch at Grazin' Diner",kind:"Food",mins:60,cost:20,lat:42.2502,lng:-73.7900,note:"Classic diner with local, grass-fed beef."},
      {id:"h-basilica",name:"Basilica Hudson",kind:"Art",mins:60,cost:0,lat:42.2540,lng:-73.7975,note:"Check the calendar; some weekends host markets or shows."},
      {id:"h-debs",name:"Dinner at Lil' Deb's Oasis",kind:"Food",mins:90,cost:45,lat:42.2470,lng:-73.7830,note:"Colorful, tropical-leaning menu."},
      {id:"h-trail",name:"Greenport Conservation Area trails",kind:"Nature",mins:90,cost:0,lat:42.2350,lng:-73.7800,note:"Easy loops with river and Catskills views."},
      {id:"h-kittys",name:"Lunch at Kitty's Market",kind:"Food",mins:50,cost:18,lat:42.2528,lng:-73.7980,note:"Steps from the station; good before your train."},
      {id:"h-cole",name:"Thomas Cole National Historic Site",kind:"History",mins:90,cost:18,lat:42.2253,lng:-73.8650,note:"Across the Rip Van Winkle Bridge in Catskill. Needs a car or taxi."}
    ],
    plan:[[["15:30","h-arr"],["16:00","h-warren"],["18:15","h-river"],["19:30","h-wm"]],
          [["09:00","h-perche"],["10:30","h-olana"],["13:30","h-grazin"],["15:00","h-basilica"],["19:00","h-debs"]],
          [["10:00","h-trail"],["12:30","h-kittys"],["14:30","h-dep"]]],
    reviews:[["Spent most of Saturday on Warren Street and still didn't see every gallery. Olana at sunset was the highlight.","Weekend in October"],
             ["Easy by train. We never needed a car except for the Thomas Cole site.","Couple, no car"]]
  },
  beacon:{id:"beacon",name:"Beacon",state:"NY",tagline:"Big art, a steep hike, and a walkable Main Street.",
    blurb:"A short train ride to Dia Beacon, Mount Beacon's fire tower, and a mile of shops and cafés.",
    tags:["art","nature","food"],room:170,
    travel:{train:{t:"About 1 hr 30 min",mins:90,how:"Metro-North Hudson Line from Grand Central to Beacon",cost:33},
            car:{t:"About 1 hr 30 min",mins:90,how:"Taconic State Parkway or I-84 via the Newburgh–Beacon Bridge",cost:28}},
    weather:"Late October highs are usually around 60 °F. The Mount Beacon summit is windier and cooler.",
    access:"Dia Beacon is fully step-free. Main Street climbs gently from the river; a free loop bus links the station and Main Street.",
    pets:"Dia does not allow pets. Long Dock Park and most Main Street patios are dog-friendly.",
    scene:{sky:["#f1c9a0","#a3b9cf"],hills:["#7c8f6b","#57704f","#38493a"],river:"#7898ad",leaves:["#d0822e","#e0b03c","#9c3f2a"]},
    acts:[
      {id:"b-arr",name:"Arrive at Beacon station",kind:"Transit",mins:15,cost:0,lat:41.5048,lng:-73.9848,note:"Dia is a ten-minute walk; the loop bus goes up to Main Street."},
      {id:"b-dep",name:"Train home from Beacon station",kind:"Transit",mins:15,cost:0,lat:41.5048,lng:-73.9848,note:"Weekend trains run about once an hour."},
      {id:"b-main",name:"Main Street shops and galleries",kind:"Shopping",mins:120,cost:0,lat:41.5043,lng:-73.9690,note:"Independent bookstores, record shops, and galleries."},
      {id:"b-dock",name:"Long Dock Park at sunset",kind:"Nature",mins:45,cost:0,lat:41.5080,lng:-73.9875,note:"Riverfront park beside the station."},
      {id:"b-dinner",name:"Dinner on Main Street",kind:"Food",mins:90,cost:45,lat:41.5043,lng:-73.9660,note:"Plenty of options from ramen to farm-to-table."},
      {id:"b-bank",name:"Coffee at Bank Square Coffeehouse",kind:"Food",mins:45,cost:9,lat:41.5023,lng:-73.9800,note:"At the west end of Main Street."},
      {id:"b-mtn",name:"Mount Beacon hike",kind:"Nature",mins:150,cost:0,lat:41.4930,lng:-73.9590,note:"Steep stairs to the fire tower, about 4 miles round trip."},
      {id:"b-pantry",name:"Lunch at Beacon Pantry",kind:"Food",mins:60,cost:22,lat:41.5047,lng:-73.9693,note:"Sandwiches, cheese, and a small café."},
      {id:"b-dia",name:"Dia Beacon",kind:"Art",mins:180,cost:20,lat:41.4999,lng:-73.9829,note:"Large-scale art in a former box-printing factory by the river."},
      {id:"b-bannerman",name:"Bannerman Castle island tour",kind:"History",mins:150,cost:45,lat:41.5070,lng:-73.9870,note:"Boat leaves from the Beacon dock. Seasonal; tours end in early November."},
      {id:"b-howland",name:"Howland Cultural Center",kind:"Art",mins:60,cost:0,lat:41.5050,lng:-73.9625,note:"Exhibits and concerts in an 1872 library building."},
      {id:"b-brett",name:"Madam Brett Park and Fishkill Creek",kind:"Nature",mins:60,cost:0,lat:41.4987,lng:-73.9655,note:"Short, flat walk along the creek and marsh."}
    ],
    plan:[[["15:30","b-arr"],["16:00","b-main"],["17:45","b-dock"],["19:00","b-dinner"]],
          [["08:30","b-bank"],["09:30","b-mtn"],["12:30","b-pantry"],["14:00","b-dia"]],
          [["10:00","b-bannerman"],["13:00","b-howland"],["14:30","b-dep"]]],
    reviews:[["Dia took longer than we planned, in a good way. Leave a full afternoon.","First visit"],
             ["The Mount Beacon stairs are no joke, but the view from the fire tower is worth it.","Hiking weekend"]]
  },
  coldspring:{id:"coldspring",name:"Cold Spring",state:"NY",tagline:"Trails, river views, and an easy Main Street.",
    blurb:"A small village under the Hudson Highlands with antique shops, ridge hikes, and a riverfront bandstand.",
    tags:["nature","shopping","art"],room:175,
    travel:{train:{t:"About 1 hr 20 min",mins:80,how:"Metro-North Hudson Line from Grand Central to Cold Spring",cost:30},
            car:{t:"About 1 hr 15 min",mins:75,how:"Taconic State Parkway, then NY-301 west",cost:28}},
    weather:"Late October highs are usually around 60 °F. Ridge trails can be slick after rain.",
    access:"Main Street is short and walkable but slopes down to the river. Breakneck Ridge is a rock scramble and not accessible.",
    pets:"Leashed dogs are welcome on most Hudson Highlands trails and on the riverfront.",
    scene:{sky:["#f0d2b0","#9fb7c0"],hills:["#6f845c","#4f6544","#334433"],river:"#6c8f9c",leaves:["#b9622a","#dca23a","#8f3a26"]},
    acts:[
      {id:"c-arr",name:"Arrive at Cold Spring station",kind:"Transit",mins:15,cost:0,lat:41.4153,lng:-73.9585,note:"Main Street starts right at the station."},
      {id:"c-dep",name:"Train home from Cold Spring station",kind:"Transit",mins:15,cost:0,lat:41.4153,lng:-73.9585,note:"Sunday afternoon trains fill up; board early."},
      {id:"c-main",name:"Main Street antiques",kind:"Shopping",mins:120,cost:0,lat:41.4200,lng:-73.9540,note:"Antique shops and small galleries along one walkable street."},
      {id:"c-dock",name:"Riverfront and bandstand",kind:"Nature",mins:40,cost:0,lat:41.4185,lng:-73.9595,note:"Views straight across to Storm King."},
      {id:"c-dinner",name:"Dinner on Main Street",kind:"Food",mins:90,cost:45,lat:41.4203,lng:-73.9520,note:"Book Saturday dinners ahead in fall."},
      {id:"c-hils",name:"Breakfast at Hudson Hil's",kind:"Food",mins:60,cost:20,lat:41.4199,lng:-73.9533,note:"Popular; expect a short wait on weekends."},
      {id:"c-breakneck",name:"Breakneck Ridge hike",kind:"Nature",mins:210,cost:0,lat:41.4441,lng:-73.9785,note:"Very steep scramble. Check trail status first; sections close for Fjord Trail work."},
      {id:"c-lunch",name:"Picnic lunch from Main Street",kind:"Food",mins:45,cost:15,lat:41.4195,lng:-73.9550,note:"Pick up sandwiches and eat on the riverfront."},
      {id:"c-magazzino",name:"Magazzino Italian Art",kind:"Art",mins:120,cost:0,lat:41.4316,lng:-73.9124,note:"Free with a reservation. A short taxi ride from the village."},
      {id:"c-boscobel",name:"Boscobel House and Gardens",kind:"History",mins:120,cost:22,lat:41.4120,lng:-73.9390,note:"Restored 1800s house with a lawn over the river."},
      {id:"c-marsh",name:"Constitution Marsh Audubon Center",kind:"Nature",mins:90,cost:0,lat:41.4040,lng:-73.9440,note:"Boardwalk through a tidal marsh; good for birding."},
      {id:"c-stony",name:"Little Stony Point",kind:"Nature",mins:60,cost:0,lat:41.4277,lng:-73.9663,note:"Short loop with a small beach and big views."}
    ],
    plan:[[["15:00","c-arr"],["15:20","c-main"],["17:30","c-dock"],["19:00","c-dinner"]],
          [["08:30","c-hils"],["09:45","c-breakneck"],["13:45","c-lunch"],["15:00","c-magazzino"]],
          [["10:00","c-boscobel"],["12:30","c-marsh"],["14:30","c-dep"]]],
    reviews:[["Everything is a few minutes from the train. Perfect if you don't want to drive.","Car-free weekend"],
             ["We skipped Breakneck and did Little Stony Point instead. Much gentler, still beautiful.","Easy hikers"]]
  }
};
const ORDER=["hudson","beacon","coldspring"];
const INTERESTS=[["art","Art & culture"],["food","Local food"],["nature","Nature"],["shopping","Shopping"]];
const KIND_INTEREST={Art:"art",History:"art",Food:"food",Nature:"nature",Shopping:"shopping"};
const TRANSPORT={car:"Car",train:"No car / Public transit",any:"Flexible"};
const TRANSPORT_SHORT={car:"Car",train:"No car",any:"Flexible"};

/* ---------------- helpers ---------------- */
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const money=n=>"$"+Math.round(n).toLocaleString("en-US");
const clone=o=>JSON.parse(JSON.stringify(o));
const pd=s=>{const [y,m,d]=s.split("-").map(Number);return new Date(y,m-1,d)};
const iso=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
const addDays=(s,n)=>{const d=pd(s);d.setDate(d.getDate()+n);return iso(d)};
const fmt=(s,o={month:"short",day:"numeric"})=>pd(s).toLocaleDateString("en-US",o);
const range=(a,b)=>`${fmt(a)} – ${fmt(b)}`;
const dayCount=p=>Math.round((pd(p.end)-pd(p.start))/864e5)+1;
const toMin=t=>{const [h,m]=t.split(":").map(Number);return h*60+m};
const toT=m=>`${String(Math.floor(m/60)%24).padStart(2,"0")}:${String(m%60).padStart(2,"0")}`;
const clock=t=>{const m=toMin(t),h=Math.floor(m/60),mm=m%60;return `${(h%12)||12}:${String(mm).padStart(2,"0")} ${h<12?"AM":"PM"}`};
const dur=m=>m>=60?`${Math.floor(m/60)} hr${m%60?` ${m%60} min`:""}`:`${m} min`;
const act=(d,id)=>d.acts.find(a=>a.id===id);
const mode=p=>p.transport==="car"?"car":"train";
const plural=(n,w)=>`${n} ${w}${n===1?"":"s"}`;

function defaultPlan(d,n){
  const t=d.plan.map(day=>day.map(([t,a])=>({t,a})));
  if(n<=2) return [t[0],t[2]];
  const days=[t[0],t[1]];
  for(let i=3;i<n;i++) days.push([]);
  days.push(t[2]); return days;
}
function costFor(d,prefs,days){
  const n=days.length,nights=Math.max(0,n-1),tr=prefs.travelers;
  const transport=d.travel[mode(prefs)].cost;
  const stay=Math.round(d.room*nights*Math.ceil(tr/2)/tr);
  let food=15*n,acts=0;
  days.flat().forEach(it=>{const a=act(d,it.a);if(!a)return;if(a.kind==="Food")food+=a.cost;else acts+=a.cost});
  return {transport,stay,food,acts,total:transport+stay+food+acts};
}
function matchInfo(d,prefs){
  const hits=prefs.interests.filter(i=>d.tags.includes(i));
  const c=costFor(d,prefs,defaultPlan(d,dayCount(prefs)));
  const within=c.total<=prefs.budget;
  const score=hits.length*3+(within?3:0)-d.travel[mode(prefs)].mins/60;
  return {hits,cost:c,within,score};
}

/* ---------------- placeholders ---------------- */
// Gray wireframe image box with an X and a centered label
function ph(label, cls = "") {
  return `<div class="ph ${cls}" role="img" aria-label="${esc(label)}">
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
    <span>${esc(label)}</span></div>`;
}
const interestLabel = id => INTERESTS.find(i => i[0] === id)[1];

/* ---------------- views ---------------- */

// 01 Home
function vHome() {
  return `<div class="page">
  <section class="hero">
    <div class="hero-copy">
      <h1>A long weekend. A trip that fits you.</h1>
      <p>Plan a short getaway around your time, budget, and how you travel.</p>
      <div><button class="btn btn-primary" data-go="plan">Plan Trip</button></div>
      <p class="small muted">No car? Explore trips by train or bus.</p>
    </div>
    ${ph("Destination image", "hero-img")}
  </section>
  <section class="stack">
    <div><h2>Explore weekend ideas</h2><p class="muted">Start with an idea, or enter your preferences for matching trips.</p></div>
    <div class="ideas">${ORDER.map(id => { const d = DESTS[id]; return `
      <article class="card idea">
        ${ph("Image placeholder", "idea-img")}
        <h3>${d.name}</h3>
        <p class="muted">${esc(d.tagline)}</p>
        <button class="text-btn" data-dest="${id}">Explore destination</button>
      </article>`; }).join("")}</div>
  </section></div>`;
}

// 02 Preferences form
function vPlan() {
  const p = S.prefs, e = S.errors;
  return `<div class="page narrow">
  <div><h1>Tell us about your trip</h1><p class="muted">We will use your choices to find suitable destinations.</p></div>
  <form class="panel form" id="plan-form" novalidate>
    <div class="field"><label for="f-from">Starting location</label><input class="input" id="f-from" value="${esc(p.from)}"></div>
    <div class="field"><label for="f-start">Travel dates</label>
      <div class="dates"><input class="input" type="date" id="f-start" value="${p.start}" aria-label="Start date"><span class="muted">–</span><input class="input" type="date" id="f-end" value="${p.end}" aria-label="End date"></div>
      ${e.dates ? `<span class="error">${e.dates}</span>` : `<span class="hint" id="f-days">${plural(dayCount(p), "day")}</span>`}</div>
    <div class="field"><label for="f-budget">Budget per person</label><div class="prefix"><span>Up to $</span><input class="input" type="number" min="100" step="10" id="f-budget" value="${p.budget}"></div>${e.budget ? `<span class="error">${e.budget}</span>` : ""}</div>
    <div class="field"><label for="f-trav">Number of travelers</label><select class="input" id="f-trav">${[1,2,3,4,5,6].map(n => `<option value="${n}" ${n == p.travelers ? "selected" : ""}>${plural(n, "adult")}</option>`).join("")}</select></div>
    <fieldset class="field full"><legend>Interests</legend>
      <div class="boxes">${INTERESTS.map(([v, l]) => `<label class="box"><input type="checkbox" name="interest" value="${v}" ${p.interests.includes(v) ? "checked" : ""}><span>${l}</span></label>`).join("")}</div></fieldset>
    <fieldset class="field full"><legend>Transportation</legend>
      <div class="radio-row">${Object.entries(TRANSPORT).map(([v, l]) => `<label class="check"><input type="radio" name="transport" value="${v}" ${p.transport === v ? "checked" : ""}>${l}</label>`).join("")}</div></fieldset>
    <fieldset class="field full"><legend>Additional needs (optional)</legend>
      <div class="check-row">${[["access", "Step-free access"], ["pet", "Traveling with a pet"]].map(([v, l]) => `<label class="check"><input type="checkbox" name="need" value="${v}" ${p.needs.includes(v) ? "checked" : ""}>${l}</label>`).join("")}</div></fieldset>
    <div class="form-actions"><button type="button" class="btn btn-secondary" data-go="home">&lt; Back</button><button type="submit" class="btn btn-primary btn-wide">Find Trips</button></div>
  </form></div>`;
}

function prefLine(p) {
  return `<p class="meta-line">NYC | ${range(p.start, p.end)} | ${plural(p.travelers, "traveler")} | Up to ${money(p.budget)}/person | ${TRANSPORT_SHORT[p.transport]}</p>`;
}

// 03 Recommendations
function vResults() {
  const p = S.prefs;
  let list = ORDER.map(id => ({ d: DESTS[id], ...matchInfo(DESTS[id], p) }));
  if (S.sort === "match") list.sort((a, b) => b.score - a.score);
  if (S.sort === "cost") list.sort((a, b) => a.cost.total - b.cost.total);
  if (S.sort === "time") list.sort((a, b) => a.d.travel[mode(p)].mins - b.d.travel[mode(p)].mins);
  const n = S.compare.length;
  return `<div class="page">
  <div><h1>Trips that fit your weekend</h1>${prefLine(p)}</div>
  <div class="split">
    <aside class="panel prefs">
      <h3>Your preferences</h3>
      <div class="pref"><strong>Budget / person</strong><span>Up to ${money(p.budget)}</span></div>
      <hr>
      <div class="pref"><strong>Transportation</strong><span>[x] ${TRANSPORT[p.transport]}</span></div>
      <div class="pref"><strong>Interests</strong>${p.interests.length ? p.interests.map(i => `<span>[x] ${interestLabel(i)}</span>`).join("") : `<span>Open to anything</span>`}</div>
      <button class="btn btn-secondary btn-sm" data-go="plan">Edit Preferences</button>
      <div class="pref"><strong>No suitable results?</strong><span class="muted">Try changing dates or your budget.</span></div>
    </aside>
    <section class="stack tight">
      <div class="list-head"><strong>${list.length} matching destinations</strong>
        <label class="sort">Sort: <select id="sort"><option value="match" ${S.sort === "match" ? "selected" : ""}>Best match</option><option value="cost" ${S.sort === "cost" ? "selected" : ""}>Lowest cost</option><option value="time" ${S.sort === "time" ? "selected" : ""}>Shortest travel</option></select></label></div>
      ${list.map(x => { const d = x.d, sel = S.compare.includes(d.id), tv = d.travel[mode(p)]; return `
      <article class="card result">
        ${ph("Photo", "result-img")}
        <div class="result-body">
          <h3>${d.name}</h3>
          <p>${money(x.cost.total)}/person estimated | ${tv.t}${x.within ? "" : ` | <span class="over">Over budget</span>`}</p>
          <p class="muted">Reachable by ${mode(p)} | ${x.hits.length ? x.hits.map(interestLabel).join(", ") : "Weekend activities"}</p>
          <label class="check small"><input type="checkbox" data-cmp="${d.id}" ${sel ? "checked" : ""}>Compare</label>
        </div>
        <button class="btn btn-secondary btn-sm" data-detail="${d.id}">View Details</button>
      </article>`; }).join("")}
      <div class="compare-strip">
        <span>${n ? `${n} selected: ${S.compare.map(id => DESTS[id].name).join(" + ")}${n < 2 ? " (select one more)" : ""}` : "Select two destinations to compare"}</span>
        <button class="btn btn-secondary btn-sm" data-go="compare" ${n < 2 ? "disabled" : ""}>Compare (${n})</button>
      </div>
    </section>
  </div></div>`;
}

// 04 Destination details
function vDest() {
  const d = DESTS[S.destId], p = S.prefs, m = matchInfo(d, p), tv = d.travel[mode(p)], inCmp = S.compare.includes(d.id);
  const things = d.acts.filter(a => a.kind !== "Transit").slice(0, 6);
  return `<div class="page">
  <div><button class="back" data-go="results">&lt; Back to Recommendations</button>
    <h1>${d.name}, New York</h1><p class="muted">${esc(d.blurb)}</p></div>
  <div class="dest-grid">
    <div class="stack">
      ${ph("Main destination photo", "main-img")}
      <div class="thumbs">${ph("Photo")}${ph("Photo")}${ph("Photo")}</div>
      <section class="sec"><h3>Things to do</h3><p class="muted">${things.map(a => esc(a.name)).join(" | ")}</p></section>
      <hr>
      <section class="sec"><h3>Traveler reviews</h3>${d.reviews.map(([t, w]) => `<p class="muted">[Sample review] ${esc(t)} <em>– ${esc(w)}</em></p>`).join("")}</section>
    </div>
    <aside class="panel glance">
      <h3>Your trip at a glance</h3>
      <p class="muted small">${range(p.start, p.end)} / ${plural(p.travelers, "traveler")}</p>
      <div><p class="label">Estimated cost</p><p class="price">${money(m.cost.total)} per person</p><p class="muted small">Travel + stay + activities estimate${m.within ? "" : ` · <span class="over">${money(m.cost.total - p.budget)} over budget</span>`}</p></div>
      <hr>
      <div class="pref"><strong>Getting there</strong><span class="muted">${esc(tv.how)}, ${tv.t.toLowerCase()}</span></div>
      <div class="pref"><strong>Weather</strong><span class="muted">${esc(d.weather)}</span></div>
      <div class="pref"><strong>Accessibility</strong><span class="muted">${esc(d.access)}</span></div>
      ${p.needs.includes("pet") ? `<div class="pref"><strong>Pets</strong><span class="muted">${esc(d.pets)}</span></div>` : ""}
      <button class="btn btn-primary" data-choose="${d.id}">Choose This Trip</button>
      <button class="btn btn-secondary" data-addcmp="${d.id}">${inCmp ? "Remove from Compare" : "Add to Compare"}</button>
    </aside>
  </div></div>`;
}

// 05 Compare
function vCompare() {
  const p = S.prefs, ids = S.compare.slice(0, 3);
  if (ids.length < 2) {
    return `<div class="page"><div><button class="back" data-go="results">&lt; Back to Recommendations</button><h1>Compare destinations</h1></div>
      <div class="panel empty"><p>Select at least two destinations to compare.</p><button class="btn btn-primary" data-go="results">Choose destinations</button></div></div>`;
  }
  const cols = ids.map(id => ({ d: DESTS[id], ...matchInfo(DESTS[id], p) }));
  const row = (label, fn, cls = "") => `<tr class="${cls}"><th scope="row">${label}</th>${cols.map(c => `<td>${fn(c)}</td>`).join("")}</tr>`;
  return `<div class="page">
  <div><button class="back" data-go="results">&lt; Back to Recommendations</button><h1>Compare destinations</h1>${prefLine(p)}</div>
  <div class="table-wrap"><table class="cmp">
    <tr><th></th>${cols.map(c => `<td>${ph("Destination photo", "cmp-img")}<h3>${c.d.name}, ${c.d.state}</h3><p class="muted small">${esc(c.d.tagline)}</p></td>`).join("")}</tr>
    ${row("Estimated cost", c => `<strong>${money(c.cost.total)}</strong> / person<br><span class="muted small">Travel + stay + activities</span>${c.within ? "" : `<br><span class="over small">${money(c.cost.total - p.budget)} over budget</span>`}`)}
    ${row("Travel time", c => `${c.d.travel[mode(p)].t}`)}
    ${row("Transportation", c => `<span class="small">${esc(c.d.travel[mode(p)].how)}</span>`)}
    ${row("Activities", c => c.d.acts.filter(a => a.kind !== "Transit" && a.kind !== "Food").slice(0, 3).map(a => `<div class="small">[x] ${esc(a.name)}</div>`).join(""))}
    ${row("", c => `<div class="row-btns"><button class="btn btn-primary btn-sm grow" data-choose="${c.d.id}">Choose This Trip</button><button class="btn btn-secondary btn-sm" data-rmcmp="${c.d.id}">Remove</button></div>`, "actions")}
  </table></div></div>`;
}

const dayLabel = (t, i) => `Day ${i + 1} · ${fmt(addDays(t.prefs.start, i), { weekday: "short" })}`;
function sortedDay(day) { return [...day].sort((a, b) => toMin(a.t) - toMin(b.t)); }
function dayTabs(t) {
  return `<div class="tabs" role="tablist">${t.days.map((_, i) => `<button class="tab" role="tab" aria-selected="${i === S.day}" data-day="${i}">${dayLabel(t, i)}</button>`).join("")}</div>`;
}

// 06 Itinerary builder
function vItin() {
  const t = S.trip, d = DESTS[t.dest], p = t.prefs, c = costFor(d, p, t.days), day = t.days[S.day] || [];
  const used = new Set(t.days.flat().map(x => x.a));
  const avail = d.acts.filter(a => !used.has(a.id));
  const items = day.map((it, idx) => ({ it, idx })).sort((a, b) => toMin(a.it.t) - toMin(b.it.t));
  const fromTrips = !!t.fromTrips;
  return `<div class="page">
  <div><button class="back" ${fromTrips ? 'data-go="trips"' : `data-dest="${d.id}"`}>&lt; ${fromTrips ? "Back to My Trips" : "Back to destination"}</button>
    <h1>Build your ${d.name} itinerary</h1>
    <p class="meta-line">${range(p.start, p.end)} | ${plural(t.days.length, "day")} | ${plural(p.travelers, "traveler")}${t.status === "saved" ? (t.dirty ? " | Unsaved changes" : " | Saved") : t.status === "draft" ? " | Draft" : ""}</p></div>
  <div class="itin-grid">
    <div class="stack tight">
      ${dayTabs(t)}
      <div class="card sched">
        ${items.length ? items.map(({ it, idx }) => { const a = act(d, it.a); return `
        <div class="slot">
          <input type="time" class="time" value="${it.t}" data-time="${idx}" aria-label="Start time for ${esc(a.name)}">
          <div class="slot-body"><strong>${esc(a.name)}</strong><span class="muted small">${esc(a.note)} | ${dur(a.mins)} | ${a.cost ? money(a.cost) : "Free"}</span></div>
          <button class="btn btn-secondary btn-sm" data-remove="${idx}">Remove activity</button>
        </div>`; }).join("") : `<p class="empty muted">No activities planned for this day yet.</p>`}
      </div>
      ${S.addOpen ? `<div class="adder">
          <div class="adder-head"><strong>Add an activity to ${dayLabel(t, S.day)}</strong><button class="btn btn-secondary btn-sm" data-toggle-add>Close</button></div>
          ${avail.length ? avail.map(a => `<div class="adder-item"><div><strong>${esc(a.name)}</strong><div class="muted small">${a.kind} | ${dur(a.mins)} | ${a.cost ? money(a.cost) : "Free"}${p.interests.includes(KIND_INTEREST[a.kind]) ? " | Matches your interests" : ""}</div></div><button class="btn btn-primary btn-sm" data-add="${a.id}">Add</button></div>`).join("") : `<p class="muted small">All activities are already in your plan.</p>`}
        </div>` : `<button class="add-box" data-toggle-add>+ Add Activity</button>`}
    </div>
    <aside class="panel summary">
      <h3>Trip summary</h3>
      <p class="muted small">${d.name}, ${d.state} | ${range(p.start, p.end)} | ${plural(p.travelers, "traveler")}</p>
      <hr>
      <div class="rows">
        <div><span>Transportation</span><span>${money(c.transport)}</span></div>
        <div><span>Stay (${plural(t.days.length - 1, "night")})</span><span>${money(c.stay)}</span></div>
        <div><span>Food</span><span>${money(c.food)}</span></div>
        <div><span>Activities</span><span>${money(c.acts)}</span></div>
      </div>
      <hr>
      <div><p class="label">Estimated cost</p><p class="price">${money(c.total)} per person</p>
        <p class="small ${c.total > p.budget ? "over" : "muted"}">${c.total > p.budget ? `${money(c.total - p.budget)} over your ${money(p.budget)} budget` : `Within your ${money(p.budget)} budget`}</p></div>
      <hr>
      <div><p class="label">Activities planned</p><p class="muted small">${t.days.map((dd, i) => `Day ${i + 1}: ${dd.length}`).join(" | ")}</p></div>
      <button class="btn btn-secondary" data-go="route">View Route</button>
      <button class="btn btn-primary" data-save>Save Trip</button>
    </aside>
  </div></div>`;
}

function hav(a, b) { const R = 6371, r = x => x * Math.PI / 180, dl = r(b.lat - a.lat), dn = r(b.lng - a.lng); const h = Math.sin(dl / 2) ** 2 + Math.cos(r(a.lat)) * Math.cos(r(b.lat)) * Math.sin(dn / 2) ** 2; return 2 * R * Math.asin(Math.sqrt(h)); }
function leg(a, b, p) {
  const km = hav(a, b) * 1.25;
  if (km < 0.05) return { km, mins: 0, how: "Same location" };
  if (km < 1.6) return { km, mins: Math.max(2, Math.round(km / 4.8 * 60)), how: "Walk" };
  return { km, mins: Math.round(km / 35 * 60) + 5, how: p.transport === "car" ? "Drive" : "Taxi" };
}

// Map: gray placeholder box with an X, stops plotted from real coordinates
function routeMap(stops) {
  const W = 640, H = 460, pad = 60, z = S.zoom;
  const lat0 = stops.reduce((s, x) => s + x.lat, 0) / stops.length, k = Math.cos(lat0 * Math.PI / 180);
  const xs = stops.map(s => s.lng * k), ys = stops.map(s => s.lat);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
  const sc = Math.min((W - 2 * pad) / Math.max(maxX - minX, .006), (H - 2 * pad) / Math.max(maxY - minY, .006)) * z;
  const cx = (minX + maxX) / 2, cy = (minY + maxY) / 2, seen = {};
  const pts = stops.map(s => { const key = s.lat + "," + s.lng, n = seen[key] = (seen[key] || 0) + 1; return { x: W / 2 + (s.lng * k - cx) * sc + (n - 1) * 18, y: H / 2 - (s.lat - cy) * sc - (n - 1) * 8 }; });
  const path = pts.map((p, i) => (i ? "L" : "M") + p.x.toFixed(1) + " " + p.y.toFixed(1)).join(" ");
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Route map with ${stops.length} stops">
    <rect width="${W}" height="${H}" fill="#f2f2f2"/>
    <line x1="0" y1="0" x2="${W}" y2="${H}" stroke="#dcdcdc"/><line x1="${W}" y1="0" x2="0" y2="${H}" stroke="#dcdcdc"/>
    <path d="${path}" fill="none" stroke="#555" stroke-width="1.5"/>
    ${pts.map((p, i) => `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="11" fill="#222"/><text x="${p.x.toFixed(1)}" y="${(p.y + 4).toFixed(1)}" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" font-family="Inter, Arial, sans-serif">${i + 1}</text>`).join("")}
  </svg>`;
}

// 07 Route
function vRoute() {
  const t = S.trip, d = DESTS[t.dest], p = t.prefs, day = sortedDay(t.days[S.day] || []);
  const stops = day.map(it => ({ ...act(d, it.a), t: it.t }));
  let travel = 0;
  const legs = stops.slice(1).map((s, i) => { const l = leg(stops[i], s, p); travel += l.mins; return l; });
  return `<div class="page">
  <div class="head-row">
    <div><h1>Route for Day ${S.day + 1}</h1><p class="meta-line">${d.name}, ${d.state} | ${fmt(addDays(p.start, S.day), { weekday: "short", month: "short", day: "numeric" })} | ${plural(stops.length, "stop")} | ${travel} min getting around</p></div>
    <div class="tabs" role="tablist">${t.days.map((_, i) => `<button class="tab" role="tab" aria-selected="${i === S.day}" data-day="${i}">Day ${i + 1}</button>`).join("")}</div>
  </div>
  <div class="route-grid">
    <div class="stack tight">
      <div class="card stops">${stops.length ? stops.map((s, i) => `
        ${i ? `<div class="leg">${legs[i - 1].how}${legs[i - 1].mins ? ` · ${legs[i - 1].mins} min · ${legs[i - 1].km.toFixed(1)} km` : ""}</div>` : ""}
        <div class="stop"><span class="num">${i + 1}</span><div><strong>${esc(s.name)}</strong><div class="muted small">${clock(s.t)} · ${dur(s.mins)}</div></div></div>`).join("")
        : `<p class="empty muted">No stops planned for this day.</p>`}</div>
      <div class="row-btns"><button class="btn btn-secondary grow" data-go="itinerary">&lt; Back to Itinerary</button><button class="btn btn-primary grow" data-save>Save Trip</button></div>
    </div>
    <div class="map">
      ${stops.length ? routeMap(stops) : ph("Map placeholder", "map-empty")}
      <span class="map-tag">Map · ${d.name}</span>
      ${stops.length ? `<div class="map-legend"><strong>Next: ${esc(stops[Math.min(1, stops.length - 1)].name)}</strong><span class="muted">${legs[0] ? `${legs[0].how} · ${legs[0].mins} min` : "Single stop"}</span></div>` : ""}
      <div class="zoom"><button data-zoom="1" aria-label="Zoom in">+</button><button data-zoom="-1" aria-label="Zoom out">−</button></div>
    </div>
  </div></div>`;
}

function tripBucket(t) {
  if (t.status === "draft") return "drafts";
  return t.prefs.end < iso(new Date()) ? "past" : "upcoming";
}

// 08 My Trips
function vTrips() {
  const tabs = [["upcoming", "Upcoming"], ["drafts", "Drafts"], ["past", "Past"]];
  const list = S.trips.filter(t => tripBucket(t) === S.tripsTab);
  const count = k => S.trips.filter(t => tripBucket(t) === k).length;
  return `<div class="page">
  <div class="head-row"><div><h1>My Trips</h1><p class="muted small">${plural(S.trips.length, "saved trip")}</p></div><button class="btn btn-primary" data-newtrip>+ Plan a New Trip</button></div>
  <div class="trip-tabs" role="tablist">${tabs.map(([k, l]) => `<button role="tab" aria-selected="${S.tripsTab === k}" data-ttab="${k}">${l} (${count(k)})</button>`).join("")}</div>
  ${list.length ? `<div class="trip-cards">${list.map(t => { const d = DESTS[t.dest], c = costFor(d, t.prefs, t.days), n = t.days.flat().length; return `
    <article class="card trip ${t.status === "draft" ? "draft" : ""}">
      ${ph("Image placeholder", "trip-img")}
      <div class="trip-top"><h3>${d.name}, ${d.state}</h3><span class="badge">${t.status === "draft" ? "Draft" : tripBucket(t) === "past" ? "Past" : "Upcoming"}</span></div>
      <p class="small">${range(t.prefs.start, t.prefs.end)} | ${plural(t.prefs.travelers, "traveler")}</p>
      <p class="small">Estimated budget: <strong>${money(c.total)}/person</strong></p>
      <p class="small muted">${n} ${n === 1 ? "activity" : "activities"} planned${t.sample ? " · Sample trip" : ""}</p>
      <div class="row-btns"><button class="btn btn-primary btn-sm grow" data-open="${t.id}">Open Trip</button><button class="btn btn-secondary btn-sm grow" data-open="${t.id}">Edit Trip</button></div>
    </article>`; }).join("")}</div>`
  : `<div class="panel empty"><p>${S.tripsTab === "drafts" ? "No drafts. Trips you edit without saving appear here." : S.tripsTab === "past" ? "No past trips yet." : "No upcoming trips."}</p><button class="btn btn-primary" data-newtrip>+ Plan a New Trip</button></div>`}
  </div>`;
}

function render() {
  const v = { home: vHome, plan: vPlan, results: vResults, destination: vDest, compare: vCompare, itinerary: vItin, route: vRoute, trips: vTrips }[S.view];
  $("#app").innerHTML = v();
  const navKey = { home: "home", destination: "home", trips: "trips" }[S.view] || "plan";
  document.querySelectorAll("[data-nav]").forEach(b => { if (b.dataset.nav === navKey) b.setAttribute("aria-current", "page"); else b.removeAttribute("aria-current"); });
}

/* ---------------- state ---------------- */
const STORE="tp-trips-v2";
function seedTrips(){
  const mk=(id,dest,start,end,status)=>{const d=DESTS[dest];const prefs={from:"New York City",start,end,budget:500,travelers:2,interests:["art","nature"],transport:"train",needs:[]};return {id,dest,prefs,days:defaultPlan(d,dayCount(prefs)),status,sample:true,savedAt:Date.now()}};
  return [mk("sample-beacon","beacon","2026-11-13","2026-11-15","saved"),mk("sample-cs","coldspring","2026-09-18","2026-09-20","saved"),mk("sample-hudson","hudson","2026-12-04","2026-12-06","draft")];
}
function loadTrips(){try{const v=JSON.parse(localStorage.getItem(STORE));if(Array.isArray(v))return v}catch(e){}return seedTrips()}
function persist(){try{localStorage.setItem(STORE,JSON.stringify(S.trips))}catch(e){}}

const S={
  view:"home",
  prefs:{from:"New York City",start:"2026-10-30",end:"2026-11-01",budget:500,travelers:2,interests:["art","food"],transport:"train",needs:[]},
  sort:"match",zoom:1,compare:[],destId:"hudson",trip:null,day:0,addOpen:false,
  trips:loadTrips(),tripsTab:"upcoming",errors:{}
};
const VIEWS=["home","plan","results","destination","compare","itinerary","route","trips"];

function go(view,opts={}){
  Object.assign(S,opts);
  if((view==="itinerary"||view==="route")&&!S.trip) startTrip(S.destId,false);
  S.view=view;S.addOpen=false;S.zoom=1;
  try{history.replaceState(null,"","#"+view)}catch(e){}
  render();window.scrollTo(0,0);
}
function startTrip(destId,nav=true){
  const d=DESTS[destId];
  S.trip={id:"t"+Date.now(),dest:destId,prefs:clone(S.prefs),days:defaultPlan(d,dayCount(S.prefs)),status:"new"};
  S.day=0; if(nav) go("itinerary");
}
function upsert(rec){const i=S.trips.findIndex(t=>t.id===rec.id);if(i>=0)S.trips[i]=rec;else S.trips.unshift(rec);persist()}
function touch(){
  const t=S.trip;
  if(t.status==="saved"){t.dirty=true}
  else{t.status="draft";upsert(clone(t))}
}
function saveTrip(){
  const t=S.trip;t.status="saved";t.dirty=false;t.savedAt=Date.now();delete t.sample;
  upsert(clone(t));render();
  toast("Trip saved!",{label:"View My Trips",go:"trips"});
}

let toastTimer;
function toast(msg,action){
  clearTimeout(toastTimer);
  const slot=$("#toast-slot");
  slot.innerHTML=`<div class="toast"><span>${esc(msg)}</span>${action?`<button class="btn btn-sm" data-go="${action.go}" data-toast-close>${esc(action.label)}</button>`:""}<button class="x" data-toast-close aria-label="Dismiss">×</button></div>`;
  toastTimer=setTimeout(()=>slot.innerHTML="",7000);
}


/* ---------------- events ---------------- */
document.addEventListener("click",e=>{
  const el=e.target.closest("button,[data-cmp]");if(!el)return;
  const ds=el.dataset;
  if("toastClose" in ds) $("#toast-slot").innerHTML="";
  if(ds.go){go(ds.go);return}
  if(ds.dest){go("destination",{destId:ds.dest});return}
  if(ds.detail){go("destination",{destId:ds.detail});return}
  if(ds.choose){startTrip(ds.choose);return}
  if(ds.addcmp){
    const id=ds.addcmp;
    if(S.compare.includes(id)){S.compare=S.compare.filter(x=>x!==id);render();toast(`${DESTS[id].name} removed from compare.`);return}
    if(S.compare.length>=3){toast("You can compare up to three destinations.",{label:"Open Compare",go:"compare"});return}
    S.compare.push(id);
    if(S.compare.length>=2){go("compare");return}
    render();toast(`${DESTS[id].name} added. Pick one more destination to compare.`,{label:"Back to recommendations",go:"results"});return;
  }
  if(ds.rmcmp){S.compare=S.compare.filter(x=>x!==ds.rmcmp);render();return}
  if("clearCmp" in ds){S.compare=[];render();return}
  if(ds.zoom){S.zoom=Math.min(3,Math.max(.6,S.zoom*(ds.zoom>0?1.3:1/1.3)));render();return}
  if(ds.day!==undefined){S.day=+ds.day;S.addOpen=false;S.zoom=1;render();return}
  if("toggleAdd" in ds){S.addOpen=!S.addOpen;render();return}
  if(ds.add){
    const d=DESTS[S.trip.dest],a=act(d,ds.add),day=S.trip.days[S.day];
    let t="10:00";
    if(day.length){const last=sortedDay(day).filter(x=>act(d,x.a).kind!=="Transit"||day.length===1).pop()||sortedDay(day).pop();const end=toMin(last.t)+act(d,last.a).mins+30;t=toT(Math.min(end,22*60))}
    day.push({t,a:a.id});touch();render();toast(`${a.name} added at ${clock(t)}. Adjust the time if needed.`);return;
  }
  if(ds.remove!==undefined){S.trip.days[S.day].splice(+ds.remove,1);touch();render();return}
  if("save" in ds){saveTrip();return}
  if(ds.ttab){S.tripsTab=ds.ttab;render();return}
  if(ds.open){const r=S.trips.find(t=>t.id===ds.open);if(r){S.trip=clone(r);S.trip.fromTrips=true;S.day=0;S.prefs=clone(r.prefs);go("itinerary")}return}
  if("newtrip" in ds){S.trip=null;S.compare=[];go("plan");return}
});
document.addEventListener("change",e=>{
  const el=e.target;
  if(el.dataset.cmp){
    const id=el.dataset.cmp;
    if(el.checked){if(S.compare.length>=3){el.checked=false;toast("You can compare up to three destinations.");return}S.compare.push(id)}
    else S.compare=S.compare.filter(x=>x!==id);
    render();return;
  }
  if(el.id==="sort"){S.sort=el.value;render();return}
  if(el.dataset.time!==undefined&&el.value){S.trip.days[S.day][+el.dataset.time].t=el.value;touch();render();return}
  if(el.id==="f-start"||el.id==="f-end"){
    const s=$("#f-start").value,en=$("#f-end").value,h=$("#f-days");
    if(h&&s&&en){const n=Math.round((pd(en)-pd(s))/864e5)+1;h.textContent=n>0?`${plural(n,"day")}, ${plural(n-1,"night")}`:"End date is before the start date"}
  }
});
document.addEventListener("submit",e=>{
  if(e.target.id!=="plan-form")return;
  e.preventDefault();
  const f=e.target,start=$("#f-start").value,end=$("#f-end").value,budget=+$("#f-budget").value;
  const errors={};
  if(!start||!end) errors.dates="Choose a start and end date.";
  else{const n=Math.round((pd(end)-pd(start))/864e5)+1;if(n<2||n>4) errors.dates="Weekend trips need to be 2 to 4 days. Adjust your dates.";}
  if(!budget||budget<100) errors.budget="Enter a budget of at least $100 per person.";
  S.prefs={from:$("#f-from").value.trim()||"New York City",start:start||S.prefs.start,end:end||S.prefs.end,budget:budget||S.prefs.budget,travelers:+$("#f-trav").value,
    interests:[...f.querySelectorAll("input[name=interest]:checked")].map(i=>i.value),
    transport:(f.querySelector("input[name=transport]:checked")||{}).value||"train",
    needs:[...f.querySelectorAll("input[name=need]:checked")].map(i=>i.value)};
  S.errors=errors;
  if(Object.keys(errors).length){render();return}
  S.trip=null;go("results");
});

/* ---------------- boot ---------------- */
(function boot(){
  const h=(location.hash||"").slice(1);
  if(VIEWS.includes(h)){ if(h==="compare"&&S.compare.length<2) S.compare=["hudson","beacon"]; go(h); }
  else render();
})();
