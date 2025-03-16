
    function moveUp(){
        let mt = parseInt(box.style.marginTop)
        if (mt > 0) 
        mt -= 5
        box.style.marginTop = mt + 'px'
    }

    function moveDow(){
        let mt = parseInt(box.style.marginTop); 
        mt += 5;
        box.style.marginTop = mt + 'px';
    } 