var socket = io();

$(function(){
    $('form').submit(function(){
        socket.emit('send', $('#m').val());
        $('#m').val('');
        return false;
    });

    socket.on('receive', function(msg){
        $('#messages').append($('<ul>').text(msg));
    });

    socket.on('userid', function(id){
       $('#messages').append($('<ul>O usuário <strong>'+ id.userid +'</strong> entrou</ul>'));
    });
});

