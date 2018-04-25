
        $(document).ready(function() {

            

            $('#trash').hide();


            $("#data_categoria").focusout(function () {
                $(this).val('');
            });

            // boton remove autocomplete
            $("#trash").on("click", function(){
                var data = $("#data_categoria");
                data.removeAttr('disabled');
                data.val('');
                data.focus();
                $(this).hide();
            });

            
            


        });
