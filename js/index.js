window.onload = function(){
    
    var radius=0;
    var ctxRet;
    var ctx;
    function skillsChart(idName,skill){
        var el = document.getElementById(idName); // get canvas
        var size=(window.screen.width)*0.1;
        var options = {
            percent:  el.getAttribute('data-percent') || 25,
            size: el.getAttribute('data-size') || size,
            lineWidth: el.getAttribute('data-line') || 15,
            rotate: el.getAttribute('data-rotate') || 0
        }

        var canvas = document.createElement('canvas');
        canvas.style.display= "block";
        canvas.style.position="absolute";
        canvas.style.top=0;
        canvas.style.left=0;
        
    
        var span = document.createElement('span');
        
    
        span.textContent = skill+"\n"+options.percent + '%';
            
        if (typeof(G_vmlCanvasManager) !== 'undefined') {
            G_vmlCanvasManager.initElement(canvas);
        }

        ctx = canvas.getContext('2d');
        canvas.width = canvas.height = options.size;
        canWidth=canvas.width;
        canHeight=canvas.height;
        
        span.style.color="black";
        span.style.display="block";
        span.style.lineHeight=canHeight+"px";
        span.style.textAlign="center";
        span.style.width=canWidth+"px";
        span.style.fontFamily="'Quicksand', sans-serif";
        span.style.fontsize="40px";
        span.style.fontWeight=100;
        span.style.marginLeft=5+"px";
        el.appendChild(span);
        el.appendChild(canvas);

        ctx.translate(options.size / 2, options.size / 2); // change center
        ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

        //imd = ctx.getImageData(0, 0, 240, 240);
        radius = (options.size - options.lineWidth) / 2;
        return options
    }
    var drawCircle = function(color, lineWidth, percent) {
        
            percent = Math.min(Math.max(0, percent || 1), 1);
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
            ctx.strokeStyle = color;
            ctx.lineCap = 'round'; // butt, round or square
            ctx.lineWidth = lineWidth
            
            ctx.stroke();
    };





    var ancestor = document.getElementById('Skills'),
    descendents = ancestor.getElementsByTagName('div');
    for( var i=0;i<descendents.length;i++){
        console.log(descendents[i].getAttribute( 'id' ))
        idName=descendents[i].getAttribute( 'id' )
        skill=descendents[i].getAttribute( 'skill' )
        options=skillsChart(idName,skill)
        drawCircle('grey', options.lineWidth, 100 / 100);
        drawCircle('#3A3030', options.lineWidth, options.percent / 100);
    }
    
 };

 
