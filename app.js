const SUBURBS = [
  {
    name: "Indooroopilly",
    id: "bubble-indooroopilly",
    stops: 88,
    classifiedStops: 84,
    score: 5.0,
    scorePct: 71.4,
    qualityMix: { quality: 30, basic: 54, unknown: 4 },
    qualityPct: { quality: 34.1, basic: 61.4, unknown: 4.5 },
    conditions: {
      boardingPoint: { Easy: 54, Medium: 11, Hard: 19 },
      roadGradient: { Easy: 55, Medium: 11, Hard: 18 },
      crossFall: { Easy: 49, Medium: 24, Hard: 11 },
      tactile: { Yes: 58, No: 26 }
    },
    componentPct: { boarding: 70.8, slope: 72.0, tilt: 72.6, tactile: 69.0 }
  },
  {
    name: "Taringa",
    id: "bubble-taringa",
    stops: 73,
    classifiedStops: 73,
    score: 4.88,
    scorePct: 69.7,
    qualityMix: { quality: 30, basic: 43, unknown: 0 },
    qualityPct: { quality: 41.1, basic: 58.9, unknown: 0.0 },
    conditions: {
      boardingPoint: { Easy: 39, Medium: 12, Hard: 22 },
      roadGradient: { Easy: 44, Medium: 15, Hard: 14 },
      crossFall: { Easy: 47, Medium: 16, Hard: 10 },
      tactile: { Yes: 53, No: 20 }
    },
    componentPct: { boarding: 61.6, slope: 70.5, tilt: 75.3, tactile: 72.6 }
  },
  {
    name: "Toowong",
    id: "bubble-toowong",
    stops: 69,
    classifiedStops: 69,
    score: 4.7,
    scorePct: 67.1,
    qualityMix: { quality: 33, basic: 36, unknown: 0 },
    qualityPct: { quality: 47.8, basic: 52.2, unknown: 0.0 },
    conditions: {
      boardingPoint: { Easy: 38, Medium: 9, Hard: 22 },
      roadGradient: { Easy: 40, Medium: 13, Hard: 16 },
      crossFall: { Easy: 43, Medium: 16, Hard: 10 },
      tactile: { Yes: 44, No: 25 }
    },
    componentPct: { boarding: 61.6, slope: 67.4, tilt: 73.9, tactile: 63.8 }
  },
  {
    name: "St Lucia",
    id: "bubble-st-lucia",
    stops: 48,
    classifiedStops: 38,
    score: 5.21,
    scorePct: 74.4,
    qualityMix: { quality: 21, basic: 17, unknown: 10 },
    qualityPct: { quality: 43.8, basic: 35.4, unknown: 20.8 },
    conditions: {
      boardingPoint: { Easy: 23, Medium: 6, Hard: 9 },
      roadGradient: { Easy: 23, Medium: 9, Hard: 6 },
      crossFall: { Easy: 26, Medium: 9, Hard: 3 },
      tactile: { Yes: 30, No: 8 }
    },
    componentPct: { boarding: 68.4, slope: 72.4, tilt: 80.3, tactile: 78.9 }
  },
  {
    name: "West End",
    id: "bubble-west-end",
    stops: 57,
    classifiedStops: 57,
    score: 5.33,
    scorePct: 76.2,
    qualityMix: { quality: 20, basic: 37, unknown: 0 },
    qualityPct: { quality: 35.1, basic: 64.9, unknown: 0.0 },
    conditions: {
      boardingPoint: { Easy: 44, Medium: 6, Hard: 7 },
      roadGradient: { Easy: 33, Medium: 14, Hard: 10 },
      crossFall: { Easy: 32, Medium: 20, Hard: 5 },
      tactile: { Yes: 46, No: 11 }
    },
    componentPct: { boarding: 82.5, slope: 70.2, tilt: 73.7, tactile: 80.7 }
  },
  {
    name: "South Brisbane",
    id: "bubble-south-brisbane",
    stops: 42,
    classifiedStops: 36,
    score: 4.47,
    scorePct: 63.9,
    qualityMix: { quality: 11, basic: 25, unknown: 6 },
    qualityPct: { quality: 26.2, basic: 59.5, unknown: 14.3 },
    conditions: {
      boardingPoint: { Easy: 25, Medium: 3, Hard: 8 },
      roadGradient: { Easy: 17, Medium: 7, Hard: 12 },
      crossFall: { Easy: 13, Medium: 14, Hard: 9 },
      tactile: { Yes: 27, No: 9 }
    },
    componentPct: { boarding: 73.6, slope: 56.9, tilt: 55.6, tactile: 75.0 }
  },
  {
    name: "Highgate Hill",
    id: "bubble-highgate-hill",
    stops: 21,
    classifiedStops: 21,
    score: 4.62,
    scorePct: 66.0,
    qualityMix: { quality: 7, basic: 14, unknown: 0 },
    qualityPct: { quality: 33.3, basic: 66.7, unknown: 0.0 },
    conditions: {
      boardingPoint: { Easy: 11, Medium: 6, Hard: 4 },
      roadGradient: { Easy: 11, Medium: 3, Hard: 7 },
      crossFall: { Easy: 11, Medium: 6, Hard: 4 },
      tactile: { Yes: 16, No: 5 }
    },
    componentPct: { boarding: 66.7, slope: 59.5, tilt: 66.7, tactile: 76.2 }
  },
  {
    name: "Dutton Park",
    id: "bubble-dutton-park",
    stops: 18,
    classifiedStops: 16,
    score: 5.56,
    scorePct: 79.5,
    qualityMix: { quality: 16, basic: 0, unknown: 2 },
    qualityPct: { quality: 88.9, basic: 0.0, unknown: 11.1 },
    conditions: {
      boardingPoint: { Easy: 13, Medium: 3, Hard: 0 },
      roadGradient: { Easy: 8, Medium: 6, Hard: 2 },
      crossFall: { Easy: 9, Medium: 4, Hard: 3 },
      tactile: { Yes: 16, No: 0 }
    },
    componentPct: { boarding: 90.6, slope: 68.8, tilt: 68.8, tactile: 100.0 }
  },
  {
    name: "Yeronga",
    id: "bubble-yeronga",
    stops: 58,
    classifiedStops: 58,
    score: 4.97,
    scorePct: 70.9,
    qualityMix: { quality: 29, basic: 29, unknown: 0 },
    qualityPct: { quality: 50.0, basic: 50.0, unknown: 0.0 },
    conditions: {
      boardingPoint: { Easy: 41, Medium: 3, Hard: 14 },
      roadGradient: { Easy: 30, Medium: 14, Hard: 14 },
      crossFall: { Easy: 33, Medium: 18, Hard: 7 },
      tactile: { Yes: 45, No: 13 }
    },
    componentPct: { boarding: 73.3, slope: 63.8, tilt: 72.4, tactile: 77.6 }
  },
  {
    name: "Fairfield",
    id: "bubble-fairfield",
    stops: 28,
    classifiedStops: 28,
    score: 5.93,
    scorePct: 84.7,
    qualityMix: { quality: 18, basic: 10, unknown: 0 },
    qualityPct: { quality: 64.3, basic: 35.7, unknown: 0.0 },
    conditions: {
      boardingPoint: { Easy: 23, Medium: 4, Hard: 1 },
      roadGradient: { Easy: 21, Medium: 5, Hard: 2 },
      crossFall: { Easy: 15, Medium: 12, Hard: 1 },
      tactile: { Yes: 27, No: 1 }
    },
    componentPct: { boarding: 89.3, slope: 83.9, tilt: 75.0, tactile: 96.4 },
    note: {
      title: "Small area, strong access",
      body: "Fairfield is the 3rd-smallest suburb, but has the highest average accessibility score: 84.7%."
    }
  },
  {
    name: "Woolloongabba",
    id: "bubble-woolloongabba",
    stops: 42,
    classifiedStops: 36,
    score: 5.67,
    scorePct: 81.0,
    qualityMix: { quality: 26, basic: 10, unknown: 6 },
    qualityPct: { quality: 61.9, basic: 23.8, unknown: 14.3 },
    conditions: {
      boardingPoint: { Easy: 29, Medium: 2, Hard: 5 },
      roadGradient: { Easy: 28, Medium: 6, Hard: 2 },
      crossFall: { Easy: 19, Medium: 14, Hard: 3 },
      tactile: { Yes: 30, No: 6 }
    },
    componentPct: { boarding: 83.3, slope: 86.1, tilt: 72.2, tactile: 83.3 }
  }
];

