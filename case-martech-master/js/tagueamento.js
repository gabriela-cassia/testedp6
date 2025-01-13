// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

const tagueamento= {

    AddGTMContainer : function(){
        
        try{    
    
            (function(w,d,s,l,i){
                w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NFQ9W59F')
        } catch(error){
            console.log(error)
        }
            
        
    },
    events: {
        menu: function(){
            try {
                var contatoElement = document.querySelector('.menu-lista-item .menu-lista-contato')

                if (contatoElement==undefined) return

                contatoElement.addEventListener('click',function(){
                    var evento = {
                        event: 'click',
                        page_location: location.href,
                        element_name: "entre_em_contato",
                        element_group: "menu"
                    }
                    dataLayer.push(evento)
                })    
            } catch (error) {
                console.log(error)
            }
            try {
                var downloadElement = document.querySelector('.menu-lista-item .menu-lista-download')

                if (downloadElement==undefined) return

                downloadElement.addEventListener('click',function(){
                    var evento = {
                        event: 'file_download',
                        page_location: location.href,
                        element_name: "download_pdf",
                        element_group: "menu"
                    }
                    dataLayer.push(evento)
                })    
            } catch (error) {
                console.log(error)
            }

        },
        analise: function(){
            try {
                var cardElementsId = ['lorem','ipsum','dolor']
            
                cardElementsId.forEach(function(id){
                    var elemento = document.querySelector("[data-id='" + id + "']");

                    if(elemento==undefined) return


                    elemento.addEventListener('click', function(){
                    var evento ={
                        event: 'click',
                        page_location: location.href,
                        element_name: id,
                        element_group: 'ver_mais'

                    }
                    dataLayer.push(evento)
                })})
            } catch (error) {
                console.log(error)
            }
        },
        contato: function(){
            try {

                var inputs = document.querySelectorAll('form input')
                
                var hasFired = false;

                inputs.forEach(function(input){
                    if(input==undefined) return;

                    input.addEventListener('change', function(event){

                        if(!hasFired){
                           
                            var evento = {
                                event : 'form_start',
                            
                                form_name : event.srcElement.form.attributes['name']!=null? event.srcElement.form.attributes['name'].value : '' ,
                                form_id : event.srcElement.form.attributes['id']!=null? event.srcElement.form.attributes['id'].value : '',
                                form_destination: event.srcElement.form.attributes['action']!=null?event.srcElement.form.attributes['action'].value : event.srcElement.formAction
                            }
                            dataLayer.push(evento)
                            hasFired = true
                        }
                    })

                })
                
                

            } catch (error) {
                console.log(error)
            }

            //---------------------------------------------------------------------

            try {
                
                var formulario = document.querySelector("form.contato")

                if (formulario==undefined) return
                
                formulario.addEventListener('submit', (event) => {
                    
                    var evento = {
                        event : 'form_submit',
                        page_location: location.href,
                        form_name : event.submitter.form.attributes['name']!=null? event.submitter.form.attributes['name'].value: '', //tbd
                        form_id : event.submitter.form.attributes['id']!=null? event.submitter.form.attributes['id'].value : '', 
                        form_destination: event.submitter.form.attributes['action']!=null ? event.submitter.form.attributes['action'].value : event.submitter.formAction,
                        form_submit_text: event.submitter.innerText
                    }
                    dataLayer.push(evento)
                    hasFired=false
                });


            } catch (error) {
                console.log(error)
            }

            //----------------------------------------------------------

            try {
              
                var body = document.querySelector('body');

                var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                            if (body.classList.contains('lightbox-open')) {
                                var formulario=document.querySelector('form.contato').attributes
                                var evento = {
                                    event : 'view_form_success',
                                    page_location: location.href,
                                    form_name : formulario['name']!=null? formulario['name'].value: '', //tbd
                                    form_id : formulario['id']!=null? formulario['id'].value: ''
                                }
                                dataLayer.push(evento)
                            }
                        }
                    });
                });
                
                
                observer.observe(body, {
                    attributes: true, 
                    attributeFilter: ['class'] 
                });
                
                

            } catch (error) {
                console.log(error)
            }

        }

    },        
    Main : function(){
        this.AddGTMContainer()
        this.events.menu()
        this.events.analise()
        this.events.contato()
    }    
}

tagueamento.Main()
