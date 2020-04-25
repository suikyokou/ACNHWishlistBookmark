
// CLOSURE JAVASCRIPT COMPRESSOR
// https://closure-compiler.appspot.com/home

// BOOKMARK CREATOR
// https://mrcoles.com/bookmarklet/
// WishlistMagic 🔖


// WISHLIST MAGIC
// WISHLIST MAGIC
// WISHLIST MAGIC
// WISHLIST MAGIC

var checkA = [];
const jsScript = document.createElement('script');
jsScript.src = 'https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.5/dist/html2canvas.min.js';
document.body.appendChild(jsScript);


const jsScriptB = document.createElement('script');
jsScriptB.src = 'https://cdn.jsdelivr.net/npm/file-saver@2.0.2/dist/FileSaver.min.js';

jsScript.addEventListener('load', () => {
    document.body.appendChild(jsScriptB);
});

jsScriptB.addEventListener('load', () => {

    var jsonroot = "https://raw.githubusercontent.com/jefflomacy/villagerdb/master/data/items/";
    var styles = `
        @import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2&family=Fredoka+One&display=swap');
        body.xlocked{
            overflow: hidden;
            height: 100vh !important;
            width: 100vw !important;
        }
        .xlist{
            background-image: url('data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABGAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowNTMxMzk3MTREOTExMUVBOTlENUMyQjAwRUMxMTdFMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowNTMxMzk3MjREOTExMUVBOTlENUMyQjAwRUMxMTdFMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA1MzEzOTZGNEQ5MTExRUE5OUQ1QzJCMDBFQzExN0UyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA1MzEzOTcwNEQ5MTExRUE5OUQ1QzJCMDBFQzExN0UyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABAMDAwMDBAMDBAYEAwQG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');
            background-repeat: repeat;
            background-size: auto;
            background-position: center;
            padding: 2em;
            display: flex;
            justify-content: center;
            align-content: center;
            align-items: flex-start;
            flex-wrap: wrap;
            width: 1500px;
        }
        .xlist .clist{
            display: flex;
            justify-content: center;
            align-content: center;
            align-items: flex-start;
            flex-wrap: wrap;
            width: auto;
            padding: 0.5em;
        }
        .xlist img{
            width: 90px !important;
            max-width: 90px !important;
        }
        .xlist .ximg{
            width: 90px !important;
            max-width: 90px !important;
            padding: 0.2em 0.3em;
        }
        .ptitle{
            font-family: 'Fredoka One', cursive;
            font-weight: 600;
            font-size: 35px;
            line-height: 1.1;
            color: white;
            text-shadow: 2px 2px 2px #000;
            display:block;
            width: 100%;
            padding-top: 0.3em;
            padding-bottom: 0.1em;
            text-align: center;
        }
        .ptitle span{
            font-style: normal;
            color: #C0CBFF;
        }
        .ptitle em{
            font-style: normal;
            color: #F4C0FF;
        }
        .retext{
            width: 1500px;
            color: #FFC0CB;
        }
        .xlist .ximg span{
            font-family: "Comic Sans MS", cursive, sans-serif;
            font-weight: 600;
            font-size: 14px;
            line-height: 1.1;
            color: white;
            text-shadow: 1px 1px 2px #000;
            display:block;
            width: 100%;
            padding-top: 0.3em;
            padding-bottom: 0.1em;
            text-align: center;
        }
        .xlist label{
            font-family: 'Fredoka One', cursive;
            font-weight: 600;
            font-size: 35px;
            color: pink;
            text-shadow: 1px 1px 2px #000;
            display:block;
            width: 100%;
            padding-top: 0.3em;
            padding-bottom: 0.1em;
            text-align: center;
        }
        .clist{
            order: 10;
        }
        .hats{
            order: 0;
        }
        .tops{
            order: 1;
        }
        .bottoms{
            order: 2;
        }
        .dresses{
            order: 3;
        }
        .socks{
            order: 4;
        }
        .shoes{
            order: 5;
        }
        .shoes{
            order: 6;
        }
        .accessories{
            order: 7;
        }
        .furniture{
            order: 8;
        }
        .flooring{
            order: 19;
        }
        .wallpaper{
            order: 20;
        }
        

        .rerenderBlock{
            display: flex;
            justify-content: center;
            align-content: center;
            align-items: flex-start;
            flex-direction: column;
        }
        .rerender{
            margin: 1em 0;
            font-family: 'Fredoka One', cursive;
            font-weight: 600;
            font-size: 20px;
            color: black;
            display:block;
            padding-top: 0.3em;
            padding-bottom: 0.1em;
            text-align: center;
        }
    `
    
    var styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    
    if (window.location.href.indexOf("villagerdb") > -1) {
        if (window.location.href.indexOf("/list/") > -1) {
            var xblock = $("<div class='xlist'></div>");
            var listtitle = $("h1").clone();
            listtitle.find("a").remove();
            var ptitle = listtitle.text().trim();
            var puser = $(".text-muted a").text().trim();
            var ptitleB = ptitle.replace(puser,"").replace("by","");
            xblock.append("<div class='ptitle'><span>"+ptitleB+"</span><i> by </i><em>" + puser+"</em></div>");

            $(".list-group-item").each(function (i){
                // if(i > 5){ return; }
                checkA[i] = false;
            })

            $(".list-group-item").each(function (i){
                // if(i > 5){ return; }
                var ximg = $(this).find("img").clone();
                // var xalt = ximg.attr("alt");
                var xalt = $(this).text().trim().replace("Delete","");
                var ximgblock = $("<div class='ximg'></div>");
                ximgblock.append(ximg);
                ximgblock.append("<span style='font-family: 'Baloo Tamma 2', cursive;'>"+xalt+"</span>");
                ximg.css("max-width: 90px;");
                var xid = $(this).find("a:eq(0)").attr("href").replace("/item/","");
                // console.log(xid)

                $.getJSON( jsonroot + xid + ".json", function( data ) {
                    console.log(data);
                    var xcato = data.category;
                    var xcat = data.category.toLowerCase();
                    ximgblock.addClass(xcat);
                    if(xblock.find(".clist."+xcat).length){
                        xblock.find(".clist."+xcat).append(ximgblock);
                    }else{
                        xblock.append("<div class='clist "+xcat+"'><label>"+xcato+"</label></div>");
                        xblock.find(".clist."+xcat).append(ximgblock);
                    }
                    checkA[i] = true;
                    // console.log(checkA);
                });

            })
            $(".list-group").before(xblock);
    
            var xtime = setInterval(function (){
                if( !checkA.includes(false) ){
                    console.log("Ready!");
                    clearInterval(xtime);
        
                    renderCanvas();
        
                }
            },500)
        
            function renderCanvas(){
                var rerender = $("<div class='retext ptitle'>Rendering</div>");
                $(".xlist").after(rerender);
                $(".rerenderBlock").remove();
                $("body").addClass("xlocked");
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                setTimeout(function (){
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                    html2canvas(document.querySelector(".xlist")).then(canvas => {
                        $(".retext").remove();
                        $("body").removeClass("xlocked");
                        // $(".list-group").before(canvas);
                        var rerender = $("<button class='rerender'>RE-RENDER</button>");
                        rerender.click(function (){
                            renderCanvas();
                        });
                        var rerenderBlock = $("<div class='rerenderBlock'><div class='retext ptitle'></div></div>");
                        rerenderBlock.append(rerender);
                        $(".xlist").after(rerenderBlock);


                        canvas.toBlob(function(blob) {
                            var d = new Date();
                            var n = d.toDateString();
                            var file = $(".xlist .ptitle").text() + "_" + n + d.getHours() + d.getMinutes();
                            saveAs(blob, file.trim().replace(/\s/g, '_').replace(/_+/g, '_').toLowerCase() + ".png");
                        });
                    });
                },300)
            }
        }
    }

})
