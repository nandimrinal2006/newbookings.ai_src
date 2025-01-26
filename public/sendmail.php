<?php
// Check if the request method is POST
//print_r($_POST);
if ($_POST) {
    // Get the raw POST data
    //$json = file_get_contents('php://input');
    
    // Decode the JSON data
    $data = $_POST;

    // Validate the input
    $name = $data['Name'] ?? '';
    $email = $data['Email'] ?? '';
    $phone = $data['Phone'] ?? '';

    $errors = [];

    if (empty($name)) {
        $errors[] = 'Name is required';
    }

    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Valid email is required';
    }

    if (empty($phone) || !preg_match('/^[0-9]{10}$/', $phone)) {
        $errors[] = 'Valid phone number is required';
    }

    /*if (!empty($errors)) {
        // Return a 400 error response with validation errors
        http_response_code(400);
        echo json_encode(['errors' => $errors]);
        exit;
    }*/

    // Email parameters
    $to =  'james@mazurprogram.com';  // Replace with your email address
    $subject = 'New Website LEAD';
    $message = "A new LEAD has been submitted on the mazurprogram.com website \nName: $name\nEmail: $email\nPhone: $phone";
    $headers = "From: noreply@mazurprogram.com\r\n";  // Replace with an appropriate from address

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        // Return a success response
        //http_response_code(200);
        //echo json_encode(['message' => 'Form submitted successfully']);

        $msg="Thank you. We will contact your shortly. <a href='/' style='color:#fff;'>Click here</a> to go back to the website.";

    } else {
        // Return a 500 error response if email sending fails
        //http_response_code(500);
        //echo json_encode(['message' => 'Form submission failed']);
        $msg="Form submission failed for some unexpected technical reason. Please try again <a href='/' style='color:#fff;'>here</a> .";

    }
} else {
    // Return a 405 error response for unsupported request methods
    //http_response_code(405);
    //echo json_encode(['message' => 'Method not allowed']);
    $msg='Method not allowed';
}
include_once('sendmail_message.php')
?>
