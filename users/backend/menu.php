<?php
require_once './include/db.php';

if ($_SERVER['REQUEST_METHOD'] === "GET") {
    $stmt = "SELECT name FROM category WHERE status = 1";
    if ($result = $conn->query($stmt)) {
        $arr = array();
        while ($row = $result->fetch_assoc()) {
            array_push($arr, $row['name']);
        }
        echo json_encode(['category' => $arr]);  
    } else {
        echo json_encode(['error' => $conn->error]);
    }
    exit();
}
?>
