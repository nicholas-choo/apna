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
    $mail->addAddress('chenghan515@gmail.com', 'APNA');  #Apna@apna.asia

    $Title = $_POST["Title"];
    $JobTitle = $_POST["JobTitle"];
    $FirstName = $_POST["FirstName"];
    $LastName = $_POST["LastName"];
    $CompanyName = $_POST["CompanyName"];
    $Occupation = $_POST["Occupation"];
    $DateOfBirth = $_POST["DateOfBirth"];
    $Nationality = $_POST["Nationality"];

    $Telephone = $_POST["Telephone"];
    $MobilePhone = $_POST["MobilePhone"];
    $EmailAddress1 = $_POST["EmailAddress1"];
    $EmailAddress2 = $_POST["EmailAddress2"];
    $HomeAddress = $_POST["HomeAddress"];
    $State = $_POST["State"];
    $Country = $_POST["Country"];
    $OfficeAddress = $_POST["OfficeAddress"];
    $Qualifications = $_POST["Qualifications"];
    $PracticeYears = $_POST["PracticeYears"];
    $WhatsAppOption = $_POST["WhatsAppOption"];
    $DateJoined= $_POST["DateJoined"];

    // Build email content
    $tableStyle = "border: 1px solid black; border-collapse: collapse; width: 50vw;";
    $rowStyle = "border-bottom: 1px solid black; border-top: 1px solid black;";
    $emailContent = "<h1>Membership Application Form</h1>
    <p>The following are the application materials to be filled out by new member <b>$Title. $FirstName $LastName</b>.</p>
    <table style='$tableStyle'>
        <tr style='$rowStyle'>
            <td><strong>Personal Particulars</strong></td>
        </tr>
        <tr style='$rowStyle'>
            <th>Data Name</th>
            <th>Value</th>
        </tr>
        <tr>
            <td>Applied Position</td>
            <td>: $JobTitle</td>
        </tr>
        <tr>
            <td>Title</td>
            <td>: $Title</td>
        </tr>
        <tr>
            <td>First Name</td>
            <td>: $FirstName</td>
        </tr>
        <tr>
            <td>Last Name</td>
            <td>: $LastName</td>
        </tr>
        <tr>
            <td>Company Name</td>
            <td>: $CompanyName</td>
        </tr>
        <tr>
            <td>Occupation</td>
            <td>: $Occupation</td>
        </tr>
        <tr>
            <td>Date of Birth</td>
            <td>: $DateOfBirth</td>
        </tr>
        <tr>
            <td>Nationality</td>
            <td>: $Nationality</td>
        </tr>
        <tr style='$rowStyle'>
            <td><strong>Contact Details</strong></td>
        </tr>
        <tr style='$rowStyle'>
            <th>Data Name</th>
            <th>Value</th>
        </tr>
        <tr>
            <td>TelePhone</td>
            <td>: $Telephone</td>
        </tr>
        <tr>
            <td>Mobile Phone</td>
            <td>: $MobilePhone</td>
        </tr>
        <tr>
            <td>Email Address 1</td>
            <td>: $EmailAddress1</td>
        </tr>
        <tr>
            <td>Email Address 2</td>
            <td>: $EmailAddress2</td>
        </tr>
        <tr>
            <td>Home Address</td>
            <td>: $HomeAddress</td>
        </tr>
        <tr>
            <td>State</td>
            <td>: $State</td>
        </tr>
        <tr>
            <td>Country</td>
            <td>: $Country</td>
        </tr>
        <tr>
            <td>Office Address</td>
            <td>: $OfficeAddress</td>
        </tr>
        <tr>
            <td>Qualification(s)</td>
            <td>: $Qualifications</td>
        </tr>
        <tr>
            <td>Number of years of practice in Neurofeedback:</td>
            <td>: $PracticeYears</td>
        </tr>
        <tr>
           <td>Wanting to join the WhatsApp Group</td>
           <td>: $WhatsAppOption</td>
        <tr>
            <td>Date Joined</td>
            <td>: $DateJoined</td>
        </tr>
    </table>
    <p>Do not reply to this automated message.</p>
    ";

    $mail->isHTML(true);
    $mail->Subject = 'New Membership Registration Form : ' . $FirstName . ' ' . $LastName;
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
