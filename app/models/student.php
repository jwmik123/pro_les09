<?php
$mysqli = new mysqli('localhost', 'root', 'root', 'students_pro');
$result = $mysqli->query("SELECT * FROM student");
$students = array();
while ($test = $result->fetch_assoc()) {
  $students[] = $test;
}
// var_dump ($students);
echo json_encode($students);
?>
