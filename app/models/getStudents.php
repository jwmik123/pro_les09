<?php

//databasegegevens
define("DB_HOST", "localhost");
define("DB_NAME", "students");
define("DB_USER", "root");
define("DB_PASS", "root");

//database verbinding
$mysqli = new mysqli("DB_HOST", "DB_NAME","DB_USER","DB_PASS");
