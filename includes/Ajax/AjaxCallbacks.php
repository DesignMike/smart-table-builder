<?php

namespace Spreadsheet2Table\Ajax;

class AjaxCallbacks
{
    public static function create_new_table_entry()
    {
        $response = [
            'ok' => 'ok'
        ];
        wp_send_json($response);
    }
}