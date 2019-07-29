<?php

Route::resource('/product', 'ProductController');
Route::get('/','ProductController@home');