const BUS_STOP_TYPES_BY_SUBURB = {
  Indooroopilly: { 1: 3, 2: 27, 3: 23, 4: 24, 5: 7, unknown: 4 },
  Taringa: { 1: 2, 2: 28, 3: 26, 4: 13, 5: 4, unknown: 0 },
  Toowong: { 1: 1, 2: 32, 3: 16, 4: 18, 5: 2, unknown: 0 },
  "St Lucia": { 1: 0, 2: 21, 3: 8, 4: 9, 5: 0, unknown: 10 },
  "West End": { 1: 1, 2: 19, 3: 28, 4: 9, 5: 0, unknown: 0 },
  "South Brisbane": { 1: 1, 2: 10, 3: 16, 4: 8, 5: 1, unknown: 6 },
  "Highgate Hill": { 1: 0, 2: 7, 3: 12, 4: 1, 5: 1, unknown: 0 },
  "Dutton Park": { 1: 2, 2: 14, 3: 0, 4: 0, 5: 0, unknown: 2 },
  Yeronga: { 1: 0, 2: 29, 3: 20, 4: 8, 5: 1, unknown: 0 },
  Fairfield: { 1: 0, 2: 18, 3: 6, 4: 4, 5: 0, unknown: 0 },
  Woolloongabba: { 1: 2, 2: 24, 3: 7, 4: 3, 5: 0, unknown: 6 }
};

SUBURBS.forEach(suburb => {
  suburb.busStopType = BUS_STOP_TYPES_BY_SUBURB[suburb.name];
});

const rankedSuburbs = [...SUBURBS].sort((a, b) => b.scorePct - a.scorePct || a.name.localeCompare(b.name));
rankedSuburbs.forEach((suburb, index) => {
  suburb.rank = index + 1;
});

const SVG_NS = "http://www.w3.org/2000/svg";
const TAU = Math.PI * 2;
const QUALITY = [
  { key: "quality", label: "Quality", className: "quality-fill", color: "#f8ca00" },
  { key: "basic", label: "Basic", className: "basic-fill", color: "#fdeb98" },
  { key: "unknown", label: "Unknown", className: "unknown-fill", color: "#e8e1d1" }
];
const TYPE_GROUPS = {
  quality: [
    { key: "1", label: "Multi-Shelter Hub", detail: "Type 1", color: "#eea33a" },
    { key: "2", label: "Sheltered Stop", detail: "Type 2", color: "#f5c814" }
  ],
  basic: [
    { key: "3", label: "Seated Stop", detail: "Type 3", color: "#f8dc5c" },
    { key: "4", label: "Sign & Paved Stop", detail: "Type 4", color: "#fae896" },
    { key: "5", label: "Standing Sign Only", detail: "Type 5", color: "#fcf0b8" }
  ],
  unknown: [
    { key: "unknown", label: "Unknown / Unclassified", detail: "Metadata not detailed enough", color: "#e2dac9" }
  ]
};
const CONDITION_SPECS = [
  {
    key: "boardingPoint",
    title: "Boarding Space",
    parts: [
      { key: "Easy", label: "Easy", className: "easy" },
      { key: "Medium", label: "Medium", className: "medium" },
      { key: "Hard", label: "Hard", className: "hard" }
    ],
    headline: data => `${data.Hard} hard`
  },
  {
    key: "roadGradient",
    title: "Road Slope",
    parts: [
      { key: "Easy", label: "Easy", className: "easy" },
      { key: "Medium", label: "Medium", className: "medium" },
      { key: "Hard", label: "Hard", className: "hard" }
    ],
    headline: data => `${data.Hard} hard`
  },
  {
    key: "crossFall",
    title: "Sideways Tilt",
    parts: [
      { key: "Easy", label: "Easy", className: "easy" },
      { key: "Medium", label: "Medium", className: "medium" },
      { key: "Hard", label: "Hard", className: "hard" }
    ],
    headline: data => `${data.Hard} hard`
  },
  {
    key: "tactile",
    title: "Tactile Paving",
    parts: [
      { key: "Yes", label: "Yes", className: "yes" },
      { key: "No", label: "No", className: "no" }
    ],
    headline: data => `${data.No} without`
  }
];

const COMPONENTS = [
  { key: "boarding", label: "Boarding Space" },
  { key: "slope", label: "Road Slope" },
  { key: "tilt", label: "Sideways Tilt" },
  { key: "tactile", label: "Tactile Paving" }
];

const state = {
  slots: { A: null, B: null },
  lastAssigned: null,
  hovered: null,
  activeBand: null,
  sortMode: null,
  sortOffsets: new Map(),
  svg: null,
  highlightGroup: null,
  selectionGroup: null,
  activeBubble: null
};

const SORT_DIMENSIONS = [
  {
    key: "score",
    label: "Accessibility Score",
    hint: "Higher score = more accessible bus stops",
    order: "desc",
    value: s => s.scorePct
  },
  {
    key: "quality",
    label: "% of Quality Bus Stops",
    hint: "Higher share of sheltered & multi-shelter stops",
    order: "desc",
    value: s => s.qualityPct.quality
  }
];

const BAND_DEFS = [
  { key: "higher", className: "st81", test: s => s.scorePct >= 80 },
  { key: "moderate", className: "st80", test: s => s.scorePct >= 70 && s.scorePct < 80 },
  { key: "lower", className: "st75", test: s => s.scorePct < 70 }
];

const el = {
  svgMount: document.getElementById("svgMount"),
  loading: document.getElementById("loading"),
  tooltip: document.getElementById("tooltip"),
  clearAll: document.getElementById("clearAll"),
  scoreInfoPopover: document.getElementById("scoreInfoPopover"),
  filterBanner: document.getElementById("filterBanner"),
  filterBannerBand: document.getElementById("filterBannerBand"),
  filterBannerClear: document.getElementById("filterBannerClear"),
  sortBanner: document.getElementById("sortBanner"),
  sortBannerDim: document.getElementById("sortBannerDim"),
  sortBannerHint: document.getElementById("sortBannerHint"),
  sortClose: document.getElementById("sortClose"),
  sortButtons: document.querySelectorAll(".sort-btn"),
  preview: {
    root: document.getElementById("hoverPreview"),
    name: document.getElementById("previewName"),
    meta: document.getElementById("previewMeta"),
    mix: document.getElementById("previewMix")
  },
  strip: {
    root: document.getElementById("compareStrip"),
    text: document.getElementById("compareStripText"),
    bar: document.getElementById("compareStripBar")
  }
};

