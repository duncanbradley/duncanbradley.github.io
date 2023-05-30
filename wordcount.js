

Plot.plot({
  x: {
    label: null
  },
  y: {
    grid: true,
    label: "Word Count"
  },
  marks: [
    Plot.rectY(wordcountdata,
    {x: "day", 
    interval: d3.utcDay, 
    y: "words"})
    ]
})