<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail = new PHPMailer();
    
try {
    $mail->CharSet ="UTF-8";         
    $mail->SMTPDebug = 0;                       
    $mail->isSMTP();                            
    $mail->Host = 'smtp.ipage.com';               
    $mail->SMTPAuth = true;                     
    $mail->Username = 'no-reply@apna.asia';         
    $mail->Password = 'Apna.ipage.2016';          
    $mail->SMTPSecure = 'ssl';                  
    $mail->Port = 465;                     

    $mail->setFrom('no-reply@apna.asia', 'APNA');  
    $mail->addAddress('Apna@apna.asia', 'APNA');  

    $title = $_POST["title"];
    $firstName = $_POST["FirstName"];
    $lastName = $_POST["LastName"];
    $dob = $_POST["DoB"];
    $nationality = $_POST["Nationality"];
    $mobilePhone = $_POST["MobilePhone"];
    $email = $_POST["Email"];
    $workPhone = $_POST["WorkPhone"];
    $homeAddress1 = $_POST["HomeAddress1"];
    $homeAddress2 = $_POST["HomeAddress2"];
    $homecity1 = $_POST["HomeCity1"];
    $homecity2 = $_POST["HomeCity2"];
    $homestate1 = $_POST["HomeState1"];
    $homestate2 = $_POST["HomeState2"];
    $homepostalCode1 = $_POST["HomePostalCode1"];
    $homepostalCode2 = $_POST["HomePostalCode2"];
    $homecountry1 = $_POST["HomeCountry1"];
    $homecountry2 = $_POST["HomeCountry2"];
    $workcity1 = $_POST["WorkCity1"];
    $workcity2 = $_POST["WorkCity2"];
    $workstate1 = $_POST["WorkState1"];
    $workstate2 = $_POST["WorkState2"];
    $workpostalCode1 = $_POST["WorkPostalCode1"];
    $workpostalCode2 = $_POST["WorkPostalCode2"];
    $workcountry1 = $_POST["WorkCountry1"];
    $workcountry2 = $_POST["WorkCountry2"];
    $qaCList = $_POST["QaCList"];
    $companyName = $_POST["CompanyName"];
    $occupation = $_POST["Occupation"];
    $workAddress3 = $_POST["WorkAddress3"];
    $workAddress4 = $_POST["WorkAddress4"];
    $yearsExperience = $_POST["Experience"];

    // Build email content
    $tableStyle = "border: 1px solid black; border-collapse: collapse; width: 50vw;";
    $rowStyle = "border-bottom: 1px solid black; border-top: 1px solid black;";
    $emailContent = "<h1>Membership Application Form</h1>
    <p>The following are the application materials to be filled out by new member <b>$title. $firstName $lastName</b>.</p>
    <table style='$tableStyle'>
        <tr style='$rowStyle'>
            <td><strong>Personal Information</strong></td>
        </tr>
        <tr style='$rowStyle'>
            <th>Data Name</th>
            <th>Value</th>
        </tr>
        <tr>
            <td>Title</td>
            <td>: $title</td>
        </tr>
        <tr>
            <td>First Name</td>
            <td>: $firstName</td>
        </tr>
        <tr>
            <td>Last Name</td>
            <td>: $lastName</td>
        </tr>
        <tr>
            <td>Date of Birth</td>
            <td>: $dob</td>
        </tr>
        <tr>
            <td>Nationality</td>
            <td>: $nationality</td>
        </tr>
        <tr>
            <td>Mobile Phone</td>
            <td>: $mobilePhone</td>
        </tr>
        <tr>
            <td>Work Phone</td>
            <td>: $workPhone</td>
        </tr>
        <tr>
            <td>Email</td>
            <td>: $email</td>
        </tr>
        <tr style='$rowStyle'>
            <td><strong>Home Information</strong></td>
        </tr>
        <tr style='$rowStyle'>
            <th>Data Name</th>
            <th>Value</th>
        </tr>
        <tr>
            <td>Home Address 1</td>
            <td>: $homeAddress1</td>
        </tr>
        <tr>
            <td>Home Address 2</td>
            <td>: $homeAddress2</td>
        </tr>
        <tr>
            <td>City</td>
            <td>: $homecity1 $homecity2</td>
        </tr>
        <tr>
            <td>State</td>
            <td>: $homestate1 $homestate2</td>
        </tr>
        <tr>
            <td>Postal Code</td>
            <td>: $homepostalCode1 $homepostalCode2</td>
        </tr>
        <tr>
            <td>Country</td>
            <td>: $homecountry1 $homecountry2</td>
        </tr>
        <tr>
            <td>Qualification and Certification List</td>
            <td>: $qaCList</td>
        </tr>
        <tr style='$rowStyle'>
            <td><strong>Work Information</strong></td>
        </tr>
        <tr style='$rowStyle'>
            <th>Data Name</th>
            <th>Value</th>
        </tr>
        <tr>
            <td>Company Name</td>
            <td>: $companyName</td>
        </tr>
        <tr>
            <td>Occupation</td>
            <td>: $occupation</td>
        </tr>
        <tr>
            <td>Work Address 1</td>
            <td>: $workAddress3</td>
        </tr>
        <tr>
            <td>Work Address 2</td>
            <td>: $workAddress4</td>
        </tr>
        <tr>
            <td>City</td>
            <td>: $workcity1 $workcity2</td>
        </tr>
        <tr>
            <td>State</td>
            <td>: $workstate1 $workstate2</td>
        </tr>
        <tr>
            <td>Postal Code</td>
            <td>: $workpostalCode1 $workpostalCode2</td>
        </tr>
        <tr>
            <td>Country</td>
            <td>: $workcountry1 $workcountry2</td>
        </tr>
        <tr>
            <td>Years of Experience in Neurofeedback/Biofeedback</td>
            <td>: $yearsExperience</td>
        </tr>
    </table>
    <p>Do not reply to this automated message.</p>
    ";

    $mail->isHTML(true);
    $mail->Subject = 'New Membership Application Form : ' . $firstName . ' ' . $lastName;
    $mail->Body = $emailContent;

    $mail->send();
    echo '<script>alert("Successfully submitted the application, please wait for the confirmation of the administrative staff. Thank you.");</script>';
    echo '<script>window.location.href="membership.html";</script>';
} catch (Exception $e) {
    echo '<script>alert("Submission failed, please check the network connection status, or contact the administrator to solve. Thank you.");</script>';
    echo '<script>window.history.back();</script>';
}
}
?>
