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

        $hook = add_menu_page( __( ' Smart Table Builder', 'textdomain' ), __( 'Smart Table Builder', 'textdomain' ), $capability, $slug, [ $this, 'plugin_page' ], 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8yMDlfOTApIj4KPHBhdGggZD0iTTMxOC4zOSAzNDEuNTAzSDM4Ny43MzJNMzg3LjczMiAzNDEuNTAzSDQ1Ny4wNzNNMzg3LjczMiAzNDEuNTAzVjQxMC44NDVNMzg3LjczMiAzNDEuNTAzVjI3Mi4xNjIiIHN0cm9rZT0iI0Y5ODk2QiIgc3Ryb2tlLXdpZHRoPSI0MCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yMjUuOTM1IDY0LjEzODdIMzM2Ljg4MUMzNjIuNzY5IDY0LjEzODcgMzc1LjcxMiA2NC4xMzg3IDM4NS42MDUgNjkuMTc3NEMzOTQuMzAzIDczLjYwOTQgNDAxLjM3NCA4MC42ODEgNDA1LjgwNyA4OS4zNzg5QzQxMC44NDUgOTkuMjQ4NSA0MTAuODQ1IDExMi4xOTIgNDEwLjg0NSAxMzguMDMzVjE3OS43MDdIMjI1LjkzNU0yMjUuOTM1IDY0LjEzODdIMTE0Ljk4OUM4OS4xMDE4IDY0LjEzODcgNzYuMTU4MSA2NC4xMzg3IDY2LjI2NTUgNjkuMTc3NEM1Ny41NjY3IDczLjYwOCA1MC40OTQ2IDgwLjY4MDEgNDYuMDY0IDg5LjM3ODlDNDEuMDI1MiA5OS4yNzE2IDQxLjAyNTIgMTEyLjIxNSA0MS4wMjUyIDEzOC4xMDNWMTc5LjcwN00yMjUuOTM1IDY0LjEzODdWMTc5LjcwN00yMjUuOTM1IDE3OS43MDdINDEuMDI1Mk0yMjUuOTM1IDE3OS43MDdWNDMzLjk1OUgxMTQuOTJDODkuMDc4NyA0MzMuOTU5IDc2LjEzNSA0MzMuOTU5IDY2LjI2NTUgNDI4LjkyQzU3LjU2NzYgNDI0LjQ4OCA1MC40OTYgNDE3LjQxNiA0Ni4wNjQgNDA4LjcxOEM0MS4wMjUyIDM5OC44MjYgNDEuMDI1MiAzODUuODgyIDQxLjAyNTIgMzU5Ljk5NVYzMTguMzlNNDEuMDI1MiAxNzkuNzA3VjMxOC4zOU00MS4wMjUyIDMxOC4zOUgyMjUuOTM1IiBzdHJva2U9IiM2MTNCRTMiIHN0cm9rZS13aWR0aD0iNDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzIwOV85MCI+CjxyZWN0IHdpZHRoPSI0NTEiIGhlaWdodD0iNDUxIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQgMjQpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==' );

        if ( current_user_can( $capability ) ) {
            $submenu[ $slug ][] = array( __( 'Create New Table', 'textdomain' ), $capability, 'admin.php?page=' . $slug . '#/' );
            $submenu[ $slug ][] = array( __( 'Edit Existing', 'textdomain' ), $capability, 'admin.php?page=' . $slug . '#/edit' );
            // $submenu[ $slug ][] = array( __( 'Settings', 'textdomain' ), $capability, 'admin.php?page=' . $slug . '#/settings' );
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
        $config = [ 
            'nonce' => wp_create_nonce( 'smart-table-builder-nonce' ),
            'logo' => plugins_url( 'assets/images/logo.png', SMART_TABLE_BUILDER_FILE ),
        ];
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