const panels = {
  A: buildPanelRefs(document.getElementById("panelA")),
  B: buildPanelRefs(document.getElementById("panelB"))
};

function buildPanelRefs(root) {
  return {
    root,
    slot: root.dataset.slot,
    title: root.querySelector('[data-role="title"]'),
    summary: root.querySelector('[data-role="summary"]'),
    winnerBadge: root.querySelector('[data-role="winner"]'),
    unpinButton: root.querySelector('[data-action="unpin"]'),
    note: root.querySelector('[data-role="note"]'),
    noteTitle: root.querySelector('[data-role="noteTitle"]'),
    noteBody: root.querySelector('[data-role="noteBody"]'),
    rankValue: root.querySelector('[data-metric="rank"] [data-role="value"]'),
    scoreValue: root.querySelector('[data-metric="score"] [data-role="value"]'),
    stopsValue: root.querySelector('[data-metric="stops"] [data-role="value"]'),
    qualityBars: root.querySelector('[data-role="qualityBars"]'),
    componentGrid: root.querySelector('[data-role="componentGrid"]'),
    conditionBars: root.querySelector('[data-role="conditionBars"]')
  };
}

init();

async function init() {
  renderSlots();
  renderCompareStrip();
  clearPreview();
  setupInfoPopover();
  setupSortControl();
  el.clearAll.addEventListener("click", clearAllPins);
  panels.A.unpinButton.addEventListener("click", () => unpinSlot("A"));
  panels.B.unpinButton.addEventListener("click", () => unpinSlot("B"));

  try {
    const response = await fetch("Poster.svg");
    if (!response.ok) throw new Error(`Poster.svg returned ${response.status}`);
    const text = await response.text();
    el.svgMount.innerHTML = text.replace(/<\?xml[^>]*>\s*/i, "");
    state.svg = el.svgMount.querySelector("svg");
    if (!state.svg) throw new Error("No SVG element found in Poster.svg");

    state.svg.classList.add("poster-svg");
    state.svg.setAttribute("role", "img");
    addHitTargets(state.svg);
    setupBandLegends();
    markBubbleWrappers();
    el.loading.classList.add("is-hidden");
  } catch (error) {
    el.loading.textContent = "Could not load Poster.svg. Run this folder from a local web server.";
    console.error(error);
  }
}

function addHitTargets(svg) {
  const layer = document.createElementNS(SVG_NS, "g");
  layer.setAttribute("id", "interactive-hit-layer");
  layer.setAttribute("aria-label", "Interactive suburb circle arcs");

  state.highlightGroup = document.createElementNS(SVG_NS, "g");
  state.highlightGroup.setAttribute("class", "active-arc-highlight");
  state.highlightGroup.setAttribute("pointer-events", "none");
  layer.appendChild(state.highlightGroup);

  state.selectionGroup = document.createElementNS(SVG_NS, "g");
  state.selectionGroup.setAttribute("class", "selected-suburb-highlight");
  state.selectionGroup.setAttribute("pointer-events", "none");
  layer.appendChild(state.selectionGroup);

  SUBURBS.forEach(suburb => {
    const bubble = svg.querySelector(`#${suburb.id}`);
    if (!bubble) return;

    const geometry = getBubbleGeometry(bubble);
    if (!geometry) return;

    layer.appendChild(createCenterTarget(suburb, geometry));
    getQualitySegments(suburb, geometry).forEach(segment => {
      if (segment.count > 0) layer.appendChild(createSegmentTarget(suburb, segment));
    });
  });

  svg.appendChild(layer);
}

function getBubbleGeometry(group) {
  const circles = Array.from(group.querySelectorAll("circle"));
  if (!circles.length) return null;

  return circles.reduce(
    (largest, circle) => {
      const radius = Number(circle.getAttribute("r"));
      if (!Number.isFinite(radius) || radius <= largest.r) return largest;
      return {
        cx: Number(circle.getAttribute("cx")),
        cy: Number(circle.getAttribute("cy")),
        r: radius
      };
    },
    { cx: 0, cy: 0, r: 0 }
  );
}

function getQualitySegments(suburb, geometry) {
  const total = suburb.stops || 1;
  let cursor = 0;

  return QUALITY.map(item => {
    const count = suburb.qualityMix[item.key];
    const startAngle = cursor;
    const endAngle = cursor + count / total * TAU;
    cursor = endAngle;
    return {
      ...item,
      count,
      pct: count / total * 100,
      cx: geometry.cx,
      cy: geometry.cy,
      r: geometry.r,
      startAngle,
      endAngle,
      d: describeArc(geometry.cx, geometry.cy, geometry.r, startAngle, endAngle)
    };
  });
}

function createCenterTarget(suburb, geometry) {
  const target = document.createElementNS(SVG_NS, "circle");
  target.setAttribute("class", "hit-target");
  target.setAttribute("cx", String(geometry.cx));
  target.setAttribute("cy", String(geometry.cy));
  target.setAttribute("r", String(Math.max(geometry.r - 10, 10)));
  target.setAttribute("fill", "transparent");
  target.setAttribute("pointer-events", "all");
  target.setAttribute("tabindex", "0");
  target.setAttribute("focusable", "true");
  target.setAttribute("role", "button");
  target.setAttribute("aria-pressed", "false");
  target.setAttribute("aria-label", ariaLabel(suburb));
  target.dataset.suburb = suburb.name;
  target.dataset.qualityKey = "";

  target.addEventListener("pointerenter", event => previewSuburb(suburb, event));
  target.addEventListener("pointermove", event => showTooltip(suburb, event));
  target.addEventListener("pointerleave", leaveSuburb);
  target.addEventListener("focus", event => previewSuburb(suburb, event));
  target.addEventListener("blur", leaveSuburb);
  target.addEventListener("click", event => {
    event.preventDefault();
    pinSuburb(suburb, null, event);
  });
  target.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      pinSuburb(suburb, null, event);
    }
  });

  return target;
}

function createSegmentTarget(suburb, segment) {
  const target = document.createElementNS(SVG_NS, "path");
  target.setAttribute("class", "hit-target segment-hit-target");
  target.setAttribute("d", segment.d);
  target.setAttribute("fill", "none");
  target.setAttribute("stroke", "transparent");
  target.setAttribute("stroke-width", "28");
  target.setAttribute("pointer-events", "stroke");
  target.setAttribute("tabindex", "0");
  target.setAttribute("focusable", "true");
  target.setAttribute("role", "button");
  target.setAttribute("aria-pressed", "false");
  target.setAttribute("aria-label", segmentAriaLabel(suburb, segment));
  target.dataset.suburb = suburb.name;
  target.dataset.qualityKey = segment.key;

  target.addEventListener("pointerenter", event => previewSegment(suburb, segment, event));
  target.addEventListener("pointermove", event => showTooltip(suburb, event, segment));
  target.addEventListener("pointerleave", leaveSuburb);
  target.addEventListener("focus", event => previewSegment(suburb, segment, event));
  target.addEventListener("blur", leaveSuburb);
  target.addEventListener("click", event => {
    event.preventDefault();
    pinSuburb(suburb, segment, event);
  });
  target.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      pinSuburb(suburb, segment, event);
    }
  });

  return target;
}

