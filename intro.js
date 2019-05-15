function renderText() {
  d3.select('.intro')
    .append('p')
    .text(text['intro'][lang]);
}
