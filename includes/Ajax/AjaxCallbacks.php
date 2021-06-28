<?php

namespace Spreadsheet2Table\Ajax;

class AjaxCallbacks
{
    public static function create_new_table_entry()
    {
        // create table post and return ID
        // $id = wp_insert_post([
        //     'post_type' => 'sprdsh_table',
        //     'post_status' => 'publish',
        // ]);
        $id = 21;
        $cells = file_get_contents('php://input');
        $cells = json_decode($cells, true);
        update_post_meta($id, 'table_cells', apply_filters('wpspreadsheet_table_sanitize_array', $cells));
        $response = [
            'ok' => $id,
            "success" => true
        ];
        wp_send_json($response);
    }
    public static function get_table_cells()
    {
        $id = 21;
        $table = get_posts([
            'post_type' => 'sprdsh_table',
            'posts_per_page' => 1
        ]);
        $response = ['data' => get_post_meta($id, 'table_cells')[0]];
        wp_send_json($response);
    }
    public static function list_tables()
    {
        $table = get_posts([
            'post_type' => 'sprdsh_table',
            'posts_per_page' => 1
        ]);
        $response = $table;
        wp_send_json($response);
    }
}