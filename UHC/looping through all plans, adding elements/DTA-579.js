// Target Activity Link - https://experience.adobe.com/#/@uhc/target/activities/activitydetails/A-B/uhc_m_r_xx_ma_vppduplicateelevateenrollctaonmavppplancards

// Duplicate 

// Target Activity Link - https://experience.adobe.com/#/@uhc/target/activities/activitydetails/A-B/uhc_m_r_xx_ma_vppduplicateelevateenrollctaonmavppplancards

<style>
@media screen and (max-device-width: 480px), (max-width: 690px){
    .cloned_enroll{
        width: 150px !important;
        padding-top: 5% !important
    }
}

</style>
<script>
setInterval(() => {
    var $all_MA_plans = document.querySelector("#plan-list-1")
    var $model_plans = $($all_MA_plans).find("div.d-flex.flex-column.gap-30")

    if($model_plans.length > 0)
    {
        // get each plan block
        var $enrolls = $($model_plans).find('div.uhc-plan-card__footer.hide-print > div > div.d-flex.flex-column.flex-lg-row.align-items-center > div.ole-enroll')
        var $top_sections = $($model_plans).find('div.uhc-plan-card__header')
        
        // loop through each block
        $($model_plans).each(function (i, $model_plan) {
                
            var $top_section = $top_sections[i];
            var $enroll = $enrolls[i];

            var $cloned_enroll = $enroll.cloneNode(true)
            $cloned_enroll.classList.add('mobile_view')

            // hide button in footer
            //$enroll.style.display = 'none'

            // add the button on top section
            if ($top_section.children[1].children.length == 2)
            {
                $top_section.children[1].appendChild($cloned_enroll);
                $top_section.children[1].children[0].style.paddingRight = '50px'
                $cloned_enroll.classList.add('cloned_enroll')
                $cloned_enroll.classList.remove('ole-enroll')
               // $cloned_enroll.children[0].style.paddingTop = '4%'
                $cloned_enroll.onclick = function () {
                // Trigger click event on original enroll element
                $enroll.children[0].children[0].click();
          }}
        });


}
}, 200); 
</script>

//Elevate
// Target Activity Link - https://experience.adobe.com/#/@uhc/target/activities/activitydetails/A-B/uhc_m_r_xx_ma_vppduplicateelevateenrollctaonmavppplancards

<style>
@media screen and (max-device-width: 480px), (max-width: 690px){
    .cloned_enroll{
        width: 150px !important;
        padding-top: 5% !important;
    }}
}
@media only screen (min-width: 690px){
    .cloned_enroll{
        padding-top: 3% !important;
    }
}

</style>
<script>
setInterval(() => {
    var $all_MA_plans = document.querySelector("#plan-list-1")
    var $model_plans = $($all_MA_plans).find("div.d-flex.flex-column.gap-30")

    if($model_plans.length > 0)
    {
        // get each plan block
        var $enrolls = $($model_plans).find('div.uhc-plan-card__footer.hide-print > div > div.d-flex.flex-column.flex-lg-row.align-items-center > div.ole-enroll')
        var $top_sections = $($model_plans).find('div.uhc-plan-card__header')
        
        // loop through each block
        $($model_plans).each(function (i, $model_plan) {
                
            var $top_section = $top_sections[i];
            var $enroll = $enrolls[i];

            var $cloned_enroll = $enroll.cloneNode(true)
            $cloned_enroll.classList.add('mobile_view')

            // hide button in footer
            $enroll.style.display = 'none'

            // add the button on top section
            if ($top_section.children[1].children.length == 2)
            {
                $top_section.children[1].appendChild($cloned_enroll);
                $top_section.children[1].children[0].style.paddingRight = '50px'
                $cloned_enroll.classList.add('cloned_enroll')
                $cloned_enroll.classList.remove('ole-enroll')
                //$cloned_enroll.classList.add('og_enroll_padding')
               // $cloned_enroll.children[0].style.paddingTop = '4%'
                $cloned_enroll.onclick = function () {
                // Trigger click event on original enroll element
                $enroll.children[0].children[0].click();
          }}
        });


}
}, 200); 
</script>