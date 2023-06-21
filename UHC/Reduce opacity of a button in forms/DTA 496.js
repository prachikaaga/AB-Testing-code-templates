// DTA-496 - UHC Next OLE button - https://experience.adobe.com/#/@uhc/target/activities/activitydetails/A-B/uhc_m_r_xx_amp_umsmsolenextbuttonstatusqa

<script>
setInterval(function() 
{ 
 // page 10% progress

if($(".globalTitle")[0].innerHTML == 'Your Information – Name')
{
    var first_name = document.querySelector("#FirstName").value;
    var last_name = document.querySelector("#LastName").value;

if (first_name!='' && last_name!='')
{
    document.querySelector("#ole-form-controls").children[0].childNodes[1].style.opacity = "100%";
}
else{
    document.querySelector("#ole-form-controls").children[0].childNodes[1].style.opacity = "40%";
    }

}

// page 12% progress

if($(".globalTitle")[0].innerHTML == 'Your Information – Contact Information')
{
    var addr = document.querySelector("#AddressLine1").value
    var city = document.querySelector("#City").value
    var alt_mail_yes = document.querySelector("#alt-address-yes").checked
    var alt_mail_no = document.querySelector("#alt-address-no").checked
    var email = document.querySelector("#Email").value
    var phone_no = document.querySelector("#PhonePrimary").value

    var alt_mail_addr = document.querySelector("#MailingAddressLine1").value
    var alt_mail_city = document.querySelector("#MailingCity").value
    var alt_state = document.querySelector("#MailingState").value
    var alt_zip = document.querySelector("#MailingZipCode").value

    if (addr!='' && city!='' && ((alt_mail_yes==true && alt_mail_addr!='' && alt_mail_city!='' && alt_state!='' && alt_zip!='') || (alt_mail_no==true)) && email!='' && phone_no!='')
    {
        document.querySelector("#ole-form-controls > div > button.cta-button.next-button.action_next").style.opacity = "100%"
    }
    else{
        document.querySelector("#ole-form-controls > div > button.cta-button.next-button.action_next").style.opacity = "40%"
    }

}


// page 22% progress

// if(document.querySelector("#ole-form > div.ole-form-header > h1 > div > span.globalTitle").innerHTML == 'Your Information – Guaranteed Acceptance')
// {
//     var aarp_y = document.querySelector("#PlanEffIn6OfEligible_1").checked;
//     var aarp_n = document.querySelector("#PlanEffIn6OfEligible_2").checked;

//     var gua_y = document.querySelector("#GI30dayBday_1").checked;
//     var gua_n = document.querySelector("#GI30dayBday_2").checked;

//     var guar_y = document.querySelector("#CAGuaranteedAcceptance_1").checked;
//     var guar_n = document.querySelector("#CAGuaranteedAcceptance_2").checked;

//     var guide_y = document.querySelector("#LostCoverage_1").checked;
//     var guide_n = document.querySelector("#LostCoverage_2").checked;

//     var conc_y = document.querySelector("#GIClarify_1").checked;
//     var conc_n = document.querySelector("#GIClarify_2").checked;

// if (aarp_y == true || (aarp_n==true && gua_y==true) || (aarp_n==true && gua_n==true && guar_y==true) || (aarp_n==true && gua_n==true && guar_n==true && guide_n==true)
// ||(aarp_n==true && gua_n==true && guar_n==true && guide_y==true && (conc_y==true || conc_n==true)))
// {
//     document.querySelector("#ole-form-controls").children[0].childNodes[1].style.opacity = "100%";
// }
// else{
//     document.querySelector("#ole-form-controls").children[0].childNodes[1].style.opacity = "40%";
//     }

// }

// 45% progress

if($(".globalTitle")[0].innerHTML == 'Past and Current Coverage – Medicare Advantage Plans')
{

    var c_y = document.querySelector("#ExistingMedicare_1").checked
    var c_n = document.querySelector("#ExistingMedicare_2").checked

    var s_date = document.querySelector("#OtherMedplanstart").value
    var m_s_y = document.querySelector("#IntentReplace_1").checked
    var m_s_n = document.querySelector("#IntentReplace_2").checked
    var m_type_y = document.querySelector("#FirstTime_1").checked
    var m_type_n = document.querySelector("#FirstTime_2").checked
    var pol_y = document.querySelector("#DropMedSuppForThisPlan_1").checked
    var pol_n = document.querySelector("#DropMedSuppForThisPlan_2").checked

    if(c_n == true || (c_y == true && s_date!='' && (m_s_y == true || m_s_n == true) && (m_type_n == true || m_type_y == true) && (pol_n == true || pol_y == true)))
    {
        document.querySelector("#ole-form-controls").children[0].childNodes[1].style.opacity = "100%";
    }
    else{
        document.querySelector("#ole-form-controls").children[0].childNodes[1].style.opacity = "40%";
        }

}

// 48% progress

if($(".globalTitle")[0].innerHTML == 'Past and Current Coverage – Medicare Supplement Plans')
{

    var pol_m_y = document.querySelector("#ExistMedSupp_1").checked
    var pol_m_n = document.querySelector("#ExistMedSupp_2").checked

    var company = document.querySelector("#MSInsCompany").value
    var pol = document.querySelector("#MSPLAN").value 

    var re_y = document.querySelector("#ReplaceExistingMedSup_1").checked
    var re_n = document.querySelector("#ReplaceExistingMedSup_2").checked

    if(pol_m_n == true || ( pol_m_y == true && company != '' && pol != '' && (re_n == true || re_y == true))){
        document.querySelector("#ole-form-controls").children[0].childNodes[1].style.opacity = "100%";
    }
    else{
        document.querySelector("#ole-form-controls").children[0].childNodes[1].style.opacity = "40%";
        }
}

// 50% progress

if($(".globalTitle")[0].innerHTML == 'Past and Current Coverage – Other Type of Health Insurance Coverage')
{
    var cov_y = document.querySelector("#OtherInsCoverage_1").checked
    var cov_n = document.querySelector("#OtherInsCoverage_2").checked

    var com = document.querySelector("#OtherInsCompany").value

    var pol_hmo = document.querySelector("#OtherInsType_1").checked
    var maj_med = document.querySelector("#OtherInsType_2").checked
    var emp_p = document.querySelector("#OtherInsType_3").checked
    var up = document.querySelector("#OtherInsType_4").checked
    var other = document.querySelector("#OtherInsType_5").checked
    var other_val = ''
    if(document.querySelector("#otherAnswer")){
        other_val = document.querySelector("#otherAnswer").value
    }

    var st_d = document.querySelector("#OtherInsStart").value
    var rep_y = document.querySelector("#OtherInsReplace_1").checked
    var rep_n = document.querySelector("#OtherInsReplace_2").checked

    if(cov_n == true || ( cov_y == true && com!='' && (pol_hmo == true || maj_med == true || emp_p == true || up == true || (other == true && other_val!='')) && st_d!='' && (rep_n == true || rep_y == true)))
    {
        document.querySelector("#ole-form-controls").children[0].childNodes[1].style.opacity = "100%";
    }
    else{
        document.querySelector("#ole-form-controls").children[0].childNodes[1].style.opacity = "40%";
    }
}

// 52% progress

if($(".globalTitle")[0].innerHTML == 'Past and Current Coverage – Verification')
{
    var verify = document.querySelector("#CpaSignatureInd").checked

    if(verify == true)
    {
        document.querySelector("#ole-form-controls").children[0].childNodes[1].style.opacity = "100%";
    }
    else{
        document.querySelector("#ole-form-controls").children[0].childNodes[1].style.opacity = "40%";
    }
}


},200)
</script>