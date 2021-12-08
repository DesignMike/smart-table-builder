<?php
/**
 * Plugin Name: WP Ultimate Tables (Spreadsheet & Table Builder)
 * Description: Convert excel sheets to an embeddable table 
 * Plugin URI: https://github.com/nahinakbar
 * Author: Nahin Akbar
 * Author URI: https://github.com/nahinakbar
 * Version: 1.0.0
 * License: GPL2
 * Text Domain: exceltotable
 * Domain Path: /languages/
 *
 * Released under the GPL license
 * http://www.opensource.org/licenses/gpl-license.php
 *
 * This is an add-on for WordPress
 * http://wordpress.org/
 *
 * **********************************************************************
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 * **********************************************************************
 */

// don't call the file directly
if ( !defined( 'ABSPATH' ) ) exit;

/**
 * Excel_To_Table class
 *
 * @class Excel_To_Table The class that holds the entire Excel_To_Table plugin
 */
final class Excel_To_Table {

    /**
     * Plugin version
     *
     * @var string
     */
    public $version = '0.1.0';

    /**
     * Holds various class instances
     *
     * @var array
     */
    private $container = array();

    /**
     * Constructor for the Excel_To_Table class
     *
     * Sets up all the appropriate hooks and actions
     * within our plugin.
     */
    public function __construct() {

        $this->define_constants();

        register_activation_hook( __FILE__, array( $this, 'activate' ) );
        register_deactivation_hook( __FILE__, array( $this, 'deactivate' ) );

        add_action( 'plugins_loaded', array( $this, 'init_plugin' ) );
    }

    /**
     * Initializes the Excel_To_Table() class
     *
     * Checks for an existing Excel_To_Table() instance
     * and if it doesn't find one, creates it.
     */
    public static function init() {
        static $instance = false;

        if ( ! $instance ) {
            $instance = new Excel_To_Table();
        }

        return $instance;
    }

    /**
     * Magic getter to bypass referencing plugin.
     *
     * @param $prop
     *
     * @return mixed
     */
    public function __get( $prop ) {
        if ( array_key_exists( $prop, $this->container ) ) {
            return $this->container[ $prop ];
        }

        return $this->{$prop};
    }

    /**
     * Magic isset to bypass referencing plugin.
     *
     * @param $prop
     *
     * @return mixed
     */
    public function __isset( $prop ) {
        return isset( $this->{$prop} ) || isset( $this->container[ $prop ] );
    }

    /**
     * Define the constants
     *
     * @return void
     */
    public function define_constants() {
        define( 'EXCELTOTABLE_VERSION', $this->version );
        define( 'EXCELTOTABLE_FILE', __FILE__ );
        define( 'EXCELTOTABLE_PATH', dirname( EXCELTOTABLE_FILE ) );
        define( 'EXCELTOTABLE_INCLUDES', EXCELTOTABLE_PATH . '/includes' );
        define( 'EXCELTOTABLE_URL', plugins_url( '', EXCELTOTABLE_FILE ) );
        define( 'EXCELTOTABLE_ASSETS', EXCELTOTABLE_URL . '/assets' );
        define( 'EXCELTOTABLE_FRONTEND_ASSETS', EXCELTOTABLE_URL . '/frontend/assets' );
    }

    /**
     * Load the plugin after all plugis are loaded
     *
     * @return void
     */
    public function init_plugin() {
        $this->includes();
        $this->init_hooks();
    }

    /**
     * Placeholder for activation function
     *
     * Nothing being called here yet.
     */
    public function activate() {

        $installed = get_option( 'EXCELTOTABLE_installed' );

        if ( ! $installed ) {
            update_option( 'EXCELTOTABLE_installed', time() );
        }

        update_option( 'EXCELTOTABLE_version', EXCELTOTABLE_VERSION );
    }

    /**
     * Placeholder for deactivation function
     *
     * Nothing being called here yet.
     */
    public function deactivate() {

    }

    /**
     * Include the required files
     *
     * @return void
     */
    public function includes() {

        require_once EXCELTOTABLE_INCLUDES . '/Assets.php';

        if ( $this->is_request( 'admin' ) ) {
            require_once EXCELTOTABLE_INCLUDES . '/Admin.php';
        }

        if ( $this->is_request( 'frontend' ) ) {
            require_once EXCELTOTABLE_INCLUDES . '/Frontend.php';
        }

        if ( $this->is_request( 'ajax' ) ) {
            require_once EXCELTOTABLE_INCLUDES . '/Ajax/AjaxAction.php';
            require_once EXCELTOTABLE_INCLUDES . '/Ajax/AjaxCallbacks.php';
        }

        require_once EXCELTOTABLE_INCLUDES . '/Api.php';
        require_once EXCELTOTABLE_INCLUDES . '/GoogleFontsCache.php';
    }

