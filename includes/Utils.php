<?php
namespace Spreadsheet2Table;

class Utils {
    // static method to sanitize json data
    public static function sanitize_spreadsheet_json($json_payload) {
        $data = json_decode($json_payload, true);
        if (json_last_error() !== JSON_ERROR_NONE) {
            return false; // Invalid JSON
        }
        
        // Sanitize title
        $data['title'] = sanitize_text_field($data['title']);
        
        // Sanitize cells
        foreach ($data['cells'] as &$row) {
            foreach ($row as &$cell) {
                $cell = sanitize_text_field($cell);
            }
        }
        
        // Sanitize fontSettings and tableBodyFontSettings
        $data['fontSettings'] = array_map('sanitize_text_field', $data['fontSettings']);
        $data['tableBodyFontSettings'] = array_map('sanitize_text_field', $data['tableBodyFontSettings']);
        
        // Sanitize settingsItemProps
        foreach ($data['settingsItemProps'] as $key => &$value) {
            if (is_string($value)) {
                $value = sanitize_text_field($value);
            } elseif (is_bool($value)) {
                $value = (bool) $value;
            }
        }
        
        // Sanitize fontUrls
        $data['fontUrls'] = array_map('esc_url_raw', $data['fontUrls']);
        
        // Sanitize fontString and tableBodyFontString
        $data['fontString'] = esc_url_raw($data['fontString']);
        $data['tableBodyFontString'] = esc_url_raw($data['tableBodyFontString']);
        return $data;
    }
    public static function sanitize_contact_form_payload($json_payload) {
        $data = json_decode($json_payload, true);
        
        if (json_last_error() !== JSON_ERROR_NONE) {
            return false; // Invalid JSON
        }
        
        $sanitized_data = array(
            'name' => sanitize_text_field($data['name']),
            'email' => sanitize_email($data['email']),
            'subject' => sanitize_text_field($data['subject']),
            'message' => sanitize_textarea_field($data['message'])
        );
        
        return wp_json_encode($sanitized_data);
    }
}