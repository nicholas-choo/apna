
<!doctype html>
<html>
<head>
    <title>Membership Application</title>
    <meta name="description" content="Join the Asia Pacific Neurofeedback Association (APNA) through our membership page and become part of a vibrant community of clinicians, researchers, and professionals dedicated to unlocking the potential of the mind through neurofeedback and biofeedback. Gain access to exclusive resources, networking opportunities, and cutting-edge research to elevate your practice and contribute to the advancement of this transformative field.">
    <meta name="keywords" content="neurofeedback membership, biofeedback membership, APNA membership, clinicians, researchers, professionals, vibrant community, exclusive resources, networking opportunities, cutting-edge research, transformative field">
    <meta name="format-detection" content="telephone=no">
    <link rel="stylesheet" href="global.css">
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="images/APNA logo circle.png" type="image/icon type">
    <script type="text/javascript" async="" src="./javascript/plusone.js.download" gapi_processed="true"></script><script type="text/javascript" src="./javascript/jquery.js.download"></script>
    <script type="text/javascript">
      $(document).ready(function() {
      $("a.ActiveButton").bind({ mousedown:function(){if ( $(this).attr('disabled') === undefined ) $(this).addClass('Activated');}, mouseleave:function(){ if ( $(this).attr('disabled') === undefined ) $(this).removeClass('Activated');}, mouseup:function(){ if ( $(this).attr('disabled') === undefined ) $(this).removeClass('Activated');}});
      $('#search_bar').keypress(function(event) { if ( event.keyCode == 13 ) window.location.href = 'search_result.html?site_search_results_2='+document.getElementById('search_bar').value+'&depth=0&swr=false'; });
      $('#search_btn').click(function(event) { window.location.href = 'search_result.html?site_search_results_2='+document.getElementById('search_bar').value+'&depth=0&swr=false'; });
      });
    </script>
