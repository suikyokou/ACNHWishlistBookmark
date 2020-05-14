
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
    var jsonrootV = "https://raw.githubusercontent.com/jefflomacy/villagerdb/master/data/villagers/";
    var styles = `
        @import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2&family=Fredoka+One&display=swap');
        body.xlocked{
            overflow: hidden;
            height: 100vh !important;
            width: 100vw !important;
        }
        .xlist{
            background-image: url('data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABGAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowNTMxMzk3MTREOTExMUVBOTlENUMyQjAwRUMxMTdFMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowNTMxMzk3MjREOTExMUVBOTlENUMyQjAwRUMxMTdFMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA1MzEzOTZGNEQ5MTExRUE5OUQ1QzJCMDBFQzExN0UyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA1MzEzOTcwNEQ5MTExRUE5OUQ1QzJCMDBFQzExN0UyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABAMDAwMDBAMDBAYEAwQGBwUEBAUHCAYGBwYGCAoICQkJCQgKCgwMDAwMCgwMDQ0MDBERERERFBQUFBQUFBQUFAEEBQUIBwgPCgoPFA4ODhQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAvwC+AwERAAIRAQMRAf/EAHkAAQADAQEBAAAAAAAAAAAAAAACAwQBBQcBAQEBAQEBAQAAAAAAAAAAAAABAgMEBQYQAAICAQMDAwMEAgMAAAAAAAABAgMRITEEQVESYTITcYGRIlIUBdEzoeFCEQEBAQEAAwEBAQEAAAAAAAAAARECIRIDMUFRYf/aAAwDAQACEQMRAD8A+yHzH4UAAAKeRyI8aEZzTcXJR09SVm3FkJxsipweYvVMqpBQAAAAAAAAAAAV32qiqVrWVHGn1eAluO1WwugrK3mLBLqYUAz1cuu2+yhaTg8L1xv+DV58axO5bjQZbAAAAAAjKEJ484qWHlZ11CJBQAAAAAAAAAAAAIyhGa8ZpSj2e2gR1JLRbBXQAFFfD41cvOMP15z5NtvP3Ne1YnEi8y2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAp5MbZUyjT/seMNPHUlSpUq1VpXNOzq47FIsCgGDj2cx8mxzrl/Hm9M6eONE8M3ZMceb1v/G8w7AAABxNNZWqfUDoAAAAAAAAAAAAAOJp6p5XoEdCgAAAAAAAAABg4nGurunJycaVJqMP3epmRiRvNNgACqzk01TVdkvFtZTe35JqasjKMlmLTXdaoo6FAMfP5Toh4Q/2T69kS1jq4v49vzUws6ta/VbiNS6tKoAA86HFvXOssjJ10Z8nj/03rjB09pjhOb7PQeiyln0Obu83+RyJc2tWxdcc4UOmqx9zO+XPbr0zToqt5FVDirX4qWcPpoRLcTjOE1mElJd08lEgoAAAAAAAAAx83iy5MqvHTDak+yZLGOprTRRGqMaql/lsfjUn8iZVAONJrD1QHIxjBYhFRW+EsBEgqMpRhFyk8RW7CJbhQABxxUsZSeNVnugOgZedx5ciqMYe5ST+2zJWepqzjcaHHgoQ1k/dLq2PxZMXNNNp6NaNFUAAAAAAAApq5NF2lc05LeL0f4LZYzOpVxGl/Gurpk5Ti3LZNdDn3za6/Pqc+arulCVkpV5UXrhmudzyx1Zb4Y+TyJ0SrjCv5PkbWFo8o6Sa5ddWNCy0m1h9UZadCgFPKqnfU6oNR8mst9lqSs2aplTy6qIVUTUvH3N6SeucIJlxsK2AAKY8midkqlNKyLw4vR5XbuXKzOpuLiNLaLK6p+c4uWNsdzHUtnhvjqS7TkTrss8601n3J9xxLJlX6dS3Yx8q+fHhGcYfJmSi49dTrJrh11ifnP4vk+N+eM/HlZ+mSLvhvcaP43gpr5V+r79jht9nqs59c3yyHZ5wAAAy08Gimbtx52NtpvpnsjV6tc5xJ5ajLoAAAE6owlYlY8Q6sz1ueGuZLfK3lqpz86pJqW6XRmeNzy39c3YznRyAAHYxlN4im3vhaktxZLXGmtGsP1KmAGVcGj553zXnKTyk9l9jXtcxz9JutRl0AAAAAAAAAAAAA8/l8zkca7xSi4NZi2n/AJM2udtjTxbLrqlZalHy9qWVp92yxqXV5WgDjaWje+wHQAACdNnxWRn2ev06mepsa46y6v5fJ+R/HD2Ld9zHHGea6/X6b4n4ynVwZ+Xy4cWHlLWb9kO5rnnWOuvVbXNWVxsW0kn+SVqXYyc3k8jjSi4KLrkuqe6+5i1nq2LOFffyIOy1RUdo4T177ssXm2tRWgAAAAAAAABRyeNDkqClp4vP26oljNmrkklhaJbIrSyqCsmoOSjnZszbka5m3EuRVGmagpeTxlvYnPWtd8+txi5XHXJhGOcNSTz6dTVjjZq+MVCKjFYilhIquhQABVyLlRTKx7r2ru3sSpbhx74citTjvtJdmIS6nOuFi8ZxUl2ayXSzSEI1xUILEVsgSYhyKI8ip1vTqn2aJUs1OEI1xUIrEYrCRVSCgAAAAAAAAAAAAdlKUnmTy+79CSFuuFAAAAARnXCxJWRUktUmsoIRjGCxGKivRYAkFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMfL58KMwr/Vb/wvqS1i9Y0Uz+SqE+sopv6laiwKAAAAAAAAclKMIuU2oxWrbCWsEP7JXcuFVaxS8rye7eNDp6ZHKfTesegc3YAAAAAABCNkJylCLzKDxJdshNTCgAABTbxaLvfBZ/ctH+UTGbJU6qo01quLbjHbO++SrJiYUAAAAAAAA40pLEkmnunqgjM+BxvkjbCPhOLUl46LT0Ne1Y9JutRl0AAAAAAAZKuE67ne7W5tttJYTz06kxictZWwAAAAAAAAAAAAAACdVTuk4RaUsZWepnrrGuefa45ZXOp+M1hlll/E65s/USozx5lLslTJ+FifjiWz+jJrPtGgrQAAAAAAAAAAAAAABj5nLs4tkMRUq5LZ6PK9SWsW4votd1as8HDOyYal1aVQAAAnVY6rFYlnGdPqZ6mzGuevW65OcrJOc3lssmJ11bdqJUUR4ta5EuQ9ZvGF0WmCYznnV5WgAAAAAAAABGU4RaUmk5PEV3YRIKAAAFV1Fd7g7FlQeUu5Es1popldNQjolu+yJ11kdOOPa4hKLhJxlunhll1mzLjhUAAEYzhJyjFpuPuS6BEgoAAAAAAAAAAAAFNnGqssja8qyLTTT7ehMZsXFaAAGHi8226x1Tqb8W07I7LHfJu8448923MbjDsnXdZVn45YzvsZvMv61z3efxyc5WS85+57vYsmJ11bdqJUAONZWH1Aqp41dEpuvKU8ZTeVoTGZMXFaAAAABhhzbf5U+O6nNRlhSjul650N+vjXGd3cxuMOwAAAAAAAAAAcUYxWIpJb4QR0KAAAAAAAAAJ01q2ag5eLez31M9XJrXHPtcWXcWdMfKUotdO5nnuVvv53lQdHJxRistJJvV46sI6FAAAAAAAAAADJzf5bSXHj+hayaeunQlY61qi8pPGMrOGVp5X9lQ42xugtLNHj93/ZmufUb+JR8FKi/e9ZfXsWNyYvK0AAAACqN0ZXTpSflDDk+mqyRNXRk4yUlunlfYWLLiV1srp+UvsuiROecjXXV6uoGmQAB5v9pRlRvjuv0y+nRma59xf/AF/HdNXnP3z1+i6IsXmY1lbAAAABl5vzyhGvjxbk3lyTxhL1JWetXUu11r5lizrjX7lWLAoBxxjLHks4eVnugjuG02lotwqdUoRmnOPlHqjNls8Nc2S+U+TOuViVSSgksYWN9ScSyeWvpZb4Um3MAARUYxcpJayeZP6LARIKAAAADkoxknGSzF7phHQrsGoyTa8kt0yVZcrVO3juyvEV8STcljq09DlOesv+u9652f4yHZ5wAAAAAM3MlyYRhLjYbcvGUWs77M1zn9c+9/jRHKivJ5ljVruZbehVGj+PKpTj5zWuuNen4PP1b7a9nM59c1gPQ8gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k=');
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
            position: relative;
        }

        .timmy{
            position: absolute;
            right: 15px;
            top: 15px;
            width: 80px;
            height: 80px;
            background-image: url('data:image/png;base64,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');
            background-repeat: no-repeat;
            background-size: contain;
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
            max-height: 90px;
            object-fit: contain;
        }
        .xlist [alt="DIY Icon"]{
            width: 20px !important;
            max-width: 20px !important;
            position: absolute;
            top: 70px;
            right: 0;
        }
        .xlist .ximg{
            width: 90px !important;
            max-width: 90px !important;
            padding: 0.2em 0.3em;
            position: relative;
        }
        .xlist .ximg .xitembg{
            width: 90px !important;
            max-width: 90px !important;
            height: 90px !important;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
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
    


    function slugify(string) {
        const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
        const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
        const p = new RegExp(a.split('').join('|'), 'g')
      
        return string.toString().toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text
    }


    if (window.location.href.indexOf("villagerdb") > -1) {
        if (window.location.href.indexOf("/list/") > -1) {
            var xblock = $("<div class='xlist'></div>");
            var listtitle = $("h1").clone();
            listtitle.find("a").remove();
            var ptitle = listtitle.text().trim();
            var puser = $(".text-muted a").text().trim();
            var ptitleB = ptitle.replace(puser,"").replace("by","");
            xblock.append("<div class='ptitle'><span>"+ptitleB+"</span><i> by </i><em>" + puser+"</em></div>");
            xblock.append("<div class='timmy'></div>");

            $(".list-group-item").each(function (i){
                // if(i > 5){ return; }
                checkA[i] = false;
            })

            $(".list-group-item").each(function (i){
                // if(i > 5){ return; }
                var ximg = $(this).find("img").clone();
                var xdiy = $(this).find('[alt="DIY Icon"]');

                // ximg.css("max-width: 90px;");
                
                var imgsrc = ximg.attr("src");
                var ximgBG = $("<div></div>");
                var xattributes = ximg.prop("attributes");
                $.each(xattributes, function() {
                    ximgBG.attr(this.name, this.value);
                });
                ximgBG.attr('style', "background-image: url(\""+imgsrc+"\");");
                ximgBG.addClass("xitembg");
                if(xdiy.length){
                    ximgBG.append(xdiy.clone());
                }

                var xalt = $(this).text().trim().replace("Delete","");
                var ximgblock = $("<div class='ximg'></div>");
                ximgblock.append(ximgBG);
                ximgblock.append("<span style='font-family: 'Baloo Tamma 2', cursive;'>"+xalt+"</span>");




                var xid = $(this).find("a:eq(0)").attr("href").replace("/item/","");
                var isvillager = false;
                var xjsonroot = jsonroot;
                if (xid.indexOf("villager") > -1) {
                    xid = xid.replace("villager/","");
                    xjsonroot = jsonrootV;
                    isvillager = true;
                }
                // console.log(xid)

                $.getJSON( xjsonroot + xid + ".json", function( data ) {
                    console.log(data);
                    var xcato = data.category;
                    if(isvillager){
                        xcato = "Villagers";
                    }
                    var xcat = slugify(xcato.toLowerCase());

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
                        var rerender = $("<button class='rerender'>RE-RENDER 🐸</button>");
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
