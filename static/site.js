Y.use("node", "squarespace-gallery-ng", "squarespace-image-loader", function (a) {
    window.Site = Singleton.create({
        ready: function () { this.thumbnails = this.slideshow = null; a.on("domready", this.initialize, this); a.one(window).on("resize", function () { this.checkHeaderHeight(); this.setSidebarFixed() }, this) }, initialize: function () {
            this.setupNavigation(); this.setSidebarFixed(); a.one("body.collection-type-gallery") && (this.setupGalleries(), this.checkHeaderHeight()); this.setupTweakHandlers(); this.handleAnnouncementBar();
            a.all(".main-image img[data-src]").each(function (a) { ImageLoader.load(a, { load: !0 }) })
        }, setSidebarFixed: function () { a.one(".sidebar-fixed") && (a.one("body").get("winWidth") < a.one("#canvas").get("offsetWidth") ? a.one("#headerWrapper").addClass("absolute") : a.one("#headerWrapper").removeClass("absolute")) }, setupNavigation: function () {
            function b(b) {
                if (b.ancestor("li.folder").hasClass("dropdown-open")) (new a.Anim({ node: b, to: { opacity: 1, height: 0 }, duration: parseInt(b.one("ul").get("offsetHeight"), 10) / c / 10, easing: "easeOutStrong" })).run().on("end",
                    function () { b.ancestor("li.folder").removeClass("dropdown-open"); window.Site.checkHeaderHeight() })
            } a.all("nav.dropdown-click \x3e ul").each(function (e) {
                e.delegate("click", function (e) {
                    var d = e.currentTarget.next(".subnav"); if (d.ancestor("li.folder").hasClass("dropdown-open")) b(d); else if (a.all("li.dropdown-open .subnav").each(function (a) { b(a) }), !d.ancestor("li.folder").hasClass("dropdown-open")) (new a.Anim({
                        node: d, to: { opacity: 1, height: d.one("ul").get("offsetHeight") }, duration: parseInt(d.one("ul").get("offsetHeight"),
                            10) / c / 10, easing: "easeOutStrong"
                    })).run().on("end", function () { d.ancestor("li.folder").addClass("dropdown-open"); window.Site.checkHeaderHeight() })
                }, "li.folder a")
            }); var c = 50; a.one("#mobileMenuLink a").on("click", function () {
                var b = parseInt(a.one("#mobileNav .wrapper").get("offsetHeight"), 10); a.one("#mobileNav").hasClass("menu-open") ? (new a.Anim({ node: a.one("#mobileNav"), to: { height: 0 }, duration: 0.2, easing: "easeOutStrong" })).run() : (new a.Anim({ node: a.one("#mobileNav"), to: { height: b }, duration: 0.2, easing: "easeOutStrong" })).run();
                a.one("#mobileNav").toggleClass("menu-open")
            }); var d = 0, e = 0; a.one("#sidebarWrapper") && parseInt(a.one("#sidebarWrapper").getComputedStyle("height"), 10) && (d = parseInt(a.one("#sidebarWrapper").getComputedStyle("height"), 10)); a.one("#headerWrapper") && parseInt(a.one("#headerWrapper").getComputedStyle("height"), 10) && (e = parseInt(a.one("#headerWrapper").getComputedStyle("height"), 10)); a.one("#page").setStyle("minHeight", d + e + "px")
        }, setupTweakHandlers: function () {
            a.Global && (a.Global.on("tweak:change", function (b) {
                var c =
                    b.getName(); if ("blogSidebarWidth" == c) this.setPageHeight(); else if ("galleryPadding" == c) a.one("#slideshowWrapper").setStyle("height", parseInt(a.one("body").getComputedStyle("height"), 10) - 2 * parseInt(b.getValue(), 10) + "px"), this.slideshow && this.slideshow.refresh(); else if ("gallery-style" == c) this.slideshow && this.slideshow.getImages().each(function (a) { a.loader.setAttrs({ fit: "Fit" === b.getValue(), fill: "Fill" === b.getValue() }) }); else if ("thumbnail-aspect-ratio" == c) {
                        var d = this.getAspectRatio(b.getValue()); this.thumbnails &&
                            this.thumbnails.set("aspectRatio", d); 0 === d && this.thumbnails && this.thumbnails.getImages().each(function (a) { a.setStyles({ top: null, left: null }) })
                    } else "thumbnailWidth" == c && this.thumbnails && this.thumbnails.set("columnWidth", parseInt(b.getValue())); c.match(/thumbnail/i) && !a.one("body.thumbnail-view") && this.showThumbnails()
            }, this), a.Global.on("tweak:reset", function () { this.slideshow && a.later(1E3, this, function () { this.slideshow.refresh() }) }, this), a.Global.on("tweak:close", function () {
                this.slideshow && a.later(1E3,
                    this, function () { this.slideshow.refresh() }); this.thumbnails && a.later(1E3, this, function () { this.thumbnails.refresh() })
            }, this))
        }, getBodyWidth: function () { return parseInt(a.one("body").getComputedStyle("width"), 10) }, getAspectRatio: function (a) { var c = 0; (a = a && a.match(/(\d+):(\d+)/)) && 3 === a.length && (c = a[1] / a[2]); return c }, setupGalleries: function () {
            if (800 > this.getBodyWidth()) {
                a.all("#slideshow .slide img[data-src]").each(function (a) { ImageLoader.load(a, { load: !0 }); a.removeAttribute("data-load"); a.addClass("loaded") });
                a.all("#slideshow .sqs-video-wrapper").each(function (b) { b.plug(a.Squarespace.VideoLoader); b.videoloader.set("mode", "none") }); a.one(window).on("resize", function () { 800 <= this.getBodyWidth() && !this.slideshow && this.setupGalleries() }, this); var b = a.config.win.location.hash; if (b) var b = b.replace(/\#itemId\=/, ""), c = a.one('[data-slide-id\x3d"' + b + '"]'), d = setInterval(function () { c.one("img").hasClass("loaded") && (setTimeout(function () { window.scrollTo(0, c.getY()) }, 200), clearInterval(d)) }, 100)
            } else a.one("body.enable-gallery-thumbnails.initial-gallery-view-thumbnails") ||
                a.one("body.enable-gallery-thumbnails.homepage.homepage-gallery-view-thumbnails") ? a.one("body.enable-gallery-thumbnails.homepage.homepage-gallery-view-slideshow") ? this.setupSlideshow() : (b = window.location.hash, this.setupSlideshow(), b ? a.later(100, this, function () { a.one("body").removeClass("thumbnail-view").set("scrollTop", 0); this.slideshow.refresh(); a.all(".sqs-video-wrapper").each(function (a) { a.videoloader.reload() }); this.checkHeaderHeight() }) : this.showThumbnails()) : this.setupSlideshow(), a.all(".thumbnail-toggle").each(function (a) {
                    a.on("click",
                        function () { this.showThumbnails() }, this)
                }, this), a.one("#thumbnails").delegate("click", function (b) { b = a.all(".thumb").indexOf(b.currentTarget); this.slideshow ? this.slideshow.set("currentIndex", b) : this.setupSlideshow(b); a.later(100, this, function () { a.one("body").removeClass("thumbnail-view").set("scrollTop", 0); this.slideshow.refresh(); a.all(".sqs-video-wrapper").each(function (a) { a.videoloader.reload() }); this.checkHeaderHeight(); history.pushState && history.pushState("itemId", null, a.one(".sqs-active-slide").getData("slide-url")) }) },
                    ".thumb", this); a.one("#galleryWrapper .meta").setStyle("opacity", 1)
        }, setupThumbnailGrid: function () { this.thumbnails || (this.thumbnails = new a.Squarespace.Gallery2({ container: a.one("#thumbnails"), element: a.all(".thumb"), design: "autocolumns", designOptions: { columnWidth: parseInt(a.Squarespace.Template.getTweakValue("@thumbnailWidth")), columnWidthBehavior: "min", gutter: 10, aspectRatio: this.getAspectRatio(a.Squarespace.Template.getTweakValue("thumbnail-aspect-ratio")) }, lazyLoad: !0, refreshOnResize: !0 })) }, setupSlideshow: function (b) {
            if (!this.slideshow) {
                a.Squarespace.Template.getTweakValue("galleryPadding") &&
                a.one("#slideshowWrapper").setStyle("height", parseInt(a.one("body").getComputedStyle("height"), 10) - 2 * parseInt(a.Squarespace.Template.getTweakValue("galleryPadding"), 10) + "px"); if (a.one("#slideshow .slide")) {
                    var c = "fit"; a.Squarespace.Template.getTweakValue("gallery-style") && (c = a.Squarespace.Template.getTweakValue("gallery-style").toLowerCase()); this.slideshow = new a.Squarespace.Gallery2({
                        container: "#slideshow", currentIndex: b || 0, element: a.all(".slide"), loop: !0, elements: {
                            next: ".next-slide, .right-control",
                            previous: ".prev-slide, .left-control", controls: "#dotControls, #numberControls"
                        }, design: "stacked", designOptions: { autoHeight: !1, speed: 0.6 }, loaderOptions: { mode: c }, historyHash: !0
                    }); b = new a.Squarespace.Gallery2({ container: "#imageData", currentIndex: this.slideshow.get("currentIndex"), loop: !0, keyboard: !1, design: "base" }); this.slideshow.addChild(b); 1 >= a.all("#slideshow .slide").size() && a.all(".gallery-controls").setStyle("display", "none")
                } a.one(window).on("resize", function () {
                    a.Squarespace.Template.getTweakValue("galleryPadding") &&
                    a.one("#slideshowWrapper").setStyle("height", parseInt(a.one("body").getComputedStyle("height"), 10) - 2 * parseInt(a.Squarespace.Template.getTweakValue("galleryPadding"), 10) + "px"); this.slideshow && this.slideshow.refresh({ type: "resize" })
                }, this)
            }
        }, showThumbnails: function () { a.one("body").addClass("thumbnail-view"); this.thumbnails ? this.thumbnails.refresh() : this.setupThumbnailGrid(); window.history && window.history.replaceState("itemId", null, Static.SQUARESPACE_CONTEXT.collection.fullUrl) }, checkHeaderHeight: function () {
            var b =
                parseInt(a.one("#canvasWrapper").getComputedStyle("height"), 10), c = parseInt(a.one("#header").get("offsetHeight"), 10), d = 2 * parseInt(a.one("#canvas").getStyle("paddingTop"), 10), e = 0; 0 < a.all("#header .subnav").size() && a.all("#header .subnav").each(function (a) { e = Math.max(e, parseInt(a.getComputedStyle("height"), 10)) }); var f = 0; 0 < a.all("#imageData .slide-meta-wrapper").size() && a.all("#imageData .slide-meta-wrapper").each(function (a) { f = Math.max(f, a.get("offsetHeight")) }); var g = 0; 0 < a.all(".gallery-controls").size() &&
                    a.all(".gallery-controls").each(function (a) { g = Math.max(g, a.get("offsetHeight")) }); b <= c + e + d + f + g ? a.one("body").addClass("hide-meta") : a.one("body").removeClass("hide-meta")
        }, handleAnnouncementBar: function () { var b = a.one(".sqs-announcement-bar"), c = a.one(".sqs-announcement-bar-close"), d = a.one("#headerWrapper"); b && (d && d.setStyles({ marginTop: b.get("clientHeight") }), c && c.on("click", function () { d.setStyles({ marginTop: 0 }) })) }
    })
});