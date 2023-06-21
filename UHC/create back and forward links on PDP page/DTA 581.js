// DTA 581 
/* declare a variable to save the url links from previous page */
<script>

setInterval(() => {
if($("#tab-ma").hasClass("active"))
    {   var link_urls = [];
        var $all_MA_plans = document.querySelector("#plan-list-1")
        var $model_plans = $($all_MA_plans).find("div.d-flex.flex-column.gap-30")

        if($model_plans.length > 0 && link_urls.length == 0)
        {
            $($model_plans).each(function (i, $model_plan) {
                var link_modal = $($model_plan).find("div.ole-enroll").next()
                var link_href = link_modal[0].children[0].children[0].href
                link_urls.push(link_href)
            });
        }
        sessionStorage.setItem('urls_pa', link_urls);
    }
}, 200); 
</script>


<style>
    .prev_button_og{
        text-align: right !important;
        padding-top: 10px;
    }
    .next_button_og{
        text-align: right !important;
        padding-top: 20px;
    }
    @media screen and (min-width: 768px){
        .mb-lg-40 {
            margin-bottom: 30px!important;
        }
    }

</style>

<script>

setInterval(() => {
if($("#backLinkOnPD")){

    let all_urls_string = sessionStorage.getItem('urls_pa');
    if(all_urls_string!=null){
    var all_urls = all_urls_string.split(',');
    var length_urls = parseInt(Object.keys(all_urls).length,10) - 1;
    // var objectType = typeof length_urls;
    var pageurl = window.location.href
    var indexOf = $.inArray(pageurl, all_urls);
    var indexOf_prev = indexOf-1
    var indexOf_next = indexOf+1

    // add the buttons here 
    var prevbutton = $("#backLinkOnPD")[0].cloneNode(true);
    var nextbutton = $("#backLinkOnPD")[0].cloneNode(true);
    var target_block = $("#back-profile-web").parent()[0].children[2];

    if(prevbutton.id != 'prev_button_og'){
        prevbutton.id = 'prev_button_og';
        prevbutton.classList.add('prev_button_og');
        prevbutton.href = '';
    }
    if ($("#prev_button_og").length == 0){
        target_block.appendChild(prevbutton);
        var indexOf_prev_n = indexOf_prev+1
        prevbutton.childNodes[2].textContent = 'View Previous Plan       '+ indexOf_prev_n;
    }
    
    if(nextbutton.id != 'next_button_og'){
        nextbutton.id = 'next_button_og';
        nextbutton.classList.add('next_button_og');
        nextbutton.href = '';
        var next_image_text= nextbutton.childNodes[1]
        nextbutton.childNodes[2].after(next_image_text)
        var next_image = nextbutton.childNodes[2]
        next_image.src = 'https://www.aarpmedicareplans.com/content/dam/commontools/vpp/redesign/icons/chevron-right-icon@2x.png';
    }
    if($("#next_button_og").length == 0){
        target_block.appendChild(nextbutton);
        var indexOf_next_n = indexOf_next+1
        nextbutton.childNodes[1].textContent = 'View Next Plan       '+indexOf_next_n+'       ';
        // next_image.children[0].style.marginLeft = '1.5%';
    }

    // section which add the url to the button depending on where the user is
    if(indexOf == 0 && length_urls>0){
        document.querySelector("#prev_button_og").style.display = 'none';
        nextbutton.href = all_urls[indexOf_next];
        // console.log("page 1" + indexOf + all_urls[indexOf_next])
    } else if (indexOf == length_urls){
        $('#next_button_og')[0].style.display = 'none';
        prevbutton.href = all_urls[indexOf_prev];
        // console.log("page end" + indexOf + all_urls[indexOf_prev])
    } else {
        prevbutton.href = all_urls[indexOf_prev];
        nextbutton.href = all_urls[indexOf_next];
        // console.log("page\n" + indexOf +"\n"+ all_urls[indexOf_prev] +"\n" +all_urls[indexOf_next])
    }
}
}
}, 200); 
</script>


//https://www.aarpmedicareplans.com/health-plans/details.html/11217/047/H3307015000/2023

//https://www.aarpmedicareplans.com/health-plans/details.html/11217/047/H3379001000/2023

//https://www.aarpmedicareplans.com/health-plans/details.html/11217/047/H3307002000/2023

//https://www.aarpmedicareplans.com/health-plans/details.html/11217/047/H3418001000/2023

//https://www.aarpmedicareplans.com/health-plans/details.html/11217/047/H3307018000/2023

//https://www.aarpmedicareplans.com/health-plans/details.html/11217/047/R5342001000/2023

//https://www.aarpmedicareplans.com/health-plans/details.html/11217/047/R5342005000/2023

//https://www.aarpmedicareplans.com/health-plans/details.html/11217/047/R5342006000/2023

//https://www.aarpmedicareplans.com/health-plans/details.html/11217/047/R5342002000/2023
