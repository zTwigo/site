<?php

require("db-config.php");

function isLogged(){
    // Get the cookie - function
    function getCookie(){
        $token_parts = $_COOKIE['ss_login'];
    }
}


try{
    isLogged();
} catch (Exception $e) {
    die("". $e->getMessage());
}


?>