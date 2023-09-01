function GetSiteSearchResults(
	newWindow,
	frameObject,
	frameObjectName,
	fontFace,
	fontSize,
	fontColour,
	linkFace,
	linkSize,
	linkColour,
	bgColour,
	resultsText
  ) {
	// ... Function body ...
	var screenWidth = window.innerWidth;
	var fontSize = "1.6vw"; // Default font size for desktop
	var linkSize = "1.6vw"; // Default link size for desktop
  
	if (screenWidth <= 500) {
	  fontSize = "1.8vw";; // Use mobile font size for screens up to 500px wide
	  linkSize = "1.8vw";  // Use mobile font size for screens up to 500px wide
	} else if (screenWidth <= 970) {
	  fontSize = "1.8vw";; // Use tablet font size for screens up to 970px wide
	  linkSize = "1.8vw";  // Use tablet font size for screens up to 970px wide
	}
	// Process search terms from URL and parameters
	var sTerms = "";
	var iDepth = 0;
	// ... Logic to extract search terms from URL ...
	var sURL = new String(window.location.href);
	if (sURL.indexOf("swr=true") != -1)
		return;
	if (sURL.indexOf("?") > 0)
	{
	var arrParams = sURL.split("?" );
	var arrURLParams = arrParams[1].split("&" );
	for (var i=0;i<arrURLParams.length;i++)
	{
	var sParam = arrURLParams[i].split("=" );
	var sValue = decodeURIComponent(sParam[1]);
	if( decodeURIComponent(sParam[0]) == frameObjectName)
		sTerms = sValue;
	if( decodeURIComponent(sParam[0]) == "depth")
		iDepth = parseInt(sValue);
	}
	}
	// Get the document object of the target frame
	var d = frameObject.document;
  
	// If no search terms, clear the frame and return
	if (sTerms == "") {
	  d.open();
	  d.write("<html><head></head><body style=\"background: transparent;\"></body></html>");
	  d.close();
	  return;
	}
	var sBack=""; for (i=0; i<iDepth; i++) sBack+='..\\\\';
	// Write HTML content to the frame
	d.open();
	d.write("<!doctype html>");
	d.write("<html lang=\"en\">");
	// ... Writing metadata and style ...
	d.write("<head>");
	d.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">");
	d.write("<style>");
	d.write("    font-size: 1.6vw; ");
	d.write("@media only screen and (max-width: 500px) {");
	d.write("  body {");
	d.write("    font-size: 1.8vw; ");
	d.write("  }");
	d.write("}");
	
	d.write("@media only screen and (max-width: 970px) {");
	d.write("  body {");
	d.write("    font-size: 1.8vw; ");
	d.write("  }");
	d.write("}");
	d.write("</style>");
	d.write("</head>");
	d.write("<body style=\"overflow-y: hidden; display: flex; justify-content: center; height: auto; width:98%; text-align: center; margin: 0vw 0vw 0vw 0vw; font-family: "+fontFace+"; color: "+fontColour+"; background: "+bgColour+";\">");
	// Write search results div and JavaScript code
	d.write("<div id=\"wpSearchResults\"></div>");
	d.write("<script type=\"text/javascript\">");
	// ... JavaScript functions for navigation and search ...
	d.write("var wordMap = new Array(\" home asia pacific neurobiofeedback association apna commitment key areas of focus upcoming event newsletter sign up resources experts community \",\" \",\" about mission history vision purpose statement values team impact leadership \",\" story origin starting point inspiration beginnings challenges milestones collaboration \",\" board committee roles profiles members pcommittee kenneth kang president prof data susie vice-chancellor pebbles consultancy vice-president aamir saad malik cisir publication jessica secretary ting treasurer conference appointed executive committees activities membership outreach ethics finance nomination public info structure \",\" membership member members application clinician practitioner student eligibility categories require requirement \",\" sbcia spectrum biofeedback certification assessment recognition \",\" research institutes spectrum learning universiti teknologi petronas utp collaborations resources \",\" publications neuroestern newsletter name email signup journal subscription \",\" info for visitors infomation what is definition faqs \",\" contact us map enquiry feedback message inquiries queries support suggestions concerns question issue location follow address phone number \",\" membership member members list life members last name first occupation company year experience neurofeedback biofeedback kang kenneth managing director spectrum learning pte ltd see ching mey susie educational counseling psychology universiti sains malaysia cheah hui ming neurofeedback therapist loh guan lye specialist centre chiah boon sun neurofeedback therapist tsl consultation training james fay koh linda psychotherapist olive therapy lim rachel woey li educator/principal tdj education sdn bhd sin kim-hung assistant the hong kong polytechnic university wong eva principal happyland special education centre zhang zhong wei ho eric tatt wei lecturer universiti teknologi petronas joe thenmoliee psychologist kids testing dyslexia centre ng thian watt speaker/trainer quantum dynamic human development santoso roberts wahyu wihartana sp.s mkes neurologist rspau dr s hardjolukito yogyakarta wong weng fook trainer quantum dynamic human development yuliana santi psychiatrist prof dr soerojo magelang psychiatric hospital gan bo principal emotion coach acuteen academy low ting min consultant spectrum learning pte ltd malik aamir associate professor universiti teknologi petronas wahedi muhammad obaidullah khan child specialist paediatrician medical college for women hospital fong eleanor jr consultant spectrum learning pte ltd ng wei siong alex clinical/neuro-psychologist/counselor ramsay sime sime darby medical centre khuwuthyakorn panu psychiatrist saunprung psychiatric hospital lee shin ying jerry administrator association resources education for autistic children lion reach lee kim brain trainer kampung senang charity education foundation yeo jolene psychologist spectrum of life lye travis aik wei assistant psychologist spectrum of life si toh vernice meng yi psychologist spectrum of life kamel nidal associate professor universiti teknologi petronas faye ibrahima lecturer universiti teknologi petronas lee yoot khuan associate professor universiti teknologi mara lee joachim counsellor dewi suzy yusna child psychiatrist luthfiana anna medical doctor neurologist yarsi university jarkarta ramli yetty medical doctor neurologist medical faculty university indonesia van piggelen daphne counselling psychologist jian wen gan software engineer zhongshan ecg electronic technology co ltd matsuyama sudarawee neurofeedback practitioner brain trainer bangkok koo hiro kian yong psychologist clinical hypnotherapist hypnosis integrative hub fauzan norsiah lecturer universiti malaysia sarawak unimas tan dawn assistant director senior counsellor arpandy ghea hill tim psychologist brain therapy centre banerji subhasis engineer synphne pte ltd \",\" website t&c website terms and conditions legal laws regulations agree copyright constraint agreement acceptance intellectual property prohibited disclaimer dispute accessibility \",\" privacy policy legal owner collected agreement acceptance intellectual disclaimer \",\" \",\" conferences events learning sharing networking neurofeedback conference 2015 2016 2017 collaboration jointly organized penang malaysia hotel royal penang malaysia conferences past themes agenda details venue \",\" membership member members application join process form personal first name last email home address city state postal code country qualification list title date birth nationality work company name occupation mobile phone years experience \",\" \",\" photo gallery neurofeedback conference 2015 \",\" \",\" foreword by president dr kenneth kang spectrum leaming pte ltd established oversight welcome appreciation future achievements inspiration aspirations \",\" membership fee professional clinicians practitioners annual usd 65 5 years usd 300 10 years usd 550 lifetime usd 750 affiliates annual usd 65 5 years usd 300 10 years usd 550 students annual usd45 \", \" conference speakers 2023 agenda venue register registration symposiums learning \", \" 2017 board committee leadership responsibilities team organizational structure roles oversight governance \", \" 2019 board committee leadership responsibilities team organizational structure roles oversight governance \", \" 2021 board committee leadership responsibilities team organizational structure roles oversight governance \", \" 2015 2016 2017 2018 conference speakers agenda venue register registration symposiums learning \", \" membership member members list \", \" \",\" asia pacific journal of neurotherapy apjnt \",\" asia pacific neurofeedback/biofeedback conference kuala lumpur malaysia 2017 \",\" asia pacific neurofeedback/biofeedback conference chiangmai thailand 2018 \",\" video gallery of the neurofeedback 2017 conference \",\" members kuala lumpur malaysia 2017 \",\" members conference chiangmai thailand 2018 \",\" schedule conference kuala lumpur malaysia 2017  \",\" sponsor conference kuala lumpur malaysia 2017 \" );" );
 	d.write("var pageMap = new Array(\"Asia Pacific Neurobiofeedback Association (APNA)\",\"Site Search Result\",\"About APNA\",\"The APNA Story\",\"APNA Board & Committee Members\",\"APNA Membership\",\"APNA-SBCIA Certification\",\"APNA Research Institutes\",\"APNA Publications\",\"APNA Info for Visitors\",\"APNA Contact Us\",\"APNA Members\",\"APNA Website T&C\",\"APNA Privacy Policy\",\"APNA Site Map\",\"APNA Conferences\",\"APNA Membership Application\",\"APNA Hidden pages\",\"APNA 2015 Neurofeedback Conference Photos\",\"APNA Neurofeedback Conference 2016\",\"Foreword by President of APNA \",\"Membership fee\", \"Asia Pacific Neurofeedback Conference 2023\", \"Board and Committee 2017\", \"Board and Committee 2019\", \"Board and Committee 2021\", \"Neurofeedback Conferences\", \"Membership List\", \"Template\",\"Asia Pacific Journal of Neurotherapy (APJNT)\",\"2017 Neurofeedback Conference\",\"2018 Neurofeedback Conference\",\"Neurofeedback 2017 Conference Video Gallery\",\"Conference 2017 Members\",\"Conference 2018 Members\",\"Conference 2017 Schedule\",\"Conference 2017 Sponsor\" );" );
	d.write("var linkMap = new Array(\"index.html\",\"search_result.html\",\"about_apna.html\",\"apna_story.html\",\"board_committee.html\",\"membership.html\",\"certification.html\",\"research_institutes.html\",\"publications.html\",\"visitor_info.html\",\"contact_us.html\",\"apna_members.html\",\"terms_and_conditions.html\",\"privacy_policy.html\",\"sitemap.html\",\"conferences.html\",\"membership_app.html\",\"hidden_pages.html\",\"2015_nfb_conference_photos.html\",\"2016_nfb_conference.html\",\"foreword.html\",\"membership_fee.html\", \"apna_con_2023.html\", \"board_and_committee_2017.html\", \"board_and_committee_2019.html\", \"board_and_committee_2021.html\", \"conference.html\", \"membership_list.html\", \"template.html\",\"apjnt.html\",\"apna_con_2017.html\",\"apna_con_2018.html\",\"apna_gallery_2017.html\",\"apna_members_2017.html\",\"apna_members_2018.html\",\"apna_schedule_2017.html\",\"apna_sponsor_2017.html\" );" );
	d.write("var preMap = new Array(\"Membership Certification Research Institutes LEARNING  SHARING  NETWORKING ASIA'S FIRST NEUROFEEDBACK CONFERENCE SINGAPORE 2015 8 to 10 Jan 2015 Singapore Expo Convention and Exhibition Centre MaxAtri\",\"\",\"To deepen our understanding of Asian mindfulness and meditation techniques and its health benefits with rigorous science To promote its application in society to improve health  performance and qualit\",\"Who are the clinicians practitioners  There is a growing number of professional neurofeedback and biofeedback practitioners in the AP region  These practitioners are also Medical doctors  Psychologist\",\"Protem Committee Dr  Kenneth Kang Spectrum Learning Pte Ltd President Prof  Data Dr  Susie See Vice-Chancellor USM Pebbles Consultancy Vice-President Dr  Aamir Saad Malik CISIR  UTP Publication Dir Ms\",\"If you are a practitioner in the field of health science  helping people with psychological or medical conditions and is also practicing Neurofeedback or biofeedback  we welcome you to join us as an a\",\"SBCIA is set up as the professional body to facilitate the development of biofeedback and Neurofeedback in Asia  Its missions are to  A  promote the use of biofeedback and neurofeedback in Asia throug\",\"Spectrum Learning is Asia's first neurofeedback center and QEEG center  It started offering neurofeedback therapy in 1995 and QEG analysis for neurofeedback in 2005   It is among the pioneers in neuro\",\"NeuroEstern Newsletter Name Email Newsletter Signup APNA Journal \",\"Neurofeedback and biofeedback are modern scientific techniques to train a person to self-regulate their physiological processes such as heart rate  muscle tesion  blood pressure and brain activities  \",\"ASIA PACIFIC NEURO-BIOFEEDBACK ASSOCIATION HEADQUARTER  81A Clemenceau Avenue #05- 18 UE Square Singapore 239918  Operating Hours  Tuesdays-Saturdays 09 00 AM-06 00 PM  By appointment only  Tel   +65 \",\"Life Members Last Name First Name Occupation Company Year of Experience in Neurofeedback  Biofeedback                     Professional Members Last Name First Name Occupation Company Year of Experienc\",\"Terms and Conditions The following are terms of a legal agreement between you and APNA  By accessing  browsing and or using this web site  you acknowledge that you have read  understood  and agree  to\",\"APNA is the sole owner of the information collected on this website  APNA collects information from our users at several different points on our Web sites    Personal information  In general  you can \",\"\",\"Neurofeedback Conference 2015 ASIA'S FIRST NEUROFEEDBACK CONFERENCE SINGAPORE 2015 LEARNING  SHARING  NETWORKING 8 to 10 Jan 2015 Singapore Expo Convention and Exhibition Centre MaxAtria Organized by \",\"Membership Application Form First name Last name Email Home Address 1 Home Address 2 City State Postal Code Country Qualification   Certification List Title Date of Birth Nationality Work Address 1 Wo\",\"\",\"Photo Gallery for Neurofeedback Conference 2015   \",\"\",\"It is my sincere pleasure to welcome you to this website   APNA is established to provide an oversight of the field of neurofeedback and biofeedback so as to promote and expand it as well as to safegu\",\"Affiliates   Annual  USD65  5 years  USD300  10 years  USD550 Membership Fee Students  Annual  USD45   Professional  Clinicians  Practitioners and Researchers    Annual  USD65  5 years  USD300  10 yea\", \"Revolutionizing Brain Science: Discover the future of neurofeedback at the Asia Pacific Neurofeedback Conference, where groundbreaking research and transformative applications await.\", \"The Board and Committee 2017 at the Asia Pacific Neurofeedback Association (APNA) play pivotal roles in guiding and overseeing the organization's mission and activities.\", \"The Board and Committee 2019 at the Asia Pacific Neurofeedback Association (APNA) play pivotal roles in guiding and overseeing the organization's mission and activities.\", \"The Board and Committee 2021 at the Asia Pacific Neurofeedback Association (APNA) play pivotal roles in guiding and overseeing the organization's mission and activities.\", \"Neurofeedback Conferences hosted by the Asia Pacific Neurobiofeedback Association (APNA) offer a platform for professionals, researchers, and enthusiasts in the neurobiofeedback field to gather, exchange knowledge, and explore the latest advancements.\", \"We extend our gratitude to each Lifetime Member for their unwavering commitment and for being catalysts in propelling neurobiofeedback forward.\", \" \",\"APJNT is a joint publication of Asia Pacific Neuro-Biofeedback Association (APNA) and Applied Neuroscience Society of Australasia (ANSA)\",\"ASIA PACIFIC NEUROFEEDBACK/BIOFEEDBACK CONFERENCE KUALA LUMPUR, MALAYSIA 2017. Organized By : ASIA Pacific Neuro-biofeedback Association (APNA) and University Technology PETRONAS (UTP) Center for Intelligent Signal and Imaging Research (HICOE-CISIR)\",\"ASIA PACIFIC NEUROFEEDBACK/BIOFEEDBACK CONFERENCE CHIANGMAI, THAILAND 2018. Organized By : Rajanagarindra Institute of Child Development (RICD) and ASIA Pacific Neuro-biofeedback Associatio (APNA)\",\"Video Gallery of the Neurofeedback 2017 Conference\",\"Members of Asia Pacific Neurofeedback/Biofeedback Conference Kuala Lumpur, Malaysia 2017\",\"Members of Asia Pacific Neurofeedback/Bio-feedback Conference Chiangmai\",\"Schedule of Asia Pacific Neurofeedback/Bio-feedback Conference Kuala Lumpur, Malaysia 2017\",\"Sponsor of Asia Pacific Neurofeedback/Bio-feedback Conference Kuala Lumpur, Malaysia 2017\" );" );
	d.write("function doNav(ind)" );
	d.write("{" );
	if (newWindow)
	d.write("		 window.open(\""+sBack+"\"+linkMap[ind],\"_blank\" );" );
	else
	d.write("		 parent.window.location.href=linkMap[ind];" );
	d.write("}" );
	d.write("function wpDoSearch(searchTerms) {");
	d.write("  var terms = searchTerms.toLowerCase().trim().split(\" \");");
		d.write("  if (terms === \"\") return;");
		d.write("  var results = \"\";");
		d.write("  var resultscount = 0;");
		d.write("  for (var i = 0; i < wordMap.length && resultscount < 10; i++) {");
		d.write("    var found = false;"); // New variable to track if any term is found
		d.write("    for (var j = 0; j < terms.length; j++) {");
		d.write("      if (wordMap[i].toLowerCase().indexOf(terms[j]) !== -1) {");
		d.write("        found = true;");
		d.write("        break;"); // Exit the loop if any term is found
		d.write("      }");
		d.write("    }");
		d.write("    if (found) {"); // Show results if any term is found
		d.write("      results += \"<a style=\\\"background-color: #d9d9dd; cursor: pointer; font-family: " + linkFace + "; font-size: " + linkSize + "; color: " + linkColour + "; \\\" onclick=\\\"doNav(\" + i + \" );\\\"><div style=\\\"border-radius:1.5vw; padding: 1vw 1vw 2vw 1vw; background-color: #d9d9d9; \\\"><h3 style=\\\"text-align: justify; margin-left: 1vw; margin-right: 1vw; margin-bottom: 0.1vw;\\\">\" + pageMap[i] + \"</h3><br><div style=\\\"margin-right: 1vw; margin-left: 1vw; color: #808080; text-align: justify;\\\">\" + preMap[i] + \"...</div></div></a><br><br>\";");
		d.write("      resultscount++;");
		d.write("    }");
		d.write("  }");
		d.write("  document.getElementById(\"wpSearchResults\").innerHTML = resultscount + \" " + resultsText + " \" + searchTerms + \"<br><br>\" + results;");
		d.write("}");
	
		
	// Perform the search using provided search terms
	while (sTerms.indexOf("\"") != -1) {
	  sTerms = sTerms.replace("\"", "");
	}
	d.write("wpDoSearch(\"" + sTerms + "\");");
	d.write("</script>");
  
	// Close the HTML document
	d.write("</body></html>");
	d.close();
  }

  
  