</head>
<body>
    <nav class="nav-bar">
        <div class="nav-bar-cont">
            <a href="index.html"><img src="images/APNA logo.png"></a>
            <div class="nav-bar-search">
                <input class="search-bar-input" type="text" id="search_bar" name="search_bar" placeholder="Search..."/>
                <input class="search-bar-submit" type="image" id="search_btn" src="images/general_icons/search.png" name="submit" alt="Submit"/>
            </div>
        </div>
        <div class="nav-bar-links">
            <div class="nav-bar-link-cont">
                <ul>
                    <a href="index.html">Home</a>
                </ul>
            </div>
            <div class="nav-bar-link-cont">
                <ul>
                    <a href="about_apna.html" class="dropdown">About APNA</a>
                </ul>
                <div class="submenu">
                    <ul>
                        <a href="apna_story.html">The APNA Story</a>
                        <a href="board_and_committee_2021.html">Board & Committee</a>
                        <a href="foreword.html">Foreword by Past President of APNA</a>
                    </ul>
                </div>
            </div>
            <div class="nav-bar-link-cont">
                <ul class="highlighted">
                    <a href="membership.html" class="dropdown selected">Membership</a>
                </ul>
                <div class="submenu">
                    <ul>
                        <a href="membership_list.html">Membership List</a>
                        <a href="membership_fee.html">Membership Fee</a>
                    </ul>
                </div>
            </div>
            <div class="nav-bar-link-cont">
                <ul>
                    <a href="certification.html">Certification</a>
                </ul>
            </div>
            <div class="nav-bar-link-cont">
                <ul>
                    <a href="research_institutes.html">Research Institutes</a>
                </ul>
            </div>
            <div class="nav-bar-link-cont">
                <ul>
                    <a href="publications.html">Publications</a>
                </ul>
            </div>
            <div class="nav-bar-link-cont">
                <ul>
                    <a href="visitor_info.html">Visitor Info</a>
                </ul>
            </div>
            <div class="nav-bar-link-cont">
                <ul>
                    <a href="contact_us.html">Contact Us</a>
                </ul>
            </div>
            <div class="nav-bar-link-cont">
                <ul>
                    <a href="conference.html" class="dropdown">Conference</a>
                </ul>
                <div class="submenu">
                    <ul>
                        <a href="#">2015 Neurofeedback Conference</a>
                        <a href="#">2016 Neurofeedback conference</a>
                        <a href="apna_con_2017.html">2017 Neurofeedback Conference</a>
                        <a href="apna_con_2018.html">2018 Neurofeedback Conference</a>
                        <a href="apna_con_2023.html">2023 Neurofeedback Conference</a>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <nav class="nav-bar-minimized">
        <div class="nav-bar-min-cont">
            <a href="index.html"><img src="images/APNA logo.png"></a>
            <button onclick="openBurgerCont()">&#x2630;</button>
        </div>
        <div class="nav-burger-cont-cont" id="burger-cont">
            <div class="nav-burger-cont">
                <div class="nav-burger-close-cont">
                    <button onclick="closeBurgerCont()">&#x2716;</button>
                </div>
                <div class="nav-burger-menu">
                    <form class="nav-bar-min-search">
                        <input class="min-search-bar-input" type="text" id="search_bar" name="search_bar" placeholder="Search..."/>
                        <input class="min-search-bar-submit" type="image" src="images/general_icons/search.png" name="submit" alt="Submit"/>
                    </form>
                    <div class="nav-bar-min-links-cont">
                        <ul>
                            <a href="index.html">Home</a>
                        </ul>
                        <ul>
                            <div class="nav-bar-min-links">
                                <button>
                                    <span id="dd1-plus" onclick="openDropdown('about_apna')">+</span>
                                    <span id="dd1-minus" style="display: none;" onclick="closeDropdown('about_apna')">-</span>
                                </button>
                                <a href="about_apna.html">About APNA</a>
                            </div>
                        </ul>
                        <ul class="nav-bar-min-dropdown-cont" id="about_apna">
                            <div class="nav-bar-min-dropdown">
                                <a href="apna_story.html">The APNA Story</a>
                                <a href="board_and_committee_2021.html">Board & Committee</a>
                                <a href="foreword.html">Foreword by Past President of APNA</a>
                            </div>
                        </ul>
                        <ul>
                            <div class="nav-bar-min-links">
                                <button>
                                    <span id="dd2-plus" onclick="openDropdown('membership')">+</span>
                                    <span id="dd2-minus" style="display: none;" onclick="closeDropdown('membership')">-</span>
                                </button>
                                <a href="membership.html">Membership</a>
                            </div>
                        </ul>
                        <ul class="nav-bar-min-dropdown-cont" id="membership">
                            <div class="nav-bar-min-dropdown">
                                <a href="membership_list.html">Membership List</a>
                                <a href="membership_fee.html">Membership Fee</a>
                            </div>
                        </ul>
                        <ul>
                            <a href="certification.html">Certification</a>
                        </ul>
                        <ul>
                            <a href="research_institutes.html">Research Institutes</a>
                        </ul>
                        <ul>
                            <a href="publications.html">Publications</a>
                        </ul>
                        <ul>
                            <a href="visitor_info.html">Visitor Info</a>
                        </ul>
                        <ul>
                            <a href="contact_us.html">Contact Us</a>
                        </ul>
                        <ul>
                            <div class="nav-bar-min-links">
                                <button>
                                    <span id="dd3-plus" onclick="openDropdown('conference')">+</span>
                                    <span id="dd3-minus" style="display: none;" onclick="closeDropdown('conference')">-</span>
                                </button>
                                <a href="conference.html">Conference</a>
                            </div>
                        </ul>
                        <ul class="nav-bar-min-dropdown-cont" id="conference">
                            <div class="nav-bar-min-dropdown">
                                <a href="#">2015 Neurofeedback Conference</a>
                                <a href="#">2016 Neurofeedback Conference</a>
                                <a href="apna_con_2017.html">2017 Neurofeedback Conference</a>
                                <a href="apna_con_2018.html">2018 Neurofeedback Conference</a>
                                <a href="apna_con_2023.html">2023 Neurofeedback Conference</a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <section class="filler"></section>
