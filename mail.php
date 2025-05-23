<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set FROM and TO email addresses
$toEmail = "info@kabirgroups.com, lokhandwalahvsbizz@gmail.com";
$fromEmail = "no-reply@kabirgroups.com";

// Check required fields
if (
    empty($_POST['name']) ||
    empty($_POST['email']) ||
    empty($_POST['phone']) ||
    empty($_POST['subject']) ||
    empty($_POST['message'])
) {
    echo "Please fill in all required fields.";
    exit;
}

// Sanitize input
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$phone = htmlspecialchars($_POST['phone']);
$subjectChoice = htmlspecialchars($_POST['subject']);
$message = htmlspecialchars($_POST['message']);

// Compose email
$subject = "New Contact Form Submission from Website";
$body = "You have received a new inquiry:\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n";
$body .= "Service Interested: $subjectChoice\n";
$body .= "Message:\n$message\n";

// Set headers
$headers = "From: Website Contact <$fromEmail>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send email
if (mail($toEmail, $subject, $body, $headers)) {
    echo "success";
} else {
    echo "Failed to send email. Please try again.";
}
?>