function describeArc(cx, cy, r, startAngle, endAngle) {
  const start = polarPoint(cx, cy, r, startAngle);
  const end = polarPoint(cx, cy, r, endAngle);
  const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`;
}

function polarPoint(cx, cy, r, angle) {
  return {
    x: cx + r * Math.cos(angle),
    y: cy + r * Math.sin(angle)
  };
}

function previewSuburb(suburb, event) {
  state.hovered = suburb;
  showTooltip(suburb, event);
  clearActiveArc();
  setActiveBubble(suburb);
  renderPreview(suburb);
}

function previewSegment(suburb, segment, event) {
  state.hovered = suburb;
  setActiveArc(suburb, segment);
  clearActiveBubble();
  showTooltip(suburb, event, segment);
  renderPreview(suburb);
}

function leaveSuburb() {
  state.hovered = null;
  hideTooltip();
  clearActiveArc();
  clearActiveBubble();
  clearPreview();
}

function pinSuburb(suburb, segment, event) {
  if (state.slots.A && state.slots.A.name === suburb.name) {
    state.slots.A = null;
    if (state.lastAssigned === "A") state.lastAssigned = state.slots.B ? "B" : null;
  } else if (state.slots.B && state.slots.B.name === suburb.name) {
    state.slots.B = null;
    if (state.lastAssigned === "B") state.lastAssigned = state.slots.A ? "A" : null;
  } else if (!state.slots.A) {
    state.slots.A = suburb;
    state.lastAssigned = "A";
  } else if (!state.slots.B) {
    state.slots.B = suburb;
    state.lastAssigned = "B";
  } else {
    const replaceSlot = state.lastAssigned === "A" ? "B" : "A";
    state.slots[replaceSlot] = suburb;
    state.lastAssigned = replaceSlot;
  }

  renderSlots();
  renderCompareStrip();
  renderSelectionHighlights();
  updatePressedState();
  if (segment) {
    setActiveArc(suburb, segment);
  } else {
    clearActiveArc();
    setActiveBubble(suburb);
  }
  showTooltip(suburb, event, segment);
}

function unpinSlot(slotKey) {
  state.slots[slotKey] = null;
  if (state.lastAssigned === slotKey) {
    const other = slotKey === "A" ? "B" : "A";
    state.lastAssigned = state.slots[other] ? other : null;
  }
  renderSlots();
  renderCompareStrip();
  renderSelectionHighlights();
  updatePressedState();
}

function clearAllPins() {
  state.slots.A = null;
  state.slots.B = null;
  state.lastAssigned = null;
  renderSlots();
  renderCompareStrip();
  renderSelectionHighlights();
  updatePressedState();
  clearActiveArc();
  clearActiveBubble();
  hideTooltip();
}

function updatePressedState() {
  const pinnedNames = new Set();
  if (state.slots.A) pinnedNames.add(state.slots.A.name);
  if (state.slots.B) pinnedNames.add(state.slots.B.name);
  document.querySelectorAll(".hit-target").forEach(target => {
    target.setAttribute("aria-pressed", pinnedNames.has(target.dataset.suburb) ? "true" : "false");
  });
}

function renderSelectionHighlights() {
  clearSelectionHighlight();
  if (!state.selectionGroup || !state.svg) return;
  addSelectionOutline(state.slots.A, "A");
  addSelectionOutline(state.slots.B, "B");
}

function addSelectionOutline(suburb, slotKey) {
  if (!suburb) return;
  const bubble = state.svg.querySelector(`#${suburb.id}`);
  const geometry = bubble ? getBubbleGeometry(bubble) : null;
  if (!geometry) return;

  const labelBox = getLabelBBox(bubble);
  const outlinePath = document.createElementNS(SVG_NS, "path");
  outlinePath.setAttribute("class", `selected-suburb-outline slot-${slotKey}-outline`);
  outlinePath.setAttribute("d", describeSelectionOutline(geometry, labelBox));
  outlinePath.setAttribute("fill", "none");
  state.selectionGroup.appendChild(outlinePath);
}

function describeSelectionOutline(geometry, labelBox) {
  const circlePadding = 9;
  const labelPaddingX = 10;
  const labelPaddingY = 7;
  const circleR = geometry.r + circlePadding;
  if (!labelBox) return describeCirclePath(geometry.cx, geometry.cy, circleR);

  const rect = {
    x: labelBox.x - labelPaddingX,
    y: labelBox.y - labelPaddingY,
    width: labelBox.width + labelPaddingX * 2,
    height: labelBox.height + labelPaddingY * 2
  };
  const rx = Math.min(5, rect.width / 2);
  const ry = Math.min(5, rect.height / 2);
  const minRightAngle = Math.PI * 0.18;
  const maxRightAngle = Math.PI * 0.46;
  const minLeftAngle = Math.PI * 0.54;
  const maxLeftAngle = Math.PI * 0.82;
  const rightAngle = clamp(
    Math.atan2(rect.y - geometry.cy, rect.x + rect.width - rx - geometry.cx),
    minRightAngle,
    maxRightAngle
  );
  const leftAngle = clamp(
    Math.atan2(rect.y - geometry.cy, rect.x + rx - geometry.cx),
    minLeftAngle,
    maxLeftAngle
  );
  const circleRight = polarPoint(geometry.cx, geometry.cy, circleR, rightAngle);
  const circleLeft = polarPoint(geometry.cx, geometry.cy, circleR, leftAngle);
  const x = rect.x;
  const y = rect.y;
  const w = rect.width;
  const h = rect.height;

  return [
    `M ${circleRight.x} ${circleRight.y}`,
    `A ${circleR} ${circleR} 0 1 0 ${circleLeft.x} ${circleLeft.y}`,
    `L ${x + rx} ${y}`,
    `Q ${x} ${y} ${x} ${y + ry}`,
    `V ${y + h - ry}`,
    `Q ${x} ${y + h} ${x + rx} ${y + h}`,
    `H ${x + w - rx}`,
    `Q ${x + w} ${y + h} ${x + w} ${y + h - ry}`,
    `V ${y + ry}`,
    `Q ${x + w} ${y} ${x + w - rx} ${y}`,
    `L ${circleRight.x} ${circleRight.y}`,
    "Z"
  ].join(" ");
}

