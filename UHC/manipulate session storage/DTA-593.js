//DTA-593 https://experience.adobe.com/#/@unitedhealthgroup/target/activities/activitydetails/A-B/xx_state_lps_herooptimizationmedicaidfilteridea52223

<script>
    
setInterval(() => {
var button = $(".c-hero-full-width__card ").find("a.c-button")[0];
button.onclick = function() {
  // Redirect to the specified URL
  sessionStorage.setItem('urls_pa', 'yes');
};
}, 200); 
</script>

<script>
setInterval(() => {
if($("#c-plan-results__filter-collapse")){
try {
  // Fetching the session storage value
  var button_clicked = sessionStorage.getItem("urls_pa");
  
  // Accessing the DOM elements
  var all_plans_options = $('.c-input-control .js-filter-toggle--item');
  var medicare_plans = $("#js-results-container")[0].querySelectorAll('[data-filter="medicare"]');
  var medicaid_plans = $("#js-results-container")[0].querySelectorAll('[data-filter="medicaid"]');
  var chip_plans = $("#js-results-container")[0].querySelectorAll('[data-filter="chip"]');
  var marketplace_plans = $("#js-results-container")[0].querySelectorAll('[data-filter="marketplace"]');
  var ifp_plans = $("#js-results-container")[0].querySelectorAll('[data-filter="IEXMarketplace"]');

  if (button_clicked === 'yes') {
    all_plans_options[1].checked = true;
    $(medicare_plans).each(function (i, plan) {
        plan.classList.add('u-d-none');
      });
    $(medicaid_plans).each(function (i, plan) {
      plan.classList.remove('u-d-none');
    });
    $(chip_plans).each(function (i, plan) {
     plan.classList.add('u-d-none');
    });
    $(marketplace_plans).each(function (i, plan) {
      plan.classList.add('u-d-none');
    });
    $(ifp_plans).each(function (i, plan) {
      plan.classList.add('u-d-none');
    });
    
    sessionStorage.setItem('urls_pa', 'no');
  }
} catch (error) {
  console.log('Error:', error);
}
}
}, 200); 

</script>