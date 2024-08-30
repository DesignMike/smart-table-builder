<?php
namespace DesignfulSmartTableBuilder\Api;

use WP_REST_Controller;

/**
 * REST_API Handler
 */
class TableAPI extends WP_REST_Controller {

    /**
     * [__construct description]
     */
    public function __construct() {
        $this->namespace = 'smart-table-builder-tablecells/v1';
        $this->rest_base = 'get-table-cells';
    }

    /**
     * Register the routes
     *
     * @return void
     */
    public function register_routes() {
        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base,
            array(
                array(
                    'methods'             => \WP_REST_Server::READABLE,
                    'callback'            => array( $this, 'get_items' ),
                    'permission_callback' => array( $this, 'get_items_permissions_check' ),
                    'args'                => $this->get_collection_params(),
                )
            )
        );
        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base . '/(?P<id>[\d]+)',
            array(
                array(
                    'methods'             => \WP_REST_Server::READABLE,
                    'callback'            => array( $this, 'get_table' ),
                    'permission_callback' => array( $this, 'get_items_permissions_check' ),
                    'args'                => $this->get_collection_params(),
                )
            )
        );
    }

    /**
     * Retrieves a collection of items.
     *
     * @param WP_REST_Request $request Full details about the request.
     *
     * @return WP_REST_Response|WP_Error Response object on success, or WP_Error object on failure.
     */
    public function get_items( $request ) {
        $items = [
            'foo' => 'bar'
        ];

        $response = rest_ensure_response( $items );

        return $response;
    }
    public function get_table( $request ) {
        $id = (int) $request['id'];
        $table = get_post($id);
        $response = [
            'id' => $table->ID,
            'grid' => ['data' => get_post_meta($id, 'table_cells')[0]],
            'title' => $table->post_title,
            'settingsItemProps' => get_post_meta($id, 'settingsItemProps')[0],
            'fontSettings' => get_post_meta($id, 'fontSettings')[0],
            'tableBodyFontSettings' => get_post_meta($id, 'tableBodyFontSettings')[0],
            'fontUrls' => [],
            'fontString' => get_post_meta($id, 'fontString')[0],
            'tableBodyFontString' => get_post_meta($id, 'tableBodyFontString')[0]
        ];

        $response = rest_ensure_response( $response );

        return $response;
    }

    /**
     * Checks if a given request has access to read the items.
     *
     * @param  WP_REST_Request $request Full details about the request.
     *
     * @return true|WP_Error True if the request has read access, WP_Error object otherwise.
     */
    public function get_items_permissions_check( $request ) {
        return true;
    }

    /**
     * Retrieves the query params for the items collection.
     *
     * @return array Collection parameters.
     */
    public function get_collection_params() {
        return [];
    }
}
