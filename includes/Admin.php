<?php
namespace Spreadsheet2Table;

/**
 * Admin Pages Handler
 */
class Admin {

    public function __construct() {
        add_action( 'admin_menu', [ $this, 'admin_menu' ] );
    }

    /**
     * Register our menu page
     *
     * @return void
     */
    public function admin_menu() {
        global $submenu;

        $capability = 'manage_options';
        $slug       = 'smart-table-builder';

        $hook = add_menu_page( __( ' Smart Table Builder', 'textdomain' ), __( 'Smart Table Builder', 'textdomain' ), $capability, $slug, [ $this, 'plugin_page' ], 'dashicons-text' );

        if ( current_user_can( $capability ) ) {
            $submenu[ $slug ][] = array( __( 'Create New Table', 'textdomain' ), $capability, 'admin.php?page=' . $slug . '#/' );
            $submenu[ $slug ][] = array( __( 'Edit Existing', 'textdomain' ), $capability, 'admin.php?page=' . $slug . '#/edit' );
            $submenu[ $slug ][] = array( __( 'Settings', 'textdomain' ), $capability, 'admin.php?page=' . $slug . '#/settings' );
        }

        add_action( 'load-' . $hook, [ $this, 'init_hooks'] );
    }

    /**
     * Initialize our hooks for the admin page
     *
     * @return void
     */
    public function init_hooks() {
        add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
        add_action( 'admin_print_scripts', [$this, 'admin_hide_notices'] );
    }

    /**
     * Load scripts and styles for the app
     *
     * @return void
     */
    public function enqueue_scripts() {
        wp_enqueue_style( 'exceltotable-admin' );
        wp_enqueue_script( 'exceltotable-admin' );
        wp_enqueue_style( 'exceltotable-frontend' );
        wp_enqueue_script( 'exceltotable-frontend' );
        wp_enqueue_script( 'exceltotable-premium-frontend-runtime' );
    }

    /**
     * Render our admin page
     *
     * @return void
     */
    public function plugin_page() {
        // $dd = \Spreadsheet2TablePremium\Assets::get_scripts();
        $config = [ 'nonce' => wp_create_nonce( 'smart-table-builder-nonce' ) ];
        echo '<script id="homeurl" type="text/json">'. wp_json_encode(array('url' => esc_url(get_home_url()))) .'</script>';
        echo '<script id="ultimate_tables_config" type="text/json">' . wp_json_encode( $config ) . '</script>';
        echo '<div class="wrap wptable"><div id="vue-admin-app"></div></div>';
    }

    function admin_hide_notices()
    {
        $exclusionPages = ['toplevel_page_smart-table-builder'];
        $current_screen = get_current_screen();
        if (!in_array($current_screen->base, $exclusionPages)) {
            return;
        }
        global $wp_filter;
        foreach (array('user_admin_notices', 'admin_notices', 'all_admin_notices') as $notices_type) {
        if (empty($wp_filter[$notices_type]->callbacks) || !is_array($wp_filter[$notices_type]->callbacks)) {
            continue;
        }
        foreach ($wp_filter[$notices_type]->callbacks as $priority => $hooks) {
            foreach ($hooks as $name => $arr) {
            if (is_object($arr['function']) && $arr['function'] instanceof \Closure) {
                unset($wp_filter[$notices_type]->callbacks[$priority][$name]);
                continue;
            }
            $class = !empty($arr['function'][0]) && is_object($arr['function'][0]) ? strtolower(get_class($arr['function'][0])) : '';
            if (
                !empty($class) &&
                strpos($class, 'scc') !== false
            ) {
                continue;
            }
            if (
                !empty($class) &&
                strpos($class, 'appsero') !== false
            ) {
                continue;
            }
            if (
                !empty($name) && (strpos($name, 'scc') === false)
            ) {
                unset($wp_filter[$notices_type]->callbacks[$priority][$name]);
            }
            }
        }
        }
    }
}