    /**
     * Initialize the hooks
     *
     * @return void
     */
    public function init_hooks() {

        add_action( 'init', array( $this, 'init_classes' ) );

        // Localize our plugin
        add_action( 'init', array( $this, 'localization_setup' ) );
        // register post type
        add_action('init', array($this, 'spreadsheet_table_type_init'), 0);
    }

    /**
     * Instantiate the required classes
     *
     * @return void
     */
    public function init_classes() {

        if ( $this->is_request( 'admin' ) ) {
            $this->container['admin'] = new Spreadsheet2Table\Admin();
        }

        if ( $this->is_request( 'frontend' ) ) {
            $this->container['frontend'] = new Spreadsheet2Table\Frontend();
        }

        if ( $this->is_request( 'ajax' ) && !isset($_GET['wc-ajax']) ) {
            $this->container['ajax'] =  new Spreadsheet2Table\Ajax\AjaxAction();
        }

        $this->container['api'] = new Spreadsheet2Table\Api();
        $this->container['fonts'] = new Spreadsheet2Table\GoogleFontsCache("a");
        $this->container['assets'] = new Spreadsheet2Table\Assets();
    }

    /**
     * Initialize plugin for localization
     *
     * @uses load_plugin_textdomain()
     */
    public function localization_setup() {
        load_plugin_textdomain( 'exceltotable', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
    }

    /**
     * What type of request is this?
     *
     * @param  string $type admin, ajax, cron or frontend.
     *
     * @return bool
     */
    private function is_request( $type ) {
        switch ( $type ) {
            case 'admin' :
                return is_admin();

            case 'ajax' :
                return defined( 'DOING_AJAX' );

            case 'rest' :
                return defined( 'REST_REQUEST' );

            case 'cron' :
                return defined( 'DOING_CRON' );

            case 'frontend' :
                return ( ! is_admin() || defined( 'DOING_AJAX' ) ) && ! defined( 'DOING_CRON' );
        }
    }

    public function spreadsheet_table_type_init() {
        $post_types = $this->spreadsheet_table_post_types();
    
        foreach ($post_types as $post_type => $post_type_info) {
            $add_args = (!empty($post_type_info['args'])) ? $post_type_info['args'] : array();
            $args = $this->spreadsheet_table_post_type_args(
                $this->spreadsheet_table_post_types_labels(
                    $post_type_info['single'],
                    $post_type_info['plural']
                ),
                $post_type,
                $add_args
            );
    
            register_post_type($post_type, $args);
        }
    }

    function spreadsheet_table_post_types_labels($singular, $plural, $admin_bar_name = '')
    {
        $admin_bar_name = (!empty($admin_bar_name)) ? $admin_bar_name : $plural;
        return array(
            'name'               => _x(sprintf('%s', $plural), 'post type general name', 'wp-streadsheet-to-table'),
            'singular_name'      => sprintf(_x('Calc', 'post type singular name', 'wp-streadsheet-to-table'), $singular),
            'menu_name'          => _x(sprintf('%s', $plural), 'admin menu', 'wp-streadsheet-to-table'),
            'name_admin_bar'     => sprintf(_x('%s', 'Admin bar ' . $singular . ' name', 'wp-streadsheet-to-table'), $admin_bar_name),
            'add_new_item'       => sprintf(__('Add New %s', 'wp-streadsheet-to-table'), $singular),
            'new_item'           => sprintf(__('New %s', 'wp-streadsheet-to-table'), $singular),
            'edit_item'          => sprintf(__('Edit %s', 'wp-streadsheet-to-table'), $singular),
            'view_item'          => sprintf(__('View %s', 'wp-streadsheet-to-table'), $singular),
            'all_items'          => sprintf(_x('%s', 'Admin bar ' . $singular . ' name', 'wp-streadsheet-to-table'), $admin_bar_name),
            'search_items'       => sprintf(__('Search %s', 'wp-streadsheet-to-table'), $plural),
            'parent_item_colon'  => sprintf(__('Parent %s:', 'wp-streadsheet-to-table'), $plural),
            'not_found'          => sprintf(__('No %s found.', 'wp-streadsheet-to-table'), $plural),
            'not_found_in_trash' => sprintf(__('No %s found in Trash.', 'wp-streadsheet-to-table'), $plural),
        );
    }

    private function spreadsheet_table_post_types() {
        return array(
            'sprdsh_table' => array(
                'single'         => 'Spreadsheet & Table',
                'plural'         => 'Spreadsheet & Table',
            ),
        );
    }

    private function spreadsheet_table_post_type_args($labels, $slug, $args = array())
    {
        $default_args = array(
            'labels'             => $labels,
            'public'             => false,
            'publicly_queryable' => false,
            'show_ui'            => true,
            'show_in_menu'       => false,
            'query_var'          => false,
            'rewrite'            => array('slug' => $slug),
            'capability_type'    => 'post',
            'has_archive'        => false,
            'hierarchical'       => false,
            'menu_position'      => null,
            'supports'           => array('title')
        );

        return wp_parse_args($args, $default_args);
    }

} // Excel_To_Table

$exceltotable = Excel_To_Table::init();
