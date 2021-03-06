(function() {
    var appname = "WishlistMagic🔖";
    var appversion = "v1.6";
    function addjq(script){
        var xscript = `(function(){
    
            // the minimum version of jQuery we want
            var v = "3.4.1";
        
            // check prior inclusion and version
            if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
                var done = false;
                var script = document.createElement("script");
                script.src = "https://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
                script.onload = script.onreadystatechange = function(){
                    if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                        done = true;
                        initMyBookmarklet();
                    }
                };
                document.getElementsByTagName("head")[0].appendChild(script);
            } else {
                initMyBookmarklet();
            }
        
            function initMyBookmarklet() {
                (window.myBookmarklet = function() {
                    `+script+`
                })();
            }
        
        })();`;
        return xscript;
    }



    function minifyJS(script, callback) {
        const url = 'https://closure-compiler.appspot.com/compile',
              payload = [
                  ['js_code', script],
                  ['output_info', 'errors'],
                  ['output_info', 'compiled_code'],
                  ['output_format', 'json'],
              ];

        const data = payload.map(([key, val]) => encodeURIComponent(key) +'='+ encodeURIComponent(val))
                            .join('&');

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: data,
            method: "POST",
        };
        fetch(url, config)
            .then(resp => resp.json())
            .then(callback);
    }
    function createBookmark(scriptdata, callback){
        
        var jqdata = addjq(scriptdata);
        console.log(jqdata);
        minifyJS(jqdata, data => {
            console.log(data.compiledCode);
            if(data.errors && data.errors.length) {
                console.log(data.errors);
                console.log(data.errors.length);
                return;
            }
            $(".output").removeClass("hide");
            $(".output .link").attr("href", 'javascript:(function(){' + data.compiledCode + '})();');
            $(".output .link").html(appname + " " + appversion);
            $(".request").removeClass("loading")
            $(".timmy").removeClass("loading")
            callback();
        })
    }

    setTimeout(function (){
        // $(".request").html("Please wait!");
        $.get('wishlist.js', function(scriptdata) {
            createBookmark(scriptdata, function (){
                $(".requestA span").html("Ready!");
                $(".requestB span").html("ready!");
            });
        }, 'text').fail(function(){
            createBookmark("alert('missing script')", function (){
                $(".requestA span").html("Error: Missing Script!");
                $(".requestB span").html("script!");
            });
        });
    },10);

})();