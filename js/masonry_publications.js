$('.publications-list').masonry({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.publications-list-item',
  // use element for option
  columnWidth: '.grid-sizer',
  percentPosition: true
})