<?php

namespace Spreadsheet2Table\Ajax;

class AjaxCallbacks
{
    public static function create_new_table_entry()
    {
        $newData = file_get_contents('php://input');
        $newData = json_decode($newData, true);
        $cells = $newData['cells'];
        $tableTitle = $newData['title'];
        // create table post and return ID
        $id = wp_insert_post([
            'post_type' => 'sprdsh_table',
            'post_status' => 'publish',
            "post_title" => $tableTitle
        ]);

        $fontSettings = $newData['fontSettings'];
        $settingsItemProps = $newData['settingsItemProps'];
        $tableBodyFontSettings = $newData['tableBodyFontSettings'];
        $fontUrls = $newData['fontUrls'];
        $fontString = $newData['fontString'];
        $tableBodyFontString = $newData['tableBodyFontString'];

        update_post_meta($id, 'table_cells', apply_filters('wpspreadsheet_table_sanitize_array', $cells));
        update_post_meta($id, 'fontSettings', apply_filters('wpspreadsheet_table_sanitize_array', $fontSettings));
        update_post_meta($id, 'settingsItemProps', apply_filters('wpspreadsheet_table_sanitize_array', $settingsItemProps));
        update_post_meta($id, 'tableBodyFontSettings', apply_filters('wpspreadsheet_table_sanitize_array', $tableBodyFontSettings));
        update_post_meta($id, 'fontUrls', apply_filters('wpspreadsheet_table_sanitize_array', $fontUrls));
        update_post_meta($id, 'fontString', apply_filters('wpspreadsheet_table_sanitize_array', $fontString));
        update_post_meta($id, 'tableBodyFontString', apply_filters('wpspreadsheet_table_sanitize_array', $tableBodyFontString));
        $response = [
            'ok' => $id,
            "success" => true
        ];
        wp_send_json($response);
    }
    public static function get_table_cells()
    {
        $id = esc_html($_GET['id']);
        $table = get_post($id);
        $response = [
            'id' => $table->ID,
            'grid' => ['data' => get_post_meta($id, 'table_cells')[0]],
            'title' => $table->post_title,
            'settingsItemProps' => get_post_meta($id, 'settingsItemProps')[0],
            'fontSettings' => get_post_meta($id, 'fontSettings')[0],
            'tableBodyFontSettings' => get_post_meta($id, 'tableBodyFontSettings')[0],
            'fontUrls' => [],
            'fontString' => get_post_meta($id, 'fontString')[0],
            'tableBodyFontString' => get_post_meta($id, 'tableBodyFontString')[0]
        ];
        wp_send_json($response);
    }
    public static function update_table_cells()
    {
        $id = esc_html($_REQUEST['id']);
        $updatableData = file_get_contents('php://input');
        $updatableData = json_decode($updatableData, true);
        $cells = $updatableData['cells'];
        $tableTitle = $updatableData['title'];
        $fontSettings = $updatableData['fontSettings'];
        $settingsItemProps = $updatableData['settingsItemProps'];
        $tableBodyFontSettings = $updatableData['tableBodyFontSettings'];
        $fontUrls = $updatableData['fontUrls'];
        $fontString = $updatableData['fontString'];
        $tableBodyFontString = $updatableData['tableBodyFontString'];
        // tableBodyFontSettings: this.$store.state.tableBodyFontSettings,
        // create table post and return ID
        wp_update_post([
            "ID" => $id,
            'post_type' => 'sprdsh_table',
            'post_status' => 'publish',
            "post_title" => $tableTitle
        ]);
        update_post_meta($id, 'table_cells', apply_filters('wpspreadsheet_table_sanitize_array', $cells));
        update_post_meta($id, 'fontSettings', apply_filters('wpspreadsheet_table_sanitize_array', $fontSettings));
        update_post_meta($id, 'settingsItemProps', apply_filters('wpspreadsheet_table_sanitize_array', $settingsItemProps));
        update_post_meta($id, 'tableBodyFontSettings', apply_filters('wpspreadsheet_table_sanitize_array', $tableBodyFontSettings));
        update_post_meta($id, 'fontUrls', apply_filters('wpspreadsheet_table_sanitize_array', $fontUrls));
        update_post_meta($id, 'fontString', apply_filters('wpspreadsheet_table_sanitize_array', $fontString));
        update_post_meta($id, 'tableBodyFontString', apply_filters('wpspreadsheet_table_sanitize_array', $tableBodyFontString));
        $response = [
            'ok' => $id,
            "success" => true
        ];
        wp_send_json($response);
    }
    public static function list_tables()
    {
        $table = get_posts([
            'post_type' => 'sprdsh_table',
            'posts_per_page' => 10
        ]);
        $response = $table;
        wp_send_json($response);
    }
    public static function get_gfonts_meta()
    {
        $gfonts_metadata_file = WPULTIMATETABLE_ASSETS_PATH . '/fonts_meta.json';
        $fonts_metadata = file_get_contents($gfonts_metadata_file);
        header('Content-type: audio/mpeg');

        header('Content-Disposition: attachment; filename="fonts.txt"');
        
        echo ($fonts_metadata);
        wp_die();
    }
    public static function delete_table() {
        wp_delete_post(intval($_REQUEST['id']), true);
        wp_send_json_success(['status' => 'done']);
    }
}