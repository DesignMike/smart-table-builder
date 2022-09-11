<?php
namespace Spreadsheet2Table;

/**
 * Frontend Pages Handler
 */
class Frontend {

    public function __construct() {
        add_shortcode( 'wp-table', [ $this, 'render_frontend' ] );
    }

    /**
     * Render frontend app
     *
     * @param  array $atts
     * @param  string $content
     *
     * @return string
     */
    public function render_frontend( $atts, $content = '' ) {
        $id = wp_parse_args($atts, ["id" => 0])['id'];
        wp_enqueue_style( 'exceltotable-frontend' );
        wp_enqueue_script( 'exceltotable-frontend' );
        // wp_enqueue_script( 'exceltotable-frontendz' );
        // echo rest_url('tablecells/v1');

        $content .= "<div class=\"excel-to-table-app\" data-table-id=$id></div>";

        return $content;
    }
}
