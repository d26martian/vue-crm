module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/scss/utils/_variables.scss";
          @import "~@/scss/utils/_mixins.scss";
        `
      }
    }
  }
}