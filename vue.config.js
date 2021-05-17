// sintassi js per esportazione moduli
module.exports = {
    //per cambiare porta
    
    devServer:{
        proxy: 'http://localhost:8080',
        port:8080
    },
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