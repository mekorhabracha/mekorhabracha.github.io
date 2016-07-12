var myGallery
function startGallery() {
myGallery = new gallery($('myGallery'), {
timed: false,
linkTarget: '_blank',
defaultTransition: "continuoushorizontal",
textShowCarousel: "Show Thumbnails",
textHideCarousel: "Hide Thumbnails",
showInfopane: false,
thumbCloseCarousel: false,
imgCountElement: 'imgCount'
});
myGallery.showCarousel();
}
window.addEvent('domready', startGallery);