function describeCirclePath(cx, cy, r) {
  return [
    `M ${cx + r} ${cy}`,
    `A ${r} ${r} 0 1 1 ${cx - r} ${cy}`,
    `A ${r} ${r} 0 1 1 ${cx + r} ${cy}`,
    "Z"
  ].join(" ");
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function clearSelectionHighlight() {
  if (!state.selectionGroup) return;
  state.selectionGroup.replaceChildren();
}

function getLabelBBox(bubble) {
  const wrapper = bubble.parentNode;
  if (!wrapper || !wrapper.children) return null;

  const boxes = Array.from(wrapper.children)
    .filter(child => child !== bubble && typeof child.getBBox === "function")
    .map(child => {
      try {
        return child.getBBox();
      } catch {
        return null;
      }
    })
    .filter(box => box && box.width > 0 && box.height > 0);

  if (!boxes.length) return null;

  return boxes.reduce((combined, box) => {
    const minX = Math.min(combined.x, box.x);
    const minY = Math.min(combined.y, box.y);
    const maxX = Math.max(combined.x + combined.width, box.x + box.width);
    const maxY = Math.max(combined.y + combined.height, box.y + box.height);
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  });
}

function setActiveArc(suburb, segment) {
  if (!state.highlightGroup || !suburb || !segment) {
    clearActiveArc();
    return;
  }

  clearActiveArc();

  const typeTotal = TYPE_GROUPS[segment.key]
    .reduce((sum, type) => sum + (suburb.busStopType[type.key] || 0), 0);
  if (!typeTotal) return;

  let cursor = segment.startAngle;
  const span = segment.endAngle - segment.startAngle;
  const boundaries = [];
  const hoverStrokeWidth = 18;

  TYPE_GROUPS[segment.key].forEach(type => {
    const count = suburb.busStopType[type.key] || 0;
    if (!count) return;

    const next = cursor + span * count / typeTotal;
    const path = document.createElementNS(SVG_NS, "path");
    path.setAttribute("class", "active-arc-segment");
    path.setAttribute("d", describeArc(segment.cx, segment.cy, segment.r, cursor, next));
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", type.color);
    path.setAttribute("stroke-width", String(hoverStrokeWidth));
    path.setAttribute("opacity", "0.98");
    state.highlightGroup.appendChild(path);
    cursor = next;
    boundaries.push(next);
  });

  boundaries.slice(0, -1).forEach(angle => {
    const separatorInset = 1.4;
    const inner = polarPoint(segment.cx, segment.cy, segment.r - hoverStrokeWidth / 2 + separatorInset, angle);
    const outer = polarPoint(segment.cx, segment.cy, segment.r + hoverStrokeWidth / 2 - separatorInset, angle);
    const separator = document.createElementNS(SVG_NS, "line");
    separator.setAttribute("class", "active-arc-separator");
    separator.setAttribute("x1", String(inner.x));
    separator.setAttribute("y1", String(inner.y));
    separator.setAttribute("x2", String(outer.x));
    separator.setAttribute("y2", String(outer.y));
    state.highlightGroup.appendChild(separator);
  });

  const offset = state.sortOffsets.get(suburb.name);
  state.highlightGroup.style.transform = offset
    ? `translate(${offset.dx}px, ${offset.dy}px)`
    : "";
}

function clearActiveArc() {
  if (!state.highlightGroup) return;
  state.highlightGroup.replaceChildren();
}

function setActiveBubble(suburb) {
  clearActiveBubble();
  if (!state.svg || !suburb) return;

  const bubble = state.svg.querySelector(`#${suburb.id}`);
  if (!bubble) return;

  bubble.style.transformBox = "fill-box";
  bubble.style.transformOrigin = "center";
  bubble.style.transition = "transform 160ms ease";
  bubble.style.transform = "scale(1.08)";
  state.activeBubble = bubble;
}

function clearActiveBubble() {
  if (!state.activeBubble) return;

  state.activeBubble.style.transform = "";
  state.activeBubble = null;
}

function getSegmentForQuality(suburb, qualityKey) {
  if (!state.svg || !qualityKey) return null;
  const bubble = state.svg.querySelector(`#${suburb.id}`);
  const geometry = bubble ? getBubbleGeometry(bubble) : null;
  if (!geometry) return null;
  return getQualitySegments(suburb, geometry).find(segment => segment.key === qualityKey) || null;
}

function markBubbleWrappers() {
  if (!state.svg) return;
  SUBURBS.forEach(suburb => {
    const bubble = state.svg.querySelector(`#${suburb.id}`);
    const wrapper = bubble && bubble.parentNode;
    if (!wrapper) return;
    wrapper.classList.add("bubble-wrap");
    wrapper.dataset.suburbName = suburb.name;
  });
}

function setupSortControl() {
  if (!el.sortButtons || el.sortButtons.length === 0) return;
  el.sortButtons.forEach(btn => {
    btn.addEventListener("click", () => toggleSortMode(btn.dataset.sort));
  });
  if (el.sortClose) {
    el.sortClose.addEventListener("click", () => toggleSortMode(null));
  }
}

function toggleSortMode(key) {
  const newMode = key && state.sortMode !== key ? key : null;
  state.sortMode = newMode;
  applySortMode();
}

function applySortMode() {
  if (!state.svg) return;
  const dim = SORT_DIMENSIONS.find(d => d.key === state.sortMode);

  el.sortButtons.forEach(btn => {
    btn.setAttribute("aria-pressed", btn.dataset.sort === state.sortMode ? "true" : "false");
  });

  if (dim) {
    state.svg.classList.add("is-sorted");
    el.sortBanner.hidden = false;
    el.sortBannerDim.textContent = dim.label;
    el.sortBannerHint.textContent = dim.hint;
    layoutSortedBubbles(dim);
  } else {
    state.svg.classList.remove("is-sorted");
    el.sortBanner.hidden = true;
    resetBubbleLayout();
  }
}

function layoutSortedBubbles(dim) {
  const ordered = [...SUBURBS].sort((a, b) => {
    const diff = dim.value(a) - dim.value(b);
    return dim.order === "desc" ? -diff : diff;
  });

  const yStart = 50;
  const yEnd = 950;
  const step = (yEnd - yStart) / Math.max(1, ordered.length - 1);
  const xTarget = 720;

  state.sortOffsets.clear();

  ordered.forEach((suburb, index) => {
    const bubble = state.svg.querySelector(`#${suburb.id}`);
    const wrapper = bubble && bubble.parentNode;
    if (!wrapper) return;
    const geom = getBubbleGeometry(bubble);
    if (!geom) return;

    const targetY = yStart + step * index;
    const dx = xTarget - geom.cx;
    const dy = targetY - geom.cy;
    const delay = index * 35;
    state.sortOffsets.set(suburb.name, { dx, dy });

    wrapper.style.transitionDelay = `${delay}ms`;
    wrapper.style.transform = `translate(${dx}px, ${dy}px)`;
    applyHitTargetTransform(suburb.name, dx, dy, delay);
  });

  renderRankLabels(ordered, yStart, step);
  refreshActiveOverlayOffsets();
}

function renderRankLabels(ordered, yStart, step) {
  if (!state.svg) return;
  let group = state.svg.querySelector("#rank-labels");
  if (!group) {
    group = document.createElementNS(SVG_NS, "g");
    group.setAttribute("id", "rank-labels");
    group.setAttribute("aria-hidden", "true");
    state.svg.appendChild(group);
  }
  group.replaceChildren();

  const xRank = 660;
  const xName = 780;

  ordered.forEach((suburb, index) => {
    const y = yStart + step * index;

    const rank = document.createElementNS(SVG_NS, "text");
    rank.setAttribute("class", "rank-number");
    rank.setAttribute("x", String(xRank));
    rank.setAttribute("y", String(y));
    rank.setAttribute("text-anchor", "end");
    rank.setAttribute("dominant-baseline", "middle");
    rank.textContent = `#${index + 1}`;
    group.appendChild(rank);

    const name = document.createElementNS(SVG_NS, "text");
    name.setAttribute("class", "rank-name");
    name.setAttribute("x", String(xName));
    name.setAttribute("y", String(y));
    name.setAttribute("text-anchor", "start");
    name.setAttribute("dominant-baseline", "middle");
    name.textContent = suburb.name;
    group.appendChild(name);
  });
}

function resetBubbleLayout() {
  if (!state.svg) return;
  state.sortOffsets.clear();
  SUBURBS.forEach((suburb, index) => {
    const bubble = state.svg.querySelector(`#${suburb.id}`);
    const wrapper = bubble && bubble.parentNode;
    if (!wrapper) return;
    const delay = index * 25;
    wrapper.style.transitionDelay = `${delay}ms`;
    wrapper.style.transform = "";
    applyHitTargetTransform(suburb.name, 0, 0, delay);
  });

  refreshActiveOverlayOffsets();
}

function applyHitTargetTransform(suburbName, dx, dy, delay) {
  if (!state.svg) return;
  const transformValue = dx || dy ? `translate(${dx}px, ${dy}px)` : "";
  state.svg.querySelectorAll(`.hit-target[data-suburb="${suburbName}"]`).forEach(target => {
    target.style.transitionDelay = `${delay}ms`;
    target.style.transform = transformValue;
  });
}

function refreshActiveOverlayOffsets() {
  if (!state.highlightGroup) return;
  const ref = state.hovered;
  const offset = ref && state.sortOffsets.get(ref.name);
  state.highlightGroup.style.transform = offset
    ? `translate(${offset.dx}px, ${offset.dy}px)`
    : "";
}

function setupBandLegends() {
  if (!state.svg) return;
  const legendsRoot = state.svg.querySelector("#Legends");
  if (!legendsRoot) return;

  BAND_DEFS.forEach(band => {
    const rect = legendsRoot.querySelector(`rect.${band.className}`);
    if (!rect) return;
    const textLabel = findFollowingText(rect);
    const elements = [rect, textLabel].filter(Boolean);

    elements.forEach(elem => {
      elem.classList.add("band-legend");
      elem.dataset.band = band.key;
      elem.setAttribute("role", "button");
      elem.setAttribute("tabindex", "0");
      elem.setAttribute("aria-pressed", "false");
      elem.setAttribute(
        "aria-label",
        `Highlight suburb circles in the ${band.key} accessibility band`
      );
      elem.addEventListener("click", () => toggleBand(band.key));
      elem.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggleBand(band.key);
        }
      });
    });
  });

  if (el.filterBannerClear) {
    el.filterBannerClear.addEventListener("click", () => {
      if (state.activeBand) toggleBand(state.activeBand);
    });
  }
}

