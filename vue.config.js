// sintassi js per esportazione moduli
module.exports = {
    // modifichiamo il titolo della pagina (rotta)
    chainWebpack: config => {
        config
            .plugin('html')
            .tap((args) =>{
                args[0].title = 'Musa Job Opportunities';
                return args;
            })
    },
    css:{
        loaderOptions:{
            sass:{
                prependData: `@import "@/assets/scss/app.scss"; @import "@/assets/scss/_variables.scss";`
            }
        }
    }
}