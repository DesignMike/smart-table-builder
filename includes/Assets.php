<?php
namespace SmartTableBuilder;

/**
 * Scripts and Styles Class
 */
class Assets {

    function __construct() {

        if ( is_admin() ) {
            add_action( 'admin_enqueue_scripts', [ $this, 'register' ], 5 );
        } else {
            add_action( 'wp_enqueue_scripts', [ $this, 'register' ], 5 );
        }
    }

    /**
     * Define the constants
     *
     * @return void
     */
    public function define_constants() {
        define( 'REST_ROUTE_PREFIX', rest_url('smart-table-builder-tablecells/v1') );
    }

    /**
     * Register our app scripts and styles
     *
     * @return void
     */
    public function register() {
        $this->register_scripts( $this->get_scripts() );
        $this->register_styles( $this->get_styles() );
    }

    /**
     * Register scripts
     *
     * @param  array $scripts
     *
     * @return void
     */
    private function register_scripts( $scripts ) {
        foreach ( $scripts as $handle => $script ) {
            $deps      = isset( $script['deps'] ) ? $script['deps'] : false;
            $in_footer = isset( $script['in_footer'] ) ? $script['in_footer'] : false;
            $version   = isset( $script['version'] ) ? $script['version'] : SMART_TABLE_BUILDER_VERSION;
            $inline_script = isset ( $script['inline'] ) ? $script['inline'] : false;

            wp_register_script( $handle, $script['src'], $deps, $version, $in_footer );

            if ($inline_script) {
                wp_add_inline_script($handle, sanitize_text_field( $inline_script ), 'before');
            }
        }
    }

    /**
     * Register styles
     *
     * @param  array $styles
     *
     * @return void
     */
    public function register_styles( $styles ) {
        foreach ( $styles as $handle => $style ) {
            $deps = isset( $style['deps'] ) ? $style['deps'] : false;

            wp_register_style( $handle, $style['src'], $deps, SMART_TABLE_BUILDER_VERSION );
        }
    }

    /**
     * Get all registered scripts
     *
     * @return array
     */
    public static function get_scripts() {
        $prefix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '.min' : '';
        $rest_api_routes = rest_url('smart-table-builder-tablecells/v1');
        $frontend_only = [
            'exceltotable-frontend' => [
                'src'       => SMART_TABLE_BUILDER_ASSETS_URL . '/js/frontend.js',
                'version'   => filemtime(SMART_TABLE_BUILDER_ASSETS_PATH . '/js/frontend.js' ),
                'in_footer' => true,
                'inline'     => "const wpUltimateTablesRoute = '$rest_api_routes'"
            ],
        ];
        $scripts = [
            'exceltotable-admin' => [
                'src'       => SMART_TABLE_BUILDER_ASSETS_URL . '/js/backend/admin.js',
                'deps'      => [ 'jquery', 'wp-util' ],
                'version'   => filemtime( SMART_TABLE_BUILDER_ASSETS_PATH . '/js/backend/admin.js' ),
                'in_footer' => true
            ]
        ];

        if ( ! is_admin() ) {
            $scripts += $frontend_only;
        }

        return $scripts;
    }

    /**
     * Get registered styles
     *
     * @return array
     */
    public function get_styles() {

        $styles = [
            'exceltotable-admin' => [
                'src' =>  SMART_TABLE_BUILDER_ASSETS_URL . '/js/backend/main.css'
            ],
        ];

        return $styles;
    }

}
