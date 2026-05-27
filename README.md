# Interactive Poster — Bus Stop Accessibility Around St Lucia

An interactive visualisation of bus stop accessibility across 11 suburbs centred on St Lucia, the home of the University of Queensland. It examines how accessible the public transport network is for the daily population of students, staff, visitors, and nearby residents — comparing 544 bus stops across coverage, accessibility score, and stop type. The accessibility score is calculated from four recorded access factors: boarding space, road slope, sideways tilt, and tactile paving.

Hover over a suburb to peek at its score, click to pin it, and click a second suburb to compare the two side-by-side.

> Best viewed on a laptop or larger screen.

## View it online

The easiest way to see the poster is to open it in your web browser:

**👉 [Open the Interactive Poster](https://l-joli.github.io/interactive-poster/)**

No installation — just click and explore.

## How to use it

Once the page loads, you'll see the poster on the left and a comparison panel on the right.

- **Hover** over a suburb's circle or arc to see a quick preview.
- **Click** a suburb to pin it to the comparison panel.
- **Click a second suburb** to compare the two side-by-side.
- The small **"i"** next to "Accessibility Score" explains how the score is calculated.
- Click **"Clear both"** to reset and start a new comparison.
- Use the **"Rank suburb by"** buttons at the top to re-order suburbs by Accessibility Score or by the percentage of quality bus stops.
- Click **"Back to map"** to return to the geographic view.
- Click a band in the **"Accessibility Score" legend** (higher / moderate / lower) to filter the map to just those suburbs; click it again, or use the banner's clear button, to remove the filter.


## Running it on your own computer (optional)

If you'd rather open the poster directly from your computer instead of using the link above, here's how.

1. **Download the project.** Click the green **"Code"** button at the top of this page on GitHub, then choose **"Download ZIP"**. Unzip the folder somewhere easy to find, like your Desktop.
2. **Open the poster in your browser.** The easiest way is to use the free **Live Server** extension in [VS Code](https://code.visualstudio.com/):
   - Open the unzipped folder in VS Code.
   - Install the **Live Server** extension (by Ritwick Dey) from the Extensions tab.
   - Right-click `index.html` and choose **"Open with Live Server"** — the poster will pop up in your browser.
   - Already know how to run a local web server another way? Any method that hosts the folder locally will work too.

That's it — nothing else to install. All the data and images are bundled inside the folder.


## What's in this folder

- `index.html` — the page itself
- `styles.css` — the look and feel
- `app.js` — the interactive behaviour
- `Poster.svg` — the poster artwork
