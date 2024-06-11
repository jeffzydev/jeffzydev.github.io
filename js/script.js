document.getElementById('copyEmailButton').addEventListener('click', function(event) {
    event.preventDefault();

    const email = 'barbosajesse419@gmail.com';

    navigator.clipboard.writeText(email).then(function() {
        const copyMessage = document.getElementById('copyMessage');
        copyMessage.style.display = 'inline';
        setTimeout(function() {
            copyMessage.style.display = 'none';
        }, 2000);
    }, function(err) {
        console.error('Erro ao copiar texto: ', err);
    });
});