<?php

namespace Spreadsheet2Table\Ajax;

class AjaxAction {
    public function __construct() {
        $this->init();
    }

    public static function addAction($tag, $function_to_add, $nonpriv = false, $priority = 10, $accepted_args = 1) {
        add_action('wp_ajax_'.$tag, $function_to_add, $priority = 10, $accepted_args = 1);
        if ( $nonpriv ) add_action('wp_ajax_nopriv_'.$tag, $function_to_add);
        return true;
    }

    public static function init() {
        AjaxAction::addAction('create_new_table_entry', [AjaxCallbacks::class , 'create_new_table_entry']);
    }
}