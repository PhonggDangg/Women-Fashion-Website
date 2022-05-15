function changeProductList(type, element)
{
    let tab= document.getElementsByClassName('filter-bar-btn');
    for(i=0; i<tab.length; i++){
        tab[i].style.background='#fff';
        tab[i].style.color='black';
    }
    element.style.background='#ee4d2d';
    element.style.color='white';
    document.getElementById(type).style.display='flex';
    document.getElementById(type).style.justifyContent='space-between';
    document.getElementById(type).style.width='100%';
    switch (type) {
        case 'newest':
            document.getElementById('best-sell').style.display='none';
            document.getElementById('trend').style.display='none';
            break;
    
        case 'best-sell':
            document.getElementById('newest').style.display='none';
            document.getElementById('trend').style.display='none';
            break;
        case 'trend':
            document.getElementById('newest').style.display='none';
            document.getElementById('best-sell').style.display='none';
            break;
    }
}