<section class="sec flex-center">
            <div class="membershipapp-sec width60vw">
                <form id="membership_application_form" action="membership_app_submitForm.php" method="post" onsubmit="return validateForm()">
                <h2>ASIA PACIFIC NEURO-BIOFEEDBACK ASSOCIATION (APNA)</h2>
                <h3 class=".sent-nofication">Membership Registration Form</h3>
                <input type="text" id="jobTitleInput" name="JobTitle" hidden>
                <div class="membershipapp-sec-cont">
                    <h3>Personal Particulars</h3>
                    <table>
                        <tr>
                            <th> <label for="Title">Title:</label> </th>
                            <td colspan="3"> <select name="Title" required>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Miss">Miss</option>
                            <option value="Mdm">Mdm</option>
                            <option value="Dr">Dr</option>
                            </select>
                        </td>
                        </tr>
                        <tr>
                            <th> <label for="FirstName">First Name:</label> </th>
                            <td colspan="3"> <input type="text" name="FirstName" required/></td>
                        </tr>
                        <tr>
                            <th> <label for="LastName">Last Name:</label> </th>
                            <td colspan="3"> <input type="text" name="LastName" required/></td>
                        </tr>
                        <tr>
                            <th> <label for="CompanyName">Company Name:</label> </th>
                            <td colspan="3"> <input type="text" name="CompanyName" required/></td>
                        </tr>
                        <tr>
                            <th> <label for="Occupation">Occupation:</label> </th>
                            <td colspan="3"> <input type="text" name="Occupation" required/></td>
                        </tr>
                        <tr>
                            <th> <label for="DateOfBirth">Date of Birth:</label> </th>
                            <td> <input id="DateOfBirth" type="date" name="DateOfBirth" required/> </td>
                            <th> <label for="Nationality">Nationality:</label> </th>
                            <td> <input id="Nationality" type="text" name="Nationality" required/> </td>
                        </tr>
                    </table>
                    <h3>Contact Details</h3>
                    <table>
                        <tr>
                            <th> <label for="Telephone">Telephone:</label> </th>
                            <td> <input id="Telephone" type="text" name="Telephone" required/> </td>
                            <th> <label for="MobilePhone">Mobile No.:</label> </th>
                            <td> <input id="MobilePhone" type="text" name="MobilePhone" required/> </td>
                        </tr>
                        <tr>
                            <th> <label for="EmailAddress1">Email Address 1:</label> </th>
                            <td colspan="3"> <input type="text" name="EmailAddress1" required/></td>
                        </tr>
                        <tr>
                            <th> <label for="EmailAddress2">Email Address 2:</label> </th>
                            <td colspan="3"> <input type="text" name="EmailAddress2" required/></td>
                        </tr>
                        <tr>
                            <th> <label for="HomeAddress">Home Address:</label> </th>
                            <td colspan="3"> <input type="text" name="HomeAddress" required/></td>
                        </tr>
                        <tr>
                            <th> <label for="State">State:</label> </th>
                            <td> <input id="State" type="text" name="State" required/> </td>
                            <th> <label for="Country">Country:</label> </th>
                            <td> <input id="Country" type="text" name="Country" required/> </td>
                        </tr>
                        <tr>
                            <th> <label for="OfficeAddress">Office Address:</label> </th>
                            <td colspan="3"> <input type="text" name="OfficeAddress" required/></td>
                        </tr>
                        <tr>
                            <th> <label for="Qualifications">Qualification(s):</label> </th>
                            <td colspan="3"> <input type="text" name="Qualifications" required/></td>
                        </tr>
                        <tr>
                            <th colspan="2"> <label for="PracticeYears">Number of years of practice in Neurofeedback:</label> </th>
                            <td colspan="2"> <input type="text" name="PracticeYears" required/></td>
                        </tr>
                        <tr>
                            <th colspan="2"> <label for="WhatsAppOption">Would you like to join APNA WhatsApp chatgroup? <br> <sub> (open to APNA members only) </sub></label> </th>
                            <td colspan="2"> <select name="WhatsAppOption" required> <option value="Yes">Yes</option> <option value="No">No</option> </select>
                        </tr> 
                        <tr>
                            <th> <label for="DateJoined">Date Joined:</label> </th>
                            <td colspan="3"> <input type="date" name="DateJoined" required/></td>
                        </tr>  
                    </table>      
                </div>
                <div class="membershipapp-sec-cont-canvas">
                </div>
                <div class="membershipapp-sec-cont-endnotes">
                    <p>- Please email the completed form to : 
                    <br> APNA Secretariat at: <a href = "mailto: APNA@apna.asia">APNA@apna.asia</a>
                    <br> Cc to: <a href = "mailto: admin@spectrumlearning.com.sg">admin@spectrumlearning.com.sg</a> </p>
                    <p>- APNA Secretariat will liaise with Applicant via email regarding mode of payment. </p>
                    <p>- Please note that membership application is considered successful only upon receipt of membership fee in full.</p>
                </div>
                <input type="submit" value="Submit">
    </div>