const BAND_LABELS = {
  higher: "≥ 80% Higher",
  moderate: "70–80% Moderate",
  lower: "< 70% Lower"
};

function findFollowingText(element) {
  let sibling = element.nextElementSibling;
  while (sibling) {
    if (sibling.tagName.toLowerCase() === "text") return sibling;
    const nested = sibling.querySelector && sibling.querySelector("text");
    if (nested) return nested;
    sibling = sibling.nextElementSibling;
  }
  return null;
}

function toggleBand(key) {
  state.activeBand = state.activeBand === key ? null : key;
  applyBandFilter();
}

function applyBandFilter() {
  if (!state.svg) return;

  state.svg.querySelectorAll(".band-legend").forEach(elem => {
    elem.setAttribute("aria-pressed", elem.dataset.band === state.activeBand ? "true" : "false");
  });

  const band = BAND_DEFS.find(b => b.key === state.activeBand);
  SUBURBS.forEach(suburb => {
    const bubble = state.svg.querySelector(`#${suburb.id}`);
    const wrapper = bubble && bubble.parentNode;
    if (!wrapper) return;

    wrapper.classList.remove("band-matched", "band-unmatched");
    if (band) {
      wrapper.classList.add(band.test(suburb) ? "band-matched" : "band-unmatched");
    }
  });

  if (el.filterBanner) {
    if (band) {
      el.filterBanner.hidden = false;
      el.filterBannerBand.textContent = BAND_LABELS[band.key] || band.key;
    } else {
      el.filterBanner.hidden = true;
    }
  }
}

function setupInfoPopover() {
  const popover = el.scoreInfoPopover;
  if (!popover) return;
  let hideTimer = null;
  let pinned = false;
  let activeIcon = null;

  const cancelHide = () => {
    if (hideTimer !== null) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
  };
  const scheduleHide = () => {
    if (pinned) return;
    cancelHide();
    hideTimer = setTimeout(() => {
      popover.hidden = true;
      activeIcon = null;
    }, 150);
  };
  const showFor = iconBtn => {
    if (pinned && activeIcon !== iconBtn) return;
    cancelHide();
    activeIcon = iconBtn;
    popover.hidden = false;
    positionInfoPopover(iconBtn);
  };
  const pin = iconBtn => {
    cancelHide();
    pinned = true;
    activeIcon = iconBtn;
    popover.classList.add("is-pinned");
    popover.hidden = false;
    positionInfoPopover(iconBtn);
  };
  const unpin = () => {
    pinned = false;
    activeIcon = null;
    popover.classList.remove("is-pinned");
    popover.hidden = true;
  };

  document.querySelectorAll(".info-icon").forEach(iconBtn => {
    iconBtn.addEventListener("pointerenter", () => showFor(iconBtn));
    iconBtn.addEventListener("focus", () => showFor(iconBtn));
    iconBtn.addEventListener("pointerleave", scheduleHide);
    iconBtn.addEventListener("blur", scheduleHide);
    iconBtn.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      if (pinned && activeIcon === iconBtn) {
        unpin();
      } else {
        pin(iconBtn);
      }
    });
  });

  const closeBtn = document.getElementById("scoreInfoClose");
  if (closeBtn) {
    closeBtn.addEventListener("click", event => {
      event.stopPropagation();
      unpin();
    });
  }

  document.addEventListener("click", event => {
    if (!pinned) return;
    if (event.target.closest(".info-icon")) return;
    if (popover.contains(event.target)) return;
    unpin();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && pinned) unpin();
  });
}

function positionInfoPopover(iconBtn) {
  const popover = el.scoreInfoPopover;
  const margin = 12;
  const gap = 8;
  const iconRect = iconBtn.getBoundingClientRect();
  const popoverRect = popover.getBoundingClientRect();

  let left = iconRect.left + iconRect.width / 2 - popoverRect.width / 2;
  left = Math.max(margin, Math.min(left, window.innerWidth - popoverRect.width - margin));

  let top = iconRect.bottom + gap;
  if (top + popoverRect.height > window.innerHeight - margin) {
    top = Math.max(margin, iconRect.top - popoverRect.height - gap);
  }

  popover.style.top = `${top}px`;
  popover.style.left = `${left}px`;
}

function renderSlots() {
  renderSlot("A");
  renderSlot("B");
}

