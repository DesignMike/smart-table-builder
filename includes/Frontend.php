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
        wp_enqueue_style( 'exceltotable-frontend' );
        wp_enqueue_script( 'exceltotable-frontend' );

        $content .= '<div class="excel-to-table-app" data-table-id=21></div>';

        return $content;
    }
}
