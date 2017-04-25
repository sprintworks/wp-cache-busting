<?php

/**
 * Load theme css and JavaScript
 * @return type
 */
function example-theme_load_theme_assets() {

	$assetpath_css = getenv( 'WP_ENV' ) === 'production' ? '/assets/rev/' . asset_path( 'css/main.css' ) : '/assets/build/css/main.css';
	$assetpath_js = getenv( 'WP_ENV' ) === 'production' ? '/assets/rev/' . asset_path( 'js/app.js' ) : '/assets/build/js/app.js';

	if ( ! is_admin() ) {
		wp_enqueue_style( 'example-theme-css-main', get_template_directory_uri() . $assetpath_css );
	}

	wp_register_script( 'example-theme-script-main', get_template_directory_uri() . $assetpath_js, array(), '1.0', true );
	wp_enqueue_script( 'example-theme-script-main' );

}

add_action( 'wp_enqueue_scripts', 'example-theme_load_theme_assets' );


/**
 * @param string $filename
 * @return string
 */
function asset_path($filename) {

	$manifest_path = get_template_directory() . '/assets/rev/rev-manifest.json';

	if (file_exists($manifest_path)) {
		$manifest = json_decode(file_get_contents($manifest_path), TRUE);
	} else {
		$manifest = [];
	}

	if (array_key_exists($filename, $manifest)) {
		return $manifest[$filename];
	}

	return $filename;
}
