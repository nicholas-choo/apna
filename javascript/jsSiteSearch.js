﻿function GetSiteSearchResults(
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
	d.write("<head>" );
	d.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">" );
	d.write("</head>" );
	d.write("<body style=\"overflow-y: hidden; display: flex; justify-content: center; height: auto; width:98%; text-align: center; margin: 0vw 0vw 0vw 0vw; font-family: "+fontFace+"; font-size: "+fontSize+"; color: "+fontColour+"; background: "+bgColour+";\">" );
	// Write search results div and JavaScript code
	d.write("<div id=\"wpSearchResults\"></div>");
	d.write("<script type=\"text/javascript\">");
	// ... JavaScript functions for navigation and search ...
	d.write("var wordMap = new Array(\" home asia pacific neurobiofeedback association apna asia pacific neurofeedback biofeedback association apna welcome premier destination clinicians researchers professionals seeking unlock power mind through groundbreaking neurofeedback biofeedback applications empowering minds transforming lives our commitment apna believe harnessing transform lives driving pioneering research fostering collaboration raising awareness neurofeedback biofeedback unlock full potential individuals empower them thrive explore key areas focus membership join our community neurofeedback biofeedback professionals gain access exclusive resources connect with like minded individuals certification elevate your expertise with our comprehensive certification programs validating your proficiency neurofeedback biofeedback practices research institutes discover renowned institutes collaborating with apna advance research innovation field neurofeedback biofeedback visitor information learn fascinating fields neurofeedback biofeedback their applications potential benefits for visitors new these practices publications access wealth published materials scientific papers insightful publications covering latest developments neurofeedback biofeedback research upcoming events asia pacific neurofeedback conference join us for premier event field where leading experts researchers practitioners converge explore latest advancements neurofeedback biofeedback \",\" \",\" about apna vision apna vision deepen scientific understanding asian mindfulness meditation techniques exploring their profound health benefits we are dedicated promoting application these practices society aim enhancing health performance overall quality life individuals worldwide mission apna's missions encompass promoting research collaboration between researchers clinicians community advancing professional clinical use neurofeedback biofeedback asia pacific region raising awareness among general public about transformative benefits these practices together we strive foster collaborative environment elevate clinical standards empower individuals knowledge potential neurofeedback biofeedback improved well-being story more people general public now aware enormous benefits neurofeedback biofeedback restorative preventive health interventions this has led opening many centers that offer neurofeedback biofeedback interventions services asia pacific apna was formed out concerns following groups clinicians there growing number professional neurofeedback biofeedback clinicians ap region clinicians are also medical doctors psychologists counselors naturopaths other certified health practitioners clinicians offer clinical neurofeedback biofeedback services hospitals/medical centers private practices researchers there growing number researchers bio-engineering neuro-cognitive sciences medical health sciences ap region researchers from universities research institutes there often disjoint between research clinician applications researchers want collaborate with clinicians include clinical aspects into their research community as more people come know health benefits neurofeedback demand this type intervention grew rapidly but most people are unclear as what this intervention modality how works many enterprises started offer neurofeedback unfortunately many of these enterprises do not have relevant health science background practitioner's certification they also use low cost equipment to learn more explore further details about apna's governance structure guiding principles insightful perspectives from esteemed president through board committee page article of association page code ethics page foreword by president delve into heart of apna's mission values \",\" the apna story clinicians practitioners there growing number professional neurofeedback biofeedback region these also medical doctors psychologists counselors naturopaths other certified health they offer clinical services hospitals medical centers private practices together asia's asias first neurofeedback conference 2015 january singapore this historic event where almost asia pacific first time learn from each share their experiences build network support development field represented countries include south africa bangladesh malaysia indonesia hong kong japan certification have invested effort rigorous certification training which involves acquiring knowledge about what works benefits limitations fits into scheme intervention different disorders conditions supervision case reviews reports specific applications good practice ethics most importantly course requires them sufficient practicum hours under experience before being awarded concerns noted increase awareness biofeeback among general public such demand this type increased seems many enterprising business people that claim provide make quick profit increasing even promoting with concerns these setup proper qualifications science supervised cost equipment validated they enterprises understand role overall healthcare done exaggeration what give false promises very often sought help non-certified become worse very serious concern aspect neuro-biofeedback association apna formed promote information researchers researchers becoming aware enormous cognitive behavioral psychological doing research asian mindfulness meditation techniques improvements many using scientific methods includes physiological measures biomedical computer engineers attracted especially those brain imaging signal analysis biomedical brain-computer-interface with acquired over years intend apply develop useful interventions bounded strict those developments gone through research were present bio-medical trained aspects efforts will lack perspective however work crucial bring game changing break-through healthcare available existing measure markers interpret meaning measurements algorithms sophisticated signals waves fmri opto-imaging look specific correlate disease tools care their main establish close collaboration community incorporate between further advance read tried medication forms treatment limited progress improve know should carried mercy individuals sciences clinician's clinicians above members concerned find providers community \",\" protem committee kenneth kang spectrum learning president prof data susie vice-chancellor pebbles consultancy vice-president aamir saad malik cisir publication jessica secretary ting treasurer conference appointed executive apna committees activities membership outreach ethics finance nomination public info structure \",\" apna membership join practitioner field health science helping people psychological medical conditions practicing neurofeedback biofeedback welcome you join us accredited member link-up with other practitioners/clinicians reserchers field researcher doing research work field biofeedback neurofeedback welcome you join community accredited professionals link up with other reserchers practitioners clinicians field student interested field biofeedback neurofeedback welcome you join us grow your knowledge field with us clinician practitoner researcher student \",\" apna sbcia spectrum biofeedback certification institute asia sbcia sbcia set up as professional body facilitate development biofeedback neurofeedback asia missions promote use biofeedback neurofeedback asia through certification program promote research development field biofeedback neurofeedback provide platform researchers practitioners share information promote good clinical ethical practice provide continuous improvement upgrading skills knowledge all practitioners universiti teknologi petronas utp utp was established 1997 research development at core utp conducts research with petronas wide range institutions industries globally missions be institute higher learning provide opportunities pursuit knowledge expertise advancement engineering science technology enhance nations competitiveness produce well-rounded graduates who are creative innovative with potential become leaders industry nation nurture creativity innovativeness expand frontiers technology education betterment society \",\" apna research institutes spectrum learning spectrum learning asias first neurofeedback center qeeg center it started offering neurofeedback therapy 1995 qeg analysis neurofeedback 2005 it among pioneers neurofeedback qeeg fields world it places importance constantly upgrading their knowledge skills attending conferences training courses leading institutions world its mission to help individuals improve quality lives through improving brain function universiti teknologi petronas utp utp was established 1997 research development at core utp conducts research with petronas wide range institutions industries globally its missions be institute higher learning provide opportunities pursuit knowledge expertise advancement engineering science technology enhance nations competitiveness produce well-rounded graduates who are creative innovative with potential become leaders industry nation nurture creativity innovativeness expand frontiers technology education betterment society \",\" apna publications neuroestern newsletter name email signup apna journal \",\" apna info for visitors neurofeedback biofeedback neurofeedback biofeedback modern scientific techniques train person self-regulate physiological processes heart rate muscle tesion blood pressure brain activities neurofeedback biofeedback therapy neuro/bio-physiological activities client measured re-presented back feedback conscious mind client this feedback client learn regulate neuro/bio-physiological process ability lead health benefits improve physical/mental performance better quality life neurofeedback unlocking power your mind neurofeedback innovative therapeutic approach harnesses power brain's self-regulating abilities improve mental emotional well-being non-invasive drug-free technique aims optimize brain function providing real-time feedback brainwave activity through this process individuals gain greater awareness control brain's patterns leading enhanced cognitive performance emotional regulation overall quality life history neurofeedback roots neurofeedback traced back 1960s when researchers explored possibilities using biofeedback techniques influence brainwave activity over decades advancements technology neuroscience significantly contributed development neurofeedback therapeutic tool early pioneers field barry sterman joe kamiya conducted groundbreaking studies demonstrated individuals could learn modify brainwave patterns through operant conditioning rewarding desired brainwave frequencies inhibiting undesirable ones discovered people could achieve improved focus relaxation emotional regulation how neurofeedback works during neurofeedback session electrodes placed scalp detect brainwave activity electrical signals amplified displayed computer screen real-time allowing individuals observe brain's activity form visual auditory feedback through this feedback participants can learn self-regulate brainwave patterns positively reinforcing desired states reducing unwanted ones conditions treated neurofeedback neurofeedback shown promising results addressing wide range conditions including anxiety depression attention deficit hyperactivity disorder adhd insomnia stress-related disorders more can also be beneficial enhancing cognitive functions such focus memory  creativity neurofeedback benefits one key advantages neurofeedback non-invasive non-pharmacological nature making safe side-effect-free option individuals seeking optimize mental emotional health neurofeedback suitable people all ages including children adults seniors in summary neurofeedback exciting therapeutic technique taps brain's innate ability learn adapt providing real-time feedback brainwave activity individuals can train their brains achieve optimal functioning improved well-being long history research growing body evidence make neurofeedback promising option those seeking effective natural ways enhance their mental emotional capacities \",\" apna contact us map enquiry feedback message asia pacific neuro-biofeedback association headquarters singapore 36 purvis street talib centre 02-11 singapore 188613 operating hours tuesdays-saturdays 09:00 am-06:00 pm appointment only tel 65 68349476 fax 65 6830 8459 malaysia 279 jalan pekeliling 11700 pulau pinang public transport directions from bugis mrt station take exit c exit bugis junction fountain side walk along north bridge road towards direction national library look out for maybank opposite national library cross road to maybank purvis street will be on left our office located one of those red-framed windows shop houses lobby entrance to our office 2 units away from kiliney coffee shop enter lobby go to second floor driving directions purvis street opposite national library bras basah complex as one way street drivers will have enter via beach road make left turn into purvis street parking options purvis street carpark along purvis street beach centre carpark 15 beach road s189677 when you first turn into purvis street make another left turn carpark entrance on left north bridge centre carpark 420 north bridge road s188727 driving along purvis street make right turn just before maybank carpark entrance on left national library carpark 100 victoria street s188064 \",\" apna members life members last name first occupation company year experience neurofeedback biofeedback kang kenneth managing director spectrum learning pte ltd see ching mey susie educational counseling psychology universiti sains malaysia cheah hui ming neurofeedback therapist loh guan lye specialist centre chiah boon sun neurofeedback therapist tsl consultation training james fay koh linda psychotherapist olive therapy lim rachel woey li educator/principal tdj education sdn bhd sin kim-hung research assistant the hong kong polytechnic university wong eva principal happyland special education centre zhang zhong wei ho eric tatt wei lecturer universiti teknologi petronas joe thenmoliee psychologist kids testing dyslexia centre ng thian watt speaker/trainer quantum dynamic human development santoso roberts wahyu wihartana sp.s mkes neurologist rspau dr s hardjolukito yogyakarta wong weng fook trainer quantum dynamic human development yuliana santi psychiatrist prof dr soerojo magelang psychiatric hospital gan bo principal emotion coach acuteen academy low ting min consultant spectrum learning pte ltd malik aamir associate professor universiti teknologi petronas wahedi muhammad obaidullah khan child specialist paediatrician medical college for women hospital fong eleanor jr consultant spectrum learning pte ltd ng wei siong alex clinical/neuro-psychologist/counselor ramsay sime sime darby medical centre khuwuthyakorn panu psychiatrist saunprung psychiatric hospital lee shin ying jerry administrator association resources education for autistic children lion reach lee kim brain trainer kampung senang charity education foundation yeo jolene psychologist spectrum of life lye travis aik wei assistant psychologist spectrum of life si toh vernice meng yi psychologist spectrum of life kamel nidal associate professor universiti teknologi petronas faye ibrahima lecturer universiti teknologi petronas lee yoot khuan associate professor universiti teknologi mara lee joachim counsellor dewi suzy yusna child psychiatrist luthfiana anna medical doctor neurologist yarsi university jarkarta ramli yetty medical doctor neurologist medical faculty university indonesia van piggelen daphne counselling psychologist jian wen gan software engineer zhongshan ecg electronic technology co ltd matsuyama sudarawee neurofeedback practitioner brain trainer bangkok koo hiro kian yong psychologist clinical hypnotherapist hypnosis integrative hub fauzan norsiah lecturer universiti malaysia sarawak unimas tan dawn assistant director/senior counsellor arpandy ghea hill tim psychologist brain therapy centre banerji subhasis engineer synphne pte ltd \",\" apna website t&c website terms and conditions legal following terms legal agreement between you apna accessing browsing and/or using web site acknowledge that you have read understood agree bound these terms comply with all applicable laws regulations including export re-export control laws regulations if you do not agree these terms do not use this web site this web site may contain other proprietary notices copyright information terms which must be observed followed information on this web site may contain technical inaccuracies typographical errors information may be changed updated without notice apna may also make improvements and or changes in products and or programs described in this information at any time without notice apna assumes no responsibility regarding accuracy information that provided by apna use of such information at recipient's own risk apna provides no assurances that any reported problems may be resolved with use of any information that apna provides by furnishing information apna does not grant any licenses to any copyrights patents any other intellectual property rights apna does not want to receive confidential or proprietary information from you through web site please note that any information or material sent to apna will be deemed not to be confidential by sending apna any information or material you grant apna unrestricted irrevocable license to use reproduce display perform modify transmit distribute those materials or information you also agree that apna free to use any ideas concepts know-how or techniques that you send us for any purpose however we will not release your name or otherwise publicize fact that you submitted materials or other information to us unless a we obtain your permission to use your name or b we first notify you that materials or other information you submit to a particular part of this site will be published or otherwise used with your name on it or c we are required to do so by law you can learn more about apna privacy policies on the web apna makes no representations whatsoever about any other web site which you may access through this one when you access a non-apna web site even one that may contain apna-logo please understand that it is independent from apna and that apna has no control over content on that web site in addition a link to a non-apna web site does not mean that apna endorses or accepts any responsibility for content or use of such web site it is up to you to take precautions to ensure that whatever you select for your use is free of such items as viruses worms trojan horses and other items of a destructive nature in no event will apna be liable to any party for any direct indirect special or other consequential damages for any use of this web site or on any other hyper linked web site including without limitation any lost profits business interruption loss of programs or other data on your information handling system or otherwise even if we are expressly advised of the possibility of such damages all information is provided by apna on an as is basis only apna provides no representations and warranties express or implied including the implied warranties of fitness for a particular purpose merchantability and noninfringement apna may at any time revise these terms by updating this posting by using this web site you agree to be bound by any such revisions and should therefore periodically visit this page to determine the then current terms to which you are bound \",\" apna privacy policy legal apna sole owner information collected on this website apna collects information from users at several different points on web sites personal information in general you can visit us on internet without telling us who you are or giving us personal information there are times when we may need information from you for instance process order correspond provide subscription or in connection with job application we may supplement this information to complete transaction or to provide better service uses to fulfill your requests by us or by others involved in fulfillment to contact you for customer satisfaction surveys market research or in connection with certain transactions by apna and selected organizations for marketing purposes if you have permitted such use in an non-identifiable format for analysis e.g. clickstream data to develop our business relationship if you represent a apna business partner or vendor your choices when we collect information from you you may tell us that you do not want it used for further marketing contact and we will respect your wishes or contact spectrum learning at apna@apna.asia you may also turn off cookies in your browser how to contact us questions about this statement or about apna's handling of your information may be sent to apna@apna.asia \",\" \",\" apna conferences neurofeedback conference 2015 asia's asias first neurofeedback conference singapore learning sharing networking singapore expo convention exhibition centre maxatria organized spectrum learning upcoming 2016 collaboration jointly apna co-organized asia pacific biofeedback penang malaysia hotel royal penang malaysia conferences \",\" apna membership application form first name last email home address city state postal code country qualification certification list title date birth nationality work information company name occupation mobile phone years experience neurofeedback biofeedback \",\" \",\" photo gallery neurofeedback conference 2015 \",\" \",\" foreword by president of apna dr kenneth kang spectrum leaming pte ltd sincere pleasure welcome website apna established provide oversight field neurofeedback biofeedback promote expand well safeguard consumer interests like express deepest gratitude practitioners researchers come together help making establishment apna possible with that also want extend warmest invitation anyone who are passionate about field come join us and grow this field hand in hand with community benefit mankind \",\" membership fee professional clinicians practitioners researchers annual usd 65 5 years usd 300 10 years usd 550 lifetime usd 750 affiliates annual usd 65 5 years usd 300 10 years usd 550 students annual usd45 \" );" );
 	d.write("var pageMap = new Array(\"Asia Pacific Neurobiofeedback Association (APNA)\",\"Site Search Result\",\"About APNA\",\"The APNA Story\",\"APNA Board & Committee Members\",\"APNA Membership\",\"APNA-SBCIA Certification\",\"APNA Research Institutes\",\"APNA Publications\",\"APNA Info for Visitors\",\"APNA Contact Us\",\"APNA Members\",\"APNA Website T&C\",\"APNA Privacy Policy\",\"APNA Site Map\",\"APNA Conferences\",\"APNA Membership Application\",\"APNA Hidden pages\",\"APNA 2015 Neurofeedback Conference Photos\",\"APNA Neurofeedback Conference 2016\",\"Foreword by President of APNA \",\"Membership fee\" );" );
	d.write("var linkMap = new Array(\"index.html\",\"search_result.html\",\"about_apna.html\",\"the_apna_story.html\",\"board_committee.html\",\"membership.html\",\"certification.html\",\"research_institutes.html\",\"publications.html\",\"visitor_info.html\",\"contact_us.html\",\"apna_members.html\",\"website_terms_conditions.html\",\"privacy_policy.html\",\"sitemap.html\",\"conferences.html\",\"membership_appln.html\",\"hidden_pages.html\",\"2015_nfb_conference_photos.html\",\"2016_nfb_conference.html\",\"foreword.html\",\"membership_fee.html\" );" );
	d.write("var preMap = new Array(\"Membership Certification Research Institutes LEARNING  SHARING  NETWORKING ASIA'S FIRST NEUROFEEDBACK CONFERENCE SINGAPORE 2015 8 to 10 Jan 2015 Singapore Expo Convention and Exhibition Centre MaxAtri\",\"\",\"To deepen our understanding of Asian mindfulness and meditation techniques and its health benefits with rigorous science To promote its application in society to improve health  performance and qualit\",\"Who are the clinicians practitioners  There is a growing number of professional neurofeedback and biofeedback practitioners in the AP region  These practitioners are also Medical doctors  Psychologist\",\"Protem Committee Dr  Kenneth Kang Spectrum Learning Pte Ltd President Prof  Data Dr  Susie See Vice-Chancellor USM Pebbles Consultancy Vice-President Dr  Aamir Saad Malik CISIR  UTP Publication Dir Ms\",\"If you are a practitioner in the field of health science  helping people with psychological or medical conditions and is also practicing Neurofeedback or biofeedback  we welcome you to join us as an a\",\"SBCIA is set up as the professional body to facilitate the development of biofeedback and Neurofeedback in Asia  Its missions are to  A  promote the use of biofeedback and neurofeedback in Asia throug\",\"Spectrum Learning is Asia's first neurofeedback center and QEEG center  It started offering neurofeedback therapy in 1995 and QEG analysis for neurofeedback in 2005   It is among the pioneers in neuro\",\"NeuroEstern Newsletter Name Email Newsletter Signup APNA Journal \",\"Neurofeedback and biofeedback are modern scientific techniques to train a person to self-regulate their physiological processes such as heart rate  muscle tesion  blood pressure and brain activities  \",\"ASIA PACIFIC NEURO-BIOFEEDBACK ASSOCIATION HEADQUARTER  81A Clemenceau Avenue #05- 18 UE Square Singapore 239918  Operating Hours  Tuesdays-Saturdays 09 00 AM-06 00 PM  By appointment only  Tel   +65 \",\"Life Members Last Name First Name Occupation Company Year of Experience in Neurofeedback  Biofeedback                     Professional Members Last Name First Name Occupation Company Year of Experienc\",\"Terms and Conditions The following are terms of a legal agreement between you and APNA  By accessing  browsing and or using this web site  you acknowledge that you have read  understood  and agree  to\",\"APNA is the sole owner of the information collected on this website  APNA collects information from our users at several different points on our Web sites    Personal information  In general  you can \",\"\",\"Neurofeedback Conference 2015 ASIA'S FIRST NEUROFEEDBACK CONFERENCE SINGAPORE 2015 LEARNING  SHARING  NETWORKING 8 to 10 Jan 2015 Singapore Expo Convention and Exhibition Centre MaxAtria Organized by \",\"Membership Application Form First name Last name Email Home Address 1 Home Address 2 City State Postal Code Country Qualification   Certification List Title Date of Birth Nationality Work Address 1 Wo\",\"\",\"Photo Gallery for Neurofeedback Conference 2015   \",\"\",\"It is my sincere pleasure to welcome you to this website   APNA is established to provide an oversight of the field of neurofeedback and biofeedback so as to promote and expand it as well as to safegu\",\"Affiliates   Annual  USD65  5 years  USD300  10 years  USD550 Membership Fee Students  Annual  USD45   Professional  Clinicians  Practitioners and Researchers    Annual  USD65  5 years  USD300  10 yea\" );" );
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
		d.write("      results += \"<a style=\\\"background-color: #d9d9dd; cursor: pointer; font-family: " + linkFace + "; font-size: " + linkSize + "; color: " + linkColour + "; \\\" onclick=\\\"doNav(\" + i + \" );\\\"><div style=\\\"border-radius:1.5vw; padding: 1vw 1vw 2vw 1vw; background-color: #d9d9d9; \\\"><h3 style=\\\"text-align: justify; margin-bottom: 0.1vw;\\\">\" + pageMap[i] + \"</h3><br><div style=\\\"color: #808080; text-align: justify;\\\">\" + preMap[i] + \"...</div></div></a><br><br>\";");
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

  
  