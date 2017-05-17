<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'jmawebsite');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '|1!e;{P;z}&,t>*T vW9W(C(ThtmBTsSxigh(?XZTXSH{yF&o/52cim4P8&Yt+G,');
define('SECURE_AUTH_KEY',  'txYh*[2p2!tbIb{.B1*Q1:h6Gw^wqe7(k.0&4r)2rgg{` l%<:eM0YPX6m~[xOrw');
define('LOGGED_IN_KEY',    '&3UHUb(*unI.4IG#ep`Q(KPhMl,ArUlB&_SlT-2 A+r]L)tN1uH,>Y{x5l^$.w|/');
define('NONCE_KEY',        '=YbchD27FBV~0Miz,C1=mi$N7T(|E9TA+%(}>KgFrdR>f`TDID*bzbm4TT#93::X');
define('AUTH_SALT',        'w4L&u_n5oGX!,E`#boY$C? lI{IcPBr0eYTY|eGPle1$<qm?=! wBB)GAG{fx-)V');
define('SECURE_AUTH_SALT', 'M|3j{!d4`V2oIK?FB. Q{.d:oCGi`%qzHkFg`)GXjYi_SM;VdYYQm2qTcjoTm{-7');
define('LOGGED_IN_SALT',   'l00sZ.tm[z7aYRhTg7-8kpSQF4T9PH=HXxayk-imZt[K$E6,?.:_([$)9.qgxfGU');
define('NONCE_SALT',       '%b>]ToIVm`B$B#?n7p0LxV(}!r{ -w&>4Kr~y1*oQ#:s1;iI5-_0CK`F]+9#-hW@');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
