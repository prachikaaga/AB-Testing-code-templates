<style>
    .og_button{
        margin-top: 0px;
        padding-right: 5%;
        padding-left: 5%;
    }
</style>

<script>
setInterval(() => {
try{
var $plan_list = $("#js-results-container")[0].children

$($plan_list).each(function (i, $plan) {
    if($plan.dataset.filter!="medicare" && $plan.id!='js-results-promo-card' && $plan.dataset.filter!="IEXMarketplace"){
        if($plan.querySelectorAll('[data-event-name="steps_to_enroll"]').length==0 && i<$plan_list.length-1)
        {
            $view_plan_details = $plan.querySelectorAll('[data-event-name="view plan details"]')[0];
            $steps_to_enroll = $plan.querySelectorAll('[data-event-name="view plan details"]')[0].cloneNode(true);
            $steps_to_enroll.dataset.eventName = 'steps_to_enroll';
            $steps_to_enroll.text = 'Steps to Enroll';
            $new_href = $steps_to_enroll.href + '/how-to-enroll';
            $steps_to_enroll.classList.add('ttRight','c-button','c-button--orange','og_button');
            $steps_to_enroll.href = $new_href;
            $view_plan_details.parentNode.insertBefore($steps_to_enroll, $view_plan_details.nextSibling);
            
        }
    }
  });
}catch(error){
    console.log("Error", error)
}
}, 200); 
</script>