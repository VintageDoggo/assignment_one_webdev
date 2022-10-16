(function(){
    function Start(){
        let deleteButtons = document.querySelectorAll('.btn-danger')

        for(button of deleteButtons){
            button.addEventListener('click', (event)=> {
                if(!confirm("Are you sure you want to delete the element")){
                    event.preventDefault();
                    window.location.assign('/contact-list')
                }
            });
        }
    }

    window.addEventListener("load", Start);
})();