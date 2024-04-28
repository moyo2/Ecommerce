<?php
require_once './include/db.php';

if ($_SERVER['REQUEST_METHOD'] === "GET") {
    $stmt = "SELECT * FROM banner WHERE status = 0";
    if ($result = $conn->query($stmt)) {
        $arr = array();
        while ($rowArry = $result->fetch_assoc()) {
            array_push($arr, $rowArry);
        }
        echo json_encode(['banners' => $arr]);  
    } else {
        echo json_encode(['error' => 'An error occurred while fetching data.']); // Generic error message
    }
    exit();
}
?>
