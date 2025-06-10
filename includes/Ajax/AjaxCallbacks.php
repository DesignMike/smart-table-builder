<?php

namespace Smart_Table_Builder_Lib\Ajax;

use Forminator\Stripe\Util\Util;
use Smart_Table_Builder_Lib\Utils;

class AjaxCallbacks
{
    public static function create_new_table_entry()
    {
        check_ajax_referer( 'smart-table-builder-nonce', 'nonce' );
        $newData = Utils::sanitize_spreadsheet_json(file_get_contents('php://input'));
        // $newData = json_decode($newData, true);
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

        update_post_meta($id, 'table_cells', apply_filters('smart_table_builder_sanitize_array', $cells));
        update_post_meta($id, 'fontSettings', apply_filters('smart_table_builder_sanitize_array', $fontSettings));
        update_post_meta($id, 'settingsItemProps', apply_filters('smart_table_builder_sanitize_array', $settingsItemProps));
        update_post_meta($id, 'tableBodyFontSettings', apply_filters('smart_table_builder_sanitize_array', $tableBodyFontSettings));
        update_post_meta($id, 'fontUrls', apply_filters('smart_table_builder_sanitize_array', $fontUrls));
        update_post_meta($id, 'fontString', apply_filters('smart_table_builder_sanitize_array', $fontString));
        update_post_meta($id, 'tableBodyFontString', apply_filters('smart_table_builder_sanitize_array', $tableBodyFontString));
        $response = [
            'ok' => $id,
            "success" => true
        ];
        wp_send_json($response);
    }
    public static function get_table_cells()
    {
        // phpcs:ignore
        $id = sanitize_text_field($_GET['id']);
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
        check_ajax_referer( 'smart-table-builder-nonce', 'nonce' );
        $id = intval($_REQUEST['id']);
        $updatableData = Utils::sanitize_spreadsheet_json(file_get_contents('php://input'));
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
        update_post_meta($id, 'table_cells', apply_filters('smart_table_builder_sanitize_array', $cells));
        update_post_meta($id, 'fontSettings', apply_filters('smart_table_builder_sanitize_array', $fontSettings));
        update_post_meta($id, 'settingsItemProps', apply_filters('smart_table_builder_sanitize_array', $settingsItemProps));
        update_post_meta($id, 'tableBodyFontSettings', apply_filters('smart_table_builder_sanitize_array', $tableBodyFontSettings));
        update_post_meta($id, 'fontUrls', apply_filters('smart_table_builder_sanitize_array', $fontUrls));
        update_post_meta($id, 'fontString', apply_filters('smart_table_builder_sanitize_array', $fontString));
        update_post_meta($id, 'tableBodyFontString', apply_filters('smart_table_builder_sanitize_array', $tableBodyFontString));
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
    public static function send_feedback_or_support_query() {
        check_ajax_referer( 'smart-table-builder-nonce', 'nonce' );
        $data = Utils::sanitize_contact_form_payload(file_get_contents('php://input'));
        $name = $data['name'];
        $email = $data['email'];
        $message = $data['message'];
        $subject = $data['subject'];

        // Sending the user's feedback to us
        $response = wp_remote_post('https://eoibsv336g5s1ic.m.pipedream.net', [
            'timeout' => 30,
            'body' => wp_json_encode( [
                'name' => $name,
                'email' => $email,
                'message' => $message,
                'subject' => $subject
            ] ),
            'headers' => [
                'Content-Type' => 'application/json'
            ]
        ]);
        $response = json_decode(wp_remote_retrieve_body($response), true);
        wp_send_json($response);
    }
    public static function get_gfonts_meta()
    {
        $gfonts_metadata_file = SMART_TABLE_BUILDER_ASSETS_PATH . '/fonts_meta.json';
        // phpcs:ignore
        $file_path = $gfonts_metadata_file;

        // Check if the file exists
        if (file_exists($file_path)) {
            // Set headers to force download
            header('Content-Description: File Transfer');
            header('Content-Type: application/octet-stream');
            header('Content-Disposition: attachment; filename="' . basename($file_path) . '"');
            header('Expires: 0');
            header('Cache-Control: must-revalidate');
            header('Pragma: public');
            header('Content-Length: ' . filesize($file_path));
        
            // Clear the output buffer
            ob_clean();
            flush();
        
            // Read the file and send it to the output buffer
            readfile($file_path);
        
            // Exit to ensure no further output is sent
            exit;
        } else {
            echo 'File not found.';
        }
    }
    public static function delete_table() {
        check_ajax_referer( 'smart-table-builder-nonce', 'nonce' );
        wp_delete_post(intval($_REQUEST['id']), true);
        wp_send_json_success(['status' => 'done']);
    }
}