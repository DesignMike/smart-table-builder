<?php
namespace Spreadsheet2Table;

/**
 * Appsero Insights
 *
 * This is a tracker class to track plugin usage based on if the customer has opted in.
 * No personal information is being tracked by this class, only general settings, active plugins, environment details
 * and admin email.
 */
class GoogleFontsCache {
    /**
     * Initialize the class
     *
     * @param AppSero\Client
     */
    public function __construct( $client, $name = null, $file = null ) {
        add_action( 'gfonts_metadata', array( $this, 'update_gfonts_metadata' ) );
        $this->schedule_event();
    }
    /**
     * Send tracking data to AppSero server
     *
     * @param  boolean  $override
     *
     * @return void
     */
    public function send_tracking_data( $override = false ) {

        // Send a maximum of once per week
        $last_send = $this->get_last_send();

        if ( $last_send && $last_send > strtotime( '-1 week' ) ) {
            return;
        }

        $tracking_data = $this->get_tracking_data();

        $response = $this->client->send_request( $tracking_data, 'track' );

        update_option( $this->client->slug . '_tracking_last_send', time() );
    }

    public function get_last_send(  ) {

    }

    public function update_gfonts_metadata() {
        $download_uri = 'https://fonts.google.com/metadata/fonts';

        require_once ABSPATH . 'wp-admin/includes/file.php';

        $tmp_gfonts_metadata_path = download_url( esc_url_raw( $download_uri ) );
        $tmp_gfonts_metadata_pathx = "dsad";
    }

    public function get_tracking_data () {

    }

    /**
     * Schedule the event weekly
     *
     * @return void
     */
    private function schedule_event() {
        $hook_name = 'gfonts_metadata';

        if ( ! wp_next_scheduled( $hook_name ) ) {
            wp_schedule_event( time(), 'weekly', $hook_name );
        }
    }
}