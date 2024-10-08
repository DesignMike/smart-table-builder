<?php

namespace Smart_Table_Builder_Lib\Ajax;

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
        AjaxAction::addAction('sprdsh_create_new_table_entry', [AjaxCallbacks::class , 'create_new_table_entry']);
        AjaxAction::addAction('sprdsh_get_table_cells', [AjaxCallbacks::class, 'get_table_cells']);
        AjaxAction::addAction('sprdsh_list_tables', [AjaxCallbacks::class, 'list_tables']);
        AjaxAction::addAction('sprdsh_update_table_cells', [AjaxCallbacks::class, 'update_table_cells']);
        AjaxAction::addAction('sprdsh_get_gfonts_meta', [AjaxCallbacks::class, 'get_gfonts_meta']);
        AjaxAction::addAction('sprdsh_delete_table', [AjaxCallbacks::class, 'delete_table']);
        AjaxAction::addAction('sprdsh_send_feedback_or_support_query', [AjaxCallbacks::class, 'send_feedback_or_support_query']);
    }
}