function renderSlot(slotKey) {
  const panel = panels[slotKey];
  const suburb = state.slots[slotKey];
  const opponent = state.slots[slotKey === "A" ? "B" : "A"];

  panel.root.classList.remove("is-empty", "is-winner", "is-loser", "is-tie");

  if (!suburb) {
    panel.root.classList.add("is-empty");
    panel.title.textContent = "Pin a suburb";
    panel.summary.textContent = opponent
      ? `Click another suburb to compare against ${opponent.name}.`
      : "Click a suburb circle or arc on the poster to pin it here.";
    panel.rankValue.textContent = "--";
    panel.scoreValue.textContent = "--";
    panel.stopsValue.textContent = "--";
    panel.winnerBadge.hidden = true;
    panel.unpinButton.hidden = true;
    panel.note.hidden = true;
    panel.qualityBars.innerHTML = renderEmptyQualityBars();
    panel.componentGrid.innerHTML = renderEmptyComponents();
    panel.conditionBars.innerHTML = "";
    return;
  }

  const verdict = comparisonVerdict(suburb, opponent);
  if (verdict === "winner") panel.root.classList.add("is-winner");
  else if (verdict === "loser") panel.root.classList.add("is-loser");
  else if (verdict === "tie") panel.root.classList.add("is-tie");

  panel.title.textContent = suburb.name;
  panel.summary.textContent =
    `${suburb.name} ranks ${ordinal(suburb.rank)} out of ${SUBURBS.length} suburbs by accessibility score, ` +
    `with ${formatNumber(suburb.scorePct)}% (${formatNumber(suburb.score)}/7) across ${suburb.classifiedStops} classified stops.`;
  panel.rankValue.textContent = `#${suburb.rank}`;
  panel.scoreValue.textContent = `${formatNumber(suburb.scorePct)}%`;
  panel.stopsValue.textContent = suburb.stops;

  panel.winnerBadge.hidden = verdict !== "winner";
  panel.unpinButton.hidden = false;
  if (suburb.note) {
    panel.noteTitle.textContent = suburb.note.title;
    panel.noteBody.textContent = suburb.note.body;
    panel.note.hidden = false;
  } else {
    panel.note.hidden = true;
  }
  panel.qualityBars.innerHTML = renderQualityBars(suburb);
  panel.componentGrid.innerHTML = renderComponents(suburb);
  panel.conditionBars.innerHTML = renderConditionBars(suburb);
}

function comparisonVerdict(suburb, opponent) {
  if (!opponent) return null;
  if (suburb.rank === opponent.rank) return "tie";
  return suburb.rank < opponent.rank ? "winner" : "loser";
}

function renderCompareStrip() {
  const a = state.slots.A;
  const b = state.slots.B;
  const root = el.strip.root;
  const text = el.strip.text;
  const bar = el.strip.bar;

  root.classList.remove("is-active");

  if (!a && !b) {
    text.textContent = "Click two suburb circles to compare their accessibility.";
    bar.hidden = true;
    return;
  }
  if (!a || !b) {
    const pinned = a || b;
    text.innerHTML = `<strong>${pinned.name}</strong> pinned. Click another suburb to compare.`;
    bar.hidden = true;
    return;
  }

  const diff = a.scorePct - b.scorePct;
  const isTie = Math.abs(diff) < 0.05;
  const winner = diff > 0 ? a : b;
  const loser = diff > 0 ? b : a;

  root.classList.add("is-active");
  if (isTie) {
    text.innerHTML = `<strong>${a.name}</strong> and <strong>${b.name}</strong> are effectively tied on accessibility score.`;
  } else {
    text.innerHTML = `<strong>${winner.name}</strong> (${formatNumber(winner.scorePct)}%) leads <strong>${loser.name}</strong> (${formatNumber(loser.scorePct)}%) by <strong>${formatNumber(Math.abs(diff))}%</strong>.`;
  }

  bar.hidden = false;
  renderCompareSide(bar.querySelector('[data-side="A"]'), a, a === winner && !isTie);
  renderCompareSide(bar.querySelector('[data-side="B"]'), b, b === winner && !isTie);

  const arrow = bar.querySelector(".cs-arrow");
  const deltaEl = bar.querySelector(".cs-delta");
  if (isTie) {
    arrow.textContent = "=";
    deltaEl.textContent = "tied";
    delete deltaEl.__tweenCurrent;
  } else {
    arrow.textContent = diff > 0 ? ">" : "<";
    tweenNumber(deltaEl, Math.abs(diff), v => `${formatNumber(v)}%`);
  }
}

function renderCompareSide(sideEl, suburb, isWinner) {
  sideEl.classList.toggle("is-winner", !!isWinner);
  sideEl.querySelector(".cs-name").textContent = suburb.name;
  tweenNumber(sideEl.querySelector(".cs-score"), suburb.scorePct, v => `${formatNumber(v)}%`);
  sideEl.querySelector(".cs-bar-fill").style.width = `${Math.max(0, Math.min(100, suburb.scorePct))}%`;
}

function tweenNumber(el, toValue, format, duration = 450) {
  if (!el) return;
  if (el.__tweenRaf) {
    cancelAnimationFrame(el.__tweenRaf);
    el.__tweenRaf = null;
  }
  const fromValue = typeof el.__tweenCurrent === "number" ? el.__tweenCurrent : toValue;
  if (Math.abs(fromValue - toValue) < 0.05) {
    el.textContent = format(toValue);
    el.__tweenCurrent = toValue;
    return;
  }
  const start = performance.now();
  const tick = now => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    const current = fromValue + (toValue - fromValue) * eased;
    el.textContent = format(current);
    el.__tweenCurrent = current;
    if (t < 1) {
      el.__tweenRaf = requestAnimationFrame(tick);
    } else {
      el.__tweenCurrent = toValue;
      el.__tweenRaf = null;
    }
  };
  el.__tweenRaf = requestAnimationFrame(tick);
}

function renderPreview(suburb) {
  const preview = el.preview;
  preview.root.classList.add("is-active");
  preview.name.textContent = suburb.name;
  preview.meta.innerHTML =
    `<span>Rank <strong>#${suburb.rank}</strong></span>` +
    `<span>Score <strong>${formatNumber(suburb.scorePct)}%</strong></span>` +
    `<span>Stops <strong>${suburb.stops}</strong></span>`;
  preview.mix.innerHTML = QUALITY
    .map(item => {
      const count = suburb.qualityMix[item.key] || 0;
      const pct = suburb.stops ? (count / suburb.stops) * 100 : 0;
      return `<span style="width:${pct}%;background:${item.color}" title="${item.label}: ${count}"></span>`;
    })
    .join("");
}

function clearPreview() {
  const preview = el.preview;
  preview.root.classList.remove("is-active");
  preview.name.textContent = "Hover a suburb";
  preview.meta.innerHTML = "Move over a suburb circle or arc for a quick preview.";
  preview.mix.innerHTML = "";
}

function renderQualityBars(suburb) {
  return QUALITY.map(item => {
    const groupCount = suburb.qualityMix[item.key];
    const groupPct = suburb.stops ? groupCount / suburb.stops * 100 : 0;
    return `
      <div class="type-stack-row" data-quality-key="${item.key}">
        <div class="type-stack-heading">
          <span class="row-label">${item.label}</span>
          <span class="row-value">${groupCount} (${formatNumber(groupPct)}%)</span>
        </div>
        <div class="type-stack-track" aria-hidden="true">
          ${renderTypeStackSegments(suburb, item.key)}
        </div>
        ${item.key === "unknown" ? "" : `
          <div class="type-stack-legend">
            ${renderTypeStackLegend(suburb, item.key)}
          </div>
        `}
      </div>
    `;
  }).join("");
}