</section>
<footer class="footer">
    <div class="footer-cont">
        <div class="footer-inner-cont1">
            <div class="footer-page-links">
                <a href="#">Website Terms and Conditions</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Site-map</a>
            </div>
            <div class="footer-social-links">
                <a onclick="window.open('http://www.facebook.com/sharer.php?u=http://www.apna.asia/index.html', '_blank')" class="social-icon-44 social-white-bg"><img src="images/general_icons/facebook.png"></a>
                <a onclick="window.open('https://twitter.com/share?url=http://www.apna.asia/index.html', '_blank')" class="social-icon-32 social-twitter-bg"><img src="images/general_icons/twitter.png"></a>
                <a onclick="window.open('https://www.linkedin.com/shareArticle?mini=true&url=http://www.apna.asia/index.html', '_blank')" class="social-icon-44 social-white-bg"><img src="images/general_icons/linkedin.png"></a>
                <a onclick="window.open('mailto:?body=http://www.apna.asia/index.html', '_blank')" class="social-icon-32 social-white-bg"><img src="images/general_icons/mail.png"></a>
            </div>
        </div>
        <div class="footer-inner-cont2">
            <h6 class="footer-address">20 Collyer Quay #23-01 Singapore 049319</h6>
            <div class="footer-contact-info">
                <h6>Tel: +65-6834-9476</h6>
                <h6>Email: APNA@apna.asia</h6>
            </div>
        </div>
        <h6>© 2016 Asia Pacific Neuro-biofeedback Association<br>All Rights Reserved | Singapore</h6>
    </div>
</footer>
<script>
    // navigation bar button functions

    function openBurgerCont() {
        var x = document.getElementById("burger-cont");
        var bodyElement = document.querySelector('body');
        if (x.style.display != "block") {
            x.style.display = "block";
            bodyElement.style.overflow = "hidden";
        }
    }

    function closeBurgerCont() {
        var x = document.getElementById("burger-cont");
        var bodyElement = document.querySelector('body');
        if (x.style.display != "none") {
            x.style.display = "none";
            bodyElement.style.overflow = "auto";
        }
    }

    function openDropdown(y) {
        var x = document.getElementById(y);

        if (y == "about_apna") {
            var plus = document.getElementById("dd1-plus");
            var minus = document.getElementById("dd1-minus");
        } else if (y == "membership") {
            var plus = document.getElementById("dd2-plus");
            var minus = document.getElementById("dd2-minus");
        } else if (y == "conference") {
            var plus = document.getElementById("dd3-plus");
            var minus = document.getElementById("dd3-minus");
        }

        if (x.style.display != "block") {
            x.style.display = "block";
            plus.style.display = "none";
            minus.style.display = "block";
        }
    }

    function closeDropdown(y) {
        var x = document.getElementById(y);

        if (y == "about_apna") {
            var plus = document.getElementById("dd1-plus");
            var minus = document.getElementById("dd1-minus");
        } else if (y == "membership") {
            var plus = document.getElementById("dd2-plus");
            var minus = document.getElementById("dd2-minus");
        } else if (y == "conference") {
            var plus = document.getElementById("dd3-plus");
            var minus = document.getElementById("dd3-minus");
        }

        if (x.style.display != "none") {
            x.style.display = "none";
            plus.style.display = "block";
            minus.style.display = "none";
        }
    }
</script>
<script>
    // damn you samsung internet browser

    if (navigator.userAgent.match(/samsung/i)) {
        alert("Your browser (Samsung Internet) may not show this website" + 
              "correctly. Please consider using a standards-compliant" + 
              "browser instead. \n\n" +
              "We recommend Firefox, Microsoft Edge, or Google Chrome.");
    }
</script>
<script>
    function validateForm() {
        if (isFormFilled()) {
            // 验证成功，返回 true，允许表单提交
            return true;
        } else {
            // 验证失败，弹出提示信息，并返回 false，阻止表单提交
            alert("Please fill in all required fields.");
            return false;
        }
    }
    
    function isFormFilled() {
        const form = document.getElementById('membership_application_form');
        const inputs = form.querySelectorAll('input, select, textarea');
        
        for (const input of inputs) {
            if (input.required && !input.value.trim()) {
                return false;
            }
        }
        
        return true;
    }
</script>
<script type="text/javascript">
function getQueryParameterValue(variable) {
    var query = window.location.hash.substring(1); 
    var queryParams = query.split('?');
    for (var i = 0; i < queryParams.length; i++) {
        var pair = queryParams[i].split('=');
        if (decodeURIComponent(pair[0]) === variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    return null;
}

var jobTitle = getQueryParameterValue("jobtitle");

var jobTitleInput = document.getElementById("jobTitleInput");
if (jobTitleInput && jobTitle) {
    jobTitleInput.value = jobTitle;
}

if (jobTitle == null || jobTitle === 'undefined') {
    window.location.href = "membership.html";
}
</script>
</body>
</html>