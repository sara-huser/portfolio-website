<template>
  <section class="hero is-medium">
    <div class="hero-body">
      <div class="container">
        <div
          class="columns is-variable is-1-mobile is-4-tablet is-4-desktop is-8-widescreen is-2-fullhd"
        >
          <div class="column is-offset-half">
            <transition-group appear name="slide-fade">
              <div :key="0" v-html="text" v-bind:id="id"></div>
              <div :key="1" v-if="icons" class="icon-container">
                <a
                  class="icon-img"
                  v-for="(icon, index) in icons"
                  :key="index"
                  :href="icon.url"
                  target="_blank"
                >
                  <img
                    class="svg"
                    :src="require(`@/assets/img/projects/icons/social/${icon.name}.svg`)"
                    width="24"
                    height="24"
                  >
                </a>
              </div>
            </transition-group>
          </div>
          <div class="column is-hidden-tablet">
            <img class="portrait" v-bind:src="imgUrl('sara.jpg')">
            <img class="signature" src="@/assets/img/logo.png" alt="Logo">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
var images = require.context("@/assets/img/", false, /\.*/);

export default {
  name: "SectionComponent",
  props: ["id", "text", "image", "icons"],
  mounted: function() {
    document.querySelectorAll("img.svg").forEach(function(img) {
      var imgID = img.id;
      var imgClass = img.className;
      var imgURL = img.src;

      fetch(imgURL)
        .then(function(response) {
          return response.text();
        })
        .then(function(text) {
          var parser = new DOMParser();
          var xmlDoc = parser.parseFromString(text, "text/xml");

          // Get the SVG tag, ignore the rest
          var svg = xmlDoc.getElementsByTagName("svg")[0];

          // Add replaced image's ID to the new SVG
          if (typeof imgID !== "undefined") {
            svg.setAttribute("id", imgID);
          }
          // Add replaced image's classes to the new SVG
          if (typeof imgClass !== "undefined") {
            svg.setAttribute("class", imgClass + " replaced-svg");
          }

          // Remove any invalid XML tags as per http://validator.w3.org
          svg.removeAttribute("xmlns:a");

          // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
          if (
            !svg.getAttribute("viewBox") &&
            svg.getAttribute("height") &&
            svg.getAttribute("width")
          ) {
            svg.setAttribute(
              "viewBox",
              "0 0 " +
                svg.getAttribute("height") +
                " " +
                svg.getAttribute("width")
            );
          }

          // Replace image with new SVG
          img.parentNode.replaceChild(svg, img);

          // document.querySelectorAll('svg.replaced-svg path').forEach(function(path) {
          //   path.style.fill = 'red';
          // });

          var css =
            ".svg path, .svg circle { fill: #072d3d; transition: 0.3s all ease; } .svg:hover path, .svg:hover circle { fill: #3273dc; }";
          var style = document.createElement("style");

          if (style.styleSheet) {
            style.styleSheet.cssText = css;
          } else {
            style.appendChild(document.createTextNode(css));
          }

          document.getElementsByTagName("head")[0].appendChild(style);
        });
    });
  },
  methods: {
    imgUrl: function(path) {
      return images("./" + path);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";
@import "../../assets/sass/colors.scss";

.hero {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left center;

  .hero-body {
    height: 100%;
    @media screen and (min-width: $tablet) {
      padding-left: 3rem;
      padding-right: 3rem;
    }

    .container {
      height: 100%;
      .columns {
        height: 100%;
        .column {
          &.is-hidden-mobile {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            img {
              &.portrait {
                position: fixed;
                left: 0;
                max-width: 50vw;
                top: 7rem;
                @media screen and (max-width: $widescreen) {
                  width: 50vw;
                }
              }
              &.signature {
                position: fixed;
                left: 0;
                max-width: 40vw;
                margin-left: 5%;
                width: 40vw;
                margin-top: 40%;
                @media screen and (max-width: $widescreen) {
                  width: 40vw;
                  margin-top: 40%;
                }
                @media screen and (max-width: $tablet) {
                  margin-top: 38%;
                }
              }
            }
          }
          &.is-hidden-tablet {
            padding-top: 1.5rem;
            img {
              &.portrait {
                box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);
              }
              &.signature {
                margin-top: -15%;
              }
            }
          }

          #contact {
            @media screen and (max-width: $tablet) {
              text-align: center;
            }
          }

          .icon-container {
            width: 100%;
            max-width: 300px;
            display: flex;
            justify-content: space-between;
            padding-top: 30px;
            .icon-img {
              display: block;
              width: 24px;
              height: 24px;
              .svg {
                width: 24px;
                height: 24px;
              }
            }

            @media screen and (max-width: $tablet) {
              margin: auto;
            }
          }
        }
      }
    }
  }
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