function renderTypeStackSegments(suburb, qualityKey) {
  const groupCount = suburb.qualityMix[qualityKey] || 1;
  return TYPE_GROUPS[qualityKey].map(type => {
    const count = suburb.busStopType[type.key] || 0;
    const pct = count / groupCount * 100;
    return `<span class="type-stack-segment" style="width:${pct}%; --type-color:${type.color}" title="${type.label}: ${count}"></span>`;
  }).join("");
}

function renderTypeStackLegend(suburb, qualityKey) {
  return TYPE_GROUPS[qualityKey].map(type => {
    const count = suburb.busStopType[type.key] || 0;
    return `
      <span class="type-stack-chip" style="--type-color:${type.color}">
        ${type.label} <strong>${count}</strong>
      </span>
    `;
  }).join("");
}

function renderEmptyQualityBars() {
  return QUALITY.map(item => `
    <div class="type-stack-row">
      <div class="type-stack-heading">
        <span class="row-label">${item.label}</span>
        <span class="row-value">--</span>
      </div>
      <div class="type-stack-track">
        <span class="type-stack-segment" style="width:0%; --type-color:${item.color}"></span>
      </div>
    </div>
  `).join("");
}

function renderComponents(suburb) {
  return COMPONENTS.map(item => `
    <div class="component">
      <span>${item.label}</span>
      <strong>${formatNumber(suburb.componentPct[item.key])}%</strong>
    </div>
  `).join("");
}

function renderEmptyComponents() {
  return COMPONENTS.map(item => `
    <div class="component">
      <span>${item.label}</span>
      <strong>--</strong>
    </div>
  `).join("");
}

function renderConditionBars(suburb) {
  return CONDITION_SPECS.map(spec => {
    const counts = suburb.conditions[spec.key];
    const total = Object.values(counts).reduce((sum, value) => sum + value, 0) || 1;
    const segments = spec.parts.map(part => {
      const value = counts[part.key] || 0;
      const pct = value / total * 100;
      return `<span class="stack-segment seg-${part.className}" style="width:${pct}%" title="${part.label}: ${value}"></span>`;
    }).join("");
    const legend = spec.parts.map(part => {
      const value = counts[part.key] || 0;
      const pct = value / total * 100;
      return `<span class="legend-chip ${part.className}">${part.label} ${value} (${formatNumber(pct)}%)</span>`;
    }).join("");

    return `
      <div class="stack-row">
        <div class="stack-heading">
          <span>${spec.title}</span>
          <span>${spec.headline(counts)}</span>
        </div>
        <div class="stack-track">${segments}</div>
        <div class="stack-legend">${legend}</div>
      </div>
    `;
  }).join("");
}

function showTooltip(suburb, event, segment = null) {
  el.tooltip.innerHTML = renderTooltip(suburb, segment);
  el.tooltip.setAttribute("aria-hidden", "false");
  el.tooltip.classList.add("is-visible");
  positionTooltip(event, suburb);
}

function hideTooltip() {
  el.tooltip.classList.remove("is-visible");
  el.tooltip.setAttribute("aria-hidden", "true");
}

function renderTooltip(suburb, segment = null) {
  if (segment) {
    if (segment.key === "unknown") {
      return `
        <h2>${suburb.name}</h2>
        <div class="tip-detail-list">
          <div><span>Percentage</span><strong>${formatNumber(segment.pct)}%</strong></div>
          <div><span>Unknown bus stops</span><strong>${segment.count}</strong></div>
        </div>
      `;
    }

    return `
      <h2>${suburb.name}</h2>
      ${renderTooltipTypeRows(suburb, segment)}
    `;
  }

  return `
    <h2>${suburb.name}</h2>
    <div class="tip-detail-list">
      <div><span>Ranking across 11 suburbs</span><strong>#${suburb.rank}</strong></div>
      <div><span>Accessibility score</span><strong>${formatNumber(suburb.scorePct)}% (${formatNumber(suburb.score)}/7)</strong></div>
      <div><span>Stops number</span><strong>${suburb.stops}</strong></div>
    </div>
  `;
}

function renderTooltipTypeRows(suburb, segment) {
  const rows = TYPE_GROUPS[segment.key].map(type => {
    const count = suburb.busStopType[type.key] || 0;
    return `<div class="tip-type-row" style="--type-color:${type.color}"><span>${type.label}</span><strong>${count}</strong></div>`;
  }).join("");

  return `
    <div class="tip-type-block">
      <h3>
        <span>Breakdown of <strong>${segment.label}</strong> bus stops</span>
        <span class="tip-type-meta">(<strong>${formatNumber(segment.pct)}%</strong> ${segment.count} stops)</span>
      </h3>
      ${rows}
    </div>
  `;
}

function positionTooltip(event, suburb) {
  const point = getClientPoint(event, suburb);
  const pad = 14;
  let left = point.clientX + 14;
  let top = point.clientY + 14;

  el.tooltip.style.left = `${left}px`;
  el.tooltip.style.top = `${top}px`;

  const rect = el.tooltip.getBoundingClientRect();
  if (left + rect.width > window.innerWidth - pad) {
    left = point.clientX - rect.width - 14;
  }
  if (top + rect.height > window.innerHeight - pad) {
    top = point.clientY - rect.height - 14;
  }
  el.tooltip.style.left = `${Math.max(pad, left)}px`;
  el.tooltip.style.top = `${Math.max(pad, top)}px`;
}

function getClientPoint(event, suburb) {
  if ("clientX" in event && Number.isFinite(event.clientX)) {
    return { clientX: event.clientX, clientY: event.clientY };
  }

  if (!state.svg) return { clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 };
  const bubble = state.svg.querySelector(`#${suburb.id}`);
  const geometry = bubble ? getBubbleGeometry(bubble) : null;
  if (!geometry || !state.svg.createSVGPoint) return { clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 };

  const svgPoint = state.svg.createSVGPoint();
  svgPoint.x = geometry.cx;
  svgPoint.y = geometry.cy;
  const screenPoint = svgPoint.matrixTransform(state.svg.getScreenCTM());
  return { clientX: screenPoint.x, clientY: screenPoint.y };
}

function ariaLabel(suburb) {
  const quality = suburb.qualityMix.quality;
  const basic = suburb.qualityMix.basic;
  const unknown = suburb.qualityMix.unknown;
  return `${suburb.name}: ${suburb.stops} stops. Quality ${quality}, basic ${basic}, unknown ${unknown}. ` +
    `Accessibility score ${formatNumber(suburb.scorePct)} percent.`;
}

function segmentAriaLabel(suburb, segment) {
  const typeText = TYPE_GROUPS[segment.key]
    .map(type => `${type.label}: ${suburb.busStopType[type.key] || 0}`)
    .join(", ");
  return `${suburb.name} ${segment.label} arc: ${segment.count} stops, ${formatNumber(segment.pct)} percent. ` +
    `Breakdown of bus stop type: ${typeText}.`;
}

function formatNumber(value) {
  if (Number.isInteger(value)) return String(value);
  return Number(value).toFixed(1).replace(/\.0$/, "");
}

function ordinal(value) {
  const mod100 = value % 100;
  if (mod100 >= 11 && mod100 <= 13) return `${value}th`;

  const suffix = { 1: "st", 2: "nd", 3: "rd" }[value % 10] || "th";
  return `${value}${suffix}`;
}
