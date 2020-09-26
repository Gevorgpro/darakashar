let a=0;
$(".cv-children-menu").on('click', function(){
    if( a==0){
        $('.cv-mega-menu,.cv-sub-mmenu').css('opacity','1').css('transform','scaleY(1.05)').css('visibility','visible');
        a++;
    }
    else{
        $('.cv-mega-menu,.cv-sub-mmenu').css('opacity','0').css('transform','scaleY(0)').css('visibility','hidden');
        a--;
    }
  })

//    .cv-menu>ul>li:hover .cv-mega-menu,
//     .cv-menu>ul>li:hover .cv-sub-mmenu {
//         transform: scaleY(1);
//         visibility: visible;
//         opacity: 1
//     }