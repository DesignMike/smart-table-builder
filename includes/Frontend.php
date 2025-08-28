<?php
namespace Smart_Table_Builder_Lib;

/**
 * Frontend Pages Handler
 */
class Frontend {

    public function __construct() {
        add_shortcode( 'smart-table-builder', [ $this, 'render_frontend' ] );
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
        $id = absint( wp_parse_args($atts, ["id" => 0])['id'] );
        wp_enqueue_style( 'smart-table-builder-frontend' );
        wp_enqueue_script( 'smart-table-builder-frontend' );
        // wp_enqueue_script( 'smart-table-builder-frontendz' );
        // echo rest_url('smart-table-builder/v1');

        $content .= "<div class=\"smart-table-builder-app\" data-table-id=\"" . esc_attr( $id ) . "\"></div>";

        return $content;
    }
}
