<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
/**
 * Template for backend preview
 */
  // $base_asset_path = SMART_TABLE_BUILDER_PATH . '/frontend/dist';
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Table Preview</title>
  </head>

  <body>
    <main>
      <div id="list-container">
      </div>
    </main>
    <?php wp_footer(); ?>
  </body>
</html>