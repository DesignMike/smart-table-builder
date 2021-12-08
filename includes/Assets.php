<?php
namespace Spreadsheet2Table;

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
        define( 'REST_ROUTE_PREFIX', rest_url('tablecells/v1') );
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
            $version   = isset( $script['version'] ) ? $script['version'] : EXCELTOTABLE_VERSION;
            $inline_script = isset ( $script['inline'] ) ? $script['inline'] : false;

            wp_register_script( $handle, $script['src'], $deps, $version, $in_footer );

            if ($inline_script) {
                wp_add_inline_script($handle, $inline_script, 'before');
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

            wp_register_style( $handle, $style['src'], $deps, EXCELTOTABLE_VERSION );
        }
    }

    /**
     * Get all registered scripts
     *
     * @return array
     */
    public static function get_scripts() {
        $prefix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '.min' : '';
        $rest_api_routes = rest_url('tablecells/v1');
        $scripts = [
            'exceltotable-runtime' => [
                'src'       => EXCELTOTABLE_ASSETS . '/js/runtime.js',
                'version'   => filemtime( EXCELTOTABLE_PATH . '/assets/js/runtime.js' ),
                'in_footer' => true
            ],
            'exceltotable-vendor' => [
                'src'       => EXCELTOTABLE_ASSETS . '/js/vendors.js',
                'version'   => filemtime( EXCELTOTABLE_PATH . '/assets/js/vendors.js' ),
                'in_footer' => true
            ],
            'exceltotable-frontend-runtime' => [
                'src'       => EXCELTOTABLE_FRONTEND_ASSETS . '/js/runtime.js',
                'version'   => filemtime( EXCELTOTABLE_PATH . '/frontend/assets/js/runtime.js' ),
                'in_footer' => true
            ],
            'exceltotable-frontend-vendor' => [
                'src'       => EXCELTOTABLE_FRONTEND_ASSETS . '/js/vendors.js',
                'version'   => filemtime( EXCELTOTABLE_PATH . '/frontend/assets/js/vendors.js' ),
                'in_footer' => true
            ],
            'exceltotable-frontend' => [
                'src'       => EXCELTOTABLE_FRONTEND_ASSETS . '/js/frontend.js',
                'deps'      => [ 'jquery', 'exceltotable-frontend-vendor', 'exceltotable-frontend-runtime' ],
                'version'   => filemtime( EXCELTOTABLE_PATH . '/frontend/assets/js/frontend.js' ),
                'in_footer' => true,
                'inline'     => "const wpUltimateTablesRoute = '$rest_api_routes'"
            ],
            'exceltotable-admin' => [
                'src'       => EXCELTOTABLE_ASSETS . '/js/admin.js',
                'deps'      => [ 'jquery', 'exceltotable-vendor', 'wp-util', 'exceltotable-runtime' ],
                'version'   => filemtime( EXCELTOTABLE_PATH . '/assets/js/admin.js' ),
                'in_footer' => true
            ]
        ];

        return $scripts;
    }

    /**
     * Get registered styles
     *
     * @return array
     */
    public function get_styles() {

        $styles = [
            'exceltotable-frontend' => [
                'src' =>  EXCELTOTABLE_FRONTEND_ASSETS . '/css/frontend.css'
            ],
            'exceltotable-admin' => [
                'src' =>  EXCELTOTABLE_ASSETS . '/css/admin.css'
            ],
        ];

        return $styles;
    }

}
