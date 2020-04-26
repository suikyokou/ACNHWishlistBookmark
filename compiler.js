
(function () {
    $.get('wishlist.js', function(data) {
        alert(data)
    }, 'text');
    // $.post( 
    //     "https://closure-compiler.appspot.com/compile",
    //     {
    //         js_code: "alert('Hello');",
    //         compilation_level: "SIMPLE_OPTIMIZATIONS",
    //         output_format: "text",
    //         output_info: "compiled_code",
    //     }
    // ).done(function( data ) {
    //     alert( "Data Loaded: " + data );
    // });
})();